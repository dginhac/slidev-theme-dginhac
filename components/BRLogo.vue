<script setup lang="ts">
import lightLogo from "../assets/images/br-light-logo.svg";
import darkLogo from "../assets/images/br-dark-logo.svg";

const props = withDefaults(
    defineProps<{
        /**
         * auto  = logo adapté automatiquement au thème clair/sombre
         * light = logo clair, typiquement blanc
         * dark  = logo sombre, typiquement noir
         */
        variant?: "light" | "dark" | "auto";
    }>(),
    { variant: "auto" },
);
</script>

<template>
    <!-- Mode explicite : light -->
    <img
        v-if="props.variant === 'light'"
        class="br-logo"
        :src="lightLogo"
        alt="DG"
    />

    <!-- Mode explicite : dark -->
    <img
        v-else-if="props.variant === 'dark'"
        class="br-logo"
        :src="darkLogo"
        alt="DG"
    />

    <!-- Mode auto : on affiche l'un ou l'autre selon le thème -->
    <template v-else>
        <img class="br-logo br-logo-light" :src="lightLogo" alt="DG" />
        <img class="br-logo br-logo-dark" :src="darkLogo" alt="DG" />
    </template>
</template>

<style scoped>
.br-logo {
    display: inline-block;
    width: auto;
    height: 2rem;
}

/*
 * Mode auto.
 * En thème sombre, on affiche le logo clair.
 * En thème clair, on affiche le logo sombre.
 */
.br-logo-dark {
    display: none;
}

html:not(.dark) .br-logo-light {
    display: none;
}

html:not(.dark) .br-logo-dark {
    display: inline-block;
}
</style>
