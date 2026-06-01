<template>
    <div
        class="fixed bottom-2 right-2 z-50 px-2 py-1 rounded-full text-xs text-brand-muted bg-brand-faint border border-brand-border tabular-nums"
        v-if="
            $slidev.nav.currentLayout !== 'cover' &&
            $slidev.nav.currentLayout !== 'end' &&
            $slidev.nav.currentPage != 1
        "
    >
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>
</template>
