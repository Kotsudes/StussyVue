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
            <div v-if="item.i == 'canvas'" class="canvas-wrapper">
                <Application
                    :width="width"
                    :height="height"
                    background-color="#FFF"
                    :style="{ zoom: zoom }"
                >
                    <text
                        :anchor="0.5"
                        :x="120"
                        :y="120"
                        :style="{ fill: 'black' }"
                    >
                        Hello World
                    </text>
                </Application>
            </div>

            <div v-if="item.i === 'properties'"><SProperties /></div>
            <div v-if="item.i === 'elements'">ccccccc</div>
        </template>
    </GridLayout>
</template>

<script lang="ts" setup>
import { GridLayout } from "grid-layout-plus";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { Application } from "vue3-pixi";
import SProperties from "@/components/editorPoster/SProperties.vue";

const route = useRoute();

const width = ref(Number(route.query.posterX));
const height = ref(Number(route.query.posterY));
const zoom = ref(1);

const layout = reactive([
    { x: 0, y: 0, w: 8, h: 25, i: "canvas" },
    { x: 8, y: 0, w: 4, h: 15, i: "properties" },
    { x: 8, y: 15, w: 4, h: 10, i: "elements" },
]);

onMounted(() => {
    window.addEventListener("wheel", (event) => {
        if (event.ctrlKey && !event.altKey) {
            handleZoom(event.deltaY > 0, 0.01);
        } else if (event.ctrlKey && event.altKey) {
            handleZoom(event.deltaY > 0, 0.1);
        }
    });
});
onUnmounted(() => {
    window.removeEventListener("wheel", (event) => {
        if (event.ctrlKey && !event.altKey) {
            handleZoom(event.deltaY > 0, 0.01);
        } else if (event.ctrlKey && event.altKey) {
            handleZoom(event.deltaY > 0, 0.1);
        }
    });
});

function handleZoom(positive: boolean, value: number = 0.01) {
    zoom.value = positive ? zoom.value + value : zoom.value - value;
}
</script>

<style scoped>
.canvas-wrapper {
    height: 100%;
    overflow: auto;
}

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
