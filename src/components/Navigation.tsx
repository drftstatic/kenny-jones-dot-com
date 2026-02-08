'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'HOME', code: '01' },
  { href: '/about', label: 'ABOUT', code: '02' },
  { href: '/reel', label: 'REEL', code: '03' },
  { href: '/services', label: 'SERVICES', code: '04' },
  { href: '/testimonials', label: 'PRAISE', code: '05' },
  { href: '/blog', label: 'BLOG', code: '06' },
  { href: '/contact', label: 'CONTACT', code: '07' },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[65] px-4 pt-4 md:px-8">
      <nav className="hud-panel mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary navigation">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 bg-cyberCyan animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-signal">KENNYJONES.V2.0_2026</span>
        </div>

        <button
          type="button"
          className="font-mono text-xs font-bold tracking-nav text-cyberCyan md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? '[ CLOSE_NAV ]' : '[ OPEN_NAV ]'}
        </button>

        <ul className="hidden items-center gap-6 font-mono text-[11px] font-bold tracking-nav md:flex">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="group flex items-center gap-1">
                <span className="text-[9px] text-muted group-hover:text-cyberCyan">{link.code}</span>
                <Link
                  className={`transition-colors hover:text-cyberCyan ${active ? 'text-cyberCyan' : 'text-signal/60'}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {open ? (
        <div className="hud-panel mt-2 animate-in fade-in slide-in-from-top-2 md:hidden">
          <ul className="px-6 py-6 space-y-4 font-mono text-sm tracking-nav">
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href} className="flex items-center gap-3">
                  <span className="text-[10px] text-muted">{link.code}</span>
                  <Link
                    className={`transition-colors ${active ? 'text-cyberCyan underline' : 'text-signal/80'}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
