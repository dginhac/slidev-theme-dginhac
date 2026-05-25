<script setup lang="ts">
withDefaults(
  defineProps<{
    n?: number | string
    color?: 'primary' | 'secondary' | 'accent'
    size?: string
  }>(),
  { color: 'primary' },
)
</script>

<template>
  <div class="br-step" :class="size">
    <div class="br-step-bullet" :class="`br-step-${color}`">
      <slot name="n">{{ n }}</slot>
    </div>
    <div class="br-step-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.br-step {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.br-step-bullet {
  width: 1.75em;
  height: 1.75em;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85em;
  color: var(--br-on-secondary);
  flex-shrink: 0;
}
.br-step-primary { background: var(--br-primary); box-shadow: 0 0 12px var(--br-primary-ring); }
.br-step-secondary { background: var(--br-secondary); }
.br-step-accent { background: var(--br-accent); }
.br-step-body { padding-top: 0.1em; line-height: 1.55; }
</style>
