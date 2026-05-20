<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  name: string
  logo?: string
  href?: string
  note?: string
}>()

const logoError = ref(false)
const initial = computed(() => props.name.trim().charAt(0).toUpperCase())
const showLogo = computed(() => !!props.logo && !logoError.value)
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="href ? '_blank' : undefined"
    class="br-tool"
  >
    <img
      v-if="showLogo"
      :src="logo"
      :alt="name"
      class="br-tool-logo"
      @error="logoError = true"
    />
    <div v-else class="br-tool-initial">{{ initial }}</div>
    <div class="br-tool-body">
      <div class="br-tool-name">{{ name }}</div>
      <div v-if="note" class="br-tool-note">{{ note }}</div>
    </div>
  </component>
</template>

<style scoped>
.br-tool {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.75rem 0.9rem;
  border-radius: 6px;
  background: var(--br-faint);
  border: 1px solid var(--br-border);
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s, background 0.15s;
}
.br-tool:hover {
  border-color: var(--br-primary-ring);
  background: var(--br-primary-soft);
}
.br-tool-logo {
  height: 1.6rem;
  width: 1.6rem;
  object-fit: contain;
  flex-shrink: 0;
}
.br-tool-initial {
  height: 1.6rem;
  width: 1.6rem;
  display: grid;
  place-items: center;
  border-radius: 6px;
  background: var(--br-primary-soft);
  color: var(--br-primary);
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
  line-height: 1;
}
.br-tool-name {
  font-weight: 600;
  color: var(--br-fg-heading);
  line-height: 1.2;
}
.br-tool-note {
  font-size: 0.75rem;
  color: var(--br-muted);
  margin-top: 0.1rem;
}
</style>
