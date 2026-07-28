import type { Metadata } from "next";

import InfoCard from "@/components/marketing/InfoCard";
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
        <InfoCard
          title="Product and demos"
          description="Learn how MotoDesk can support your service, parts, inventory, customer, and sales workflows."
        >
          <a
            href="mailto:sales@motodesk.com"
            className="text-sm font-medium text-ember hover:underline"
          >
            sales@motodesk.com
          </a>
        </InfoCard>

        <InfoCard
          title="Customer support"
          description="Existing customers can contact the MotoDesk team for account and technical assistance."
        >
          <a
            href="mailto:support@motodesk.com"
            className="text-sm font-medium text-ember hover:underline"
          >
            support@motodesk.com
          </a>
        </InfoCard>
      </div>
    </MarketingPageShell>
  );
}