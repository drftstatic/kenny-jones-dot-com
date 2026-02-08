export function RECIndicator() {
  return (
    <div className="fixed right-4 top-4 z-[70] flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.1em] text-safetyOrange md:right-8 md:top-24" aria-label="Recording indicator">
      <div className="flex items-center gap-1.5">
        <span className="rec-dot h-1.5 w-1.5 rounded-full bg-vhsRed [animation:blink_1s_ease-in-out_infinite]" aria-hidden="true" />
        <span>LIVE_FEED</span>
      </div>
      <div className="h-3 w-px bg-signal/20" />
      <span className="text-signal/60">4K RAW</span>
      <div className="h-3 w-px bg-signal/20" />
      <span className="text-signal/60">60 FPS</span>
      <div className="h-3 w-px bg-signal/20" />
      <span className="text-vhsRed">REC</span>
    </div>
  );
}
