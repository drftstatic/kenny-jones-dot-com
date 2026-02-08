import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0a',
        signal: '#e8e6e3',
        phosphor: '#33ff33',
        vhsRed: '#ff3333',
        tape: '#2a2a2a',
        static: '#4a4a4a',
        cream: '#d4c5a9',
        muted: '#6b6b6b',
        linkHover: '#66ff66',
        categories: {
          corporate: '#1a365d',
          documentary: '#2d3748',
          liveEvent: '#553c9a',
          news: '#9b2c2c',
          wedding: '#744210',
        },
      },
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        nav: '0.1em',
        ticker: '0.08em',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};

export default config;
