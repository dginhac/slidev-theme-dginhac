<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'accent'
  }>(),
  { type: 'primary' },
)
</script>

<template>
  <div class="br-callout" :class="`br-callout-${type}`">
    <slot />
  </div>
</template>

<style scoped>
.br-callout {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.95em;
  line-height: 1.5;
}
.br-callout-primary {
  background-color: var(--br-primary-soft);
  border: 1px solid var(--br-primary-ring);
  border-left: 3px solid var(--br-primary);
}
.br-callout-secondary {
  background-color: var(--br-secondary-soft);
  border: 1px solid var(--br-secondary-ring);
  border-left: 3px solid var(--br-secondary);
}
.br-callout-accent {
  background-color: var(--br-accent-soft);
  border: 1px solid var(--br-accent-ring);
  border-left: 3px solid var(--br-accent);
}
</style>
