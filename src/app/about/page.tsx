import type { Metadata } from "next";

import ContentSection from "@/components/marketing/ContentSection";
import MarketingPageShell from "@/components/marketing/MarketingPageShell";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why MotoDesk is building a modern operating platform for powersports dealerships, service centers, and repair shops.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <MarketingPageShell
      eyebrow="About MotoDesk"
      title="Built for the way powersports businesses actually work."
      description="MotoDesk brings service, parts, inventory, customers, sales, scheduling, and reporting together in one modern platform."
    >
      <ContentSection title="Why we are building MotoDesk">
        <p>
          Powersports businesses often rely on disconnected software, paper
          repair orders, spreadsheets, and systems that were not designed
          around the daily workflow of a modern shop.
        </p>

        <p>
          {SITE_CONFIG.name} is being built to replace that fragmentation with
          one connected operating platform.
        </p>
      </ContentSection>

      <ContentSection title="Designed around the shop">
        <p>
          Every major workflow begins with the realities of running a
          dealership, service department, parts counter, or independent repair
          shop.
        </p>

        <p>
          The goal is not simply to digitize paperwork. The goal is to make
          work easier to assign, track, complete, communicate, and measure.
        </p>
      </ContentSection>

      <ContentSection title="Built for long-term growth">
        <p>
          MotoDesk is designed as a secure, multi-location SaaS platform that
          can support small independent shops, growing dealerships, and larger
          dealer groups.
        </p>
      </ContentSection>
    </MarketingPageShell>
  );
}