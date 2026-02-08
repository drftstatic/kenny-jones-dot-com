'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AUDIO_PREF_UPDATED_EVENT, readAudioEnabledPreference, writeAudioEnabledPreference } from '@/lib/audioPreferences';

const KONAMI_SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] as const;

function KennySilhouette() {
  return (
    <svg viewBox="0 0 280 320" role="img" aria-label="Kenny silhouette overlay" className="h-auto w-full max-w-[220px] drop-shadow-[0_0_16px_rgba(255,51,51,0.45)]">
      <rect x="0" y="0" width="280" height="320" fill="#0a0a0a" />
      <ellipse cx="140" cy="105" rx="58" ry="68" fill="#2a2a2a" />
      <rect x="95" y="165" width="90" height="110" rx="22" fill="#2a2a2a" />
      <path d="M158 188 C174 196, 178 210, 167 220" stroke="#ff3333" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function KonamiEasterEgg() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setIsEnabled(readAudioEnabledPreference(false));

    const handlePreferenceSync = () => {
      setIsEnabled(readAudioEnabledPreference(false));
    };

    window.addEventListener('storage', handlePreferenceSync);
    window.addEventListener(AUDIO_PREF_UPDATED_EVENT, handlePreferenceSync);

    return () => {
      window.removeEventListener('storage', handlePreferenceSync);
      window.removeEventListener(AUDIO_PREF_UPDATED_EVENT, handlePreferenceSync);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[progressRef.current];
      const pressed = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (pressed === expected) {
        progressRef.current += 1;

        if (progressRef.current === KONAMI_SEQUENCE.length) {
          progressRef.current = 0;
          setIsActive(true);

          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }

          timeoutRef.current = window.setTimeout(() => {
            setIsActive(false);
          }, 500);

          if (audioRef.current && isEnabled) {
            audioRef.current.currentTime = 0;
            void audioRef.current.play();
          }
        }
      } else {
        progressRef.current = pressed === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isEnabled]);

  const toggleAudio = () => {
    const nextValue = !isEnabled;
    setIsEnabled(nextValue);
    writeAudioEnabledPreference(nextValue);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleAudio}
        className="fixed right-4 top-12 z-[72] border border-phosphor/50 bg-void/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-phosphor backdrop-blur-sm transition hover:border-phosphor hover:text-linkHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phosphor md:right-6 md:top-14"
        aria-pressed={isEnabled}
        aria-label={isEnabled ? 'Disable easter egg audio' : 'Enable easter egg audio'}
      >
        SFX: {isEnabled ? 'On' : 'Muted'}
      </button>

      {/* Placeholder audio file. Replace with final licensed clip before deployment. */}
      <audio ref={audioRef} src="/audio/airhorn.mp3" muted={!isEnabled} preload="auto" />

      {mounted && isActive
        ? createPortal(
            <div className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-vhsRed/80 backdrop-blur-[1px] motion-reduce:hidden" aria-hidden="true">
              <div className="animate-pulse">
                <KennySilhouette />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
