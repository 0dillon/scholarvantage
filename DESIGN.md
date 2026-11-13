---
name: ScholarVantage Global
description: Elite International Fellowship & Evidentiary Profile Advisory Design System
colors:
  navy-deep: "#060B14"
  navy-primary: "#0B1528"
  navy-elevated: "#112240"
  navy-surface: "#1C335C"
  gold-bullion: "#C5A059"
  gold-light: "#D4AF37"
  gold-dim: "rgba(197, 160, 89, 0.12)"
  vellum-parchment: "#FAF8F5"
  surface-white: "#FFFFFF"
  ink-primary: "#0A1220"
  ink-secondary: "#334155"
  ink-muted: "#5B6B82"
  light-primary: "#FFFFFF"
  light-secondary: "#E2E8F0"
  light-muted: "#94A3B8"
  rule-dark: "rgba(255, 255, 255, 0.11)"
  rule-light: "rgba(15, 23, 42, 0.09)"
  wa-green: "#25D366"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(2.35rem, 4.5vw + 0.5rem, 3.85rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.85rem, 2.8vw + 0.5rem, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "0.01em"
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.2vw + 0.75rem, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.02em"
  body:
    fontFamily: "Manrope, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.08em"
rounded:
  xs: "3px"
  sm: "5px"
  md: "8px"
  lg: "14px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  2xl: "56px"
  3xl: "84px"
  4xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.gold-bullion}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
  button-wa:
    backgroundColor: "{colors.wa-green}"
    textColor: "#04180C"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
---

# Design System: ScholarVantage Global

## Overview

**Creative North Star: "The Elite Fellowship Registry & Honours Ledger"**

ScholarVantage Global's visual world embodies the dignified authority, intellectual rigor, and institutional permanence of an international royal academy or sovereign fellowship registry. It replaces generic consulting hype and stock-photo immigration tropes with audit-grade evidentiary architecture, crisp typography, and bespoke craftsmanship.

The system is calibrated for high-stakes decision-makers—accomplished research scientists, principal investigators, systems architects, and technical innovators pursuing EB-1A Extraordinary Ability, EB-2 NIW, UK Global Talent, and senior chartered elevations (IEEE, BCS, IET).

**Key Characteristics:**
- Deepest midnight lapis (`#060B14`, `#0B1528`) contrasted with warm alabaster vellum (`#FAF8F5`).
- Antique bullion gold accents (`#C5A059`, `#D4AF37`) framing evidentiary matrices and primary CTAs.
- Dual-domain typography: `Cinzel` for classical Roman inscriptional authority and `Manrope` for crisp technical legibility and tabular data.
- Zero decorative filler: every component maps directly to institutional criteria, deliverables, and frictionless direct founder intake.

## Colors

The palette employs a committed institutional balance where midnight lapis commands the primary atmosphere (masthead, hero, founder ledger, and booking intake) and alabaster vellum carries extensive informational reading and service criteria.

### Primary
- **Midnight Lapis** (`#0B1528`): Core brand ground providing sovereign authority and deep focus.
- **Deep Midnight** (`#060B14`): Anchor tone for top ribbons, schedule desks, and site colophons.

### Secondary
- **Antique Bullion Gold** (`#C5A059`): Primary action accent, credential pill borders, and active indicators.
- **Champagne Gold Light** (`#D4AF37`): High-visibility text accent on dark grounds and button hover state.

### Neutral
- **Alabaster Vellum** (`#FAF8F5`): Warm parchment ground for reader-focused and catalog sections.
- **Surface White** (`#FFFFFF`): Crisp container ground for dossiers, criteria cards, and inputs.
- **Deep Slate Ink** (`#0A1220`): High-contrast primary reading ink on vellum surfaces (> 10:1 contrast).
- **Secondary Charcoal** (`#334155`): Lead and descriptive copy on light surfaces.
- **Silver Slate** (`#CBD5E1`): High-legibility secondary text on dark lapis surfaces.
- **Hairline Rule Dark** (`rgba(255, 255, 255, 0.11)`): Architectural dividers on dark backgrounds.
- **Hairline Rule Light** (`rgba(15, 23, 42, 0.09)`): Delicate separators on light surfaces.
- **WhatsApp Signal Green** (`#25D366`): Instant consultation channel brand identifier.

### Named Rules
**The Rarity of Bullion Rule.** Gold is reserved for authentic credentials, active indicators, and high-priority action controls. It never floods large background surfaces.

## Typography

**Display Font:** `Cinzel` (with Georgia, "Times New Roman", serif fallbacks)
**Body Font:** `Manrope` (with -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif fallbacks)
**Label/Data Font:** `Manrope` with tabular figures

**Character:** A deliberate synthesis of neoclassical Roman inscriptional gravitas (`Cinzel`) and high-precision contemporary technical clarity (`Manrope`).

### Hierarchy
- **Display** (700 weight, clamp(2.35rem, 4.5vw + 0.5rem, 3.85rem), 1.12 line-height): Sovereign hero proclamations.
- **Headline** (700 weight, clamp(1.85rem, 2.8vw + 0.5rem, 2.75rem), 1.18 line-height): Major institutional section headers.
- **Title** (700 weight, clamp(1.25rem, 1.2vw + 0.75rem, 1.625rem), 1.25 line-height): Service dossiers, process stages, and card headers.
- **Body** (400/500 weight, 1rem, 1.65 line-height): Analytical explanations, criteria narratives, max measure 68ch.
- **Label** (700 weight, 0.75rem, 0.08em letter-spacing, uppercase): Status badges, pillar tags, and input labels.

### Named Rules
**The No-Eyebrow Rule.** Every section heading carries its own semantic and intellectual weight. Eyebrows, kickers, and decorative category labels above headings are strictly banned.

## Layout

The spatial model uses an 8pt architectural rhythm with generous breathing room. The container maximum is 1280px with responsive fluid padding (`clamp(1.25rem, 3.5vw, 2.5rem)`). Major sections breathe across vertical paddings of 80px to 120px on desktop and 56px to 64px on mobile viewports.

## Elevation & Depth

Surfaces rely on structural tonal layering and hairline architectural rules rather than heavy diffuse drop shadows. Subtle, vertically offset ambient shadows are applied exclusively to elevate interactive cards and primary buttons.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 2px 6px -1px rgba(6, 11, 20, 0.06), 0 1px 3px -1px rgba(6, 11, 20, 0.04)`): Subtle grounding for light cards.
- **Card Hover** (`box-shadow: 0 10px 25px -4px rgba(6, 11, 20, 0.08)`): Controlled elevation on mouseover.
- **Navy Deep Shadow** (`box-shadow: 0 20px 40px -10px rgba(6, 11, 20, 0.45)`): Structural depth on deep lapis panels.
- **Gold Ambient Glow** (`box-shadow: 0 8px 24px -4px rgba(197, 160, 89, 0.28)`): Reserved for gold action controls.

### Named Rules
**The Zero-Halo Rule.** Colored glow borders with zero vertical offset are prohibited. Shadows must reflect realistic directional lighting with genuine vertical offsets and soft blurs.

## Shapes

Forms are disciplined, architectural, and tailored:
- **Card Corners:** 8px radius (`--radius-md`) for evidentiary containers and service cards.
- **Input Fields & Buttons:** 5px radius (`--radius-sm`) for precise, professional feel.
- **Micro Badges:** 3px radius (`--radius-xs`).
- **Floating Controls:** 9999px (`--radius-pill`) reserved strictly for the floating WhatsApp launcher.

## Components

### Buttons
- **Primary Bullion:** Antique gold background with dark lapis text, subtle top-to-bottom metallic gradient, 12px 24px padding.
- **WhatsApp Direct:** Official `#25D366` green with high-contrast text and WhatsApp SVG crest.
- **Outline Buttons:** 1px hairline border in gold or white, shifting to subtle tinted fills on hover.

### Evidentiary Dossier Cards
- 8px radius with 1px hairline border, containing category pillar tags, criteria checklists with custom SVG ticks, target profile descriptions, and deep-link consultation triggers.

### Advisory Schedule Desk
- Tabular figures layout displaying verified operating hours (WAT / UTC+1) with direct diagnostic call scheduling.

### Dual-Channel Consultation Intake
- Structured two-column form capturing Full Name, Email, WhatsApp, Country, Profession, Service, Date, and Brief Overview, opening WhatsApp with a formatted brief and providing instant mailto fallback.

## Do's and Don'ts

### Do:
- **Do** maintain strict WCAG AA contrast (≥4.5:1 for body copy; ≥3:1 for large display titles) on all dark lapis and vellum surfaces.
- **Do** present the legal compliance notice prominently in every page footer and on all immigration services sections.
- **Do** preserve the dual-intake workflow: direct WhatsApp dialogue and structured consultation booking.
- **Do** use custom SVG vector icons with consistent 1.75–2px stroke widths.

### Don't:
- **Don't** use generic stock photos of gavels, scales of justice, or smiling passport models.
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** use gradient text.
- **Don't** use Unicode emojis as icons.
- **Don't** use side-border stripes on cards.
- **Don't** make false guarantees regarding visa approvals or journal acceptances.
