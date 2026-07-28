import { Check } from "lucide-react";

import { PRICING_TIERS } from "@/constants/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ember">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Simple pricing. Serious horsepower.
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Every plan starts with a 14-day free trial. No credit card, no
            lock-in.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`hairline relative flex flex-col rounded-2xl p-6 ${
                tier.recommended
                  ? "bg-surface-elevated shadow-elevated"
                  : "bg-surface/60"
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-2.5 left-6 rounded-full bg-gradient-to-r from-[oklch(0.78_0.21_55)] to-[oklch(0.62_0.22_32)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background shadow-ember">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold tracking-tight">
                {tier.name}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">{tier.tag}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-[-0.02em]">
                  ${tier.price}
                </span>

                <span className="text-sm text-muted-foreground">/mo</span>
              </div>

              <a
                href="#signup"
                className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  tier.recommended
                    ? "bg-gradient-to-r from-[oklch(0.78_0.21_55)] to-[oklch(0.62_0.22_32)] text-background shadow-ember"
                    : "bg-foreground text-background"
                }`}
              >
                Start free trial
              </a>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-ember"
                    />

                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prices in USD. Annual billing saves 20%. Need something custom?{" "}
          <a
            href="#contact"
            className="text-foreground underline underline-offset-4"
          >
            Talk to sales
          </a>
          .
        </p>
      </div>
    </section>
  );
}