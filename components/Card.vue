<script setup lang="ts">
withDefaults(
    defineProps<{
        type?: "primary" | "secondary" | "accent" | "muted";
        title?: string;
        number?: string | number;
        center?: boolean;
    }>(),
    { type: "muted", center: false },
);
</script>

<template>
    <div
        class="br-card"
        :class="[`br-card-${type}`, { 'br-card-centered': center }]"
    >
        <div v-if="number != null || title" class="br-card-header">
            <span v-if="number != null" class="br-card-badge">{{
                number
            }}</span>
            <span v-if="title" class="br-card-title">{{ title }}</span>
        </div>
        <div class="br-card-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.br-card {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    padding: 1.25rem 1.4rem;
    border-radius: 10px;
    height: 100%;
}

.br-card-centered {
    align-items: center;
    text-align: center;
}

.br-card-header {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.br-card-centered .br-card-header {
    align-items: center;
}

.br-card-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 0.65rem;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    align-self: flex-start;
}

.br-card-centered .br-card-badge {
    align-self: center;
}

.br-card-title {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.3;
    color: var(--br-fg-heading);
}

.br-card-content {
    font-size: 0.92rem;
    color: var(--br-muted);
    line-height: 1.65;
}

.br-card-content :deep(p) {
    margin: 0;
}

/* primary */
.br-card-primary {
    background-color: var(--br-primary-soft);
    border: 1px solid var(--br-primary-ring);
}
.br-card-primary .br-card-title {
    color: var(--br-primary);
}
.br-card-primary .br-card-badge {
    background-color: var(--br-primary);
    color: var(--br-on-primary, #fff);
}

/* secondary */
.br-card-secondary {
    background-color: var(--br-secondary-soft);
    border: 1px solid var(--br-secondary-ring);
}
.br-card-secondary .br-card-title {
    color: var(--br-secondary);
}
.br-card-secondary .br-card-badge {
    background-color: var(--br-secondary);
    color: var(--br-on-secondary, #fff);
}

/* accent */
.br-card-accent {
    background-color: var(--br-accent-soft);
    border: 1px solid var(--br-accent-ring);
}
.br-card-accent .br-card-title {
    color: var(--br-accent);
}
.br-card-accent .br-card-badge {
    background-color: var(--br-accent);
    color: var(--br-on-accent, #fff);
}

/* muted */
.br-card-muted {
    background-color: var(--br-faint);
    border: 1px solid var(--br-border);
}
.br-card-muted .br-card-title {
    color: var(--br-fg-heading);
}
.br-card-muted .br-card-badge {
    background-color: var(--br-surface-elev);
    color: var(--br-fg-heading);
    border: 1px solid var(--br-border);
}
</style>
