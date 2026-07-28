export default function Loading() {
  return (
    <main
      aria-label="Loading page"
      aria-busy="true"
      className="min-h-screen px-6 pb-24 pt-36 sm:pt-44"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto h-3 w-24 animate-pulse rounded-full bg-white/10" />

          <div className="mx-auto mt-5 h-12 max-w-xl animate-pulse rounded-xl bg-white/10 sm:h-16" />

          <div className="mx-auto mt-6 h-5 max-w-lg animate-pulse rounded-lg bg-white/5" />
          <div className="mx-auto mt-3 h-5 max-w-md animate-pulse rounded-lg bg-white/5" />
        </div>

        <div className="mt-16 space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="hairline rounded-2xl bg-surface/40 p-6"
            >
              <div className="h-6 w-48 animate-pulse rounded-lg bg-white/10" />

              <div className="mt-5 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-white/5" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}