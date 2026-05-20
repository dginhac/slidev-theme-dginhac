# slidev-theme-dginhac

Personal academic Slidev theme inspired by Seriph and BrokenRubik. Dark-first, dual color-scheme, Aspekta typeface.

## Dev commands

```bash
pnpm dev      # slidev example.md — live preview at localhost:3030
pnpm build    # build static site from example.md
pnpm export   # export to PDF/PNG
```

## Project structure

```
layouts/        Vue layout components (registered as Slidev layouts)
components/     Vue components (auto-imported in slides)
styles/         CSS: tokens.css, fonts.css, layout.css, code.css, index.ts
setup/          shiki.ts (code themes), mermaid.ts
assets/images/  br-dark-logo.svg, br-light-logo.svg
public/fonts/   Aspekta woff2 files (300–800 weight)
uno.config.ts   UnoCSS brand token aliases + shortcuts
example.md      Demo presentation — single source of truth for theme preview
```

## Design tokens

CSS variables defined in `styles/tokens.css`. All brand colors are RGB triplets so UnoCSS opacity modifiers work.

| Token | Value (dark) | Purpose |
|---|---|---|
| `--br-primary` | `#3B82F6` | Dynamic blue |
| `--br-secondary` | `#14B8A6` | Modern teal |
| `--br-accent` | `#F43F5E` | Controlled coral |
| `--br-surface` | `#0F172A` | Slide background |
| `--br-surface-elev` | `#111827` | Elevated surface |
| `--br-border` | `#1F2937` | Borders |
| `--br-fg` | `#E5E7EB` | Body text |
| `--br-fg-heading` | `#F9FAFB` | Headings |
| `--br-muted` | `rgba(226,232,240,0.6)` | Secondary text |

Light mode overrides are in `html:not(.dark)` — primary shifts to `#2563EB`, secondary to `#0D9488`, accent to `#E11D48`.

### UnoCSS utilities

Defined in `uno.config.ts`. Colors map through `rgb(var(--br-*-rgb) / <alpha-value>)` so opacity works: `bg-primary/20`, `text-accent/70`.

Shortcuts: `br-eyebrow`, `br-caption`, `br-ring-primary`, `br-ring-secondary`, `br-ring-accent`.

Vivid variants (full saturation, mode-invariant): `text-primary-vivid`, `bg-secondary-vivid`, `text-accent-vivid`.

## Layouts

All layouts use `class="slidev-layout <name>"`. Theme defaults: `transition: fade`, `16/9`, `canvasWidth: 980`.

| Layout | Props | Notes |
|---|---|---|
| `cover` | `align` (left\|center), `variant` (light\|dark\|auto), `background`, `overlay`, `overlayColor`, `poster` | Shows BRLogo; supports background image with overlay |
| `default` | — | `px-14 py-10`, standard content |
| `intro` | — | `px-14 py-12`, vertically centered |
| `section` | `eyebrow?` (string) | Eyebrow renders in primary color above heading |
| `statement` | — | Centered, `max-w-4xl` |
| `fact` | — | For large stat + caption; use H1 for the number |
| `quote` | `author?`, `role?`, `color` (primary\|secondary\|accent) | Radial gradient wash, large quote mark |
| `end` | `url?`, `logo` (default true) | Shows BRLogo and optional URL link |
| `three-cols` | `class?`, `layoutClass?` | Slots: default/`left`, `center`, `right` — separated by `::center::` and `::right::` |
| `three-cols-header` | `class?`, `layoutClass?` | Slots: default (header spans 3 cols), `left`, `center`, `right`, `bottom` |

## Components

Auto-imported — use directly in slide markdown.

### Content & structure

| Component | Props | Behavior |
|---|---|---|
| `Callout` | `type` (primary\|secondary\|accent) | Highlighted box with left border |
| `Card` | `type` (primary\|secondary\|accent\|muted), `title?` | Padded card, `height: 100%` for grid alignment |
| `Checklist` | — | Wraps `<ul>` with styled checkbox marks (primary border + secondary check) |
| `Compare` | `leftLabel?`, `rightLabel?`, `leftColor?`, `rightColor?` | Two-column split with divider; slots: `left`, `right` |
| `Pros` | `title?` | Green-tinted box, list items get ✓ in secondary color |
| `Cons` | `title?` | Red-tinted box, list items get ✕ in accent color |
| `Step` | `n?`, `color` (primary\|secondary\|accent) | Numbered bullet + body text; stack multiple for a process |
| `Timeline` | — | Container with vertical gradient line on the left |
| `TimelineItem` | — | Individual item inside `<Timeline>` |

### Data & metrics

| Component | Props | Notes |
|---|---|---|
| `Stat` | `value`, `label?`, `color` (secondary default) | Static large number, centered |
| `Metric` | `value`, `label?`, `delta?`, `trend` (up\|down\|flat), `color`, `animate?`, `duration?`, `from?` | Animated count-up via `requestAnimationFrame`; triggers when slide becomes active |

### Inline / decorative

| Component | Props | Notes |
|---|---|---|
| `Pill` | `color` (primary\|secondary\|accent\|muted) | Inline badge/tag |
| `Eyebrow` | — | Small uppercase label in primary color |
| `Kbd` | — | Keyboard shortcut display |
| `DotItem` | — | Dot-prefixed list item |
| `Plan` | — | Plan/roadmap card |
| `Tool` | — | Tool/technology badge |
| `Counter` | — | Standalone counter display |

### Internal (used by layouts)

- `BRLogo` — props: `variant` (light\|dark\|auto); renders SVG logo
- `BRBackground` — props: `src`, `overlay`, `overlayColor`, `poster`; background image with overlay for cover layout

## Code highlighting

Configured in `setup/shiki.ts`:
- Dark theme: `houston`
- Light theme: `github-light`

## Fonts

- **Sans**: Aspekta (local, woff2, weights 300–800 in `public/fonts/`)
- **Mono**: JetBrains Mono Variable (npm package `@fontsource-variable/jetbrains-mono`)

## Extending the theme

- **New layout**: add a `.vue` file to `layouts/`, register in `package.json` under `slidev.aliases.layouts`
- **New component**: add a `.vue` file to `components/` — auto-imported by Slidev
- **New color token**: add CSS variable to `styles/tokens.css` (both `:root` and `html:not(.dark)`) and expose in `uno.config.ts` if needed as a utility class
