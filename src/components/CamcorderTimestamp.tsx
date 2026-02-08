'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

export function CamcorderTimestamp() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const formatted = formatter.format(new Date());
      setTime(`${formatted}:00`); // Adding :00 for frame count feel
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-24 left-4 z-[70] hidden font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyberCyan md:left-8 md:block">
      TC: {time}
    </div>
  );
}
