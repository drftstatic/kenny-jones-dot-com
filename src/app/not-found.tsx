import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden border border-static/60 bg-void px-6 text-center">
      <div className="vhs-static absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative z-10 max-w-xl space-y-5">
        <h1 className="font-mono text-4xl font-bold uppercase tracking-[0.1em] text-signal md:text-6xl">NO SIGNAL</h1>
        <p className="text-base leading-relaxed text-signal/85 md:text-lg">
          The footage you&apos;re looking for has been lost, corrupted, or was never recorded in the first place.
        </p>
        <Link
          href="/"
          className="inline-block font-mono text-sm uppercase tracking-[0.08em] text-phosphor underline underline-offset-4 transition hover:text-linkHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phosphor"
        >
          ← Return to broadcast
        </Link>
      </div>
    </section>
  );
}
