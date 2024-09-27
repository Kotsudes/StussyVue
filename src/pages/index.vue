<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="wrapper">
        <div class="wrapper-menu">
            <span class="sectionTitle">Quickstart</span>
            <SButton outlined action no-x-borders
                ><NuxtLink to="/newPoster">Continuer</NuxtLink></SButton
            >
            <SButton outlined action no-x-borders>Ouvrir</SButton>
            <SButton outlined action no-x-borders>Nouveau projet</SButton>
            <span class="sectionTitle">Créer</span>
            <SButton outlined action no-x-borders>Nouveau poster</SButton>
            <SButton outlined action no-x-borders>Nouveau visuel</SButton>
            <SButton outlined action no-x-borders>Nouveau truc</SButton>
        </div>
        <div class="wrapper-flags">
            <span class="sectionTitle sticky left-0">Récents</span>
            <div class="flags">
                <SFlag v-for="item in 8" :key="item" image-url="" scale="0.8" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SFlag from "@/components/mainPage/SFlag.vue";
</script>

<style lang="scss" scoped>
body {
    background: var(--color-background);
    transform-origin: 0 0;
}

html,
body {
    margin: 0;
    background: var(--color-background-0);
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 9fr;
    overflow-x: hidden;
    height: 100vh;
}

.wrapper-menu {
    display: flex;
    flex-direction: column;
    width: max(250px, 15vw);
    grid-column: 1;
    gap: 10px;
    border-right: 2px solid var(--color-content-softer);
}
.wrapper-flags {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    width: max(750px, 85vw);
    overflow-x: auto;
}

.flags {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 10px;
    padding: 10px;
}

.sectionTitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
}
</style>
