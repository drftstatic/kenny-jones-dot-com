'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

export function CamcorderTimestamp() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const formatted = formatter.format(new Date()).replace(',', '').toUpperCase();
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="fixed bottom-12 left-4 z-[70] hidden font-mono text-[11px] uppercase tracking-[0.05em] text-phosphor/60 md:block">{time}</div>;
}
