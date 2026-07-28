import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative px-6 pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="hairline relative overflow-hidden rounded-3xl bg-surface p-10 shadow-elevated sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-20"
            style={{ background: "var(--gradient-hero)", opacity: 0.9 }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-noise opacity-30" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Ready to run your shop on <span className="gradient-text">one platform?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ditch the paperwork. Free for 14 days.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.78_0.21_55)] to-[oklch(0.62_0.22_32)] px-5 py-3 text-sm font-semibold text-background shadow-ember transition-transform hover:scale-[1.02]"
              >
                Start free trial
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="hairline inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/10"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}