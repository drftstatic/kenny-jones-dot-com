# CODEX_TASKS.md — Parallel Task Strategy

This document outlines the recommended order and grouping for Codex Cloud tasks. Each task should be submitted as a separate Codex Cloud task for parallel execution.

---

## Phase 1: Foundation (Run First — Sequential)

### Task 1.1 — Project Scaffold & Design System
```
Read AGENTS.md, docs/PRD.md, docs/DESIGN.md, and .agents/skills/vhs-aesthetic/SKILL.md.

Initialize a Next.js 14+ project with TypeScript and the App Router in this repo.
Set up:
- Tailwind CSS 3.4+ with the custom color palette from DESIGN.md
- Google Fonts (IBM Plex Mono + Inter) via next/font/google
- The tailwind.config.ts with all custom colors, fonts, and spacing
- A global stylesheet (globals.css) with the VHS/CRT CSS from DESIGN.md
- The root layout (src/app/layout.tsx) with:
  - CRT Frame component (CRTFrame.tsx)
  - REC Indicator component (RECIndicator.tsx)
  - VHS Tracking Line (VHSTrackingLines.tsx)
  - Scanline overlay
  - Camcorder Timestamp component (CamcorderTimestamp.tsx)
  - News Ticker component (NewsTicker.tsx) with messages from CONTENT.md
  - Navigation component (Navigation.tsx) with responsive hamburger menu
  - Footer with copyright and easter egg credit from CONTENT.md
- A basic homepage placeholder at src/app/page.tsx
- Proper prefers-reduced-motion handling for all VHS effects

Run `npm run build` and `npm run lint` to verify everything compiles.
Create placeholder empty files for audio assets (public/audio/wilhelm.mp3, public/audio/airhorn.mp3).
```

**Wait for this task to complete and merge before running Phase 2.**

---

## Phase 2: Pages (Run in Parallel)

### Task 2.1 — Homepage
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the homepage at src/app/page.tsx.
Include:
- Hero section with "KENNY JONES" headline (IBM Plex Mono, bold) with the one-time glitch text animation from DESIGN.md using a GlitchText component
- Subheadline with specialties
- Tagline: "30 Years. One Scar. Zero Quit."
- Dark background with CRT scanline overlay
- CTA buttons: "VIEW MY REEL →" (links to /reel) and "BOOK KENNY →" (links to /contact)
- Featured stats bar styled like a broadcast chyron: 30+ Years, 500+ Projects, 1 Near-Death Experience, 0 Masks Tolerated
- Brief intro text from CONTENT.md
- Responsive layout per DESIGN.md specs

Run `npm run build` and `npm run lint` to verify.
```

### Task 2.2 — About Page + Scar Story FAQ
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the About page at src/app/about/page.tsx.
Include two sections:

1. Professional Bio section:
   - "ABOUT KENNY" headline
   - SVG placeholder silhouette with a subtle neck scar line (create as an inline SVG component)
   - Full bio text from CONTENT.md (3 paragraphs)
   - Sidebar info card with details from CONTENT.md (styled like a broadcast info card)

2. The Scar Story FAQ section:
   - "FREQUENTLY ASKED QUESTION" headline (singular, intentional)
   - Accordion/expandable component with the same question repeated 5 times
   - Each expansion reveals a different answer from CONTENT.md (Professional → Tired → Frustrated → Done → Redirected)
   - The last answer includes a real link to the Wikipedia page for Scream (1996)
   - Easter egg: clicking any mention of "scar" or "neck" in the bio plays a Wilhelm scream audio clip (with a visible mute toggle). Default to muted. Use a useRef for the audio element and clean up in useEffect.

Run `npm run build` and `npm run lint` to verify.
```

### Task 2.3 — Demo Reel / Portfolio Page
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the Demo Reel page at src/app/reel/page.tsx.
Include:
- "DEMO REEL" headline
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- 8 portfolio items from CONTENT.md, each as a card with:
  - Colored background matching the category color from CONTENT.md
  - VHS scanline overlay on the card (subtle)
  - Camcorder timestamp in the top-right corner showing the project date
  - Title, category tag (colored pill), and description
  - On hover: slight brightness increase and 1px translateY lift

- The 8th item (Woodsboro) must be special:
  - Black background with CSS VHS static noise animation from DESIGN.md
  - Title: "Woodsboro News Van — Raw Footage"
  - Status text: "CORRUPTED · UNDER LEGAL REVIEW" in red
  - NOT clickable — cursor: not-allowed
  - On hover: brief static flash effect

Store portfolio data in src/lib/content.ts as a typed array.

Run `npm run build` and `npm run lint` to verify.
```

### Task 2.4 — Services & Rates Page
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the Services page at src/app/services/page.tsx.
Include:
- "SERVICES & RATES" headline
- Responsive grid of 6 service cards (3 col desktop, 2 tablet, 1 mobile)
- Each card: icon (use a relevant emoji), service name, description, starting price from CONTENT.md
- The 6th card (Hazard Pay) must show strikethrough text for the name, description, and price, with "No longer applicable. Don't ask." in normal text below
- Below the grid: the "Will Not Accept" legal disclaimer from CONTENT.md, styled as a gray-background legal notice with smaller text and a border

Run `npm run build` and `npm run lint` to verify.
```

### Task 2.5 — Testimonials Page
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the Testimonials page at src/app/testimonials/page.tsx.
Include:
- "WHAT THEY SAY" headline
- 4 testimonials from CONTENT.md as alternating left/right cards
- Each card: italic quote text, attribution (name, title), a VHS-style date stamp in the corner
- Card styling per DESIGN.md (dark bg, green left border, padded)
- On mobile: stack vertically, no alternation

Store testimonial data in src/lib/content.ts.

Run `npm run build` and `npm run lint` to verify.
```

### Task 2.6 — Blog Pages
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the Blog index at src/app/blog/page.tsx and individual post pages at src/app/blog/[slug]/page.tsx.

Blog index:
- "TRANSMISSIONS" headline (a more Kenny-appropriate word for "blog")
- 3 blog post cards, each with: title, date (VHS timestamp style), excerpt, "READ MORE →" link
- Responsive: stack on mobile

Individual post page:
- Title + date at top
- Full article text from CONTENT.md (use proper paragraph spacing, blockquote styling for the "letter" format in post 3)
- "← Back to Transmissions" link at bottom

Store all blog post data (title, slug, date, excerpt, full text) in src/lib/content.ts. Use Next.js generateStaticParams for the [slug] route.

Run `npm run build` and `npm run lint` to verify.
```

### Task 2.7 — Contact Page
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build the Contact page at src/app/contact/page.tsx.
Include:
- "BOOK KENNY BEFORE HE'S GONE (AGAIN)" headline
- Client-side-only contact form (no actual submission):
  - Name (text), Email (email), Project Type (select), Description (textarea), Budget Range (select)
  - Required checkbox with the oath text from CONTENT.md
  - Submit button: "SEND INQUIRY"
  - On submit: show success message from CONTENT.md, hide form
  - Basic client-side validation (required fields, email format)
- Sidebar with contact info from CONTENT.md
- Form styled with the dark aesthetic: dark inputs, green focus borders, monospace labels

Run `npm run build` and `npm run lint` to verify.
```

---

## Phase 3: Easter Eggs & Polish (Run After Phase 2 Merges)

### Task 3.1 — Easter Eggs & Special Pages
```
Read AGENTS.md, docs/PRD.md, docs/CONTENT.md, docs/DESIGN.md.

Build:
1. /woodsboro route (src/app/woodsboro/page.tsx):
   - Black background, centered "No." in IBM Plex Mono
   - After 3 seconds, "Go back." fades in below (use Framer Motion or CSS animation)
   - Link: "← Take me somewhere safe" → homepage

2. Custom 404 (src/app/not-found.tsx):
   - VHS NO SIGNAL screen with CSS static noise from DESIGN.md
   - "NO SIGNAL" headline, body text from CONTENT.md
   - "← Return to broadcast" link → homepage

3. Konami Code easter egg (add to root layout):
   - Global keyboard listener for ↑↑↓↓←→←→BA sequence
   - On trigger: full-screen flash showing the Kenny SVG silhouette for 0.5s with an air horn sound (respect mute state)
   - Clean up event listener on unmount
   - Use a React portal for the overlay

4. Verify all audio easter eggs respect user audio preferences and have visible mute toggles.

Run `npm run build` and `npm run lint` to verify.
```

### Task 3.2 — Final QA Pass
```
Read AGENTS.md, docs/PRD.md, docs/DESIGN.md.

Do a final quality pass:
1. Run `npm run build` — fix any build errors
2. Run `npm run lint` — fix all lint warnings and errors
3. Check all pages render without console errors
4. Verify responsive breakpoints match the table in PRD.md
5. Verify all links between pages work correctly
6. Verify the prefers-reduced-motion experience works (all animations disabled, content still readable)
7. Verify all text content matches CONTENT.md exactly
8. Check accessibility: all images have alt text, all interactive elements have ARIA labels, focus states are visible
9. Ensure no TypeScript `any` types or @ts-ignore comments exist
```

---

## Codex Cloud Setup Script

Use this in your Codex Cloud environment setup:

```bash
# Install Node.js LTS (should be pre-installed in codex-universal)
# Install project dependencies
npm install

# Verify build works
npm run build
```

## Environment Notes

- **Internet access:** Required during setup (npm install). Disabled during agent phase.
- **No secrets needed** — this is a static site with no API keys.
- **Branch strategy:** Each task creates a branch. Review screenshots in Codex, merge when satisfied.
