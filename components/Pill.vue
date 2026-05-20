<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'accent' | 'muted'
  }>(),
  { color: 'primary' },
)
</script>

<template>
  <span class="br-pill" :class="`br-pill-${color}`"><slot /></span>
</template>

<style scoped>
.br-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.15rem 0.55rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.5;
  white-space: nowrap;
  vertical-align: 0.1em;
}
.br-pill-primary {
  background: var(--br-primary-soft);
  color: var(--br-primary);
  border: 1px solid var(--br-primary-ring);
}
.br-pill-secondary {
  background: var(--br-secondary-soft);
  color: var(--br-secondary);
  border: 1px solid var(--br-secondary-ring);
}
.br-pill-accent {
  background: var(--br-accent-soft);
  color: var(--br-accent);
  border: 1px solid var(--br-accent-ring);
}
.br-pill-muted {
  background: var(--br-faint);
  color: var(--br-muted);
  border: 1px solid var(--br-border);
}
</style>
