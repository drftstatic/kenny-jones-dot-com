# AGENTS.md — Kenny Jones Freelance Videographer Website

## Project Overview

This is a multi-page portfolio website for **Kenneth "Kenny" Jones** — a fictional freelance videographer. Kenny is the cameraman from Gale Weathers' news crew in the 1996 film *Scream*. The premise: Kenny survived getting his throat slashed in the news van (it was just a really bad cut), and he's now a freelance videographer in 2026 with 30 years of professional experience.

The site is played **completely straight** — it's a real, functional, professional portfolio that happens to belong to a character with a very specific and violent backstory. The comedy comes from professionalism colliding with absurdity. Never wink at the camera. Kenny takes himself seriously. The site should too.

## Tech Stack

- **Framework:** Next.js 14+ with App Router (TypeScript)
- **Styling:** Tailwind CSS 3.4+
- **Animations:** Framer Motion
- **Fonts:** Google Fonts — `IBM Plex Mono` (headings, UI elements), `Inter` (body text)
- **Deployment:** Vercel
- **No backend / no database** — static site with client-side interactivity only

## Repository Structure

```
kenny-jones-dot-com/
├── AGENTS.md                    ← You are here
├── docs/
│   ├── PRD.md                   ← Full product requirements
│   ├── CONTENT.md               ← All written copy and content
│   └── DESIGN.md                ← Design system, colors, typography, effects
├── .agents/
│   └── skills/
│       └── vhs-aesthetic/
│           └── SKILL.md         ← VHS/CRT design pattern instructions
├── src/
│   └── app/
│       ├── layout.tsx           ← Root layout with CRT frame, REC indicator, nav
│       ├── page.tsx             ← Homepage
│       ├── about/page.tsx       ← Bio + Scar Story FAQ
│       ├── reel/page.tsx        ← Demo reel / portfolio
│       ├── services/page.tsx    ← Services & rates
│       ├── testimonials/page.tsx← Client testimonials
│       ├── blog/page.tsx        ← Blog index
│       ├── blog/[slug]/page.tsx ← Individual blog posts
│       ├── contact/page.tsx     ← Contact / booking form
│       ├── woodsboro/page.tsx   ← Easter egg — just says "No."
│       └── not-found.tsx        ← Custom 404 — VHS "NO SIGNAL"
├── src/
│   ├── components/
│   │   ├── CRTFrame.tsx         ← Persistent CRT monitor border effect
│   │   ├── RECIndicator.tsx     ← Blinking "REC ●" overlay
│   │   ├── VHSTrackingLines.tsx ← Animated VHS tracking distortion
│   │   ├── NewsTicker.tsx       ← Scrolling news ticker bar
│   │   ├── CamcorderTimestamp.tsx← Camcorder-style date/time overlay
│   │   ├── GlitchText.tsx       ← Text glitch effect component
│   │   └── Navigation.tsx       ← Site navigation
│   ├── lib/
│   │   └── content.ts           ← Blog post data, testimonials, etc.
│   └── styles/
│       └── vhs.css              ← Custom CSS for CRT scanlines, tracking effects
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── kenny-headshot.jpg   ← Placeholder: use a generic silhouette
│   │   └── vhs-overlay.png      ← VHS noise texture overlay
│   └── audio/
│       ├── wilhelm.mp3          ← Wilhelm scream (easter egg)
│       └── airhorn.mp3          ← Air horn (konami code easter egg)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Development Commands

- `npm install` — Install dependencies
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run type-check` — Run TypeScript compiler check

## Working Agreements

1. **Always read `docs/PRD.md` first** for full requirements before implementing any page.
2. **Always read `docs/CONTENT.md`** for exact copy — do not improvise or rewrite content unless the PRD explicitly says to.
3. **Always read `docs/DESIGN.md`** for the design system — colors, typography, spacing, effects.
4. **Use the `vhs-aesthetic` skill** (`.agents/skills/vhs-aesthetic/SKILL.md`) for implementing all CRT/VHS visual effects.
5. **Run `npm run lint` and `npm run build`** before considering any task complete.
6. **TypeScript strict mode** — no `any` types, no `@ts-ignore` comments.
7. **Accessibility matters** — all images need alt text, all interactive elements need ARIA labels, color contrast must meet WCAG AA. The VHS effects are decorative overlays and must not interfere with content readability.
8. **Mobile-first responsive design** — the CRT frame effect should gracefully degrade on mobile (subtle border instead of full monitor frame).
9. **Performance** — target Lighthouse score of 90+ on all metrics. VHS animations should use CSS transforms and `will-change` for GPU acceleration. Lazy load non-critical animations.
10. **No external API calls** — everything is static/client-side. Blog posts and testimonials are hardcoded in `src/lib/content.ts`.

## Content Tone

Kenny is a professional. He's tired of being defined by one bad day in 1996. He wants to be known for his work. But he's also self-aware enough to know that his backstory is the reason anyone visits this site. The tone is:

- **Professional with cracks** — the professionalism occasionally breaks under the weight of 30 years of "so you're THAT Kenny"
- **Never self-pitying** — Kenny's not a victim. He's annoyed. There's a difference.
- **Deadpan humor** — the comedy is in the gap between the professional format and the absurd context
- **Period-accurate references** — Kenny's cultural touchstones are mid-90s. He still says "the information superhighway" sometimes.

## Audio Assets Note

For the easter egg audio files (`wilhelm.mp3`, `airhorn.mp3`), create placeholder empty files. Add a comment in the code noting these should be replaced with actual audio files before deployment. Do not attempt to download or generate audio files.

## Image Assets Note

For `kenny-headshot.jpg`, create a simple SVG placeholder silhouette with a subtle scar line on the neck. For `vhs-overlay.png`, generate a CSS-based noise texture instead of relying on an image file — use a pseudo-element with a repeating gradient pattern.
