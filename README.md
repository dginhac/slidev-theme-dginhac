# slidev-theme-dginhac

Personal academic [Slidev](https://github.com/slidevjs/slidev) theme inspired by [BrokenRubik](https://github.com/BrokenRubik/slidev-theme-brokenrubik). 

Ships **both dark and light modes** with a unified surface, Aspekta/Jetbrains typography, three brand colors (primary `#3B82F6`, secondary `#14B8A6`, accent `#F43F5E`), 10 layouts, and 17 components.


## Headmatter

The minimum required for a new deck — everything else has a sensible default:

```md
---
theme: 'slidev-theme-dginhac'
title: Your deck title
---
```

### Baked-in defaults

The theme sets these on your behalf. Override any of them in headmatter if a specific deck needs something different:

| Key            | Default                 | Purpose                                 |
| -------------- | ----------------------- | --------------------------------------- |
| `colorSchema`  | `both`                  | Dark and light both ship; press `D` to toggle. Set to `dark` or `light` to lock. |
| `transition`   | `slide-left`            | House motion.                           |
| `titleTemplate`| `%s — BrokenRubik`      | Branded browser tab.                    |
| `favicon`      | `/favicon.ico`          | BR favicon shipped with the theme.      |
| `aspectRatio`  | `16/9`                  | Explicit — don't inherit surprises.     |
| `canvasWidth`  | `980`                   | Standard Slidev canvas.                 |
| `drawings.persist` | `false`             | Scribbles stay session-local.           |
| `fonts.*`      | Aspekta + Fira Code     | See below — **not** overridable.        |
| `themeConfig.surface` | `#0F172A` (dark) / `#fbfcff` (light) | Single slide background for the whole deck. |
| `themeConfig.surface-elev` | `#111827` (dark) / `#ffffff` (light) | Raised surfaces (code blocks, cards). |

### One surface for every slide

Every layout uses the same `--br-surface` background, so a deck never mixes two shades of the same hue. The surface flips automatically between dark and light modes.

Override per-deck if you need different surface colors:

```md
---
theme: 'slidev-theme-dginhac'
themeConfig:
  surface-light: '#fafafa'   # optional — lighter/warmer in light mode
  surface: '#0a0a0a'         # optional — darker/cooler in dark mode
---
```

## Layouts

| Layout       | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| `cover`      | Opening slide — BR logo on top, big title, optional video/image background via frontmatter |
| `intro`      | Secondary opener — no logo, just content (the watermark still anchors the brand) |
| `section`    | Section divider with uppercase eyebrow + large colored title |
| `statement`  | Single centered sentence — “statement”-mode slide          |
| `fact`       | Giant number + small caption for hero stats                |
| `quote`      | Branded pull-quote with author, role, and a colored slide wash |
| `end`        | Closing slide — logo + optional URL                        |
| `default`    | Standard content slide                                     |
| `two-cols`   | Slidev built-in — default slot + `::right::`               |
| `two-cols-header` | Slidev built-in — shared header + `::left::` / `::right::` (+ `::bottom::`) |
| `three-cols` | Three equal columns — default slot + `::center::` + `::right::` |
| `three-cols-header` | Shared header spans all 3 columns — `::left::` / `::center::` / `::right::` (+ `::bottom::`) |

### `cover`

Always renders the BR logo above the title. Supports an optional video/image background with overlay, applied via frontmatter.

```md
---
layout: cover
variant: auto        # 'auto' (default, flips with mode) | 'light' | 'dark'
align: left          # 'left' (default) | 'center'
background: /videos/bg-video.mp4   # optional — see <BRBackground>
overlay: 0.65                       # overlay opacity; default 0.55
---

# Your title

Subtitle or lede paragraph.
```

### `intro`

Minimal opener — no logo. Use an `<Eyebrow>` + `# Title` pattern for structure.

```md
---
layout: intro
---

<Eyebrow>Who should use it?</Eyebrow>

# Any BrokenRubik deck.

Lede paragraph here.
```

### `section`

```md
---
layout: section
eyebrow: "Foundations"
---

# Colors, type, tone
```

### `fact`

```md
---
layout: fact
---

# 150+

Projects delivered since 2017
```

### `quote`

Colored accent frame with a decorative quote mark, tinted whole-slide wash, and a brand-dot attribution. Bold any phrase inside the quote and it renders in the accent color.

```md
---
layout: quote
author: "Anonymous client"
role: "NetSuite admin"
color: primary     # 'primary' (default) | 'secondary' | 'accent'
---

The quote text goes here, with a **highlighted phrase** in the accent color.
```

### `end`

```md
---
layout: end
url: https://ginhac.dev
logo: true         # 'true' (default) | 'false' to hide
---

# Ready to present.
```

### `two-cols-header` / `three-cols-header`

Use these — not `two-cols` + text-as-heading — when the columns are **parallel ideas under a single topic**. The header spans all columns.

```md
---
layout: three-cols-header
---

<Eyebrow>Process</Eyebrow>

# Three phases

Lede paragraph that applies to all three columns.

::left::

<!-- column 1 -->

::center::

<!-- column 2 -->

::right::

<!-- column 3 -->

::bottom::

Optional footer row that spans all three columns.
```

`two-cols-header` ships with Slidev itself; `three-cols-header` is added by this theme.

## Components

All components are auto-registered by Slidev — use them inline in Markdown.

### `<Callout>`

Colored notification banner with left border.

```md
<Callout type="primary">Primary emphasis.</Callout>
<Callout type="secondary">Positive / tip.</Callout>
<Callout type="accent">Warning / risk.</Callout>
```

### `<Card>`

Bordered content block, good for grids of 2–4.

```md
<div class="grid grid-cols-3 gap-4">
  <Card type="primary" title="SuiteScript">Inside NetSuite, free, since 2019.</Card>
  <Card type="secondary" title="REST API">External systems over HTTP.</Card>
  <Card type="accent" title="ODBC / JDBC">For BI tools. License required.</Card>
</div>
```

Props: `type: 'primary' | 'secondary' | 'accent' | 'muted'` (default `muted`), `title?: string`.

### `<Step>`

Numbered step with a brand-colored circle.

```md
<Step :n="1">Install the theme</Step>
<Step :n="2">Set it in your frontmatter</Step>
<Step :n="3">Write your slides</Step>
```

Props: `n`, `color: 'primary' | 'secondary' | 'accent'`.

### `<DotItem>`

Bullet-dot list item colored by intent.

```md
<DotItem color="primary"><strong>Primary</strong> — default attention</DotItem>
<DotItem color="secondary"><strong>Secondary</strong> — a metric or success marker</DotItem>
<DotItem color="accent"><strong>Accent</strong> — a warning</DotItem>
```

### `<Stat>`

Big number with a small caption.

```md
<Stat value="2019" label="Available since" color="secondary" />
<Stat value="100K" label="Rows per query" color="primary" />
```

### `<Metric>`

Stat with optional delta, trend, and **count-up animation**.

```md
<Metric value="$4.2M" label="Revenue (Q1)" delta="+18%" trend="up" color="secondary" />
<Metric value="3.1d" label="Close time" delta="-22%" trend="down" />
<Metric value="150" label="Projects delivered" animate />
<Metric value="2026" color="primary" animate :from="2010" :duration="2000" />
```

Props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `value` | `string \| number` | — | Final value. Numeric portion is parsed for animation; prefix/suffix (e.g. `$`, `%`, `M`) are preserved. |
| `label` | `string` | — | Caption under the number. |
| `delta` | `string` | — | Delta pill (e.g. `+18%`, `-22%`). |
| `trend` | `'up' \| 'down' \| 'flat'` | `'flat'` | Arrow + color for the delta pill. |
| `color` | `'primary' \| 'secondary' \| 'accent'` | `'secondary'` | Color of the big number. |
| `animate` | `boolean` | `false` | Count up from `from` → `value` on slide enter. Resets when leaving. |
| `from` | `number` | `0` | Starting point of the count-up. |
| `duration` | `number` (ms) | `1500` | Duration of the animation. |

Uses `useIsSlideActive()` so the animation only fires when the slide is in view — and replays every time the user navigates back to it.

### `<Eyebrow>`

Uppercase label — useful in `default` slides to mimic the section style.

```md
<Eyebrow color="primary">Foundations</Eyebrow>
```

### `<Pill>`

Small rounded chip for inline labels.

```md
<Pill color="secondary">Free</Pill>
<Pill color="primary">Since 2019</Pill>
<Pill color="accent">Deprecated</Pill>
```

Props: `color: 'primary' | 'secondary' | 'accent' | 'muted'`.

### `<Kbd>`

Styled keyboard key.

```md
Press <Kbd>Shift</Kbd> + <Kbd>Space</Kbd> to go back.
```

### `<Compare>`

Side-by-side column comparison with a centered divider and brand-colored headers.

```md
<Compare leftLabel="Before" rightLabel="After">
  <template #left>
  - Point-and-click
  - One level of joins
  </template>
  <template #right>
  - Standard SQL
  - Unlimited joins
  </template>
</Compare>
```

Props: `leftLabel?`, `rightLabel?`, `leftColor` (default `'primary'`), `rightColor` (default `'secondary'`). Pass `'muted'` to de-emphasize one side.

### `<Timeline>` + `<TimelineItem>`

Vertical evolution timeline with color-coded year markers.

```md
<Timeline>
  <TimelineItem when="2019" color="primary">First milestone</TimelineItem>
  <TimelineItem when="2024" color="secondary">Recent change</TimelineItem>
  <TimelineItem when="2026" color="accent">Upcoming deprecation</TimelineItem>
</Timeline>
```

### `<Pros>` + `<Cons>`

Green-check / red-cross bulleted lists for contrasting options.

```md
<div class="grid grid-cols-2 gap-4">
<Pros title="What you gain">

- Unlimited joins
- Subqueries

</Pros>
<Cons title="What you lose">

- Point-and-click UI

</Cons>
</div>
```

### `<Checklist>`

Actionable check-style bullet list — for next-steps slides.

```md
<Checklist>

- Install the sandbox
- Import the sample data
- Run the first query

</Checklist>
```

### `<Tool>`

Logo + name card for an integration or third-party tool. Becomes a link when `href` is set. Falls back to a first-letter badge when `logo` is missing or fails to load.

```md
<!-- With a vendor favicon (works in both modes) -->
<Tool name="Celigo" logo="https://www.celigo.com/favicon.ico" note="Native SuiteQL + JDBC" href="https://celigo.com" />

<!-- No logo — first-letter fallback -->
<Tool name="Acme Integrations" note="In-house connector" />
```

Good logo sources:
- **Vendor favicons** (`https://<domain>/favicon.ico`) — always use their brand color, work in both light and dark modes.
- **A local SVG you ship in `public/logos/`** when you need full control.
- Avoid `?color=white` iconify URLs — they disappear on the light-mode background.

### `<Plan>`

Pricing / subscription card. Compose multiple `<Plan>` in a `grid-cols-2/3/4` for a side-by-side comparison. One plan can be `highlight`-ed as the recommended choice (branded badge, colored price, filled CTA).

```md
<div class="grid grid-cols-3 gap-4">

<Plan name="Starter" currency="$" price="0" period="/mo"
      description="For solo operators."
      cta="Start free">

- Up to 3 seats
- 1 GB storage
- Community support
- ~~Priority SLA~~

</Plan>

<Plan name="Pro" currency="$" price="29" period="/mo"
      description="For teams."
      cta="Start 14-day trial"
      ctaHref="https://brokenrubik.co"
      highlight>

- Unlimited seats
- 100 GB storage
- Priority support
- AI Connector included

</Plan>

<Plan name="Enterprise" price="Custom"
      description="For regulated teams."
      cta="Talk to sales"
      ctaHref="https://brokenrubik.co"
      color="accent">

- Dedicated environment
- SSO + audit log
- Named support engineer
- Custom SLA

</Plan>

</div>
```

Props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `name` | `string` | — | Plan name. |
| `price` | `string \| number` | — | Big price number. Pass `"Custom"` for contact-sales plans. |
| `currency` | `string` | — | Small prefix glyph: `"$"`, `"€"`, `"£"`. |
| `period` | `string` | — | Suffix after the price: `"/mo"`, `"per user / month"`. |
| `description` | `string` | — | Short tagline under the name. |
| `cta` | `string` | — | CTA button label. Omit to hide the button. |
| `ctaHref` | `string` | — | If set, CTA becomes a link opening in a new tab. |
| `highlight` | `boolean` | `false` | Raise as the recommended plan — colored badge, colored price, filled CTA. |
| `badge` | `string` | `"Most popular"` | Custom badge text when `highlight` is on. |
| `color` | `'primary' \| 'secondary' \| 'accent'` | `'primary'` | Accent color used for highlight, price, badge, CTA. |

**Feature list syntax** — the default slot is a Markdown list:
- Plain item → ✓ in brand color
- `~~strikethrough~~` → `—` in muted color (signals "not included")

### `<BRLogo>`

The BrokenRubik logo. Auto-swaps between the light and dark variants based on the current color scheme.

```md
<BRLogo class="h-10" />                    <!-- variant="auto", flips with mode -->
<BRLogo variant="light" class="h-10" />    <!-- locked white fill -->
<BRLogo variant="dark"  class="h-10" />    <!-- locked black fill -->
```

Props: `variant: 'auto' | 'light' | 'dark'` (default `'auto'`).

### `<BRBackground>` — image or video background

Drop behind any slide's content. Auto-detects video vs image from the file extension and renders an overlay that **flips with the color scheme**: black scrim in dark mode, white scrim in light mode.

```md
<!-- Video (autoplay, muted, loop, playsinline) -->
<BRBackground src="/theme/videos/bg-video.mp4" :overlay="0.65" />

<!-- Image, no overlay -->
<BRBackground src="/images/hero.jpg" :overlay="false" />

<!-- Custom overlay color (locks it, doesn't flip) -->
<BRBackground src="/images/product.jpg" :overlay="0.4" overlayColor="#9547FF" />
```

**Cover-layout shortcut** — skip the component and set it in frontmatter:

```md
---
layout: cover
background: /videos/bg-video.mp4
overlay: 0.65
---

# Big title on top of the video
```

Props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `src` | `string` | — | Path / URL to image or video. |
| `type` | `'auto' \| 'image' \| 'video'` | `'auto'` | Detection by extension: `.mp4`, `.webm`, `.mov`, `.ogv`, `.m4v` → video. |
| `overlay` | `boolean \| number` | `true` | `true` = 55% scrim, `false` = none, `0–1` = custom opacity. |
| `overlayColor` | `string` | `'auto'` | `'auto'` flips with mode; pass a CSS color to lock it. |
| `poster` | `string` | — | Poster image shown while the video loads. |
| `fit` | `'cover' \| 'contain'` | `'cover'` | `object-fit` for the media. |
| `z` | `number` | `0` | Z-index inside the slide; leave at default so content sits above. |

**Tips:**
- Videos must be **muted** for browsers to autoplay — the component sets this automatically.
- Large MP4s hurt cold-load time. Keep backgrounds under ~5 MB, or provide a `poster` image.

## Colors — never hard-code hex

The theme exposes brand colors through **three layers**; pick whichever fits the context. You should never need to type a hex value in a deck.

### 1. UnoCSS utility classes (use in Markdown)

Brand colors are defined as RGB triplet CSS variables (`--br-primary-rgb` etc.) that flip automatically between dark and light modes. Every utility class and every `var(--br-*)` lookup follows — no per-component override required.

| Class | Result |
|---|---|
| `text-primary`, `bg-primary`, `border-primary` | Brand purple (darker in light mode for contrast) |
| `text-secondary`, `bg-secondary`, `border-secondary` | Lime in dark mode, olive in light mode |
| `text-accent`, `bg-accent`, `border-accent` | Coral in dark mode, rose in light mode |
| `bg-primary/20`, `border-secondary/40`, `text-accent/70` | Same, with opacity modifier |
| `bg-brand-surface`, `bg-brand-black`, `border-brand-border` | Surface tokens — flip with mode |
| `text-brand-muted`, `bg-brand-faint`, `text-brand-heading`, `text-brand-fg` | Foreground tokens — flip with mode |
| `bg-primary-vivid`, `text-secondary-vivid`, `border-accent-vivid` | Full-saturation brand hue — **doesn't flip**. Use only when you need the bright color regardless of mode. |

Extra shortcuts defined in `uno.config.ts`:

| Shortcut | Expands to |
|---|---|
| `br-eyebrow` | `text-primary text-sm font-semibold uppercase tracking-widest` |
| `br-caption` | `text-brand-muted text-sm` |
| `br-ring-primary` / `-secondary` / `-accent` | Tinted background + ring border |

### 2. Slidev `themeConfig` CSS variables (use in raw CSS)

The theme sets these defaults so Slidev's built-in color utilities work out of the box:

```yaml
# Theme defaults — override per-deck if you really must
themeConfig:
  primary: '#9547FF'
  secondary: '#DFF95F'
  accent: '#FF707A'
```

→ exposes `--slidev-theme-primary`, `--slidev-theme-secondary`, `--slidev-theme-accent` on `:root`. Used by Slidev internals for the progress bar, selection, etc.

### 3. BR CSS variables (use inside component `<style>` blocks)

For the tinted / ring variants the utility classes don't cover:

```css
var(--br-primary)        var(--br-primary-soft)     var(--br-primary-ring)
var(--br-secondary)      var(--br-secondary-soft)   var(--br-secondary-ring)
var(--br-accent)         var(--br-accent-soft)      var(--br-accent-ring)
var(--br-black)          var(--br-surface)          var(--br-surface-elev)
var(--br-border)         var(--br-muted)            var(--br-faint)
var(--br-fg)             var(--br-fg-heading)       var(--br-fg-subtle)
var(--br-on-primary)     var(--br-on-secondary)     var(--br-on-accent)
```

### Rule of thumb

- **In Markdown or HTML in slides** → utility classes (`bg-primary/20`, `text-secondary`).
- **In a Vue component's scoped style** → `var(--br-*)`.
- **Never** → `text-[#9547FF]` or `background: #DFF95F`.

## Dark ↔ light theme

The theme ships **both** modes. Slidev's `D` shortcut toggles at runtime.

- Brand colors are RGB triplets that flip automatically. In light mode, lime (`#DFF95F`) darkens to olive (`#6B8000`), coral (`#FF707A`) darkens to rose (`#C9434D`), purple (`#9547FF`) darkens slightly to `#7A32E6`. Readability on white is preserved without losing the brand character.
- Surfaces, borders, muted text, and heading foreground flip too (`--br-surface`, `--br-border`, `--br-fg`, `--br-fg-heading`).
- The **BR logo auto-swaps** — `<BRLogo variant="auto">` (the default) and the watermark render the white-fill logo on dark surfaces and the black-fill logo on light ones.
- `<BRBackground>` **overlay flips** — the readability scrim is black in dark mode, white in light mode. Same darken-for-readability pattern, opposite color.
- **Mermaid** diagrams re-render on mode change with palette-appropriate node/text/edge colors (Slidev renders Mermaid inside a Shadow DOM, so the theme's `setup/mermaid.ts` reads the current mode at render time rather than relying on CSS).
- **Shiki** uses the `houston` theme in dark mode and `github-light` in light mode.
- Fixed contrast tokens (`--br-on-primary`, `--br-on-secondary`, `--br-on-accent`) **don't flip** — they guarantee readable text on solid brand-color fills (buttons, badges, pills) no matter the theme.

To lock a deck to one mode, set `colorSchema: dark` or `colorSchema: light` in headmatter.

## Fonts

Aspekta (weights 300–800) is bundled and served from `/fonts/Aspekta-*.woff2`. Fira Code for monospace is loaded via Slidev's font loader. Both are applied to every text element with `!important`, so decks can't drift off-brand.

## Watermark

A faint BrokenRubik logo sits in the bottom-right corner of every content slide (implemented via `global-bottom.vue`). It's **hidden on `cover` and `end`** — those layouts already show the full logo. Visible on `intro`, `section`, `statement`, `fact`, `quote`, `default`, `two-cols*`, `three-cols*`. The watermark is purely decorative (`aria-hidden`, `pointer-events: none`) and auto-swaps the light/dark logo with the color scheme.

## Assets bundled with the theme

- `/images/br-light-logo.svg` — white fill, for dark backgrounds
- `/images/br-dark-logo.svg` — black fill, for light backgrounds
- `/fonts/Aspekta-{300..800}.woff2` — six Aspekta weights
- `/videos/bg-video.mp4` — BR isometric-cubes background (used by the cover demo)
- `/favicon.ico` — the BrokenRubik favicon

Reference any of these via the `/theme/` prefix from inside a deck (Slidev copies a theme's `public/*` under `/theme/` when the theme is installed from npm):

```md
<img src="/theme/images/br-light-logo.svg" />
<BRBackground src="/theme/videos/bg-video.mp4" />
```

For **your own** deck assets (a custom hero image, product screenshot, etc.), drop them in your project's `/public/` and reference them at their normal absolute path (`/my-image.jpg`).

## Local development

```bash
pnpm install
pnpm run dev        # live-reload example.md
pnpm run build      # build static SPA
pnpm run export     # export example.md → PDF
pnpm run screenshot # export example.md → PNGs
```

## License

MIT © BrokenRubik
