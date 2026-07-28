"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Product", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary navigation"
        className={`hairline relative flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl"
            : "bg-background/30 backdrop-blur-md"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 pl-1"
          aria-label="MotoDesk home"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://app.motodesk.com/login"
            className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>

          <a
            href="#pricing"
            className="rounded-lg bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Start free trial
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>

        {open && (
          <div
            id="mobile-navigation"
            className="hairline absolute left-0 right-0 top-full mt-2 rounded-2xl bg-background/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}

              <div className="my-2 h-px bg-border" />

              <a
                href="https://app.motodesk.com/login"
                className="rounded-lg px-3 py-2 text-sm"
              >
                Sign in
              </a>

              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
              >
                Start free trial
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}