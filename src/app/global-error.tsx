"use client";

import { RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen items-center justify-center px-6 py-24">
          <div className="max-w-lg text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">
              MotoDesk
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              The site could not be loaded.
            </h1>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              A critical application error occurred. Reload the experience to
              try again.
            </p>

            {error.digest && (
              <p className="mt-4 text-xs text-muted-foreground">
                Reference: {error.digest}
              </p>
            )}

            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              <RefreshCw aria-hidden="true" className="size-4" />
              Reload MotoDesk
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}