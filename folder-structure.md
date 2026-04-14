# Folder Structure — Oil City Ready Mix Ltd. Website

Plain HTML / CSS / JS — no frameworks.

```
Oil City Ready Mix Ltd/
│
├── CLAUDE.md                   ← Business knowledge base & dev notes
├── folder-structure.md         ← This file
│
├── global/                          ← Shared partials loaded on every page
│   ├── headtrackingcode.html        ← Head tracking scripts + links to variable.css & base.css
│   ├── bodytrackingcode.html        ← Body-level tracking scripts (GTM noscript, etc.)
│   ├── variable.css                 ← All CSS custom properties / design tokens
│   ├── base.css                     ← Reset + common styles shared across all pages
│   ├── header.html                  ← Full site header — HTML + CSS + JS in one file
│   ├── footer.html                  ← Full site footer — HTML + CSS + JS in one file
│   └── loader.js                    ← Fetches & injects all global partials into every page
│
├── home/                       ← Home page
│   ├── home.html               ← Page markup (includes loader.js + home.css)
│   └── home.css                ← Page-specific styles only
│
├── about/                      ← (Future) About Us page
│   ├── about.html
│   └── about.css
│
├── services/                   ← (Future) Services page
│   ├── services.html
│   └── services.css
│
├── corporate/                  ← (Future) Corporate page
│   ├── corporate.html
│   └── corporate.css
│
├── contact/                    ← (Future) Contact page
│   ├── contact.html
│   └── contact.css
│
└── assets/                     ← (Future) Static assets
    ├── images/
    │   └── logo.png
    ├── fonts/
    └── icons/
```

---

## How Global Partials Work

Every page includes `/global/loader.js` in its `<head>`.  
On `DOMContentLoaded`, the loader:

1. Fetches `global/headtrackingcode.html` → appends `<link>` (variable.css, base.css) + tracking scripts into `<head>`
2. Fetches `global/header.html` → injects into `<div id="global-header">`
3. Fetches `global/footer.html` → injects into `<div id="global-footer">`
4. Fetches `global/bodytrackingcode.html` → appends body tracking to `<body>`

Every page must have:
```html
<div id="global-header"></div>
<!-- page content -->
<div id="global-footer"></div>
```

---

## Rules

- CSS variables / tokens → `global/variable.css`
- Common base styles → `global/base.css`
- Both CSS files are linked via `global/headtrackingcode.html`
- Page-specific styles → `[page]/[page].css`
- Header/Footer logic → `global/header.html` / `global/footer.html` (self-contained)
- Head tracking codes → `global/headtrackingcode.html`
- Body tracking codes → `global/bodytrackingcode.html`
- No CSS frameworks, no JS frameworks — vanilla only
