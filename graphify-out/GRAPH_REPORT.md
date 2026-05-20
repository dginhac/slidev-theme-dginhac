# Graph Report - .  (2026-05-19)

## Corpus Check
- Corpus is ~8,477 words - fits in a single context window. You may not need a graph.

## Summary
- 93 nodes · 75 edges · 51 communities (38 shown, 13 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Theme Components & Identity|Theme Components & Identity]]
- [[_COMMUNITY_Design System & Theming|Design System & Theming]]
- [[_COMMUNITY_Light Logo Assets|Light Logo Assets]]
- [[_COMMUNITY_Dark Logo Assets|Dark Logo Assets]]
- [[_COMMUNITY_Metric Animation Logic|Metric Animation Logic]]
- [[_COMMUNITY_Content Demo Layouts|Content Demo Layouts]]
- [[_COMMUNITY_Timeline Components|Timeline Components]]
- [[_COMMUNITY_ProsCons Components|Pros/Cons Components]]
- [[_COMMUNITY_Statement Layout Doc|Statement Layout Doc]]
- [[_COMMUNITY_Default Layout Doc|Default Layout Doc]]
- [[_COMMUNITY_Step Component Doc|Step Component Doc]]
- [[_COMMUNITY_DotItem Component Doc|DotItem Component Doc]]
- [[_COMMUNITY_Pill Component Doc|Pill Component Doc]]
- [[_COMMUNITY_Kbd Component Doc|Kbd Component Doc]]
- [[_COMMUNITY_Compare Component Doc|Compare Component Doc]]
- [[_COMMUNITY_Checklist Component Doc|Checklist Component Doc]]
- [[_COMMUNITY_Tool Component Doc|Tool Component Doc]]
- [[_COMMUNITY_Plan Component Doc|Plan Component Doc]]

## God Nodes (most connected - your core abstractions)
1. `README.md — Theme Documentation` - 18 edges
2. `slidev-theme-dginhac` - 13 edges
3. `Dual Color Scheme (dark/light mode)` - 8 edges
4. `BR Light Logo` - 8 edges
5. `CLAUDE.md — Developer Reference` - 7 edges
6. `BR Dark Logo` - 6 edges
7. `example.md — Theme Demo Presentation` - 5 edges
8. `BRLogo component` - 5 edges
9. `Design Tokens (CSS variables)` - 5 edges
10. `cover layout` - 4 edges

## Surprising Connections (you probably didn't know these)
- `BRLogo Vue Component` --references--> `BR Dark Logo`  [INFERRED]
  components/BRLogo.vue → assets/images/br-dark-logo.svg
- `example.md — Theme Demo Presentation` --demonstrates--> `slidev-theme-dginhac`  [EXTRACTED]
  example.md → README.md
- `example.md — Theme Demo Presentation` --uses--> `cover layout`  [EXTRACTED]
  example.md → README.md
- `example.md — Theme Demo Presentation` --uses--> `section layout`  [EXTRACTED]
  example.md → README.md
- `example.md — Theme Demo Presentation` --uses--> `fact layout`  [EXTRACTED]
  example.md → README.md

## Hyperedges (group relationships)
- **Dark/Light Mode Flip System** — dark_light_mode, design_tokens, component_brlogo, component_brbackground, mermaid_setup, shiki_setup [INFERRED 0.95]
- **Three-Layer Brand Color System** — color_system, design_tokens, unocss_config, component_callout, component_card, component_pill [EXTRACTED 1.00]
- **Cover Layout Assembly** — layout_cover, component_brlogo, component_brbackground, dark_light_mode [EXTRACTED 1.00]

## Communities (51 total, 13 thin omitted)

### Community 0 - "Theme Components & Identity"
Cohesion: 0.18
Nodes (15): BrokenRubik Theme Inspiration, BRBackground component, BRLogo component, Callout component, Card component, Metric component, Stat component, global-bottom.vue Watermark (+7 more)

### Community 1 - "Design System & Theming"
Cohesion: 0.38
Nodes (11): CLAUDE.md — Developer Reference, Three-Layer Color System, Dual Color Scheme (dark/light mode), Design Tokens (CSS variables), Aspekta Typeface, JetBrains Mono Variable, Mermaid Diagram Setup, Seriph Theme Inspiration (+3 more)

### Community 2 - "Light Logo Assets"
Cohesion: 0.53
Nodes (6): BR Light Logo, White (#FFFFFF), BR Geometric Icon Mark, SVG Vector Format, Viewbox 1392.6x383.8, DGinhac Wordmark

### Community 3 - "Dark Logo Assets"
Cohesion: 0.33
Nodes (6): BR Dark Logo, Black (#000000), Rectangular Badge Mark, Small Square / Secondary Mark, DGinhac Wordmark (text lettering), BRLogo Vue Component

### Community 5 - "Content Demo Layouts"
Cohesion: 0.5
Nodes (4): Eyebrow component, example.md — Theme Demo Presentation, fact layout, section layout

## Knowledge Gaps
- **27 isolated node(s):** `intro layout`, `statement layout`, `quote layout`, `default layout`, `Callout component` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README.md — Theme Documentation` connect `Theme Components & Identity` to `Design System & Theming`, `Content Demo Layouts`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `slidev-theme-dginhac` connect `Design System & Theming` to `Theme Components & Identity`, `Content Demo Layouts`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `Dual Color Scheme (dark/light mode)` connect `Design System & Theming` to `Theme Components & Identity`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `BR Light Logo` (e.g. with `BR Geometric Icon Mark` and `DGinhac Wordmark`) actually correct?**
  _`BR Light Logo` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `intro layout`, `statement layout`, `quote layout` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._