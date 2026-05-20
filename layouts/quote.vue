<script setup lang="ts">
withDefaults(
  defineProps<{
    author?: string
    role?: string
    /** Accent color of the quote frame + slide wash. */
    color?: 'primary' | 'secondary' | 'accent'
  }>(),
  { color: 'primary' },
)
</script>

<template>
  <div
    class="slidev-layout quote h-full w-full px-16 py-12 flex items-center"
    :class="`br-quote-slide-${color}`"
  >
    <div class="max-w-4xl mx-auto w-full">
      <div class="br-quote" :class="`br-quote-${color}`">
        <div class="br-quote-mark" aria-hidden="true">&ldquo;</div>
        <div class="br-quote-body">
          <slot />
        </div>
        <div v-if="author" class="br-quote-attr">
          <span class="br-quote-dot" />
          <span class="br-quote-author">{{ author }}</span>
          <span v-if="role" class="br-quote-role">— {{ role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Whole-slide color wash — radial gradient that fades across the canvas. */
.slidev-layout.quote {
  background-color: var(--br-surface);
  background-repeat: no-repeat;
}
.slidev-layout.br-quote-slide-primary {
  background-image:
    radial-gradient(ellipse 90% 120% at -10% 50%, rgba(149, 71, 255, 0.28) 0%, transparent 55%),
    radial-gradient(ellipse 60% 100% at 110% 50%, rgba(223, 249, 95, 0.06) 0%, transparent 60%);
}
.slidev-layout.br-quote-slide-secondary {
  background-image:
    radial-gradient(ellipse 90% 120% at -10% 50%, rgba(223, 249, 95, 0.22) 0%, transparent 55%),
    radial-gradient(ellipse 60% 100% at 110% 50%, rgba(149, 71, 255, 0.06) 0%, transparent 60%);
}
.slidev-layout.br-quote-slide-accent {
  background-image:
    radial-gradient(ellipse 90% 120% at -10% 50%, rgba(255, 112, 122, 0.24) 0%, transparent 55%),
    radial-gradient(ellipse 60% 100% at 110% 50%, rgba(223, 249, 95, 0.06) 0%, transparent 60%);
}

/* Quote block — cleaner now that the wash carries the color. */
.br-quote {
  position: relative;
  padding: 2.5rem 2.5rem 2.25rem 3rem;
  border-left: 3px solid var(--bar);
}

.br-quote-primary   { --bar: var(--br-primary);   --mark: var(--br-secondary); --dot: var(--br-primary);   --accent: var(--br-secondary); --glow: rgba(149, 71, 255, 0.45); }
.br-quote-secondary { --bar: var(--br-secondary); --mark: var(--br-primary);   --dot: var(--br-secondary); --accent: var(--br-secondary); --glow: rgba(223, 249, 95, 0.35); }
.br-quote-accent    { --bar: var(--br-accent);    --mark: var(--br-secondary); --dot: var(--br-accent);    --accent: var(--br-accent);    --glow: rgba(255, 112, 122, 0.4); }

.br-quote-mark {
  position: absolute;
  top: -1.75rem;
  left: 2rem;
  font-family: 'Aspekta', serif !important;
  font-size: 8rem;
  line-height: 1;
  color: var(--mark);
  font-weight: 800;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 0 40px var(--glow);
}

.br-quote-body {
  position: relative;
  font-size: 2rem;
  line-height: 1.35;
  font-weight: 500;
  color: var(--br-fg-heading);
  letter-spacing: -0.005em;
}

.br-quote-body :deep(strong) {
  color: var(--accent);
  font-weight: 600;
}

.br-quote-attr {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.75rem;
  font-size: 1rem;
}

.br-quote-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: var(--dot);
  box-shadow: 0 0 14px var(--glow);
  flex-shrink: 0;
}

.br-quote-author {
  color: var(--br-fg-heading);
  font-weight: 600;
}

.br-quote-role {
  color: var(--br-muted);
}
</style>
