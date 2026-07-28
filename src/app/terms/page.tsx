import type { Metadata } from "next";

import ContentSection from "@/components/marketing/ContentSection";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms governing access to and use of the MotoDesk platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <MarketingPageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="This page is reserved for MotoDesk's production terms of service."
    >
      <ContentSection title="Terms status">
        <p>
          The final terms will cover account eligibility, subscriptions,
          payments, acceptable use, intellectual property, service
          availability, termination, warranties, and liability.
        </p>

        <p>
          This temporary page should be replaced with legally reviewed terms
          before paid subscriptions are accepted.
        </p>
      </ContentSection>
    </MarketingPageShell>
  );
}