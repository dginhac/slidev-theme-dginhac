---
name: new-component
description: Scaffold a new Vue component following dginhac theme conventions and design tokens
---

Create a new Vue SFC at `components/<ComponentName>.vue` for the slidev-theme-dginhac project.

## Required argument

The user must supply a component name (PascalCase). Infer it from the invocation message.

## Strict conventions

**Script block:**
- Always `<script setup lang="ts">` at the top
- Use `withDefaults(defineProps<{ ... }>(), { ... })` when there are props with defaults; bare `defineProps<{ ... }>()` when there are not
- Color/type variants always typed as `'primary' | 'secondary' | 'accent'` (add `'muted'` if a neutral variant makes sense for the component)
- No other imports unless the component genuinely needs them

**Template block:**
- Root element uses BEM-style class `br-<componentname>` (lowercase, no hyphens unless the name has them)
- Dynamic variant class via `:class="\`br-<componentname>-${type}\`"`
- Slot content via `<slot />`
- No hardcoded colors or inline styles in the template

**Style block:**
- Always `<style scoped>`
- No hardcoded hex or rgb values — use only CSS variables from the token set below
- Use `-soft` and `-ring` variants for backgrounds and borders
- Follow the BEM class naming from the template

## Available CSS tokens (from styles/tokens.css)

```
--br-primary          --br-primary-soft     --br-primary-ring
--br-secondary        --br-secondary-soft   --br-secondary-ring
--br-accent           --br-accent-soft      --br-accent-ring
--br-surface          --br-surface-elev     --br-border
--br-fg               --br-fg-heading       --br-fg-subtle
--br-muted            --br-faint
--br-on-primary       --br-on-secondary     --br-on-accent
```

## Reference patterns

**Color-variant component (like Callout, Card):**
```vue
<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'accent'
  }>(),
  { type: 'primary' },
)
</script>

<template>
  <div class="br-widget" :class="`br-widget-${type}`">
    <slot />
  </div>
</template>

<style scoped>
.br-widget {
  padding: 1rem;
  border-radius: 6px;
}
.br-widget-primary {
  background-color: var(--br-primary-soft);
  border: 1px solid var(--br-primary-ring);
}
.br-widget-secondary {
  background-color: var(--br-secondary-soft);
  border: 1px solid var(--br-secondary-ring);
}
.br-widget-accent {
  background-color: var(--br-accent-soft);
  border: 1px solid var(--br-accent-ring);
}
</style>
```

**No-variant component (like Checklist, Timeline):**
```vue
<script setup lang="ts">
// no props needed
</script>

<template>
  <div class="br-widget">
    <slot />
  </div>
</template>

<style scoped>
.br-widget {
  /* styles using token vars */
}
</style>
```

## After creating the file

Tell the user:
- The file path created
- What props it exposes
- A minimal usage example for a slide markdown block
- That components are auto-imported by Slidev — no registration needed
