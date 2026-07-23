export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.78_0.21_55)] to-[oklch(0.62_0.22_32)] shadow-ember">
        <svg viewBox="0 0 24 24" className="size-4 text-background" fill="none">
          <path
            d="M4 17l4-10 4 6 4-8 4 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-[15px] font-semibold tracking-tight">MotoDesk</span>
    </div>
  );
}