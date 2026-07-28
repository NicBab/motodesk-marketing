import { NextResponse } from "next/server";

import {
  contactFormSchema,
  type ContactApiResponse,
} from "@/lib/validation/contact";

const MAX_REQUEST_SIZE = 20_000;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > MAX_REQUEST_SIZE) {
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "The submitted form is too large.",
      },
      {
        status: 413,
      },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "The request body is invalid.",
      },
      {
        status: 400,
      },
    );
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      {
        status: 422,
      },
    );
  }

  const contact = result.data;

  /*
   * Honeypot submissions should appear successful so bots do not
   * learn how the spam protection works.
   */
  if (contact.website) {
    return NextResponse.json<ContactApiResponse>({
      success: true,
      message: "Thanks. Your message has been received.",
    });
  }

  const serverUrl = process.env.MOTODESK_SERVER_URL;
  const internalApiKey = process.env.MOTODESK_INTERNAL_API_KEY;

  /*
   * During local UI development, accept the validated request without
   * pretending that it has been permanently stored.
   */
  if (!serverUrl) {
    if (process.env.NODE_ENV === "development") {
      console.info("Validated MotoDesk contact submission:", {
        ...contact,
        website: undefined,
      });

      return NextResponse.json<ContactApiResponse>({
        success: true,
        message:
          "Your submission was validated successfully in development mode.",
      });
    }

    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message:
          "Contact submissions are temporarily unavailable. Please try again later.",
      },
      {
        status: 503,
      },
    );
  }

  try {
    const response = await fetch(`${serverUrl}/api/v1/public/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(internalApiKey
          ? {
              "X-MotoDesk-Internal-Key": internalApiKey,
            }
          : {}),
      },
      body: JSON.stringify({
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone || null,
        company: contact.company,
        reason: contact.reason,
        locations: contact.locations || null,
        currentSystem: contact.currentSystem || null,
        message: contact.message,
        source: "MARKETING_CONTACT_FORM",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("MotoDesk lead API returned an error:", {
        status: response.status,
      });

      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message:
            "We could not submit your request. Please try again shortly.",
        },
        {
          status: 502,
        },
      );
    }

    return NextResponse.json<ContactApiResponse>({
      success: true,
      message:
        "Thanks for contacting MotoDesk. We’ll follow up with you shortly.",
    });
  } catch (error) {
    console.error("MotoDesk contact request failed:", error);

    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message:
          "We could not submit your request. Please try again shortly.",
      },
      {
        status: 502,
      },
    );
  }
}