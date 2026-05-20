<template>
  <div class="br-checklist"><slot /></div>
</template>

<style scoped>
.br-checklist :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}
.br-checklist :deep(ul li) {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}
.br-checklist :deep(ul li)::marker { content: ''; }
.br-checklist :deep(ul li)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.25rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 4px;
  border: 1.5px solid var(--br-primary);
  background: var(--br-primary-soft);
}
.br-checklist :deep(ul li)::after {
  content: '';
  position: absolute;
  left: 0.4rem;
  top: 0.5rem;
  width: 0.35rem;
  height: 0.65rem;
  border-right: 2px solid var(--br-secondary);
  border-bottom: 2px solid var(--br-secondary);
  transform: rotate(45deg);
}
</style>
