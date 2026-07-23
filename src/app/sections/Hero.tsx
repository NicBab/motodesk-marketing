import { ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/hero-showroom.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-noise opacity-[0.35]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <a
            href="#"
            className="hairline group inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="inline-block size-1.5 rounded-full bg-ember shadow-ember" />
            New — Service Bay 2.0 with parts intelligence
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-center text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          The operating system for{" "}
          <span className="gradient-text">powersports dealers</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          MotoDesk replaces paperwork, spreadsheets, and disconnected tools with one
          modern cloud platform for dealerships, service centers, and repair shops.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-elevated transition-transform hover:scale-[1.02]"
          >
            Start 14-day free trial
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="hairline inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
          >
            <PlayCircle className="size-4" />
            Watch 2-min demo
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          No credit card required · Onboarding in under a day · SOC 2 Type II
        </p>

        {/* Product visual */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute inset-x-10 -top-8 -bottom-8 -z-10 rounded-[3rem] blur-3xl"
            style={{ background: "var(--gradient-ember)", opacity: 0.25 }}
          />
          <div className="hairline overflow-hidden rounded-2xl bg-surface shadow-elevated">
            <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface-elevated/60 px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-white/10" />
              <span className="size-2.5 rounded-full bg-white/10" />
              <span className="size-2.5 rounded-full bg-white/10" />
              <div className="ml-3 hairline rounded-md bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                app.motodesk.com/dashboard
              </div>
            </div>
            <Image
              src={heroImg}
              alt="MotoDesk dealership showroom dashboard preview"
              width={1600}
              height={1200}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}