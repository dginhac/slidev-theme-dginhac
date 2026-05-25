<script setup lang="ts">
withDefaults(
    defineProps<{
        word: string;
        color?: "primary" | "secondary" | "accent";
        weight?: "normal" | "medium" | "semibold" | "bold";
    }>(),
    { color: "primary", weight: "medium" },
);
</script>

<template>
    <span class="mb-2" :class="[`text-${color}`, `font-${weight}`]">{{
        word
    }}</span>
    <span class="complement">
        <slot />
    </span>
</template>

<style scoped>
.complement {
    color: var(--br-muted);
}
</style>
