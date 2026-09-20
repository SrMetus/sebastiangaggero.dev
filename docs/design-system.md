# Design Foundations

## Visual Intent and Anti-Patterns

The portfolio should feel professional, calm, technical, intentional, editorial, and distinctive. It must not resemble a generic AI-generated developer portfolio. Every common pattern needs a concrete narrative, technical, usability, or commercial purpose.

Avoid generic card grids without narrative purpose, fake terminals, decorative code snippets, skill percentage bars, excessive gradients, particles, typing effects, gratuitous animation, walls of technology logos, and generic AI-written marketing copy.

Restrained section numbering, system labels, simple technical diagrams, and explanations of project decisions may support the narrative. Avoid a hacker-themed identity. Job Radar is a loose visual-family reference only; do not copy its layout or identity.

## Color Roles

These approved v1 tokens are the implementation baseline, not implemented CSS. Refine them later only when visual and accessibility testing provides a reason.

| Token         | Value     | Role                                       |
| ------------- | --------- | ------------------------------------------ |
| background    | `#f5f1e8` | Dominant warm cream page background        |
| surface       | `#fbf9f4` | Primary content surfaces                   |
| surface-alt   | `#e9eee7` | Subtle alternate surfaces                  |
| primary       | `#214e3b` | Main actions and forest-green emphasis     |
| primary-hover | `#173a2c` | Hover state for primary actions            |
| accent        | `#7f9d83` | Restrained sage accents                    |
| text          | `#202521` | Main text                                  |
| text-muted    | `#68716b` | Secondary text, subject to contrast checks |
| border        | `#d8ddd5` | Subtle separators and surface boundaries   |

Do not assume every token pairing has sufficient contrast. Check actual text, backgrounds, and interaction states; accent and border colors are not automatic choices for readable text or focus indicators.

## Typography

Primary family: **Manrope**. Fallback stack: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Intended weights: **400, 500, 600, 700**. Font loading is not yet implemented.

| Role       | Initial size direction                    |
| ---------- | ----------------------------------------- |
| Hero       | Approximately 48px mobile to 72px desktop |
| H1         | Approximately 40px to 56px                |
| H2         | Approximately 32px to 42px                |
| H3         | Approximately 22px to 28px                |
| Large body | 18px                                      |
| Body       | 16px                                      |
| Small      | 14px                                      |

Heading line-height: approximately **1.05–1.2**. Body line-height: approximately **1.6**. Use responsive `clamp()` where appropriate when implementing the scale. Visual size must not determine semantic heading level; the hero can contain the page H1.

## Spacing and Layout

Approved spacing scale: **4, 8, 12, 16, 24, 32, 48, 64, 96, 128px**. Reuse these values through tokens instead of accumulating arbitrary gaps.

- Main content max-width: approximately **1200px**.
- Reading content max-width: approximately **720px**.
- Horizontal padding: **20px mobile**, **32px tablet**, **40px desktop**.

Use generous whitespace and readable line lengths to establish hierarchy. Let content determine grouping rather than placing every section in an identical card.

## Mobile-First Breakpoints

Base styles target small screens. Preferred breakpoints are **48rem**, **64rem**, and **80rem**; enhance layouts as space allows. Avoid device-specific breakpoints and desktop layouts patched afterward for mobile. Test content wrapping and horizontal overflow between breakpoints as well as at them.

## Borders, Radii, and Shadows

Approved radii: **small 8px**, **controls 14px**, **cards 20px**. Borders and surface contrast should provide most visual separation. Shadows must remain restrained; avoid a heavy floating-card aesthetic.

## Motion

Transitions normally last **150–250ms** and serve a functional purpose, such as feedback for an interaction. Respect `prefers-reduced-motion`; remove or reduce nonessential motion. Do not introduce decorative animation to fill space.

## Accessibility and Interaction States

Accessibility is an implementation requirement, not a completed audit. Use semantic HTML, logical headings, accessible labels, appropriate alt text, keyboard-operable controls, and visible focus states. Never remove focus outlines without an accessible replacement.

Check contrast for real color combinations, preserve readable content when zoomed, and give controls clear hover and keyboard-focus feedback. Do not communicate meaning through color alone.

## Component Principles

Build small, purposeful Astro components. Share them when reuse or responsibility separation warrants it. Keep styling in native CSS; do not add UI frameworks or layout-wrapper components without a concrete need.

The visual system should support the continuous [homepage narrative](content-strategy.md), not dictate a template. Exact font delivery and final responsive tuning remain implementation decisions; the approved tokens above are not open questions.
