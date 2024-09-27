<template>
    <div
        :style="{
            transform: 'scale(' + scale + ')',
            backgroundImage: 'url(' + imageUrl + ')',
        }"
        class="flag"
    />
</template>

<script lang="ts" setup>
defineProps<{ imageUrl: string; scale: string }>();
</script>

<style>
.flag {
    width: 250px;
    height: 550px;
    clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0);
    background: var(--color-background-2);
}
</style>
