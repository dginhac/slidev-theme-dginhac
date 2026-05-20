<script setup lang="ts">
withDefaults(
  defineProps<{
    value: string | number
    label?: string
    color?: 'primary' | 'secondary' | 'accent'
  }>(),
  { color: 'secondary' },
)
</script>

<template>
  <div class="br-stat">
    <div class="br-stat-value" :class="`br-stat-${color}`">{{ value }}</div>
    <div v-if="label" class="br-stat-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.br-stat {
  text-align: center;
}
.br-stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}
.br-stat-primary { color: var(--br-primary); }
.br-stat-secondary { color: var(--br-secondary); }
.br-stat-accent { color: var(--br-accent); }
.br-stat-label {
  font-size: 0.8rem;
  color: var(--br-muted);
  margin-top: 0.35rem;
}
</style>
