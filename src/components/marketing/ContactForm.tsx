"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  TriangleAlert,
} from "lucide-react";

import {
  CONTACT_REASONS,
  type ContactApiResponse,
  type ContactFormInput,
} from "@/lib/validation/contact";

type ContactFieldErrors = Partial<
  Record<keyof ContactFormInput, string[]>
>;

const INITIAL_FORM: ContactFormInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  reason: "Book a demo",
  locations: "",
  currentSystem: "",
  message: "",
  website: "",
};

const inputClassName =
  "mt-2 w-full rounded-xl border border-border/70 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-ember/70 focus:ring-2 focus:ring-ember/15";

const labelClassName = "text-sm font-medium text-foreground";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] =
    useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function updateField(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const field = event.target.name as keyof ContactFormInput;
    const value = event.target.value;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setFieldErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(
          result.message || "Please review the form and try again.",
        );
        setFieldErrors(result.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setMessage(result.message);
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setMessage(
        "We could not connect to the server. Please try again.",
      );
    }
  }

  function getFieldError(field: keyof ContactFormInput) {
    return fieldErrors[field]?.[0];
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hairline rounded-3xl bg-surface/40 p-6 shadow-elevated sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="firstName"
          label="First name"
          error={getFieldError("firstName")}
        >
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={updateField}
            className={inputClassName}
            placeholder="Nick"
            required
          />
        </FormField>

        <FormField
          id="lastName"
          label="Last name"
          error={getFieldError("lastName")}
        >
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={updateField}
            className={inputClassName}
            placeholder="Babineaux"
            required
          />
        </FormField>

        <FormField
          id="email"
          label="Work email"
          error={getFieldError("email")}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={updateField}
            className={inputClassName}
            placeholder="you@dealership.com"
            required
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone"
          error={getFieldError("phone")}
          optional
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={updateField}
            className={inputClassName}
            placeholder="(555) 555-0123"
          />
        </FormField>

        <FormField
          id="company"
          label="Business name"
          error={getFieldError("company")}
        >
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={updateField}
            className={inputClassName}
            placeholder="Acme Powersports"
            required
          />
        </FormField>

        <FormField
          id="reason"
          label="How can we help?"
          error={getFieldError("reason")}
        >
          <select
            id="reason"
            name="reason"
            value={form.reason}
            onChange={updateField}
            className={inputClassName}
            required
          >
            {CONTACT_REASONS.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="locations"
          label="Number of locations"
          error={getFieldError("locations")}
          optional
        >
          <input
            id="locations"
            name="locations"
            type="text"
            inputMode="numeric"
            value={form.locations}
            onChange={updateField}
            className={inputClassName}
            placeholder="1"
          />
        </FormField>

        <FormField
          id="currentSystem"
          label="Current DMS or system"
          error={getFieldError("currentSystem")}
          optional
        >
          <input
            id="currentSystem"
            name="currentSystem"
            type="text"
            value={form.currentSystem}
            onChange={updateField}
            className={inputClassName}
            placeholder="Lightspeed, spreadsheets, paper..."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <FormField
          id="message"
          label="Tell us about your operation"
          error={getFieldError("message")}
        >
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={updateField}
            className={`${inputClassName} resize-y`}
            placeholder="What would you like MotoDesk to help improve?"
            required
          />
        </FormField>
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">
          Website
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={updateField}
          />
        </label>
      </div>

      {message && (
        <div
          role={status === "error" ? "alert" : "status"}
          className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
            status === "success"
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
              : "border-red-500/20 bg-red-500/10 text-red-200"
          }`}
        >
          {status === "success" ? (
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0"
            />
          ) : (
            <TriangleAlert
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0"
            />
          )}

          <p>{message}</p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted-foreground">
          By submitting this form, you agree that MotoDesk may contact you
          about your request.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                className="size-4 animate-spin"
              />
              Sending
            </>
          ) : (
            <>
              Send request
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

function FormField({
  id,
  label,
  error,
  optional = false,
  children,
}: FormFieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>

        {optional && (
          <span className="text-xs text-muted-foreground">
            Optional
          </span>
        )}
      </div>

      {children}

      {error && (
        <p className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}