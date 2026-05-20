<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Path or URL to an image or video. */
    src: string
    /** Force the media type. Defaults to auto-detect from extension. */
    type?: 'auto' | 'image' | 'video'
    /**
     * Readability overlay.
     * - `true` (default) → auto: black scrim in dark mode, white scrim in light mode (~55% alpha)
     * - `false` → no overlay
     * - number (0–1) → custom opacity, color still flips by mode
     */
    overlay?: boolean | number
    /**
     * Overlay color. Defaults to `'auto'` which flips: black in dark mode, white in light mode.
     * Pass an explicit CSS color (e.g. `'#9547FF'`) to lock one color.
     */
    overlayColor?: string
    /** Poster image shown while a video loads. */
    poster?: string
    /** Fit mode for the media. */
    fit?: 'cover' | 'contain'
    /** Z-index inside the slide. Default 0 (behind slide content). */
    z?: number
  }>(),
  {
    type: 'auto',
    overlay: true,
    overlayColor: 'auto',
    fit: 'cover',
    z: 0,
  },
)

const kind = computed<'image' | 'video'>(() => {
  if (props.type !== 'auto') return props.type
  return /\.(mp4|webm|mov|ogv|m4v)(\?|#|$)/i.test(props.src) ? 'video' : 'image'
})

// Resolve root-absolute paths (e.g. `/videos/bg.mp4`) against Vite's BASE_URL
// so backgrounds work when the deck is deployed under a sub-path like GitHub Pages.
function withBase(path: string | undefined) {
  if (!path) return path
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  if (!path.startsWith('/')) return path
  const base = import.meta.env.BASE_URL || '/'
  if (base === '/' || path.startsWith(base)) return path
  return base.replace(/\/$/, '') + path
}

const resolvedSrc = computed(() => withBase(props.src))
const resolvedPoster = computed(() => withBase(props.poster))

const overlayAlpha = computed(() => {
  if (props.overlay === false) return 0
  if (props.overlay === true) return 0.55
  const n = Number(props.overlay)
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0.55
})

const resolvedOverlayColor = computed(() =>
  props.overlayColor === 'auto' ? 'var(--br-surface)' : props.overlayColor,
)
</script>

<template>
  <div class="br-bg" :style="{ zIndex: z }">
    <video
      v-if="kind === 'video'"
      :src="resolvedSrc"
      :poster="resolvedPoster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="br-bg-media"
      :style="{ objectFit: fit }"
    />
    <img
      v-else
      :src="resolvedSrc"
      alt=""
      aria-hidden="true"
      class="br-bg-media"
      :style="{ objectFit: fit }"
    />
    <div
      v-if="overlayAlpha > 0"
      class="br-bg-overlay"
      :style="{ background: resolvedOverlayColor, opacity: overlayAlpha }"
    />
  </div>
</template>

<style scoped>
.br-bg,
.br-bg-media,
.br-bg-overlay {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
.br-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.br-bg-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.br-bg-overlay {
  position: absolute;
  /* Extend 1px past every edge — prevents subpixel gaps where the media
     and overlay rasterize differently. The parent's overflow:hidden clips. */
  inset: -1px;
}
</style>
