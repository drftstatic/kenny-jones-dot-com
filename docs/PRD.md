# PRD — KennyJones.com

## Product Vision

A multi-page portfolio website for Kenneth "Kenny" Jones, freelance videographer. The site serves as both a legitimate professional portfolio and a comedic character study of a man who survived a horror movie and built a career in spite of it.

**Target launch:** February 14, 2026 (Valentine's Day gift / soft launch)
**Marketing moment:** February 27, 2026 (Scream 7 theatrical release)

---

## Sitemap & Page Requirements

### 1. Root Layout (`layout.tsx`)

The root layout wraps every page and provides the persistent "camcorder viewfinder" experience.

**Persistent elements:**
- **CRT Frame:** A subtle monitor/viewfinder border around the entire viewport. On desktop, this is a rounded-rectangle border with slight vignette darkening at edges. On mobile, reduce to a thin border with corner brackets (like a camera viewfinder).
- **REC Indicator:** Top-right corner. Red dot that blinks every 2 seconds. Text reads `● REC`. Always visible. Uses `IBM Plex Mono`.
- **Camcorder Timestamp:** Bottom-left corner. Shows current date/time in camcorder format: `FEB 14 2026  2:34:17 PM`. Updates every second. Uses `IBM Plex Mono`.
- **Navigation:** Top of viewport, inside the CRT frame. Clean horizontal nav: `HOME / ABOUT / REEL / SERVICES / PRAISE / BLOG / CONTACT`. Active page is underlined. Mobile: hamburger menu.
- **News Ticker:** Bottom of viewport, above the camcorder timestamp. Scrolling marquee with rotating messages (see CONTENT.md for ticker copy).

### 2. Homepage (`page.tsx`)

The landing page. First impression. Sets the tone.

**Hero Section:**
- Large headline: `KENNY JONES` in `IBM Plex Mono`, bold, with a subtle VHS glitch effect on load (text briefly distorts then settles).
- Subheadline: `FREELANCE VIDEOGRAPHER · DOCUMENTARY · LIVE EVENT · CORPORATE`
- Below that, the tagline: `30 Years. One Scar. Zero Quit.`
- Background: Dark (`#0a0a0a`) with faint CRT scanline overlay (horizontal lines, very low opacity). Occasional subtle VHS tracking line animation that drifts vertically.
- CTA button: `VIEW MY REEL →` (links to /reel)
- Secondary CTA: `BOOK KENNY →` (links to /contact)

**Featured Stats Bar:**
A horizontal row of stats, styled like a broadcast chyron/lower third:
- `30+` Years in the Field
- `500+` Projects Delivered
- `1` Near-Death Experience
- `0` Masks Tolerated

**Brief Intro Text:**
2-3 sentences. Professional. See CONTENT.md for exact copy.

### 3. About Page (`about/page.tsx`)

Two sections on one page: the professional bio and the Scar Story FAQ.

**Professional Bio Section:**
- Headline: `ABOUT KENNY`
- Photo area: Placeholder silhouette with neck scar detail (SVG)
- Bio text: ~3 paragraphs. Starts professional, cracks show by paragraph 2, fully exasperated by the end. See CONTENT.md for exact copy.
- Sidebar details (styled like a broadcast info card):
  - Based in: `Somewhere That Isn't Woodsboro`
  - Experience: `30+ Years`
  - Specialties: `News, Documentary, Corporate, Events`
  - Availability: `Immediate`
  - Fun Fact: `Has never owned a Ghostface mask. Not even for Halloween.`

**The Scar Story FAQ Section:**
- Headline: `FREQUENTLY ASKED QUESTION` (singular, intentionally)
- A single question — "What happened to your neck?" — answered multiple times with escalating exasperation. Styled as an accordion/expandable FAQ, but it's the same question repeated with different answer tones. See CONTENT.md for the 5 answer variations.
- **Easter egg:** Clicking the scar mention in the bio should trigger a very brief, quiet Wilhelm scream sound effect (with a visible mute/audio toggle).

### 4. Demo Reel Page (`reel/page.tsx`)

A portfolio grid showcasing Kenny's work. All projects are fictional.

**Layout:** Responsive grid — 3 columns desktop, 2 tablet, 1 mobile.

**Each portfolio item:**
- Thumbnail: A solid color card with VHS-style overlay (scanlines + camcorder timestamp in corner showing a fake date)
- Project title
- Category tag (Corporate, Documentary, Live Event, News, Wedding)
- Brief description (1-2 sentences)
- On hover: slight VHS tracking distortion effect on the thumbnail

**Special item at the end of the grid:**
- Thumbnail: Solid black with heavy VHS static/noise
- Title: `WOODSBORO NEWS VAN — RAW FOOTAGE`
- Status: `CORRUPTED · UNDER LEGAL REVIEW`
- This item is not clickable. Cursor changes to `not-allowed`.

See CONTENT.md for the full list of 8 portfolio items.

### 5. Services & Rates Page (`services/page.tsx`)

A clean, professional services page with one comedic twist.

**Services Grid:**
Cards for each service category. Each card has:
- Icon (use simple SVG or emoji)
- Service name
- Description (2-3 sentences)
- Starting price

**Services:**
1. Corporate Video Production — $2,500/day
2. Live Event Coverage — $1,800/day
3. Documentary Consulting & Production — $3,000/day
4. News & Broadcast Freelance — $2,000/day
5. Wedding & Celebration Videography — $2,200/day
6. ~~Hazard Pay~~ — ~~$5,000/day~~ — `"No longer applicable. Don't ask."`

**"Will Not Accept" Disclaimer:**
Styled like a legal notice at the bottom of the page. Gray background, smaller text, faux-legal tone:

> **NOTICE TO PROSPECTIVE CLIENTS:** Kenneth Jones reserves the right to decline any engagement involving, but not limited to: masks of any kind (Halloween, surgical, Guy Fawkes), voice-altering devices, requests to "just keep rolling no matter what," basement or attic setups with limited egress, anyone who opens a conversation with "what's your favorite scary movie," found footage projects, and/or any gig where the phrase "it's probably nothing" is used to describe on-site conditions. This policy is non-negotiable and has been in effect since 1997.

### 6. Testimonials Page (`testimonials/page.tsx`)

**Layout:** Alternating left/right testimonial cards with a subtle VHS timestamp in the corner of each.

**4 testimonials** (see CONTENT.md for full text):
1. **Gale Weathers** — Professional, slightly backhanded. She's complimenting Kenny's work but you can tell she considers herself the star.
2. **Mike Chen, VP Marketing, TechNova Inc.** — Aggressively generic corporate testimonial. The comedy is in how boring it is next to the others.
3. **Darla Voss, Host, "Cold Open" Podcast** — True crime podcaster who is WAY too excited about Kenny's "unique lived experience." Subtly unhinged enthusiasm.
4. **Anonymous, Woodsboro, CA** — Just: "He showed up. He didn't die. 5 stars."

### 7. Blog Page (`blog/page.tsx` + `blog/[slug]/page.tsx`)

A blog index with 3 pre-written posts. Each has a VHS-style date stamp.

**Blog index:** Cards with title, date, excerpt, and "READ MORE →" link.

**3 blog posts** (see CONTENT.md for full text):
1. `why-im-not-watching-scream-7` — "Why I'm Not Watching Scream 7 (But I Hope It Does Well)" — Kenny's measured, professional, slightly bitter take.
2. `best-camera-bags` — "The 5 Best Camera Bags for Professionals Who've Seen Some Shit" — A genuine gear review that occasionally references "situations" without elaborating.
3. `open-letter-to-podcasters` — "An Open Letter to True Crime Podcasters: Please Stop Calling Me" — Exasperated but professional.

Each blog post page should have:
- Title + date
- Full article text
- A "Back to Blog" link
- The persistent REC indicator and CRT frame from the layout

### 8. Contact Page (`contact/page.tsx`)

**Headline:** `BOOK KENNY BEFORE HE'S GONE (AGAIN)`

**Contact Form** (client-side only, no actual submission — show a success message on submit):
- Name (text input)
- Email (email input)
- Project Type (select: Corporate, Documentary, Live Event, News, Wedding, Other)
- Project Description (textarea)
- Budget Range (select: Under $5k, $5k-$10k, $10k-$25k, $25k+, "Let's talk")
- **Checkbox (required):** `"I solemnly swear this gig does not involve: masks, knives, abandoned houses, anyone named Ghostface, or the phrase 'what's your favorite scary movie.'"`

**Success message after submit:** "Thanks for reaching out. Kenny will review your inquiry and get back to you within 48 hours. If this is an emergency, please call 911 — not Kenny. Kenny is not equipped for emergencies. Not anymore."

**Sidebar info:**
- Email: `kenny@kennyjones.com` (mailto link)
- Based in: `Undisclosed (Not Woodsboro)`
- Response time: `48 hours`
- A note: `"For press inquiries about Woodsboro, the answer is no. For everything else, I'd love to hear from you."`

### 9. Easter Egg: Woodsboro Route (`woodsboro/page.tsx`)

If someone navigates to `/woodsboro`, they get a page that is just:

- Black background
- Centered text in `IBM Plex Mono`: `No.`
- After 3 seconds, additional text fades in below: `Go back.`
- A link: `← Take me somewhere safe` (links to homepage)

### 10. Custom 404 Page (`not-found.tsx`)

A VHS "NO SIGNAL" screen:
- Blue/gray background with VHS static noise animation
- Large text: `NO SIGNAL`
- Smaller text below: `The footage you're looking for has been lost, corrupted, or was never recorded in the first place.`
- Link: `← Return to broadcast` (links to homepage)
- The VHS static should be animated using CSS (no video file needed)

---

## Easter Eggs Summary

1. **Wilhelm Scream** — Clicking the scar reference on the About page plays a brief audio clip. Include a visible mute toggle.
2. **`/woodsboro` route** — Just says "No."
3. **404 page** — VHS NO SIGNAL screen
4. **Konami Code** — Entering ↑↑↓↓←→←→BA on any page triggers a brief "jumpscare" — Kenny's placeholder headshot fills the screen for 0.5 seconds with an air horn sound, then returns to normal. Include audio toggle respect.
5. **Footer credit** — In the site footer, small text: `"Site designed by someone who is definitely not Ghostface™"`
6. **Hover on Woodsboro portfolio item** — Cursor changes to `not-allowed`, a brief static flash

---

## Responsive Behavior

| Element | Desktop (1024px+) | Tablet (768-1023px) | Mobile (<768px) |
|---|---|---|---|
| CRT Frame | Full monitor border with vignette | Thinner border, no vignette | Corner brackets only |
| REC Indicator | Top-right, full size | Top-right, smaller | Top-right, icon only (● REC) |
| Timestamp | Bottom-left | Bottom-left, smaller | Hidden |
| News Ticker | Full width, scrolling | Full width, scrolling | Full width, smaller text |
| Nav | Horizontal links | Horizontal links | Hamburger menu |
| Portfolio Grid | 3 columns | 2 columns | 1 column |
| Services Grid | 3 columns | 2 columns | 1 column |
| Testimonials | Alternating L/R | Stacked | Stacked |

---

## Performance Requirements

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- First Contentful Paint: < 1.5s
- No layout shift from VHS animations
- All VHS/CRT effects use CSS transforms + opacity (GPU-accelerated)
- Lazy load animations below the fold
- `prefers-reduced-motion` media query: disable all VHS animations, show clean version

---

## Deployment

Deploy to Vercel. The site is a standard Next.js static site with no server-side requirements. All content is hardcoded.
