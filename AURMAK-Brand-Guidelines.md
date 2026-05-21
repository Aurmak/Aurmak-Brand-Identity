# AURMAK Brand Identity Guidelines v1.0

This markdown is aligned to the current web app structure and content model.
Section order mirrors the app tabs exactly:

1. Cover
2. Brand Overview
3. Logo Guidelines
4. Colour Palette
5. Typography
6. Visual Language
7. UI Components

---

## 1. Cover

- Title: `Brand Identity Guidelines`
- Version: `Version 1.0`
- Footer note: `Last updated: February 2026`

---

## 2. Brand Overview

### Who We Are

AURMAK is a digital transformation partner focused on structured execution. We align commercial objectives with disciplined delivery to modernise systems, build scalable products, and strengthen the infrastructure that supports growth.

### Operating Model

#### Strategic Oversight

Engagements begin with commercial context, operational constraints, and delivery governance. Strategy, architecture, and execution planning are aligned early to reduce fragmentation and create a clear path to implementation.

- Commercial goals translated into delivery priorities
- Governance, architecture, and security aligned from the outset
- Clear ownership across strategy and execution

#### Integrated Delivery

Delivery is executed through one accountable team spanning engineering, product, infrastructure, and AI implementation. The result is faster coordination, stronger control, and systems designed to perform in real operating environments.

- Structured implementation without unnecessary complexity
- Leadership-level accountability through delivery
- Scalable systems built for operational continuity

### Core Principles

- Structured Execution: Complex initiatives are delivered through defined frameworks, clear ownership, and disciplined implementation.
- Commercial Alignment: Technical decisions are shaped by operational priorities, measurable performance, and long-term business value.
- Controlled Innovation: New capability is introduced with governance, precision, and scalability in mind, including AI where it delivers clear operational value.

---

## 3. Logo Guidelines

### Logo Lockups

- Horizontal (Primary): Use for web headers, stationery, and standard documentation.
- Vertical (Secondary): Use for social media posts, vertical banners, and centered layouts.

### Symbol Usage

- The AURMAK symbol can be used independently where space is limited or brand context is already established.
- Recommended contexts include profile images, favicons, and compact digital placements.
- Avoid replacing the full lockup in primary brand locations where space allows.

### Clear Space and Size

- Maintain a minimum clear space of `20px` around all sides of the full logo.
- Minimum size (full logo):
- Digital: `120px` wide
- Print: `30mm` wide
- Minimum size (symbol only):
- Digital: `32px`
- Print: `8mm`

### Do’s and Don’ts

- Do maintain aspect ratio and clear space.
- Do use approved colour/background combinations.
- Don’t stretch or distort.
- Don’t rotate.
- Don’t add shadow effects.
- Don’t change logo colours.
- Don’t place on visually busy, low-contrast backgrounds.

---

## 4. Colour Palette

### Primary Colours

#### Deep Royal Navy

- HEX: `#1B2A6B`
- RGB: `27, 42, 107`
- CMYK: `75, 61, 0, 58`
- PMS: `534 C`
- Usage: Headers, primary UI elements, backgrounds, buttons, and core brand touchpoints.

#### Bright Cyan

- HEX: `#2CB5E3`
- RGB: `44, 181, 227`
- CMYK: `81, 20, 0, 11`
- PMS: `306 C`
- Usage: Highlights, calls to action, links, interactive elements, and emphasis.

### Neutral Colours

- White: `#FFFFFF`
- Light Grey: `#F4F6F8`
- Slate Grey: `#4A5568`
- Dark Grey: `#2D3748`

Usage guidance:
- White for primary backgrounds and inverted elements.
- Light Grey for subtle surfaces and sections.
- Slate Grey for body copy.
- Dark Grey for secondary emphasis.

### Accessibility and Contrast

WCAG AA compliant combinations shown in app:
- Navy `#1B2A6B` on White `#FFFFFF` (10.2:1)
- Slate Grey `#4A5568` on White (8.6:1)
- White on Navy `#1B2A6B` (10.2:1)
- Cyan `#2CB5E3` on Navy (4.8:1)

Important note:
- Never use Cyan `#2CB5E3` as body text on white backgrounds.

### Print Specifications

- Always use CMYK values for print.
- Minimum `300 DPI` for raster graphics.
- Use Pantone references when spot colour is required.
- Coated stock is recommended for cyan fidelity.

---

## 5. Typography

### Primary Typeface

- Typeface: `Inter`
- Use Inter across digital and print brand outputs.

### Type Ramp

- Display / H1: `56px`, `700`, line-height `1.1`, letter spacing `-0.02em`
- Page Title / H1: `48px`, `700`, line-height `1.2`, letter spacing `-0.01em`
- Section Header / H2: `36px`, `600`, line-height `1.3`
- Sub-section / H3: `28px`, `600`, line-height `1.4`
- Component Heading / H4: `20px`, `600`, line-height `1.4`
- Lead Body: `20px`, `400`, line-height `1.6`
- Body Regular: `16px`, `400`, line-height `1.6`
- Body Small: `14px`, `400`, line-height `1.5`
- Caption / Label: `12px`, `500`, line-height `1.4`, uppercase, letter spacing `0.05em`

### Usage Notes

- Page and section headings use Deep Royal Navy `#1B2A6B`.
- Body and supporting copy use Slate Grey `#4A5568`.
- Minimum recommended body text:
- Digital: `16px`
- Print: `10pt`

---

## 6. Visual Language

### Visual Principles

- Engineering Clarity: Structured grids, clean lines, and deliberate hierarchy.
- Human but Professional: Authentic, calm, and credible visual tone.
- Data Visualisation: Thin-line diagrams and uncluttered technical overlays.

### Iconography Standards

- Library: `Lucide React`
- Style: Linear only, no filled icon style
- Stroke guidance:
- Standard UI: `1.5pt`
- Hero accents: `2pt`
- Icon container: `24x24px`
- Approved icon colours:
- Navy `#1B2A6B`
- Cyan `#2CB5E3`
- Slate Grey `#4A5568`

### Graphic Elements

- Use geometric linework and grid-led composition.
- Prefer subtle overlays over decorative noise.
- Apply cyan as selective emphasis, not dominant fill.

---

## 7. UI Components

### Library and Theming

- Primary UI framework: `Ant Design (AntD)`
- Global theming via `ConfigProvider`
- Core brand token mapping:

```json
{
  "token": {
    "colorPrimary": "#2CB5E3",
    "colorInfo": "#2CB5E3",
    "colorText": "#1B2A6B",
    "fontFamily": "Inter"
  }
}
```

### Grid and Spacing

- 8pt grid system is used for component and layout rhythm.
- Spacing increments: `4, 8, 16, 24, 32, 48, 64`.
- Corner radius standards shown:
- 8px default radius
- Full radius for badges/switches/avatars

### Buttons

- Primary
- Default / Secondary
- Ghost / Outline
- Link

Button variants include base, icon, and disabled states.

### Forms and Selection

- Inputs: standard and prefixed search
- Select dropdown
- Checkbox and switch controls

### Accessibility Standards

- Keyboard accessibility expected for component usage.
- Minimum text contrast target: `4.5:1`
- ARIA labels integrated into form patterns.

---

## Alignment Note

If the web app content changes, this markdown must be updated in the same change set so both remain identical in structure and guidance.
