# Oil City Ready Mix Ltd — Business Knowledge Base

> Do NOT build the website yet. More design system and info to come.

---

## Business Overview

- **Business Name:** Oil City Ready Mix Ltd. (OCRM)
- **Industry:** Construction / Building Materials — Ready Mix Concrete
- **Region:** Edmonton, Alberta, Canada
- **Address:** 507, 509 15 Avenue, Nisku, AB T9E 7M6
- **Phone:** 780-318-4949
- **Email:** accounts@oilcityreadymix.net
- **Working Hours:** Monday – Saturday, 8:00 AM – 5:00 PM

---

## Tagline / Brand Voice

- **Tagline:** "Your Trusted Concrete Partner"
- **Secondary Tagline:** "Building Strength. Delivering Excellence."
- **Mission Statement:** "Our mission is to deliver high-quality concrete solutions with exceptional service that consistently exceeds customer expectations."
- **Tone:** Professional, reliable, customer-focused, results-driven

---

## About the Company

Oil City Ready Mix Ltd. is an emerging and trusted name in the Edmonton concrete industry. Serving commercial, civil, and residential construction projects, the company delivers high-quality ready mix solutions tailored to each client's needs.

Key values:
- Reliability & consistency
- Safety and strict adherence to industry standards
- Competitive pricing
- Customer-focused approach — working closely with clients on project requirements and timelines
- "Letting results speak for themselves"

---

## Corporate Structure

**Parent Company:** Oil City Holding Ltd. (OCHL)

All entities are 100% wholly owned subsidiaries of OCHL. OCHL provides strategic oversight, governance, financial stability, and operational direction.

### Subsidiaries:
1. **Oil City Ready Mix Ltd. (OCRM)** — Ready mix concrete supply
2. **Oil City Property Management Ltd. (OCPM)** — Property management
3. **Oil City Trucking Ltd. (OCT)** — Trucking

---

## Services & Products

### Types of Concrete Offered
- Civil and municipal concrete
- Commercial concrete
- Residential concrete

### Concrete Strengths
- Range: **20 MPa to 45 MPa**
- Each mix designed to meet industry standards and specific project requirements

### Order Sizes
- Minimum: **1 cubic meter**
- Maximum: **1,000 cubic meters**
- Fleet includes trailers and batch mixers of all sizes for reliable delivery

### Target Customers
- Builders and contractors (primary)
- Commercial contractors
- Civil / municipal project clients
- Residential construction clients

---

## Website Pages & Features (Planned)

### Pages
- Home
- About Us
- Services & Products
- Corporate (structure info)
- Contact Us
- Request a Quote

### Key Features
- **Concrete Volume Calculator**
  - *Flat Area Calculator:* Width (ft) + Thickness (in) → Required Quantity in m³
  - *Pile / Cylinder Calculator:* Radius (in) + Height (ft) + Number of Piles → Required Quantity in m³
- **Quote Request Form**
  - Fields: Company Name, Ordering Person Name, Email, Contact Number, Address (optional), Send button
- **Contact Section**
  - Address, Email, Phone
  - Google Maps / Directions embed
- Working hours display

---

---

## Tech Stack & Architecture

- **Stack:** Vanilla HTML, CSS, JavaScript only — no frameworks
- **Global partials** live in `global/` and are injected into every page via `global/loader.js`
- **Each page** has its own folder with `[page].html` + `[page].css`
- See [folder-structure.md](folder-structure.md) for the full structure

### Global Files
| File | Purpose |
|---|---|
| `global/head.html` | Global CSS (in `<style>`) + head tracking scripts |
| `global/body.html` | Body-level tracking scripts |
| `global/header.html` | Site header — self-contained HTML + CSS + JS |
| `global/footer.html` | Site footer — self-contained HTML + CSS + JS |
| `global/loader.js` | Fetches and injects all partials into every page |

### Pages (current build order)
1. **Home** — `home/home.html` + `home/home.css` ← building now

---

## Notes
- Design system, colors, fonts, and visual style to be provided by the client before website build begins.
- Google Maps directions to be added to Contact page.
- Do NOT build website content yet — waiting on design system.

---

## Design Philosophy

Premium design = **controlled restraint with one dramatic moment per page**. Quiet sections make the loud one land harder.

**Core principle: open space IS the design.** Content floats in generous whitespace. Cards are used sparingly. The page itself is not a card.

**Before building any section, ask:**
- Does this need a container/card, or can it live in open space?
- Where is the ONE dramatic moment on this page?
- Would removing 50% of the decoration make it feel more premium? If YES — remove it.

---

## Typography System

Always use **2 fonts**: one dramatic display font + one refined body font. Loaded via Google Fonts in `headtrackingcode.html`.

### Font Loading (in `headtrackingcode.html`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload"
  href="https://fonts.googleapis.com/css2?family=DISPLAY_FONT&family=BODY_FONT&display=swap"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'">
<noscript>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DISPLAY_FONT&family=BODY_FONT&display=swap">
</noscript>
```

### Typography Rules
- Headlines: `clamp(3rem, 8vw, 7rem)` — fluid, never fixed pixel
- Line height on headings: `1.05` to `1.15`
- Letter spacing on display: `-0.02em` to `-0.04em`
- Body text: `1rem` minimum, `line-height: 1.7`
- Max line length: `max-width: 72ch`
- Avoid ALL CAPS for long text — use for labels/overlines only

### Font Pairings Reference (choose based on personality)

| Display | Body | Vibe |
|---------|------|------|
| `Bebas Neue` | `Inter` | Bold tech, SaaS |
| `Barlow` | `IBM Plex Sans` | Enterprise, B2B, Corporate |
| `Poppins` | `Mulish` | Modern corporate |
| `Cormorant Garamond` | `DM Sans` | Premium, editorial |
| `Playfair Display` | `Outfit` | Classic luxury |

---

## Color System — variable.css Tokens

```css
:root {
  /* Backgrounds */
  --color-bg:            #0a0a0a;   /* update per brand */
  --color-bg-secondary:  #111111;
  --color-bg-tertiary:   #1a1a1a;
  --color-bg-elevated:   #222222;

  /* Text */
  --color-text:          #f0f0f0;
  --color-text-muted:    #888888;
  --color-text-subtle:   #555555;

  /* Brand — fill in once confirmed */
  --color-primary:       #your-brand;
  --color-primary-hover: #your-brand-darker;
  --color-accent:        #your-accent;

  /* Borders */
  --color-border:        rgba(255,255,255,0.08);
  --color-border-hover:  rgba(255,255,255,0.16);

  /* Semantic */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error:   #ef4444;

  /* Fluid font sizes */
  --text-hero: clamp(3rem, 8vw, 7rem);
  --text-h1:   clamp(2.5rem, 5vw, 4.5rem);
  --text-h2:   clamp(1.75rem, 3.5vw, 2.75rem);

  /* Spacing */
  --section-py:    clamp(4rem, 8vw, 8rem);
  --container-max: 1280px;
  --container-px:  clamp(1.25rem, 4vw, 2rem);

  /* Radius */
  --radius-sm: 8px;  --radius-md: 12px;
  --radius-lg: 16px; --radius-full: 9999px;

  /* Transitions */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 150ms; --duration-base: 250ms; --duration-slow: 400ms;

  /* Z-index */
  --z-dropdown: 100; --z-sticky: 200; --z-overlay: 300; --z-modal: 400;
}

[data-theme="light"] {
  --color-bg:           #ffffff;
  --color-bg-secondary: #f8f8f8;
  --color-text:         #0a0a0a;
  --color-text-muted:   #666666;
  --color-border:       rgba(0,0,0,0.08);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## base.css — What It Must Include

- CSS reset
- Body/element base styles using CSS variables only
- Utility classes: `.container`, `.section`, `.section--alt`
- Animation primitives: `.reveal`, `.delay-1` through `.delay-5`, `.text-shimmer`, `.grain`, `.page-grid`
- Button styles: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost`, `.btn-lg`, `.btn-sm`
- Form styles: `.form-input`, `.form-label`, `.form-group`, `.form-textarea`, `.form-hint`, `.form-error`
- Component: `.card`, `.badge`, `.section-label`, `.breadcrumb`
- Counter: `<span class="counter" data-target="250" data-suffix="+">` — triggered by JS IntersectionObserver
- FAQ Accordion: `.faq-item > .faq-trigger + .faq-body` — triggered by JS

---

## Scroll & Animation Patterns

Max **3 scroll patterns per page**. Choose from:

| Pattern | Section | Implementation |
|---------|---------|----------------|
| Word March | Hero | `.reveal` on H1 words |
| Stagger Cascade | Services/Cards | `.reveal .delay-1` through `.delay-5` |
| Counter Sweep | Stats | `.counter[data-target]` JS triggered |
| Marquee Drift | Logo strip / Gallery | CSS `@keyframes marquee-scroll` |
| Ghost List / FAQ | FAQ | JS accordion |
| CTA Appear | CTA | `.reveal` |

### Marquee CSS
```css
.marquee-track {
  display: flex; gap: 4rem; width: max-content;
  animation: marquee-scroll 30s linear infinite;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

## Decoration Hierarchy — Never Mix More Than One Per Section

| Level | Name | Constraint |
|-------|------|------------|
| 1 | Nothing — open space | Default. Most powerful. |
| 2 | Grid lines | `.page-grid` on body. Global only. |
| 3 | Grain | `.grain` on body. Global only. |
| 4 | One shimmer word | `.text-shimmer` — hero only, one word max |
| 5 | Concentric SVG rings | Hero + CTA only. Desktop only. |
| 6 | Ambient glow blobs | `opacity: 0.08` — dark sections only, max 2/page |
| 7 | Card microinteractions | Hover lift, glassmorphism, gradient border |
| 8 | Scroll-triggered animations | `.reveal` patterns |

```css
/* Mobile gets none of the decoration */
@media (max-width: 767px) {
  .hero-rings    { display: none; }
  .page-grid::after { display: none; }
  .ambient-glow  { display: none; }
}
```

---

## Restraint Rules

1. **One dramatic moment per page** — Full-Bleed Contrast section OR Marquee strip OR full-viewport image. Everything else breathes quietly.
2. **Open space is the design** — Mission copy → Text Island (not card). Stats → floating numbers (not boxes). Process → numbered list (not card grid).
3. **Max 3 scroll patterns per page.**
4. **Cards are used sparingly** — only for services grid and blog grid.

---

## Spatial Patterns

### Text Island (mission/about — no card)
```html
<section class="section text-island">
  <div class="container" style="max-width: 800px">
    <span class="section-label reveal">Who We Are</span>
    <p class="text-island-text reveal delay-1">
      Your most powerful brand statement. Two sentences maximum.
    </p>
  </div>
</section>
```

### Full-Bleed Contrast Section (ONE per page — the dramatic moment)
```html
<section class="contrast-section section">
  <div class="contrast-bg-pattern" aria-hidden="true"></div>
  <div class="container">...</div>
</section>
```
```css
.contrast-section { position: relative; background: var(--color-primary); overflow: hidden; }
.contrast-bg-pattern {
  position: absolute; inset: 0; opacity: 0.06;
  background-image: repeating-linear-gradient(
    -45deg, transparent, transparent 60px,
    rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px
  );
}
```

### Concentric SVG Rings (Hero + CTA — desktop only)
```html
<div class="hero-rings" aria-hidden="true">
  <svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
    <circle cx="450" cy="450" r="200" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="450" cy="450" r="300" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="450" cy="450" r="400" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="450" cy="450" r="430" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 8"/>
  </svg>
</div>
```

---

## Section → Pattern Reference

| Section | Scroll Pattern | Spatial Pattern |
|---------|---------------|-----------------|
| Hero | `.reveal` on words | Open space + optional rings |
| Mission/About | `.reveal` | Text Island — no card |
| Stats | `.reveal` + Counter | Floating numbers — no boxes |
| Services | Stagger `.delay-N` | `.card` grid |
| Dark feature | Stagger `.delay-N` | Full-Bleed Contrast (once/page) |
| Calculator | `.reveal` | Open space or card |
| Quote Form | `.reveal` | Open space or card |
| FAQ | JS Accordion | Ghost list |
| Contact / Map | `.reveal` | Open space |

---

## Content Writing Rules

### Hero Headline Formula
- Bold, specific benefit — NOT generic
- Answer: what do you do + for whom + result
- ✅ "Edmonton's Trusted Ready Mix Supplier — 20 to 45 MPa, Delivered on Time"
- ❌ "Welcome to Our Company" / "Premium Concrete Services"

### Writing Style
- Reading level: Grade 7–8 (simple words, complex ideas)
- Sentences: 8–20 words. Vary length. Never 3 long sentences in a row.
- Paragraphs: 2–4 sentences max. White space is your friend.
- Active voice: "We deliver on time" NOT "Delivery is made on time by us"
- Second person: write to "you" — never "the client" or "users"
- Specifics beat generics: "20 to 45 MPa" beats "various strengths"
- Use contractions: "We're" not "We are"
- Bold key phrases — 2–3 per section max
- NEVER: "very," "really," "quite," "basically," "essentially," "In conclusion," "It is important to note"
- NEVER: passive voice when active is possible
- NEVER: corporate jargon — "synergy," "leverage," "cutting-edge," "state-of-the-art"

### E-E-A-T Signals (Experience, Expertise, Authority, Trust)
- Use specific numbers: order sizes, MPa ranges, years, fleet size
- Mention certifications, industry standards by name when applicable
- Address negatives: "What could go wrong and how we prevent it"
- No unsubstantiated superlatives: "best," "most trusted" needs proof

### Content Length Guide
| Page/Content | Target |
|---|---|
| Homepage hero copy | 50–80 words |
| Service page | 800–1,500 words |
| About page | 400–800 words |
| FAQ answer | 40–60 words per answer |
| Meta description | 150–160 characters exactly |
| Meta title | 50–60 characters exactly |

---

## SEO System

### Every Page `<head>` Must Include
```html
<title>[Keyword — 50-60 chars] | Oil City Ready Mix Ltd.</title>
<meta name="description" content="[150-160 chars. Keyword-rich. Ends with action.]">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="https://oilcityreadymix.com/[page-slug]">

<!-- Open Graph -->
<meta property="og:type"        content="website">
<meta property="og:title"       content="[Title] | Oil City Ready Mix Ltd.">
<meta property="og:description" content="[OG description]">
<meta property="og:url"         content="https://oilcityreadymix.com/[page-slug]">
<meta property="og:image"       content="https://oilcityreadymix.com/assets/og/og-[page].jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card"  content="summary_large_image">
<meta name="twitter:title" content="[Title] | Oil City Ready Mix Ltd.">
<meta name="twitter:image" content="https://oilcityreadymix.com/assets/og/og-[page].jpg">
```

### JSON-LD — Homepage
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Oil City Ready Mix Ltd.",
  "url": "https://oilcityreadymix.com",
  "telephone": "+17803184949",
  "email": "accounts@oilcityreadymix.net",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "507, 509 15 Avenue",
    "addressLocality": "Nisku",
    "addressRegion": "AB",
    "postalCode": "T9E 7M6",
    "addressCountry": "CA"
  },
  "openingHours": "Mo-Sa 08:00-17:00",
  "description": "High-quality ready mix concrete supplier serving Edmonton, Alberta. Civil, commercial, and residential projects. 20–45 MPa. 1–1,000 m³ orders."
}
</script>
```

### Heading Hierarchy Rules
- **H1**: Exactly ONE per page. Primary keyword ideally in first 3 words.
- **H2**: Main section headings. Each naturally contains a secondary keyword.
- **H3**: Sub-sections within H2 only.
- Never skip levels.

### URL Rules
- Lowercase, hyphens only, no underscores
- Keyword at the start, max 4–5 words, no stop words
- No dates in page URLs

### OG Images
- Size: exactly **1200 × 630px**, JPEG, max 5MB
- Keep content within 100px of edges
- Always use full absolute URL — never relative
- Files go in `/assets/og/`: `og-home.jpg`, `og-about.jpg`, `og-services.jpg`, etc.

### SEO — Never Do
- Duplicate meta titles or descriptions across pages
- Meta description over 160 characters
- Skip `canonical` link
- Skip JSON-LD on any page
- Skip breadcrumbs on inner pages
- Target same keyword on two different pages (cannibalism)
- Use relative path for `og:image` (WhatsApp won't load it)
- OG image over 5MB (platforms skip it silently)
