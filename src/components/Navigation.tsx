'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/reel', label: 'REEL' },
  { href: '/services', label: 'SERVICES' },
  { href: '/testimonials', label: 'PRAISE' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[65] border-b border-phosphor/20 bg-void/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8" aria-label="Primary navigation">
        <span className="font-mono text-xs tracking-nav text-phosphor">KENNYJONES.COM</span>
        <button
          type="button"
          className="font-mono text-sm tracking-nav text-signal md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          MENU
        </button>
        <ul className="hidden items-center gap-4 font-mono text-[14px] tracking-nav md:flex">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link className={active ? 'underline underline-offset-4' : ''} href={link.href}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {open ? (
        <ul className="border-t border-phosphor/20 px-4 py-3 font-mono text-[14px] tracking-nav md:hidden">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="py-1">
                <Link className={active ? 'underline underline-offset-4' : ''} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}
