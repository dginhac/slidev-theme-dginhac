<script setup lang="ts">
withDefaults(
    defineProps<{
        color?: "primary" | "secondary" | "accent";
        size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
        weight?: "normal" | "medium" | "semibold" | "bold";
        mt?: number;
        mb?: number;
    }>(),
    { color: "heading", size: "2xl", weight: "medium", mt: 4, mb: 0 },
);
</script>

<template>
    <div
        class="br-message"
        :class="[`br-message-${color}`, `text-${size}`, `font-${weight}`]"
        :style="{
            marginTop: `${mt * 0.25}rem`,
            marginBottom: `${mb * 0.25}rem`,
        }"
    >
        <slot />
    </div>
</template>

<style scoped>
.br-message {
    line-height: 1.3;
}
.br-message-primary {
    color: var(--br-primary);
}
.br-message-secondary {
    color: var(--br-secondary);
}
.br-message-accent {
    color: var(--br-accent);
}
</style>
