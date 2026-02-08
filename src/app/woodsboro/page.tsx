'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WoodsboroPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-void text-center">
      <h1 className="font-mono text-5xl font-bold text-signal md:text-7xl">No.</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.7, ease: 'easeInOut' }}
        className="mt-6 font-mono text-lg uppercase tracking-[0.08em] text-muted"
      >
        Go back.
      </motion.p>
      <Link
        href="/"
        className="mt-8 font-mono text-sm uppercase tracking-[0.08em] text-phosphor underline underline-offset-4 transition hover:text-linkHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phosphor"
      >
        ← Take me somewhere safe
      </Link>
    </section>
  );
}
