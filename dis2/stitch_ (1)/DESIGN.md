---
name: Radiant Elegance
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4d4635'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#605e58'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2da'
  on-secondary-container: '#66645e'
  tertiary: '#5e5e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#b4b3af'
  on-tertiary-container: '#454543'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e6e2da'
  secondary-fixed-dim: '#c9c6bf'
  on-secondary-fixed: '#1c1c17'
  on-secondary-fixed-variant: '#484741'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: DM Sans
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
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system is anchored in a philosophy of "Luminous Sophistication," specifically tailored for a premium audience. It balances the timeless authority of luxury editorial with a modern, serene digital experience. The brand personality is radiant, empowering, and high-end, evoking the clarity and brilliance of a finely cut diamond.

The visual style is **Modern Minimalist with Tactile Accents**. It leverages heavy whitespace to create an "airy" feel, allowing content to breathe and signaling exclusivity. The aesthetic is punctuated by "Diamond Geometry"—delicate, hairline-thin geometric accents and diamond-shaped markers that serve as structural motifs without cluttering the interface.

## Colors
The palette is inspired by precious metals and organic textures. 
- **Primary (Champagne Gold):** Used for key calls to action, active states, and decorative geometric accents.
- **Secondary (Pearl White):** Acts as the surface color for containers, cards, and secondary UI sections to create soft depth against the background.
- **Tertiary (Soft Cream):** The foundational canvas color for the entire application, providing a warmer, more premium feel than pure white.
- **Neutral (Deep Charcoal):** Reserved strictly for typography and high-contrast iconography to ensure WCAG-compliant readability while maintaining a sophisticated edge.

## Typography
This design system employs a high-contrast typographic pair. **Playfair Display** provides an authoritative, editorial voice for all headlines. **DM Sans** is used for body copy and UI labels; its geometric but understated nature ensures high legibility and a modern feel. 

For a "Diamond" motif, use the `label-caps` style for small headers and categories, always with generous letter spacing to evoke luxury branding. Headlines should utilize a slight negative letter-spacing to appear tighter and more "custom-set."

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to preserve the intentional whitespace characteristic of luxury design. On mobile, it transitions to a fluid model with generous side margins. 

The spacing rhythm is based on an 8px base unit. To maintain the "serene" mood, avoid dense clusters of information. Use vertical "breathing room" (64px to 128px) between major sections. Dividers should be hairline-thin (0.5px to 1px) using the Champagne Gold color, often featuring a small diamond glyph in the center.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ambient Shadows**. Instead of heavy drop shadows, use extremely diffused, low-opacity shadows (e.g., `box-shadow: 0 10px 40px rgba(44, 44, 44, 0.04)`). 

Surfaces should feel stacked rather than floating. A secondary container (Pearl White) sits subtly atop the primary background (Soft Cream). Interactive elements like cards may use a subtle champagne-colored inner glow or a 1px border in a faded gold to indicate hover states, mimicking the light-catching properties of a gemstone.

## Shapes
The shape language is **Soft and Precise**. A small radius (4px) is applied to most UI components to bridge the gap between "sharp/technical" and "rounded/friendly." This "Soft" setting maintains the architectural integrity of the design while appearing approachable. 

Buttons and input fields should strictly adhere to the `rounded-sm` (4px) or `rounded-md` (8px) logic. Circular shapes should be reserved exclusively for profile avatars or specific "Diamond" geometric icons.

## Components
- **Buttons:** Primary buttons use a solid Champagne Gold background with Deep Charcoal text. Secondary buttons use a Deep Charcoal outline with a subtle cream hover state.
- **Inputs:** Fields are Pearl White with a 1px Deep Charcoal border (low opacity). On focus, the border transitions to Champagne Gold.
- **Cards:** Cards should have no visible border, relying instead on the Pearl White surface color and the ambient shadow defined in the Elevation section.
- **Dividers:** Refined, horizontal hairlines in Gold. Incorporate a 4x4px diamond-shaped node at the center or the start of the line.
- **Chips/Badges:** Use the `label-caps` typography with a very light Champagne Gold tint background and Deep Charcoal text.
- **Navigation:** Top navigation should be transparent, becoming Pearl White with a subtle bottom shadow only upon scroll.