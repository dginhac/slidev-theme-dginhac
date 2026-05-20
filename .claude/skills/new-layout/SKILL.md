---
name: new-layout
description: Scaffold a new Slidev layout Vue component and register it in package.json aliases
---

Create a new Slidev layout for the slidev-theme-dginhac project.

## Required argument

The user must supply a layout name (kebab-case). Infer it from the invocation message.

## Two files to create/edit

### 1. `layouts/<name>.vue`

**Script block:**
- `<script setup lang="ts">` at the top
- Use `withDefaults(defineProps<{ ... }>(), { ... })` for props with defaults; bare `defineProps<{ ... }>()` for required-only or no props
- Layouts typically accept: optional `class?`, optional `layoutClass?` (for the outer wrapper), and any semantic props specific to the layout's purpose
- No Vue imports needed — Slidev's Vite plugin handles them

**Template block:**
- Root `<div>` must have `class="slidev-layout <name>"` (the second class is the layout slug, e.g., `slidev-layout fact`)
- Use UnoCSS utility classes for spacing and flex/grid — do not add a `<style>` block just for layout primitives
- Named slots use `<slot name="..." />` syntax; the default slot is `<slot />`
- Use `:style` or `:class` bindings that reference CSS token vars for any dynamic theming
- No hardcoded hex values; use `var(--br-*)` tokens (see list below)

**Style block:**
- Only add `<style scoped>` if the layout needs non-trivial styles that UnoCSS utilities cannot express
- Token vars available — same set as components (see below)

## Available CSS tokens

```
--br-primary          --br-primary-soft     --br-primary-ring
--br-secondary        --br-secondary-soft   --br-secondary-ring
--br-accent           --br-accent-soft      --br-accent-ring
--br-surface          --br-surface-elev     --br-border
--br-fg               --br-fg-heading       --br-fg-subtle
--br-muted            --br-faint
```

## Reference patterns

**Simple full-slide layout (like `section`):**
```vue
<script setup lang="ts">
defineProps<{
  eyebrow?: string
}>()
</script>

<template>
  <div class="slidev-layout my-layout h-full flex flex-col justify-center px-14 py-10">
    <div v-if="eyebrow" class="text-sm font-semibold tracking-widest uppercase mb-4"
         :style="{ color: 'var(--br-primary)' }">
      {{ eyebrow }}
    </div>
    <slot />
  </div>
</template>
```

**Multi-slot layout (like `three-cols`):**
```vue
<script setup lang="ts">
const props = defineProps({
  class: { type: String },
  layoutClass: { type: String },
})
</script>

<template>
  <div class="slidev-layout my-layout w-full h-full grid gap-6" :class="props.layoutClass">
    <div :class="props.class"><slot /></div>
    <div :class="props.class"><slot name="right" /></div>
  </div>
</template>
```

### 2. `package.json` — add alias

Add an entry under `slidev.aliases.layouts`:

```json
"<name>": "./layouts/<name>.vue"
```

Read the current `package.json` first, then add the alias in sorted order relative to the existing entries.

## After creating/editing the files

Tell the user:
- Both files touched and what changed in each
- What props the layout exposes
- The frontmatter to use it in a slide: `layout: <name>`
- Any named slots and how to invoke them (`::slotname::` syntax in slide markdown)
