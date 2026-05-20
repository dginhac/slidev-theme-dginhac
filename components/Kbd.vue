<template>
    <kbd class="br-kbd"><slot /></kbd>
</template>

<style scoped>
.br-kbd {
    display: inline-block;
    padding: 0.1rem 0.45rem;
    border-radius: 4px;
    background: var(--br-faint);
    border: 1px solid var(--br-border);
    border-bottom-width: 2px;
    font-family: "JetBrains Mono Variable", ui-monospace, monospace !important;
    font-size: 0.8em;
    font-weight: 500;
    line-height: 1.4;
    color: var(--br-fg-heading);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
}
html:not(.dark) .br-kbd {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
}
</style>
