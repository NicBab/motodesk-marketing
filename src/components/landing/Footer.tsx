import Link from "next/link";

import Logo from "./Logo";

import {
  FOOTER_NAVIGATION,
  LEGAL_NAVIGATION,
} from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {FOOTER_NAVIGATION.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                {column.title}
              </h2>

              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {LEGAL_NAVIGATION.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rounded-full bg-ember"
              />

              All systems normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}