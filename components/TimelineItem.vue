<script setup lang="ts">
withDefaults(
  defineProps<{
    when?: string | number
    color?: 'primary' | 'secondary' | 'accent'
  }>(),
  { color: 'primary' },
)
</script>

<template>
  <div class="br-timeline-item">
    <div class="br-timeline-dot" :class="`br-timeline-dot-${color}`" />
    <div class="br-timeline-body">
      <div v-if="when !== undefined" class="br-timeline-when" :class="`br-timeline-when-${color}`">
        {{ when }}
      </div>
      <div class="br-timeline-content"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.br-timeline-item {
  position: relative;
  margin-bottom: 1.25rem;
}
.br-timeline-dot {
  position: absolute;
  left: -1.25rem;
  top: 0.45rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  border: 2px solid var(--br-surface);
}
.br-timeline-dot-primary { background: var(--br-primary); box-shadow: 0 0 0 1px var(--br-primary); }
.br-timeline-dot-secondary { background: var(--br-secondary); box-shadow: 0 0 0 1px var(--br-secondary); }
.br-timeline-dot-accent { background: var(--br-accent); box-shadow: 0 0 0 1px var(--br-accent); }
.br-timeline-when {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  margin-bottom: 0.15rem;
}
.br-timeline-when-primary { color: var(--br-primary); }
.br-timeline-when-secondary { color: var(--br-secondary); }
.br-timeline-when-accent { color: var(--br-accent); }
.br-timeline-content { line-height: 1.5; }
</style>
