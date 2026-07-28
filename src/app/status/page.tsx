import type { Metadata } from "next";

import MarketingPageShell from "@/components/marketing/MarketingPageShell";

export const metadata: Metadata = {
  title: "System Status",
  description: "View MotoDesk platform availability and system status.",
  alternates: {
    canonical: "/status",
  },
};

export default function StatusPage() {
  return (
    <MarketingPageShell
      eyebrow="Platform Status"
      title="MotoDesk system status"
      description="Live infrastructure monitoring will be published here before production launch."
    >
      <div className="hairline flex items-center justify-between gap-6 rounded-2xl bg-surface/40 p-6">
        <div>
          <h2 className="font-semibold">Platform services</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Production monitoring is not active yet.
          </p>
        </div>

        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Pre-launch
        </span>
      </div>
    </MarketingPageShell>
  );
}