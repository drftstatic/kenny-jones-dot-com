import { tickerMessages } from '@/lib/content';

export function NewsTicker() {
  const row = [...tickerMessages, ...tickerMessages].join('  ·  ');

  return (
    <div className="news-ticker" role="status" aria-label="Latest updates">
      <div className="ticker-content font-mono text-[11px] uppercase tracking-ticker text-cyberCyan/80">{row}</div>
    </div>
  );
}
