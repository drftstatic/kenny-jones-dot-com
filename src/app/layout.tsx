import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import { CamcorderTimestamp } from '@/components/CamcorderTimestamp';
import { CRTFrame } from '@/components/CRTFrame';
import { Navigation } from '@/components/Navigation';
import { NewsTicker } from '@/components/NewsTicker';
import { RECIndicator } from '@/components/RECIndicator';
import { VHSTrackingLines } from '@/components/VHSTrackingLines';
import { footerCredit } from '@/lib/content';
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
        <CRTFrame />
        <div className="scanlines" aria-hidden="true" />
        <VHSTrackingLines />
        <RECIndicator />
        <CamcorderTimestamp />
        <Navigation />
        <main className="mx-auto min-h-[calc(100vh-10rem)] max-w-6xl px-4 pb-32 pt-12 md:px-8">{children}</main>
        <footer className="relative z-[55] border-t border-static/40 px-4 pb-20 pt-6 text-center font-mono text-xs tracking-[0.05em] text-muted md:px-8">
          <p>© 2026 Kenny Jones. All rights reserved.</p>
          <p className="mt-2">{footerCredit}</p>
        </footer>
        <NewsTicker />
      </body>
    </html>
  );
}
