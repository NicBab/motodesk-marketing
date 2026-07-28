const LOGOS = [
  "Ironhorse",
  "TrailForge",
  "Redline Motors",
  "Apex Powersports",
  "Northgate ATV",
  "Ridgeway",
  "Summit Cycles",
  "Duncan Marine",
] as const;

export default function LogoCloud() {
  return (
    <section className="border-y border-border/60 bg-surface/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by 3,200+ dealerships across North America
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="text-center text-sm font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}