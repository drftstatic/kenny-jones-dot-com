import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import { CamcorderTimestamp } from '@/components/CamcorderTimestamp';
import { CRTFrame } from '@/components/CRTFrame';
import { Navigation } from '@/components/Navigation';
import { NewsTicker } from '@/components/NewsTicker';
import { KonamiEasterEgg } from '@/components/KonamiEasterEgg';
import { RECIndicator } from '@/components/RECIndicator';
import { VHSTrackingLines } from '@/components/VHSTrackingLines';
import { footerCredit, footerText } from '@/lib/content';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kenny Jones | Freelance Videographer',
  description: 'Freelance videographer with 30 years of experience in news, documentary, corporate, and live events.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${inter.variable} min-h-screen bg-void font-sans text-signal`}>
        <a href="#main-content" className="sr-only z-[100] bg-void px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-phosphor focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:border focus:border-phosphor">Skip to content</a>
        <CRTFrame />
        <div className="scanlines" aria-hidden="true" />
        <VHSTrackingLines />
        <RECIndicator />
        <CamcorderTimestamp />
        <Navigation />
        <KonamiEasterEgg />
        <main id="main-content" className="mx-auto min-h-[calc(100vh-10rem)] max-w-6xl px-4 pb-32 pt-12 md:px-8">{children}</main>
        <footer className="relative z-[55] border-t border-signal/10 px-4 pb-24 pt-12 md:px-8">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-data text-cyberCyan">SYSTEM_ORIGIN: KENNY_JONES_PRODUCTIONS_LLC</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{footerText}</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-data text-safetyOrange">SECURE_SITE // ENCRYPTED_STREAM</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{footerCredit}</p>
            </div>
          </div>
        </footer>
        <NewsTicker />
      </body>
    </html>
  );
}
