# Veraflow Marketing Site

## Project Overview

Veraflow is a Manufacturing Execution System (MES) platform built by Garden Prayer Publishing LLC. It is a Physical Truth Layer for precision manufacturing — replacing manual data entry with hardware scan events at every physical handoff from Tier 2 supplier through customer delivery.

This repo is the public marketing site for Veraflow. It is a static site deployed to Vercel.

---

## Brand

**Primary brand color:** Virginia Tech Maroon `#861F41`
**Accent color:** Virginia Tech Burnt Orange `#E5751F`
**Background:** Near-black `#0A0A0B`
**Aesthetic:** Dark command-center. Industrial precision. Not a SaaS startup.

**Typography:**
- Headlines: `Barlow Condensed` (Google Fonts) — bold, condensed, aerospace-appropriate
- Body: `DM Sans` (Google Fonts) — clean, readable
- Data/code elements: `JetBrains Mono` (Google Fonts) — scan events, serial numbers, part numbers

**Logo:** SVG mark — stylized VF waveform in maroon square with orange accent line. See `public/logo.svg`.

---

## Products Featured

### Veraflow (platform)
The full manufacturing intelligence platform. Three core value propositions:
1. **Accuracy** — every data record originates from a hardware scan event, never manual entry
2. **Visibility** — real-time physical status of every work order from supplier to shipment
3. **Predictability** — AI-powered delivery forecasting and yield modeling from verified scan data

### Veratrace (named capability within Veraflow)
Component-level traceability engine. Tracks every serialized component by what it is, where it is, and when it moved. Produces audit-ready genealogy as a byproduct of normal Veraflow operations. Satisfies AS9100D, MIL-STD-130 IUID, DCSA, and CMMC traceability requirements automatically.

### Veraflow SA (Smart Analysis)
Embedded AI assistant. Allows program managers to query verified Veratrace scan data in plain English. Delivers program status, supplier intelligence, yield root cause analysis, and predictive scheduling. "SA" intentionally carries dual meaning: Smart Analysis for the tech buyer, Situational Awareness for the defense buyer.

---

## Industries

Site targets four industries Moog Inc. serves:
- **Aerospace** — commercial and military aircraft, flight control, actuation
- **Space** — satellite buses, launch vehicles, propulsion, space mechanisms
- **Defense** — ground combat vehicles, naval systems, armament equipment
- **Automotive** — motorsport, EV systems, precision motion control

---

## Site Sections (in order)

1. **Nav** — fixed, blur backdrop, logo + links + "Request Pilot" CTA
2. **Hero** — full-height, headline + sub + CTA buttons + animated PM Dashboard mockup
3. **Industries** — four-column grid, hover states, compliance tags per industry
4. **Platform** — ten scan gate timeline (left) + four feature cards (right)
5. **Veratrace** — four benefit blocks (left) + live component genealogy trace visual (right) + Veraflow SA predictive panel
6. **Veraflow SA** — five capability bullets (left) + live chat interface mockup (right)
7. **Outcomes** — six metric cards (grid), quantified results
8. **How It Works** — three-step process, 90-day pilot framing
9. **CTA** — request pilot, contact link
10. **Footer** — brand, nav links, copyright

---

## Scan Gates (ten total — core platform concept)

| Gate | Name | Scan Method |
|------|------|-------------|
| 0 | Moog Outbound → Tier 2 | DataMatrix + RFID at Moog shipping dock |
| 1 | Supplier Pack-out | Supplier mobile PWA (any smartphone) |
| 2 | Receiving Dock | Fixed 2D reader + RFID portal |
| 3 | Stores / Kitting | Barcode at kit station |
| 4 | Sub-Assembly | Operator scan at work cell |
| 5 | Final Assembly | Operator scan at work cell |
| 6 | Test / Calibration | Auto — test stand writes directly via API |
| 7 | QA / Inspection | Inspector barcode + digital sign-off |
| 8 | Serialize | Veratrace — print + verify DataMatrix (MIL-STD-130) |
| 9 | Pack / Ship | Scan at pack-out, ASN auto-sent to customer |

---

## Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Barlow Condensed, DM Sans, JetBrains Mono)
- **Deployment:** Vercel (static export or SSR)
- **No backend required** for v1 — static marketing site with mailto CTA

---

## Key Design Rules

- Dark backgrounds only — `#0A0A0B` base, `#111114` and `#18181C` for surface layers
- All borders: `1px solid #2A2A32` (or `#38383F` for hover/emphasis)
- No gradients except subtle radial glows for hero atmosphere (maroon and orange, low opacity)
- Dashboard and trace visuals are CSS/HTML mockups — not screenshots, not images
- Scroll-triggered reveal animations: `opacity 0 → 1`, `translateY 24px → 0`, staggered delays
- All data elements (part numbers, serial numbers, scan timestamps) use JetBrains Mono
- Status indicators: green `#4CAF7D` = ok, orange `#E5751F` = at risk, maroon `#D14F7A` = exception

---

## Real Part Numbers Used in Mockups

These are actual Moog Inc. solenoid and sensor product model numbers — use them consistently in any dashboard or trace UI examples:

- `SR15130-1` — Linear Solenoid, Push Type, 7 lbf
- `C62840-004` — Linear Solenoid, Push Type, 15 lbf
- `SR12920` — Latching/Holding Solenoid
- `SR15760` — Safe & Arm Device
- `4440` — Rotary Solenoid, ±60 degree
- `62030` — Linear Electromechanical Actuator (LEMA)
- `LG-ABD-M60` — LifeGuard Ultrasonic Air Bubble Detector (sensor)

---

## Company Context

**Product owner:** Garden Prayer Publishing LLC — James [Last Name], Founder & CEO
**Parent company:** Garden Prayer Publishing LLC (Texas-based holding company)
**Sister products:** Melissa for Educators (K-12 AI teaching platform), Game View (spatial computing), Vaquero Homes (contractor marketplace)
**Pilot customer:** Moog Inc., Components Group, Blacksburg VA — solenoids and sensors product lines
**Infrastructure:** Azure Government (FedRAMP authorized, ITAR-compliant data residency)
**Contact CTA email:** Update `mailto:` in CTA section to production email once domain is confirmed

---

## Content Tone

Write like a defense program manager talks — precise, direct, no fluff. Avoid:
- Consumer SaaS language ("seamless," "delightful," "game-changing")
- Vague claims without numbers
- Any mention of "AI-powered" without grounding it in what the AI actually does

Use instead:
- Specific scan gate counts, yield percentages, cycle time metrics
- Compliance standard names (AS9100D, MIL-STD-130, CMMC 2.0, DCSA, ITAR)
- Physical manufacturing vocabulary (work order, BOM, C of C, ASN, NCR, IUID)
