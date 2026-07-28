import type { Metadata } from "next";

import ContentSection from "@/components/marketing/ContentSection";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Learn about MotoDesk security practices, access controls, encryption, monitoring, and data protection.",
  alternates: {
    canonical: "/security",
  },
};

export default function SecurityPage() {
  return (
    <MarketingPageShell
      eyebrow="Security"
      title="Security built into the platform."
      description="MotoDesk is being designed with layered controls for authentication, authorization, data protection, monitoring, and accountability."
    >
      <ContentSection title="Access control">
        <p>
          MotoDesk uses organization-scoped access and role-based permissions
          to limit what each user can view and modify.
        </p>
      </ContentSection>

      <ContentSection title="Data protection">
        <p>
          Production data will be protected using encryption in transit,
          managed database security, secure credential handling, and controlled
          infrastructure access.
        </p>
      </ContentSection>

      <ContentSection title="Auditability">
        <p>
          Important account and business actions are designed to be recorded
          through application audit trails.
        </p>
      </ContentSection>

      <ContentSection title="Responsible disclosure">
        <p>
          A formal vulnerability reporting process and dedicated security
          contact will be published before production launch.
        </p>
      </ContentSection>
    </MarketingPageShell>
  );
}