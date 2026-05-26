<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
    defineProps<{
        text: string;
        highlight?: string | string[];
        color?: "primary" | "secondary" | "accent";
        italicHighlight?: boolean;
        size?: "xl" | "2xl" | "3xl" | "4xl";
        py?: number;
        mt?: number;
    }>(),
    { color: "primary", italicHighlight: true, size: "3xl", py: 2, mt: 4 },
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
    <div class="question" :class="[`py-${py}`, `mt-${mt}`]">
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
    color: var(--br-fg-heading);
}

.question p {
    line-height: 1.25;
}
.question-rule {
    width: 5rem;
    height: 2px;
    background-color: var(--br-border);
    margin: 2rem auto 1.25rem;
}
</style>
