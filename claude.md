# CLAUDE.md — Veraflow Marketing Site
**Garden Prayer Publishing LLC · March 2026**

---

## READ THIS FIRST

This is the marketing site for **Veraflow** — a supply chain data intelligence SaaS platform. This repo is a **static Next.js 15 marketing site** deployed to Vercel. There is no backend, no authentication, no database. The only CTA is a demo request form (mailto or Calendly).

The HTML design reference for this site is in `docs/veraflow-site-v2.html`. When building or updating components, use that file as the visual and copy source of truth. Recreate it faithfully in Next.js + Tailwind — do not deviate from the layout, copy, or color scheme without instruction.

---

## Product Story — What Veraflow Is

**Do not describe Veraflow as a scan/hardware platform.** The product story has evolved. Veraflow is a **SaaS supply chain data intelligence platform** organized around one principle: every field is classified as DECISIVE, INFORMED, or DERIVED — and the difference is always visible.

The core insight: most supply chain software mixes verified events with supplier estimates and manual guesses into the same data layer. When a delivery slips, nobody knows which number caused it. Veraflow separates these cleanly.

**Three named products:**

**Veraflow** — the core platform. Trusted data model across the full supply chain pipeline (S-00 through S-09). Multi-tenant SaaS. Customer-driven views, not data-centric tables.

**Veraflow Capture** — companion mobile PWA for creating DECISIVE scan events at physical handoffs. Any smartphone, any browser, no app install. Available at Enterprise tier. **This is a capability, not a Phase 1 deliverable** — reference it on the site but do not overstate availability.

**Veraflow SA** — embedded AI assistant (Supply Assistant). Queries verified decisive data in plain English. Three Phase 1 capabilities: natural language PO/yield queries, delivery risk narrative, supplier scorecard insights.

---

## Brand

**Primary brand color:** VT Chicago Maroon `#630031`
**Accent color:** VT Burnt Orange `#CF4420`
**Accent hover:** `#E5751F` (lighter orange for hover states)
**Background:** Near-black with warm maroon undertone `#0d0a0b`
**Surface layers:** `#130f10`, `#1a1415`, `#211a1b`
**Borders:** `#2e2123` (default), `#3d2b2e` (emphasis)
**Text:** `#e0d0d2` (body), `#f5eeef` (bright), `#7a5f63` (dim)

**Trust taxonomy colors — functional, not brand:**
These are data classification colors used across the platform UI. They must remain distinct from the brand palette.
- DECISIVE: `#22d47a` (green)
- INFORMED: `#f0a030` (amber) — note: different from VT orange
- DERIVED: `#5b9cf6` (blue)
- OBSOL: `#b86cf5` (purple)
- TRUE YIELD: uses VT Burnt Orange `#CF4420` as it is the most customer-facing quality metric

**RAG status colors:**
- Green (on-track): `#22d47a`
- Amber (at risk): `#f0a030`
- Red (blocked): `#e84040`

**Typography:**
- Headlines/labels: `Barlow Condensed` — bold, condensed, aerospace-appropriate
- Body: `Barlow` — clean, readable
- Data/code elements: `IBM Plex Mono` — scan events, part numbers, field names, terminal output

**Aesthetic:** Dark command-center. Industrial precision. Not a consumer SaaS startup. No gradients on data. No purple backgrounds. No rounded-everything softness. Think precision instrument display.

**Logo:** Text mark — "V" letterform in VT Maroon square with VT Orange text/border. CSS-rendered, no external SVG dependency.

---

## Site Structure

Single-page scrolling site with anchor-linked navigation. Sections in order:

| # | Section ID | Headline | Notes |
|---|---|---|---|
| 1 | `#hero` | "Supply chain data you can trust." | Two-column: copy left, dashboard preview right |
| 2 | `#trust` | "Five types of data. Only one you can act on." | Five trust classification cards |
| 3 | `#pipeline` | "From supplier estimate to customer delivery." | S-00 through S-09 stage grid |
| 4 | `#capture` | "DECISIVE data has to start somewhere." | Veraflow Capture PWA — phone mockup left, copy right |
| 5 | `#trueyield` | "The number your QC report doesn't show you." | Yield chain waterfall + attribution breakdown |
| 6 | `#scorecard` | "You told us 30 days. It's been 47." | Supplier scorecard card + copy |
| 7 | `#sa` | "Ask your supply chain anything." | SA capabilities + live chat mockup |
| 8 | `#personas` | "Built for the manufacturer. Transparent to the customer." | Two-column: Manufacturer vs Customer |
| 9 | `#pricing` | "Start with one product line." | Three-tier pricing cards |
| 10 | `#demo` | "See Veraflow on your data in 30 minutes." | Copy left, demo request form right |
| — | Footer | — | Logo, links, compliance badges |

All section content, copy, and component structure is defined in `docs/veraflow-site-v2.html`. Use it as the exact reference.

---

## Pricing Tiers

| Tier | Price | Key Limits |
|---|---|---|
| Foundation | $499/mo | Up to 5 active customers, no scorecard/true yield/SA |
| Professional | $1,499/mo | Unlimited customers, full feature set including SA |
| Enterprise | Custom | Multi-product line, API, SSO, ERP integration, Veraflow Capture |

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 15, App Router | Static export (`output: 'export'`) — no server required |
| Styling | Tailwind CSS | Design tokens defined in `tailwind.config.ts` — see §Colors above |
| Fonts | Google Fonts | Barlow Condensed, Barlow, IBM Plex Mono |
| Animations | CSS transitions + Tailwind | No heavy animation libraries — CSS keyframes only |
| Form | mailto or Calendly embed | No backend — demo form submits to mailto:demo@veraflow.io |
| Deployment | Vercel | Static export, auto-deploy on main |

---

## Repository Structure

```
veraflow-marketing/
├── CLAUDE.md                   ← This file — read first
├── docs/
│   └── veraflow-site-v2.html  ← Design + copy reference — source of truth
├── app/
│   ├── layout.tsx              ← Font imports, metadata, global styles
│   ├── page.tsx                ← Single page — all sections composed here
│   └── globals.css             ← CSS custom properties (trust colors, brand tokens)
├── components/
│   ├── nav/
│   ├── sections/               ← One component per section (Hero, Trust, Pipeline, etc.)
│   ├── trust/                  ← TrustBadge, TrustPill, TrustCard components
│   └── ui/                     ← Button, Card, Badge primitives
├── public/
│   └── favicon.ico
├── tailwind.config.ts
└── next.config.ts              ← Static export config
```

---

## Component Guidelines

**TrustBadge component** is the single source of trust display logic. Every place a trust level is shown (DECISIVE, INFORMED, DERIVED, etc.) uses this component. Never inline trust colors directly in section components.

**Section components** map 1:1 to site sections. Each section component is self-contained — its copy, layout, and styling live inside it. Do not create shared copy files.

**No images or external media.** All dashboard mockups, phone screens, chat interfaces, and data visualizations are CSS/HTML. No `<img>` tags for UI elements. This keeps the site fast, maintainable, and free of broken image risk.

**Animations:** scroll-triggered reveal only — `opacity 0→1`, `translateY 20px→0`, staggered delays using Intersection Observer. One animation system, applied consistently. No per-section custom animation logic.

---

## Tailwind Config — Key Tokens

```typescript
// tailwind.config.ts
colors: {
  vt: {
    maroon: '#630031',
    orange: '#CF4420',
    'orange-light': '#E5751F',
  },
  surface: {
    bg:      '#0d0a0b',
    DEFAULT: '#130f10',
    2:       '#1a1415',
    3:       '#211a1b',
  },
  border: {
    DEFAULT: '#2e2123',
    emphasis: '#3d2b2e',
  },
  trust: {
    decisive: '#22d47a',
    informed: '#f0a030',
    derived:  '#5b9cf6',
    obsol:    '#b86cf5',
  },
  rag: {
    green:  '#22d47a',
    amber:  '#f0a030',
    red:    '#e84040',
  }
}
```

---

## Copy & Tone Rules

Write like a defense program manager talks — precise, direct, no fluff.

**Never use:**
- "Seamless," "delightful," "game-changing," "revolutionary"
- "AI-powered" without explaining what the AI does specifically
- Vague claims without numbers or grounding
- Consumer SaaS language of any kind

**Always use:**
- Specific field names, stage labels (S-00 through S-09), trust classifications
- Physical manufacturing vocabulary: work order, BOM, CoA, CoC, ASN, NCR, IUID, lot number
- Compliance standard names: AS9100D, MIL-STD-130, CMMC 2.0, DCSA, ITAR
- Direct second-person address: "you," "your," "your suppliers"

**Sample part numbers for UI mockups** (actual Moog solenoid/sensor model numbers):
- `SR15130-1` — Linear Solenoid, Push Type, 7 lbf
- `C62840-004` — Linear Solenoid, Push Type, 15 lbf
- `SR12920` — Latching/Holding Solenoid
- `SR15760` — Safe & Arm Device
- `4440` — Rotary Solenoid, ±60°
- `LG-ABD-M60` — LifeGuard Ultrasonic Air Bubble Detector

---

## Industries Served

The platform targets regulated discrete manufacturing:
- **Aerospace** — commercial and military aircraft, flight control, actuation (AS9100D, NADCAP, FAA PMA)
- **Space** — satellite buses, launch vehicles, propulsion (NASA-STD-8739, ITAR, AS9100D)
- **Defense** — ground combat, naval, armament (MIL-STD-130, CMMC 2.0, DCSA)
- **Automotive** — motorsport, EV systems, precision motion (IATF 16949, ISO 9001, PPAP)

---

## What NOT to Change Without Instruction

- Brand colors — VT Maroon and Burnt Orange are deliberate and exact
- Trust taxonomy colors — functional data language, not decoration
- Section order — tested and deliberate narrative flow
- Pricing numbers — directional placeholders, do not adjust
- The "DECISIVE data has to start somewhere" Capture section framing
- The five-classification trust model language

---

## Vercel Configuration

- **Framework Preset:** Next.js
- **Build Command:** `next build` (default)
- **Output Directory:** `out` (static export)
- **Root Directory:** `/` (repo root)
- **No environment variables required** for v1 — static site with mailto CTA

---

## Contact & Company

**Product owner:** James, Founder & CEO, Garden Prayer Publishing LLC
**Platform email:** demo@veraflow.io (update once domain confirmed)
**Pilot customer:** Moog Inc., Components Group, Blacksburg VA
**Infrastructure note:** Enterprise tier supports Azure Government / ITAR-compliant deployment
**Parent company:** Garden Prayer Publishing LLC (Texas-based holding company)
**Sister products:** Melissa for Educators, Game View, Vaquero Homes
