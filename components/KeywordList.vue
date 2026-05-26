<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

withDefaults(
    defineProps<{
        size?: "lg" | "xl" | "2xl" | "3xl" | "4xl";
        gap?: number;
        rowGap?: string;
        image?: string;
        imageAlt?: string;
        imageWidth?: string;
    }>(),
    {
        size: "2xl",
        gap: 12,
        rowGap: "0.375rem",
        imageAlt: "",
        imageWidth: "33%",
    },
);

const listRef = ref<HTMLElement>();
const imageRef = ref<HTMLImageElement>();
let observer: ResizeObserver | null = null;

function constrainImageHeight() {
    if (listRef.value && imageRef.value && listRef.value.offsetHeight > 0) {
        imageRef.value.style.maxHeight = `${listRef.value.offsetHeight * 1.25}px`;
    }
}

onMounted(() => {
    if (listRef.value) {
        observer = new ResizeObserver(constrainImageHeight);
        observer.observe(listRef.value);
    }
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
    <div :class="image ? 'keyword-wrapper' : ''">
        <div
            ref="listRef"
            :class="`text-${size}`"
            :style="`column-gap: ${gap * 0.25}rem; row-gap: ${rowGap}`"
            class="keyword-list"
        >
            <slot />
        </div>
        <div v-if="image" :style="`width: ${imageWidth}`" class="image-wrapper">
            <img
                ref="imageRef"
                :src="image"
                :alt="imageAlt"
                class="keyword-image"
            />
        </div>
    </div>
</template>

<style scoped>
.keyword-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.keyword-list {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: baseline;
    padding-left: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    flex: 1;
}
.image-wrapper {
    display: flex;
    align-items: center;
}
.keyword-image {
    width: 100%;
    object-fit: contain;
}
</style>
