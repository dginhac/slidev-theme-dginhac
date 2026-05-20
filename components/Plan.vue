<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    /** Price display — number or string. Use with `currency` to prepend a symbol. */
    price?: string | number
    /** Currency prefix (e.g. "$", "€"). Omit if your `price` already includes it. */
    currency?: string
    /** Period suffix ("/mo", "per user / month", "one-time"). */
    period?: string
    /** One-line tagline under the plan name. */
    description?: string
    /** CTA button label. */
    cta?: string
    /** CTA URL — if present, the button becomes an `<a target="_blank">`. */
    ctaHref?: string
    /** Raise this plan visually as the recommended one. */
    highlight?: boolean
    /** Badge text shown on highlighted plans (default: "Most popular"). */
    badge?: string
    /** Accent color when highlighted. */
    color?: 'primary' | 'secondary' | 'accent'
  }>(),
  { highlight: false, color: 'primary' },
)
</script>

<template>
  <div
    class="br-plan"
    :class="[
      `br-plan-${color}`,
      { 'br-plan-highlight': highlight },
    ]"
  >
    <div v-if="highlight" class="br-plan-badge">{{ badge || 'Most popular' }}</div>

    <div class="br-plan-head">
      <div class="br-plan-name">{{ name }}</div>
      <div v-if="description" class="br-plan-description">{{ description }}</div>
    </div>

    <div v-if="price !== undefined" class="br-plan-price-row">
      <span v-if="currency" class="br-plan-currency">{{ currency }}</span>
      <span class="br-plan-price">{{ price }}</span>
      <span v-if="period" class="br-plan-period">{{ period }}</span>
    </div>

    <div class="br-plan-features">
      <slot />
    </div>

    <component
      :is="ctaHref ? 'a' : 'div'"
      v-if="cta"
      :href="ctaHref"
      :target="ctaHref ? '_blank' : undefined"
      class="br-plan-cta"
    >
      {{ cta }}
    </component>
  </div>
</template>

<style scoped>
.br-plan {
  position: relative;
  background: var(--br-faint);
  border: 1px solid var(--br-border);
  border-radius: 8px;
  padding: 1.5rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.br-plan-primary.br-plan-highlight {
  border-color: var(--br-primary-ring);
  background: var(--br-primary-soft);
  box-shadow: 0 0 40px rgba(149, 71, 255, 0.18);
}
.br-plan-secondary.br-plan-highlight {
  border-color: var(--br-secondary-ring);
  background: var(--br-secondary-soft);
  box-shadow: 0 0 40px rgba(223, 249, 95, 0.14);
}
.br-plan-accent.br-plan-highlight {
  border-color: var(--br-accent-ring);
  background: var(--br-accent-soft);
  box-shadow: 0 0 40px rgba(255, 112, 122, 0.18);
}

.br-plan-badge {
  position: absolute;
  top: -0.7rem;
  right: 1rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  line-height: 1.4;
}
.br-plan-primary .br-plan-badge { background: var(--br-primary); color: var(--br-on-primary); }
.br-plan-secondary .br-plan-badge { background: var(--br-secondary); color: var(--br-on-secondary); }
.br-plan-accent .br-plan-badge { background: var(--br-accent); color: var(--br-on-accent); }

.br-plan-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--br-fg-heading);
  line-height: 1.2;
}
.br-plan-description {
  font-size: 0.8rem;
  color: var(--br-muted);
  margin-top: 0.35rem;
  line-height: 1.4;
}

.br-plan-price-row {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--br-border);
  font-variant-numeric: tabular-nums;
}
.br-plan-currency {
  font-size: 1.15rem;
  color: var(--br-muted);
  align-self: flex-start;
  margin-top: 0.35rem;
  font-weight: 600;
}
.br-plan-price {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  color: var(--br-fg-heading);
  letter-spacing: -0.02em;
}
.br-plan-primary.br-plan-highlight .br-plan-price { color: var(--br-primary); }
.br-plan-secondary.br-plan-highlight .br-plan-price { color: var(--br-secondary); }
.br-plan-accent.br-plan-highlight .br-plan-price { color: var(--br-accent); }
.br-plan-period {
  font-size: 0.85rem;
  color: var(--br-muted);
  margin-left: 0.15rem;
}

.br-plan-features {
  flex: 1;
  font-size: 0.88rem;
}
.br-plan-features :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}
.br-plan-features :deep(ul li) {
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.45rem;
  line-height: 1.45;
}
.br-plan-features :deep(ul li)::marker { content: ''; }
.br-plan-features :deep(ul li)::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--br-secondary);
  font-weight: 700;
}
/* Mark a feature as not-included by wrapping the text in ~~strikethrough~~ */
.br-plan-features :deep(ul li:has(del)),
.br-plan-features :deep(ul li:has(s)) {
  color: var(--br-muted);
}
.br-plan-features :deep(ul li:has(del))::before,
.br-plan-features :deep(ul li:has(s))::before {
  content: '—';
  color: var(--br-muted);
}
.br-plan-features :deep(del),
.br-plan-features :deep(s) {
  text-decoration: none;
}

.br-plan-cta {
  display: block;
  text-align: center;
  padding: 0.65rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--br-border);
  background: transparent;
  color: var(--br-fg-heading);
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none !important;
  margin-top: auto;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  cursor: pointer;
}
.br-plan-cta:hover {
  border-color: var(--br-primary);
  background: var(--br-primary-soft);
}

.br-plan-primary.br-plan-highlight .br-plan-cta {
  background: var(--br-primary);
  border-color: var(--br-primary);
  color: var(--br-on-primary);
}
.br-plan-secondary.br-plan-highlight .br-plan-cta {
  background: var(--br-secondary);
  border-color: var(--br-secondary);
  color: var(--br-on-secondary);
}
.br-plan-accent.br-plan-highlight .br-plan-cta {
  background: var(--br-accent);
  border-color: var(--br-accent);
  color: var(--br-on-accent);
}
.br-plan-highlight .br-plan-cta:hover {
  filter: brightness(1.1);
}
</style>
