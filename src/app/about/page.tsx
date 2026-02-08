'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { aboutBioParagraphs, aboutSidebarDetails, scarFaqAnswers, scarFaqQuestion } from '@/lib/content';

const scarRegex = /(scar|neck)/gi;

function KennySilhouette() {
  return (
    <svg viewBox="0 0 280 320" role="img" aria-label="Placeholder silhouette of Kenny Jones with neck scar" className="h-auto w-full max-w-xs">
      <rect x="0" y="0" width="280" height="320" fill="#151515" />
      <ellipse cx="140" cy="105" rx="58" ry="68" fill="#2a2a2a" />
      <rect x="95" y="165" width="90" height="110" rx="22" fill="#2a2a2a" />
      <path d="M158 188 C174 196, 178 210, 167 220" stroke="#ff3333" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutPage() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const playWilhelm = () => {
    if (!audioRef.current || muted) {
      return;
    }

    audioRef.current.currentTime = 0;
    void audioRef.current.play();
  };

  const renderParagraph = (text: string) => {
    const parts = text.split(scarRegex);
    return parts.map((part, index) => {
      if (part.match(/^scar$/i) || part.match(/^neck$/i)) {
        return (
          <button
            key={`${part}-${index}`}
            type="button"
            className="font-medium text-phosphor underline underline-offset-2"
            onClick={playWilhelm}
            aria-label={`Play audio cue on ${part.toLowerCase()} mention`}
          >
            {part}
          </button>
        );
      }

      return <span key={`${part}-${index}`}>{part}</span>;
    });
  };

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-mono text-3xl font-bold uppercase md:text-5xl">About Kenny</h1>
          <button
            type="button"
            className="border border-phosphor px-3 py-2 font-mono text-xs uppercase tracking-nav text-phosphor"
            onClick={() => setMuted((value) => !value)}
            aria-pressed={!muted}
            aria-label={muted ? 'Unmute Wilhelm scream effect' : 'Mute Wilhelm scream effect'}
          >
            Audio: {muted ? 'Muted' : 'On'}
          </button>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6 text-base leading-relaxed text-signal/90 md:text-lg">
            {aboutBioParagraphs.map((paragraph) => (
              <p key={paragraph}>{renderParagraph(paragraph)}</p>
            ))}
          </div>
          <aside className="border border-static bg-tape/70 p-6">
            <div className="mx-auto mb-6 max-w-xs">
              <KennySilhouette />
            </div>
            <ul className="space-y-3 text-sm">
              {aboutSidebarDetails.map((item) => (
                <li key={item.label}>
                  <p className="font-mono uppercase tracking-[0.08em] text-muted">{item.label}</p>
                  <p className="mt-1 text-signal">{item.value}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-mono text-2xl font-bold uppercase md:text-3xl">Frequently Asked Question</h2>
        <div className="space-y-3">
          {scarFaqAnswers.map((answer, index) => {
            const isOpen = expanded === index;
            return (
              <div key={index} className="border border-static bg-tape/60">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-mono text-sm uppercase tracking-[0.08em]"
                  onClick={() => setExpanded(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{scarFaqQuestion}</span>
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? (
                  <div className="border-t border-static px-4 py-4 text-signal/90">
                    <p>
                      {index === scarFaqAnswers.length - 1 ? (
                        <>
                          {answer}{' '}
                          <Link href="https://en.wikipedia.org/wiki/Scream_(1996_film)" className="underline underline-offset-2" target="_blank">
                            Woodsboro murders — Wikipedia
                          </Link>
                        </>
                      ) : (
                        answer
                      )}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* Placeholder audio file. Replace with final licensed clip before deployment. */}
      <audio ref={audioRef} src="/audio/wilhelm.mp3" muted={muted} preload="auto" />
    </div>
  );
}
