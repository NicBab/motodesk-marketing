import type { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

export default function ContentSection({
  title,
  children,
}: ContentSectionProps) {
  return (
    <section className="border-b border-border/70 py-10 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="text-2xl font-semibold tracking-[-0.02em]">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}