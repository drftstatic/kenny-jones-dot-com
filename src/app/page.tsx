import Link from 'next/link';
import { GlitchText } from '@/components/GlitchText';
import { homepageIntro } from '@/lib/content';

const stats = [
  { value: '30+', label: 'Years in the Field' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '1', label: 'Near-Death Experience' },
  { value: '0', label: 'Masks Tolerated' },
] as const;

export default function Home() {
  return (
    <section className="space-y-10 py-10 md:space-y-14 md:py-16">
      <div className="space-y-6">
        <h1 className="font-mono text-4xl font-bold uppercase tracking-[-0.02em] md:text-6xl">
          <GlitchText text="KENNY JONES" />
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal/80 md:text-sm">
          FREELANCE VIDEOGRAPHER · DOCUMENTARY · LIVE EVENT · CORPORATE
        </p>
        <p className="font-mono text-lg text-phosphor md:text-2xl">30 Years. One Scar. Zero Quit.</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/reel"
            className="inline-flex items-center bg-phosphor px-6 py-3 font-mono text-sm font-semibold uppercase tracking-nav text-void transition-colors hover:bg-linkHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phosphor"
          >
            View My Reel →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-phosphor px-6 py-3 font-mono text-sm font-semibold uppercase tracking-nav text-phosphor transition-colors hover:bg-phosphor/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phosphor"
          >
            Book Kenny →
          </Link>
        </div>
      </div>

      <div className="grid gap-px border border-phosphor/20 bg-phosphor/20 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-tape p-4">
            <p className="font-mono text-2xl font-bold text-phosphor">{stat.value}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-signal/80">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="max-w-prose text-base leading-relaxed text-signal/90 md:text-lg">{homepageIntro}</p>
    </section>
  );
}
