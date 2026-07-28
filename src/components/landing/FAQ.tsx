"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { FAQ_ITEMS } from "@/constants/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  }

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ember">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border/70 rounded-2xl border border-border/70 bg-surface/40">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium">
                      {item.question}
                    </span>

                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/5 text-muted-foreground">
                      {isOpen ? (
                        <Minus
                          aria-hidden="true"
                          className="size-3.5"
                        />
                      ) : (
                        <Plus
                          aria-hidden="true"
                          className="size-3.5"
                        />
                      )}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}