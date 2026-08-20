---
name: Woman-Diamond
colors:
  surface: '#111417'
  surface-dim: '#111417'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#323539'
  on-surface: '#e1e2e7'
  on-surface-variant: '#c5c7c9'
  inverse-surface: '#e1e2e7'
  inverse-on-surface: '#2e3134'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c6c6c8'
  primary: '#ffffff'
  on-primary: '#2f3132'
  primary-container: '#e2e2e4'
  on-primary-container: '#636466'
  inverse-primary: '#5d5e60'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ffffff'
  on-tertiary: '#1a2b6a'
  tertiary-container: '#dde1ff'
  on-tertiary-container: '#5160a2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e4'
  primary-fixed-dim: '#c6c6c8'
  on-primary-fixed: '#1a1c1d'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b8c4ff'
  on-tertiary-fixed: '#001354'
  on-tertiary-fixed-variant: '#334282'
  background: '#111417'
  on-background: '#e1e2e7'
  surface-variant: '#323539'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built upon the metaphor of the "inner diamond"—the process of pressurized transformation resulting in absolute clarity and brilliance. It targets women seeking profound psychological and spiritual growth. 

The aesthetic is **Ethereal Modernism** mixed with **Glassmorphism**. It evokes a sense of deep midnight solitude where the light of the self begins to refract. The UI should feel high-value, soulful, and vast, utilizing deep negative space to allow "diamond" elements—shimmering strokes, prismatic blurs, and crisp typography—to command attention. The emotional response is one of "expensive peace" and "illuminated depth."

## Colors

The palette is rooted in the depth of the subconscious and the brilliance of the spirit.

- **Primary (Diamond White):** #F5F5F7. Used for headings and primary actions. It represents clarity and the finished gemstone.
- **Secondary (Champagne Gold):** #D4AF37. Used sparingly for high-value accents, signatures, and delicate highlights to add warmth.
- **Tertiary (Prismatic Mist):** #A5B4FC. A soft, cool violet-blue used for subtle glows and background refractions.
- **Neutral (Midnight Foundation):** #05070A. The primary background color, providing an infinite, soulful canvas.

Surface colors should use deep navy-black transitions (#0A0C10) rather than pure black to maintain a "velvet" texture.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition with modernity.

- **Headlines:** Use **Playfair Display**. This serif font conveys the "Woman-Diamond" authority, wisdom, and timelessness. It should be typeset with slightly tighter letter-spacing for large displays to feel "editorial."
- **Body & UI:** Use **Manrope**. This sans-serif provides a refined, modern, and highly legible experience for coaching materials and community interactions. 
- **Labels:** Small labels and captions use Manrope with increased letter-spacing and uppercase styling to denote "Diamond Grading" precision and luxury.

## Layout & Spacing

The layout philosophy is **Atmospheric Fixed Grid**. Space is used as a luxury. Large margins and significant vertical rhythm (using multiples of 8px) ensure the content never feels crowded.

- **Desktop:** 12-column grid, 1200px max width. Centered.
- **Tablet:** 8-column grid, 24px margins.
- **Mobile:** 4-column grid, 20px margins.

Use "Airy Padding"—ensure that sections are separated by at least 120px on desktop to allow the "soulful" atmosphere to breathe. Elements should often be center-aligned to create a sense of balance and zen-like focus.

## Elevation & Depth

Depth is not communicated through heavy drop-shadows, but through **Luminous Layering**:

1.  **Base Layer:** Midnight Foundation (#05070A).
2.  **Mid Layer (Glass):** Semi-transparent surfaces (10-15% opacity Diamond White) with a 20px-40px Backdrop Blur. This creates a "frosted diamond" effect.
3.  **Top Layer (Stroke):** Ultra-thin (0.5px - 1px) borders using a linear gradient (Diamond White to Transparent) to simulate light catching the edge of a facet.
4.  **Ambient Glows:** Soft, large-radius blurs in Tertiary (Prismatic Mist) placed behind primary cards to give them an ethereal, floating quality.

## Shapes

The shape language is **Softly Geometric**. 

While diamonds are known for their sharp facets, the "Woman-Diamond" experience is about the integration of strength and softness. We use `Soft` (0.25rem) rounding for standard UI components like inputs and small buttons to keep them feeling precise. For larger containers and featured cards, use `rounded-lg` (0.5rem) to ensure the UI feels approachable and feminine. 

Icons should be "Thin Stroke" (1px or 1.5px weight) to match the refined aesthetic.

## Components

- **Primary Buttons:** High-contrast Diamond White background with Midnight text. No shadow, but a subtle external "glow" on hover.
- **Ghost Buttons:** 1px Champagne Gold border with transparent background. Used for secondary actions.
- **Glass Cards:** The signature component. A blurred, semi-transparent background with a 1px "light-leak" border on the top and left edges only.
- **Input Fields:** Bottom-border only or very subtle ghost outlines. Typography inside inputs should be Manrope 16px.
- **Community Chips:** Small, pill-shaped elements with a soft Prismatic Mist background and white text, used for tags or categories.
- **Progress Indicators:** Use thin, shimmering lines (gradient of Gold to White) to show a woman's journey through the transformative modules.
- **Diamond Divider:** A custom horizontal rule that features a tiny 4px diamond shape in the center, signifying a transition in thought or soul-work.