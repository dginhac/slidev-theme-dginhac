<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'accent'
  }>(),
  { color: 'primary' },
)
</script>

<template>
  <div class="br-eyebrow" :class="`br-eyebrow-${color}`">
    <slot />
  </div>
</template>

<style scoped>
.br-eyebrow {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.br-eyebrow-primary { color: var(--br-primary); }
.br-eyebrow-secondary { color: var(--br-secondary); }
.br-eyebrow-accent { color: var(--br-accent); }
</style>
