<template>
    <GridLayout
        v-model:layout="layout"
        :col-num="12"
        :row-height="29"
        is-draggable
        is-resizable
        vertical-compact
        use-css-transforms
    >
        <template #item="{ item }">
            {{ item.i }}
        </template>
    </GridLayout>
</template>

<script lang="ts" setup>
import { GridLayout } from "grid-layout-plus";
import { reactive } from "vue";

const layout = reactive([
    { x: 0, y: 0, w: 8, h: 25, i: "0" },
    { x: 8, y: 0, w: 4, h: 15, i: "1" },
    { x: 8, y: 15, w: 4, h: 10, i: "2" },
]);
</script>

<style scoped>
.vgl-layout {
    --vgl-placeholder-bg: var(--color-primary);
    --vgl-placeholder-opacity: 20%;
    --vgl-placeholder-z-index: 2;

    --vgl-item-resizing-z-index: 3;
    --vgl-item-resizing-opacity: 60%;
    --vgl-item-dragging-z-index: 3;
    --vgl-item-dragging-opacity: 100%;

    --vgl-resizer-size: 10px;
    --vgl-resizer-border-color: var(--color-content-softest);
    --vgl-resizer-border-width: 2px;
}
</style>
