import type { ReactNode } from "react";

import Footer from "@/components/landing/Footer";
import Nav from "@/components/landing/Nav";

interface MarketingPageShellProps {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function MarketingPageShell({
  eyebrow,
  title,
  description,
  children,
}: MarketingPageShellProps) {
  return (
    <>
      <Nav />

      <main className="min-h-screen">
        <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background: "var(--gradient-hero)",
            }}
          />

          <div
            aria-hidden="true"
            className="grid-noise pointer-events-none absolute inset-0 opacity-20"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl">{children}</div>
        </section>
      </main>

      <Footer />
    </>
  );
}