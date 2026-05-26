<template>
    <div class="footnote">
        <slot />
    </div>
</template>

<style scoped>
.footnote {
    position: absolute;
    bottom: 1.5rem;
    left: 3.5rem;
    right: 3.5rem;
    padding-top: 0.5rem;
    font-size: 0.75rem;
    font-style: italic;
    color: var(--br-muted);
    border-top: 1px solid var(--br-border);
}
</style>
