import type { Metadata } from "next";
import { Clock3, Mail, MessageSquareText } from "lucide-react";

import ContactForm from "@/components/marketing/ContactForm";
import InfoCard from "@/components/marketing/InfoCard";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MotoDesk about demos, dealership software, onboarding, migration, partnerships, or customer support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <MarketingPageShell
      eyebrow="Contact MotoDesk"
      title="Let’s talk about your operation."
      description="Tell us where your current workflow slows down and what you need from a modern dealership platform."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <ContactForm />

        <aside className="space-y-5">
          <InfoCard
            title="Product questions"
            description="Ask about MotoDesk features, plans, implementation, or upcoming integrations."
          >
            <Mail
              aria-hidden="true"
              className="size-5 text-ember"
            />
          </InfoCard>

          <InfoCard
            title="Book a walkthrough"
            description="We can discuss your shop structure and show how the MotoDesk workflow is designed to fit."
          >
            <MessageSquareText
              aria-hidden="true"
              className="size-5 text-ember"
            />
          </InfoCard>

          <InfoCard
            title="Response time"
            description="During launch, inquiries will be reviewed directly by the MotoDesk team."
          >
            <Clock3
              aria-hidden="true"
              className="size-5 text-ember"
            />
          </InfoCard>
        </aside>
      </div>
    </MarketingPageShell>
  );
}