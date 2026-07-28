import { TESTIMONIALS } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section id="customers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ember">
            Customers
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            The shops running MotoDesk.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="hairline flex flex-col justify-between rounded-2xl bg-surface/60 p-6"
            >
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                <span className="mr-1 text-ember">“</span>

                {testimonial.quote}

                <span className="ml-1 text-ember">”</span>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.78_0.21_55)] to-[oklch(0.62_0.22_32)] text-sm font-semibold text-background">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <div className="text-sm font-medium">
                    {testimonial.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}