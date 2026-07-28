import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function InfoCard({
  title,
  description,
  children,
}: InfoCardProps) {
  return (
    <article className="hairline rounded-2xl bg-surface/40 p-6">
      <h2 className="text-xl font-semibold tracking-[-0.01em]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </article>
  );
}