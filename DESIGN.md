# DESIGN.md — Kenny Jones Website Design System

## Design Philosophy

Late-90s public access television meets modern freelancer website. The aesthetic should feel like a CRT monitor displaying a contemporary web page — the content is modern and professional, but the frame it lives in is analog and warm. Think: the UI of a prosumer camcorder viewfinder wrapped around a clean portfolio site.

**The VHS/CRT effects are seasoning, not the meal.** The site must be readable, navigable, and professional first. The effects create atmosphere but never interfere with usability.

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Void Black | `#0a0a0a` | Primary background |
| Signal White | `#e8e6e3` | Primary text |
| Phosphor Green | `#33ff33` | Accents, REC indicator, hover states, links |
| VHS Red | `#ff3333` | REC dot, error states, alerts |
| Tape Gray | `#2a2a2a` | Card backgrounds, secondary surfaces |
| Static Gray | `#4a4a4a` | Borders, dividers, muted text |
| Warm Cream | `#d4c5a9` | Testimonial backgrounds, soft accent |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| Link | `#33ff33` | All hyperlinks |
| Link Hover | `#66ff66` | Hover state for links |
| Muted | `#6b6b6b` | Secondary text, timestamps |
| Success | `#33ff33` | Form success states |
| Error | `#ff3333` | Form error states |

### Category Tag Colors
| Category | Background | Text |
|----------|-----------|------|
| Corporate | `#1a365d` | `#e8e6e3` |
| Documentary | `#2d3748` | `#e8e6e3` |
| Live Event | `#553c9a` | `#e8e6e3` |
| News | `#9b2c2c` | `#e8e6e3` |
| Wedding | `#744210` | `#e8e6e3` |

---

## Typography

### Font Stack
- **Headings & UI:** `IBM Plex Mono`, monospace — Load weights 400, 500, 700
- **Body:** `Inter`, sans-serif — Load weights 400, 500, 600

### Type Scale
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 | IBM Plex Mono | 3rem (48px) | 700 | 1.1 | -0.02em |
| H2 | IBM Plex Mono | 2rem (32px) | 700 | 1.2 | -0.01em |
| H3 | IBM Plex Mono | 1.5rem (24px) | 500 | 1.3 | 0 |
| Body | Inter | 1.125rem (18px) | 400 | 1.7 | 0 |
| Small / Caption | IBM Plex Mono | 0.75rem (12px) | 400 | 1.4 | 0.05em |
| Nav Links | IBM Plex Mono | 0.875rem (14px) | 500 | 1 | 0.1em |
| Ticker | IBM Plex Mono | 0.8rem (13px) | 400 | 1 | 0.08em |
| REC Indicator | IBM Plex Mono | 0.75rem (12px) | 700 | 1 | 0.05em |
| Timestamp | IBM Plex Mono | 0.7rem (11px) | 400 | 1 | 0.05em |

### Mobile Adjustments
- H1: 2rem
- H2: 1.5rem
- Body: 1rem

---

## Spacing System

Use Tailwind's default spacing scale. Key spacings:

| Context | Value |
|---------|-------|
| Page padding (desktop) | `px-8` to `px-16` |
| Page padding (mobile) | `px-4` to `px-6` |
| Section gap | `py-16` to `py-24` |
| Card padding | `p-6` to `p-8` |
| Between paragraphs | `mb-6` |
| Between sections | `mt-16` to `mt-24` |
| Max content width | `max-w-4xl` (prose), `max-w-6xl` (grids) |

---

## CRT Frame Effect

The CRT frame is a persistent border around the viewport that simulates a monitor or camcorder viewfinder.

### Desktop Implementation
```css
/* Outer container */
.crt-frame {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 50;
  border: 3px solid rgba(51, 255, 51, 0.15);
  border-radius: 8px;
  box-shadow:
    inset 0 0 60px rgba(0, 0, 0, 0.5),
    inset 0 0 20px rgba(0, 0, 0, 0.3);
}

/* Corner brackets for viewfinder feel */
.crt-frame::before,
.crt-frame::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border-color: rgba(51, 255, 51, 0.3);
  border-style: solid;
}
.crt-frame::before {
  top: 12px;
  left: 12px;
  border-width: 2px 0 0 2px;
}
.crt-frame::after {
  bottom: 12px;
  right: 12px;
  border-width: 0 2px 2px 0;
}
```

### Mobile Implementation
Reduce to corner brackets only (no full border, no vignette shadow). Just the four L-shaped corners to suggest a viewfinder.

---

## VHS Scanline Overlay

A subtle horizontal line pattern over the entire page.

```css
.scanlines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 40;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
}
```

**Important:** This must be very subtle — opacity effectively around 3%. The user should barely notice it consciously, but it contributes to the overall warmth of the screen.

---

## VHS Tracking Line Animation

A horizontal band that slowly drifts up the screen, simulating VHS tracking issues.

```css
@keyframes vhs-tracking {
  0% { transform: translateY(100vh); }
  100% { transform: translateY(-100%); }
}

.vhs-tracking-line {
  position: fixed;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.08) 20%,
    rgba(255, 255, 255, 0.08) 80%,
    transparent 100%
  );
  animation: vhs-tracking 8s linear infinite;
  pointer-events: none;
  z-index: 41;
}
```

**Reduced motion:** Disable entirely with `prefers-reduced-motion: reduce`.

---

## Text Glitch Effect

Used on the hero headline on initial page load. A brief distortion that settles into stable text.

```css
@keyframes glitch {
  0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
  20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
  40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 3px); }
  60% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
  80% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, -2px); }
  100% { clip-path: inset(0 0 0 0); transform: translate(0); }
}

.glitch-text {
  animation: glitch 0.5s ease-out forwards;
}
```

This animation runs **once** on page load (hero text only), then the text remains stable. Do not loop.

---

## REC Indicator

```css
.rec-indicator {
  position: fixed;
  top: 20px;
  right: 24px;
  z-index: 60;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  color: #ff3333;
  letter-spacing: 0.05em;
}

.rec-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff3333;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

---

## News Ticker

A scrolling marquee at the bottom of the viewport.

```css
.news-ticker {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 55;
  background: rgba(10, 10, 10, 0.9);
  border-top: 1px solid rgba(51, 255, 51, 0.2);
  padding: 8px 0;
  overflow: hidden;
}

.ticker-content {
  display: flex;
  white-space: nowrap;
  animation: ticker-scroll 60s linear infinite;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

Duplicate the ticker content to create a seamless loop. Use `IBM Plex Mono`, uppercase, with `·` separators between messages.

---

## Camcorder Timestamp

Bottom-left corner. Updates every second via JavaScript.

Format: `FEB 14 2026  2:34:17 PM`

Style: `IBM Plex Mono`, 11px, `#33ff33` at 60% opacity. Same fixed positioning as REC indicator but bottom-left.

---

## Card Styles

### Portfolio Card
```
Background: var(--tape-gray) or category color
Border: 1px solid rgba(51, 255, 51, 0.1)
Border-radius: 4px (minimal — VHS era didn't do rounded corners)
Padding: 0 (image area) + 1.5rem (text area)
Hover: Slight brightness increase + 1px translateY lift
Transition: 200ms ease
```

### Testimonial Card
```
Background: rgba(42, 42, 42, 0.5)
Border-left: 3px solid #33ff33
Padding: 2rem
Font-style: italic for quote text
Attribution: IBM Plex Mono, small, non-italic
```

### Service Card
```
Background: var(--tape-gray)
Border: 1px solid rgba(51, 255, 51, 0.1)
Border-radius: 4px
Padding: 2rem
Hover: border-color transitions to rgba(51, 255, 51, 0.3)
```

---

## Button Styles

### Primary Button
```
Background: #33ff33
Color: #0a0a0a
Font: IBM Plex Mono, 14px, weight 600, uppercase, letter-spacing 0.1em
Padding: 12px 24px
Border: none
Border-radius: 2px
Hover: background #66ff66
Active: background #22cc22
Transition: 150ms ease
```

### Secondary Button
```
Background: transparent
Color: #33ff33
Border: 1px solid #33ff33
Same font/sizing as primary
Hover: background rgba(51, 255, 51, 0.1)
```

---

## VHS Static Noise (CSS-only)

For the corrupted portfolio item and 404 page. No image needed.

```css
.vhs-static {
  background-image:
    repeating-radial-gradient(
      circle at 17% 32%,
      rgba(255,255,255,0.05) 0px,
      transparent 1px
    ),
    repeating-radial-gradient(
      circle at 62% 78%,
      rgba(255,255,255,0.04) 0px,
      transparent 1px
    );
  background-size: 3px 3px, 4px 4px;
  animation: static-flicker 0.1s steps(5) infinite;
}

@keyframes static-flicker {
  0% { background-position: 0 0, 0 0; }
  25% { background-position: 1px 1px, -1px 2px; }
  50% { background-position: -1px -1px, 2px -1px; }
  75% { background-position: 2px 0, 0 -2px; }
  100% { background-position: 0 2px, -2px 0; }
}
```

---

## Accessibility

- All VHS overlay effects use `pointer-events: none`
- All decorative animations respect `prefers-reduced-motion: reduce`
- Minimum text contrast ratio: 4.5:1 (WCAG AA)
- Signal White (`#e8e6e3`) on Void Black (`#0a0a0a`): contrast ratio ~17:1 ✓
- Phosphor Green (`#33ff33`) on Void Black (`#0a0a0a`): contrast ratio ~8.5:1 ✓
- All interactive elements have visible focus states (green outline)
- Audio easter eggs default to muted or require user interaction to trigger
- Reduced motion mode: disable scanlines, tracking line, glitch text, static flicker

---

## Z-Index Stack

| Layer | Z-Index | Element |
|-------|---------|---------|
| Content | 0–10 | Page content, cards |
| Scanlines | 40 | Scanline overlay |
| Tracking Line | 41 | VHS tracking animation |
| CRT Frame | 50 | Monitor border |
| News Ticker | 55 | Bottom ticker |
| REC + Timestamp | 60 | Fixed UI indicators |
| Mobile Nav | 70 | Hamburger menu overlay |
| Easter Eggs | 80 | Jumpscare overlay (Konami) |
