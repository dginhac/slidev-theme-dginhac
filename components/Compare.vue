<script setup lang="ts">
withDefaults(
  defineProps<{
    leftLabel?: string
    rightLabel?: string
    leftColor?: 'primary' | 'secondary' | 'accent' | 'muted'
    rightColor?: 'primary' | 'secondary' | 'accent' | 'muted'
  }>(),
  { leftColor: 'primary', rightColor: 'secondary' },
)
</script>

<template>
  <div class="br-compare">
    <div class="br-compare-col">
      <div v-if="leftLabel" class="br-compare-label" :class="`br-compare-label-${leftColor}`">
        {{ leftLabel }}
      </div>
      <slot name="left" />
    </div>
    <div class="br-compare-divider" />
    <div class="br-compare-col">
      <div v-if="rightLabel" class="br-compare-label" :class="`br-compare-label-${rightColor}`">
        {{ rightLabel }}
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.br-compare {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: stretch;
}
.br-compare-col { padding: 0.25rem 0.25rem; }
.br-compare-divider {
  width: 1px;
  background: var(--br-border);
}
.br-compare-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.br-compare-label-primary { color: var(--br-primary); }
.br-compare-label-secondary { color: var(--br-secondary); }
.br-compare-label-accent { color: var(--br-accent); }
.br-compare-label-muted { color: var(--br-muted); }
</style>
