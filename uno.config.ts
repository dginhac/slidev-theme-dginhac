import { defineConfig } from "unocss";

/**
 * DGinhac brand tokens as UnoCSS utility classes.
 *
 * Brand colors are RGB-triplet CSS variables (`--br-primary-rgb` etc.), so:
 *   - `text-primary`, `bg-secondary`, `border-accent` always match the current color scheme
 *   - opacity modifiers work: `bg-primary/20`, `text-accent/70`, `border-secondary/40`
 *   - they automatically flip to readable darker shades in light mode
 *
 * Reach for `*-vivid` variants when you explicitly want the full-saturation hue
 * regardless of mode — e.g. a brand-fill CTA on a colored surface.
 */
export default defineConfig({
  safelist: [
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
  ],
  theme: {
    colors: {
      primary: "rgb(var(--br-primary-rgb) / <alpha-value>)",
      secondary: "rgb(var(--br-secondary-rgb) / <alpha-value>)",
      accent: "rgb(var(--br-accent-rgb) / <alpha-value>)",

      "primary-vivid": "rgb(149 71 255 / <alpha-value>)",
      "secondary-vivid": "rgb(223 249 95 / <alpha-value>)",
      "accent-vivid": "rgb(255 112 122 / <alpha-value>)",

      brand: {
        black: "#000000",
        surface: "var(--br-surface)",
        "surface-elev": "var(--br-surface-elev)",
        border: "var(--br-border)",
        muted: "var(--br-muted)",
        faint: "var(--br-faint)",
        fg: "var(--br-fg)",
        heading: "var(--br-fg-heading)",
      },
    },
  },
  shortcuts: {
    "br-eyebrow":
      "text-primary font-semibold uppercase tracking-widest",
    "br-caption": "text-brand-muted text-sm",
    "br-ring-primary": "ring-1 ring-primary/35 bg-primary/10",
    "br-ring-secondary": "ring-1 ring-secondary/30 bg-secondary/8",
    "br-ring-accent": "ring-1 ring-accent/30 bg-accent/8",
  },
});
