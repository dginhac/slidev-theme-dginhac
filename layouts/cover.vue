<script setup lang="ts">
import BRLogo from '../components/BRLogo.vue'
import BRBackground from '../components/BRBackground.vue'

withDefaults(
  defineProps<{
    align?: 'left' | 'center'
    variant?: 'light' | 'dark' | 'auto'
    background?: string
    overlay?: boolean | number
    overlayColor?: string
    poster?: string
  }>(),
  { align: 'left', variant: 'auto', overlay: true },
)
</script>

<template>
  <div class="slidev-layout cover h-full w-full">
    <BRBackground
      v-if="background"
      :src="background"
      :overlay="overlay"
      :overlayColor="overlayColor"
      :poster="poster"
    />
    <div class="relative z-10 h-full w-full px-14 py-12 flex">
      <div class="my-auto" :class="align === 'center' ? 'text-center mx-auto' : ''">
        <BRLogo
          :variant="variant"
          class="h-10 mb-10"
          :class="align === 'center' ? 'mx-auto' : ''"
        />
        <slot />
      </div>
    </div>
  </div>
</template>
