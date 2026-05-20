<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div class="br-pros">
    <div v-if="title" class="br-pros-title">{{ title }}</div>
    <div class="br-pros-body"><slot /></div>
  </div>
</template>

<style scoped>
.br-pros {
  padding: 1rem 1.15rem;
  border-radius: 6px;
  background: var(--br-secondary-soft);
  border: 1px solid var(--br-secondary-ring);
  border-left: 3px solid var(--br-secondary);
}
.br-pros-title {
  color: var(--br-secondary);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
}
.br-pros-body :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}
.br-pros-body :deep(ul li) {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.35rem;
  line-height: 1.45;
}
.br-pros-body :deep(ul li)::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--br-secondary);
  font-weight: 700;
}
.br-pros-body :deep(ul li)::marker { content: ''; }
</style>
