import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import Footer from "@/components/landing/Footer";
import Nav from "@/components/landing/Nav";

export default function NotFoundPage() {
  return (
    <>
      <Nav />

      <main className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">
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

        <div className="relative mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">
            Error 404
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            This page took a wrong turn.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The page may have moved, been removed, or never existed. Return to
            the MotoDesk homepage or browse the platform features.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              <Home aria-hidden="true" className="size-4" />
              Return home
            </Link>

            <Link
              href="/#features"
              className="hairline inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Explore features
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}