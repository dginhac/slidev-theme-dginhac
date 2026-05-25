<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
    defineProps<{
        text: string;
        highlight?: string | string[];
        color?: "primary" | "secondary" | "accent";
        italicHighlight?: boolean;
        size?: "xl" | "2xl" | "3xl" | "4xl";
    }>(),
    { color: "primary", italicHighlight: true, size: "3xl" },
);

const segments = computed(() => {
    const words = props.highlight
        ? Array.isArray(props.highlight)
            ? props.highlight
            : [props.highlight]
        : [];

    if (words.length === 0) {
        return [{ text: props.text, highlighted: false }];
    }

    const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const pattern = new RegExp(`(${escaped.join("|")})`, "g");
    const parts = props.text.split(pattern).filter((p) => p !== "");
    const highlightSet = new Set(words);

    return parts.map((part) => ({
        text: part,
        highlighted: highlightSet.has(part),
    }));
});
</script>

<template>
    <div class="question py-4">
        <div class="question-rule" />
        <p :class="`text-${size}`">
            <span
                v-for="(seg, i) in segments"
                :key="i"
                :class="
                    seg.highlighted
                        ? [`text-${color}`, italicHighlight && 'italic']
                        : []
                "
                >{{ seg.text }}</span
            >
        </p>
    </div>
</template>

<style scoped>
.question {
    font-weight: 500;
    line-height: 1.4;
    color: var(--br-fg-heading);
}
.question-rule {
    width: 3rem;
    height: 2px;
    background-color: var(--br-border);
    margin: 0 auto 1.25rem;
}
</style>
