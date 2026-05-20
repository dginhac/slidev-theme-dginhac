<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'accent'
  }>(),
  { color: 'primary' },
)
</script>

<template>
  <div class="br-dot-item">
    <div class="br-dot" :class="`br-dot-${color}`"></div>
    <div class="br-dot-body"><slot /></div>
  </div>
</template>

<style scoped>
.br-dot-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.br-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  margin-top: 0.55rem;
  flex-shrink: 0;
}
.br-dot-primary { background: var(--br-primary); }
.br-dot-secondary { background: var(--br-secondary); }
.br-dot-accent { background: var(--br-accent); }
.br-dot-body { line-height: 1.55; }
</style>
