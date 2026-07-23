import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";

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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`hairline flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl"
            : "bg-background/30 backdrop-blur-md"
        }`}
      >
        <a href="#" className="flex items-center gap-2 pl-1">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#"
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
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {open && (
          <div className="hairline absolute left-4 right-4 top-full mt-2 rounded-2xl bg-background/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="my-2 h-px bg-border" />
              <a href="#" className="rounded-lg px-3 py-2 text-sm">Sign in</a>
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