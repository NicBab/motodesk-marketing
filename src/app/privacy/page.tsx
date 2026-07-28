import type { Metadata } from "next";

import ContentSection from "@/components/marketing/ContentSection";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the MotoDesk privacy policy and learn how information may be collected, used, stored, and protected.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <MarketingPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="This page is reserved for MotoDesk's production privacy policy."
    >
      <ContentSection title="Policy status">
        <p>
          The final privacy policy will describe what information MotoDesk
          collects, why it is collected, how it is used, how long it is
          retained, and what rights users may have.
        </p>

        <p>
          This temporary page should be replaced with a legally reviewed policy
          before customer registration or production data collection begins.
        </p>
      </ContentSection>
    </MarketingPageShell>
  );
}