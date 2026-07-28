import { FEATURES } from "@/constants/features";

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ember">
            One platform
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Every part of the shop, connected.
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Sales, service, parts, and accounting share one source of truth—so
            your team stops re-keying data and starts closing more tickets.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative bg-background p-6 transition-colors hover:bg-surface"
              >
                <div className="hairline mb-5 inline-grid size-10 place-items-center rounded-lg bg-surface-elevated">
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-ember"
                  />
                </div>

                <h3 className="text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}