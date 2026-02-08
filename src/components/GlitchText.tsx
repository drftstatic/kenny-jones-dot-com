'use client';

import { useEffect, useState } from 'react';

type GlitchTextProps = {
  text: string;
  className?: string;
};

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setGlitch(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return <span className={`${glitch ? 'glitch-text' : ''} ${className}`.trim()}>{text}</span>;
}
