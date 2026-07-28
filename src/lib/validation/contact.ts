import { z } from "zod";

export const CONTACT_REASONS = [
  "Book a demo",
  "Product question",
  "Migration and onboarding",
  "Partnership",
  "Support",
  "Other",
] as const;

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Enter your first name.")
    .max(50, "First name is too long."),

  lastName: z
    .string()
    .trim()
    .min(2, "Enter your last name.")
    .max(50, "Last name is too long."),

  email: z
    .email("Enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional(),

  company: z
    .string()
    .trim()
    .min(2, "Enter your business name.")
    .max(120, "Business name is too long."),

  reason: z.enum(CONTACT_REASONS, {
    message: "Select a reason for contacting us.",
  }),

  locations: z
    .string()
    .trim()
    .max(20, "Location count is too long.")
    .optional(),

  currentSystem: z
    .string()
    .trim()
    .max(100, "Current system name is too long.")
    .optional(),

  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about what you need.")
    .max(2_000, "Message must be 2,000 characters or fewer."),

  website: z.string().max(0, "Invalid submission.").optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export interface ContactApiResponse {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormInput, string[]>>;
}