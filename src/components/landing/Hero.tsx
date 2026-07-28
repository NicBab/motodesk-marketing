import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div
        aria-hidden="true"
        className="grid-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <a
            href="#features"
            className="hairline group inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span
              aria-hidden="true"
              className="shadow-ember inline-block size-1.5 rounded-full bg-ember"
            />

            <span>New — Service Bay 2.0 with parts intelligence</span>

            <ArrowRight
              aria-hidden="true"
              className="size-3 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-center text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          The operating system for{" "}
          <span className="gradient-text">powersports service</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          MotoDesk replaces paperwork, spreadsheets, and disconnected tools
          with one modern cloud platform for service centers, and
          repair shops.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.02]"
          >
            Start 14-day free trial

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#demo"
            className="hairline inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
          >
            <PlayCircle aria-hidden="true" className="size-4" />
            Watch 2-min demo
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          No credit card required · Onboarding in under a day · SOC 2 Type II
        </p>

        {/* Product visual */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute inset-x-10 -bottom-8 -top-8 -z-10 rounded-[3rem] blur-3xl"
            style={{
              background: "var(--gradient-ember)",
              opacity: 0.25,
            }}
          />

          <div className="hairline overflow-hidden rounded-2xl bg-surface shadow-elevated">
            <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface-elevated/60 px-4 py-2.5">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-white/10"
              />
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-white/10"
              />
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-white/10"
              />

              <div className="hairline ml-3 rounded-md bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                app.motodesk.com/dashboard
              </div>
            </div>

            <Image
              src="/images/md_hero_img.jpg"
              alt="MotoDesk dealership dashboard showing service and dealership operations"
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}