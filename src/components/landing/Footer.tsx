import Logo from "./Logo";

import { FOOTER_COLUMNS } from "@/constants/footer";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The cloud platform powering powersports dealerships, service
              centers, and repair shops.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                {column.title}
              </h4>

              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MotoDesk. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>

            <a href="#" className="hover:text-foreground">
              Terms
            </a>

            <a href="#" className="hover:text-foreground">
              Security
            </a>

            <a href="#" className="hover:text-foreground">
              DPA
            </a>

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