import type { Metadata } from "next";
import Link from "next/link";

import ContentSection from "@/components/marketing/ContentSection";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the MotoDesk team about product questions, demos, onboarding, partnerships, or support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <MarketingPageShell
      eyebrow="Contact"
      title="Let’s talk about your operation."
      description="Tell us about your dealership, service center, or repair shop and what you need from MotoDesk."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="hairline rounded-2xl bg-surface/40 p-6">
          <h2 className="text-xl font-semibold">Product and demos</h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Learn how MotoDesk can support your service, parts, inventory,
            customer, and sales workflows.
          </p>

          <Link
            href="mailto:sales@motodesk.com"
            className="mt-6 inline-flex text-sm font-medium text-ember hover:underline"
          >
            sales@motodesk.com
          </Link>
        </article>

        <article className="hairline rounded-2xl bg-surface/40 p-6">
          <h2 className="text-xl font-semibold">Support</h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Existing customers can contact the MotoDesk support team for
            account and technical assistance.
          </p>

          <Link
            href="mailto:support@motodesk.com"
            className="mt-6 inline-flex text-sm font-medium text-ember hover:underline"
          >
            support@motodesk.com
          </Link>
        </article>
      </div>

      <div className="mt-12">
        <ContentSection title="Before publishing">
          <p>
            Replace these email addresses if the MotoDesk domain mailboxes have
            not been configured yet.
          </p>
        </ContentSection>
      </div>
    </MarketingPageShell>
  );
}