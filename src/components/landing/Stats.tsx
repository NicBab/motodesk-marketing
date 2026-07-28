import { STATS } from "@/constants/stats";

export default function Stats() {
  return (
    <section className="border-y border-border/60 bg-surface/40 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <article key={stat.label}>
            <div className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              <span className="gradient-text">{stat.value}</span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}