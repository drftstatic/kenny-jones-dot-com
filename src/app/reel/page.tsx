import { portfolioItems } from '@/lib/content';

const categoryColorMap = {
  Corporate: 'bg-categories-corporate',
  Documentary: 'bg-categories-documentary',
  'Live Event': 'bg-categories-liveEvent',
  News: 'bg-categories-news',
  Wedding: 'bg-categories-wedding',
} as const;

export default function ReelPage() {
  return (
    <section className="space-y-8 py-10 md:py-14">
      <h1 className="font-mono text-3xl font-bold uppercase md:text-5xl">Demo Reel</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item) => (
          <article
            key={item.title}
            className={`group overflow-hidden border border-phosphor/20 bg-tape transition duration-200 ${
              item.corrupted ? 'cursor-not-allowed hover:brightness-110' : 'hover:-translate-y-px hover:brightness-110'
            }`}
            aria-label={item.title}
          >
            <div
              className={`relative h-48 p-4 ${item.corrupted ? 'vhs-static bg-black' : ''}`}
              style={item.corrupted ? undefined : { backgroundColor: item.color }}
            >
              <div className="scanlines absolute inset-0 opacity-20" aria-hidden="true" />
              <p className="relative z-10 text-right font-mono text-xs uppercase tracking-[0.08em] text-signal/80">{item.date}</p>
            </div>
            <div className="space-y-3 p-5">
              <h2 className="font-mono text-xl font-semibold text-signal">{item.title}</h2>
              {item.category ? (
                <span
                  className={`inline-block rounded-sm px-2 py-1 font-mono text-xs uppercase tracking-[0.08em] text-signal ${categoryColorMap[item.category]}`}
                >
                  {item.category}
                </span>
              ) : null}
              <p className={item.corrupted ? 'font-mono text-sm uppercase tracking-[0.08em] text-vhsRed' : 'text-signal/85'}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
