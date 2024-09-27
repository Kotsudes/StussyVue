<template>
    <div>
        <form>
            <label>
                Selectionnez un template
                <USelect v-model="template" :options="templates" />
            </label>
            <label>
                Titre du poster
                <UInput v-model="posterName" />
            </label>
            <label>
                Description du poster
                <UInput v-model="posterDescription" />
            </label>
            <label>
                Selectionnez un ratio
                <USelect v-model="posterRatio" :options="ratios" />
            </label>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { templates } from "@/libs/template";
import { ratios } from "@/libs/ratio";

const template = ref(templates[0]);
const posterName = ref("");
const posterDescription = ref("");
const posterRatio = ref(ratios[0]);
</script>

<style></style>
