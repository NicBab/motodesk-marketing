"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

interface GlobalErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error("Marketing route error:", error);
  }, [error]);

  return (
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

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-2xl border border-border bg-white/5">
          <TriangleAlert
            aria-hidden="true"
            className="size-5 text-ember"
          />
        </span>

        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-ember">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          We could not load this page.
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          Try loading the page again. If the problem continues, return to the
          MotoDesk homepage.
        </p>

        {error.digest && (
          <p className="mt-4 text-xs text-muted-foreground">
            Reference: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            <RefreshCw aria-hidden="true" className="size-4" />
            Try again
          </button>

          <Link
            href="/"
            className="hairline inline-flex items-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}