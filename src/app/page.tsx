import Image from 'next/image';
import Link from 'next/link';
import { GlitchText } from '@/components/GlitchText';
import { homepageIntro } from '@/lib/content';

const stats = [
  { value: '30+', label: 'Years in the Field', code: 'EXP_30_YRS' },
  { value: '500+', label: 'Projects Delivered', code: 'PRJ_CNT_05' },
  { value: '1', label: 'Near-Death Experience', code: 'SURVIVAL_RT' },
  { value: '0', label: 'Masks Tolerated', code: 'ZERO_TOL' },
] as const;

export default function Home() {
  return (
    <section className="relative space-y-12 py-10 md:space-y-20 md:py-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <p className="text-data text-cyberCyan">ID: KENNETH_JONES // STATUS: ACTIVE</p>
            <h1 className="font-mono text-5xl font-bold uppercase tracking-tight md:text-8xl">
              <GlitchText text="KENNY JONES" />
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-cyberCyan" />
              <p className="font-mono text-sm uppercase tracking-widest text-signal/60 md:text-base">
                Senior Videographer · Documentary · Live Broadcast
              </p>
            </div>
          </div>

          <p className="max-w-prose font-mono text-lg leading-relaxed text-phosphor md:text-2xl">
            [ LOGGING_SYSTEM ] // 30 Years. One Scar. Zero Quit.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              href="/reel"
              className="group relative inline-flex items-center overflow-hidden bg-cyberCyan px-8 py-4 font-mono text-sm font-bold uppercase tracking-nav text-void transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Access Reel_V2.0 →</span>
              <div className="absolute inset-0 -translate-x-full bg-white transition-transform group-hover:translate-x-0" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center border border-cyberCyan px-8 py-4 font-mono text-sm font-bold uppercase tracking-nav text-cyberCyan transition-all hover:bg-cyberCyan/10"
            >
              Book_Consultation
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="hud-panel relative aspect-square overflow-hidden rounded-sm border-px border-cyberCyan/30">
            <div className="absolute inset-x-0 top-0 z-20 flex justify-between p-4">
              <span className="text-data text-cyberCyan/80">CAM_01 // RAW_DATA</span>
              <span className="text-data text-safetyOrange">LUT: FILM_LOG</span>
            </div>
            <Image
              src="/images/kenny-hero.png"
              alt="Kenny Jones professional videographer"
              fill
              className="object-cover opacity-80 mix-blend-screen grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              priority
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 z-10 border-[20px] border-void/20 mix-blend-overlay" />
          </div>
          {/* Decorative Corner Brackets */}
          <div className="absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-cyberCyan" />
          <div className="absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 border-cyberCyan" />
          <div className="absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 border-cyberCyan" />
          <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-cyberCyan" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-px md:bg-cyberCyan/10">
        {stats.map((stat) => (
          <div key={stat.label} className="hud-panel p-6 transition-all hover:bg-cyberCyan/5">
            <p className="text-data mb-2 text-cyberCyan/50">{stat.code}</p>
            <p className="font-mono text-3xl font-bold text-signal">{stat.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="hud-panel max-w-4xl p-8 md:p-12">
        <h3 className="text-data mb-6 flex items-center gap-2">
          <span className="h-2 w-2 bg-cyberCyan" />
          Mission_Manifesto
        </h3>
        <p className="font-mono text-base leading-relaxed text-signal/80 md:text-xl">
          {homepageIntro}
        </p>
      </div>
    </section>
  );
}
