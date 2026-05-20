<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'accent' | 'muted'
    title?: string
  }>(),
  { type: 'muted' },
)
</script>

<template>
  <div class="br-card" :class="`br-card-${type}`">
    <div v-if="title" class="br-card-title">{{ title }}</div>
    <slot />
  </div>
</template>

<style scoped>
.br-card {
  padding: 1rem 1.25rem;
  border-radius: 6px;
  height: 100%;
}
.br-card-title {
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
  color: var(--br-fg-heading);
}
.br-card-primary {
  background-color: var(--br-primary-soft);
  border: 1px solid var(--br-primary-ring);
}
.br-card-primary .br-card-title { color: var(--br-secondary); }
.br-card-secondary {
  background-color: var(--br-secondary-soft);
  border: 1px solid var(--br-secondary-ring);
}
.br-card-secondary .br-card-title { color: var(--br-secondary); }
.br-card-accent {
  background-color: var(--br-accent-soft);
  border: 1px solid var(--br-accent-ring);
}
.br-card-accent .br-card-title { color: var(--br-accent); }
.br-card-muted {
  background-color: var(--br-faint);
  border: 1px solid var(--br-border);
}
</style>
