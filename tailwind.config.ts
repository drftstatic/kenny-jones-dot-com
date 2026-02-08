import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0a',
        signal: '#e8e6e3',
        phosphor: '#33ff33',
        cyberCyan: '#00f7ff',
        safetyOrange: '#ffb300',
        hyperBlue: '#0066ff',
        vhsRed: '#ff3333',
        tape: '#1a1a1a', // Darkened for better contrast
        static: '#333333',
        cream: '#d4c5a9',
        muted: '#888888',
        linkHover: '#66ff66',
        categories: {
          corporate: '#0e1f3a',
          documentary: '#1a202c',
          liveEvent: '#2d1a5e',
          news: '#631717',
          wedding: '#4a2c0a',
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
