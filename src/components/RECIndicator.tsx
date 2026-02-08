export function RECIndicator() {
  return (
    <div className="fixed right-4 top-4 z-[70] flex items-center gap-1 font-mono text-xs font-bold tracking-[0.05em] text-vhsRed md:right-6 md:top-5" aria-label="Recording indicator">
      <span className="rec-dot h-2 w-2 rounded-full bg-vhsRed [animation:blink_2s_ease-in-out_infinite]" aria-hidden="true" />
      <span>REC</span>
    </div>
  );
}
