import Image from "next/image";
import { Check } from "lucide-react";

import {
  BAY_THROUGHPUT_LEVELS,
  SERVICE_BAY_BULLETS,
} from "@/constants/showcase";

export default function Showcase() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl"
            style={{
              background: "var(--gradient-ember)",
              opacity: 0.18,
            }}
          />

          <div className="hairline overflow-hidden rounded-2xl shadow-elevated">
            <Image
              src="/images/md_img2.jpg"
              alt="Technician logging a service ticket on a tablet"
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 576px"
              className="aspect-[7/5] w-full object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="hairline absolute -bottom-6 -right-2 hidden w-64 rounded-xl bg-surface/90 p-4 shadow-card backdrop-blur-xl sm:block">
            <p className="text-xs text-muted-foreground">
              Today&apos;s bay throughput
            </p>

            <p className="mt-1 text-2xl font-semibold tracking-tight">
              38 tickets{" "}
              <span className="text-sm font-medium text-ember">+22%</span>
            </p>

            <div className="mt-3 flex h-1.5 gap-0.5 overflow-hidden rounded-full bg-muted">
              {BAY_THROUGHPUT_LEVELS.map((level, index) => (
                <div
                  key={`${level}-${index}`}
                  aria-hidden="true"
                  className="flex-1 rounded-full bg-gradient-to-t from-[oklch(0.62_0.22_32)] to-[oklch(0.78_0.21_55)]"
                  style={{ opacity: level / 100 }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.2em] text-ember">
            Service bay
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Close more tickets, kill the clipboard.
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Every wrench-turn, part, and photo lives on one ticket that
            customers can approve from their phone. No more triple entry into
            three systems.
          </p>

          <ul className="mt-8 space-y-3">
            {SERVICE_BAY_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                  <Check
                    aria-hidden="true"
                    className="size-3"
                    strokeWidth={3}
                  />
                </span>

                <span className="text-[15px] text-foreground/90">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}