<script setup lang="ts">
defineProps<{
  eyebrow?: string
}>()
</script>

<template>
  <div class="slidev-layout section">
    <div class="max-w-4xl">
      <div
        v-if="eyebrow"
        class="text-base font-semibold tracking-widest uppercase mb-4"
        :style="{ color: 'var(--br-primary)' }"
      >
        {{ eyebrow }}
      </div>
      <slot />
    </div>
  </div>
</template>
