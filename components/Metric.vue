<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useIsSlideActive } from '@slidev/client'

const props = withDefaults(
  defineProps<{
    value: string | number
    label?: string
    delta?: string
    trend?: 'up' | 'down' | 'flat'
    color?: 'primary' | 'secondary' | 'accent'
    /** Count up from `from` to `value` when the slide enters. */
    animate?: boolean
    /** Animation duration in ms. */
    duration?: number
    /** Starting number. Defaults to 0. */
    from?: number
  }>(),
  { color: 'secondary', trend: 'flat', animate: false, duration: 1500, from: 0 },
)

type Parsed = { prefix: string, number: number, suffix: string, decimals: number, locale: boolean }

function parseValue(v: string | number): Parsed {
  const str = String(v)
  const match = str.match(/^([^\d-]*)(-?[\d.,]+)(.*)$/)
  if (!match) return { prefix: '', number: Number.NaN, suffix: str, decimals: 0, locale: false }
  const [, prefix, numStr, suffix] = match
  const locale = numStr.includes(',') && !/^\d+,\d{1,2}$/.test(numStr)
  const cleanNum = locale ? numStr.replace(/,/g, '') : numStr.replace(',', '.')
  const decimals = (cleanNum.split('.')[1] || '').length
  return { prefix, number: parseFloat(cleanNum), suffix, decimals, locale }
}

const parsed = computed(() => parseValue(props.value))
const animatable = computed(() => props.animate && Number.isFinite(parsed.value.number))

function format(n: number): string {
  const { prefix, suffix, decimals, locale } = parsed.value
  const body = locale
    ? n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : n.toFixed(decimals)
  return `${prefix}${body}${suffix}`
}

const displayValue = ref<string>(animatable.value ? format(props.from) : String(props.value))

const isActive = animatable.value ? useIsSlideActive() : ref(true)
let raf: number | null = null

function cancel() {
  if (raf !== null) {
    cancelAnimationFrame(raf)
    raf = null
  }
}

function runAnimation() {
  cancel()
  const { number } = parsed.value
  const start = performance.now()
  const delta = number - props.from
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / props.duration)
    const eased = 1 - Math.pow(1 - t, 3)
    displayValue.value = format(props.from + delta * eased)
    raf = t < 1 ? requestAnimationFrame(step) : null
  }
  raf = requestAnimationFrame(step)
}

if (animatable.value) {
  watch(
    isActive,
    (active) => {
      if (active) runAnimation()
      else {
        cancel()
        displayValue.value = format(props.from)
      }
    },
    { immediate: true },
  )
}

onBeforeUnmount(cancel)
</script>

<template>
  <div class="br-metric">
    <div class="br-metric-row">
      <div class="br-metric-value" :class="`br-metric-${color}`">{{ displayValue }}</div>
      <div v-if="delta" class="br-metric-delta" :class="`br-metric-delta-${trend}`">
        <span class="br-metric-arrow">
          {{ trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→' }}
        </span>
        {{ delta }}
      </div>
    </div>
    <div v-if="label" class="br-metric-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.br-metric { display: inline-block; }
.br-metric-row {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}
.br-metric-value {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.br-metric-primary { color: var(--br-primary); }
.br-metric-secondary { color: var(--br-secondary); }
.br-metric-accent { color: var(--br-accent); }
.br-metric-delta {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}
.br-metric-delta-up {
  color: var(--br-secondary);
  background: var(--br-secondary-soft);
}
.br-metric-delta-down {
  color: var(--br-accent);
  background: var(--br-accent-soft);
}
.br-metric-delta-flat {
  color: var(--br-muted);
  background: var(--br-faint);
}
.br-metric-arrow { font-weight: 700; }
.br-metric-label {
  font-size: 0.8rem;
  color: var(--br-muted);
  margin-top: 0.35rem;
}
</style>
