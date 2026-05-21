<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string;
        number?: string | number;
        center?: boolean;
    }>(),
    { center: false },
);
</script>

<template>
    <div class="br-card" :class="{ 'br-card-centered': center }">
        <span v-if="number != null" class="br-card-number">{{ number }}</span>
        <p v-if="title" class="br-card-title">{{ title }}</p>
        <hr v-if="number != null || title" class="br-card-divider" />
        <div class="br-card-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.br-card {
    display: flex;
    flex-direction: column;
    background-color: var(--br-surface-elev);
    border: 2px solid var(--br-border);
    border-radius: 10px;
    padding: 1rem;
    height: 100%;
}

.br-card-centered {
    align-items: center;
    text-align: center;
}

.br-card-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    font-family: "JetBrains Mono Variable", monospace;
    font-variant-numeric: tabular-nums;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    line-height: 1;
    background-color: rgb(var(--br-accent-rgb));
    color: var(--br-on-accent, #0f172a);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    flex-shrink: 0;
}

.br-card-centered .br-card-number {
    align-self: center;
}

.br-card-title {
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.3;
    color: var(--br-fg-heading);
    margin: 0;
    margin-top: 1.5rem;
}

.br-card-number + .br-card-title {
    margin-top: 1.25rem;
}

.br-card-divider {
    display: block;
    width: 2.25rem;
    height: 1px;
    border: none;
    background-color: rgba(var(--br-accent-rgb), 0.3);
    margin-top: 1rem;
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    align-self: flex-start;
}

.br-card-centered .br-card-divider {
    align-self: center;
}

.br-card-content {
    font-size: 0.75rem;
    color: var(--br-fg-subtle);
    line-height: 1.25;
}

.br-card-content :deep(p) {
    margin: 0;
}
</style>
