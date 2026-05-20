<template>
  <div class="br-timeline">
    <slot />
  </div>
</template>

<style scoped>
.br-timeline {
  position: relative;
  padding-left: 1.25rem;
}
.br-timeline::before {
  content: '';
  position: absolute;
  left: 0.35rem;
  top: 0.25rem;
  bottom: 0.25rem;
  width: 1px;
  background: linear-gradient(to bottom, var(--br-primary-ring), var(--br-border));
}
</style>
