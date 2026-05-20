<script setup lang="ts">
import BRLogo from '../components/BRLogo.vue'

withDefaults(
  defineProps<{
    url?: string
    logo?: boolean
  }>(),
  { logo: true },
)
</script>

<template>
  <div class="slidev-layout end">
    <div class="max-w-4xl mx-auto flex flex-col items-center">
      <slot />
      <BRLogo v-if="logo" variant="auto" class="h-8 mt-12 mb-3" />
      <a
        v-if="url"
        :href="url"
        target="_blank"
        class="text-base"
        :style="{ color: 'var(--br-muted)' }"
      >
        {{ url.replace(/^https?:\/\//, '') }}
      </a>
    </div>
  </div>
</template>
