import type { Metadata } from "next";

import ContentSection from "@/components/marketing/ContentSection";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "Data Processing Addendum",
  description:
    "Review information about the MotoDesk Data Processing Addendum.",
  alternates: {
    canonical: "/dpa",
  },
};

export default function DpaPage() {
  return (
    <MarketingPageShell
      eyebrow="Legal"
      title="Data Processing Addendum"
      description="Enterprise data processing terms will be made available before production launch."
    >
      <ContentSection title="Document status">
        <p>
          The production DPA will describe MotoDesk&apos;s obligations when
          processing customer data, including security measures, subprocessors,
          data transfers, incident response, deletion, and audit provisions.
        </p>
      </ContentSection>
    </MarketingPageShell>
  );
}