<script setup lang="ts">
withDefaults(
    defineProps<{
        color?: "primary" | "secondary" | "accent";
        fontsize?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    }>(),
    { color: "primary", fontsize: "lg" },
);
</script>

<template>
    <div
        class="br-eyebrow"
        :class="[`br-eyebrow-${color}`, `text-${fontsize}`]"
    >
        <slot />
    </div>
</template>

<style scoped>
.br-eyebrow {
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}
.br-eyebrow-primary {
    color: var(--br-primary);
}
.br-eyebrow-secondary {
    color: var(--br-secondary);
}
.br-eyebrow-accent {
    color: var(--br-accent);
}
</style>
