<template>
    <div class="wrapper">
        <UForm :schema="schema" :state="state" class="form" @submit="onSubmit">
            <UFormGroup label="Selectionnez un template" name="template">
                <USelectMenu
                    v-model="state.template"
                    class="input"
                    :options="templates"
                />
            </UFormGroup>
            <UFormGroup label="Titre du poster" name="posterName">
                <UInput v-model="state.posterName" class="input" />
            </UFormGroup>
            <UFormGroup label="Description du poster">
                <UInput v-model="state.posterDescription" class="input" />
            </UFormGroup>
            <UFormGroup label="Selectionnez un ratio">
                <USelectMenu
                    v-model="state.posterRatio"
                    :options="ratios"
                    class="input"
                />
            </UFormGroup>
            <div>
                <UFormGroup label="Width" name="Width">
                    <UInput v-model="state.posterX" class="input" />
                </UFormGroup>
                <UFormGroup label="Height" name="Height">
                    <UInput
                        v-model="state.posterY"
                        class="input"
                        :disabled="state.posterRatio.value !== 'custom'"
                    />
                </UFormGroup>
            </div>
            <UButton type="submit">Créer le poster</UButton>
        </UForm>
        <div class="preview-wraper"><div ref="preview" class="preview" /></div>
    </div>
</template>

<script lang="ts" setup>
import { templates } from "@/libs/template";
import { ratios } from "@/libs/ratio";
import { object, string, number, mixed, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const preview = ref();

const schema = object({
    template: mixed().required(),
    posterName: string().required().min(5).max(50),
    posterDescription: string().max(300),
    posterRatio: mixed().required(),
    posterX: number().min(0).integer(),
    posterY: number().min(0).integer(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
    template: templates[0],
    posterName: "",
    posterDescription: "",
    posterRatio: ratios[0],
    posterX: 0,
    posterY: 0,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    navigateTo(
        `/editorPoster?template=${event.data.template}&posterName=${event.data.posterName}&posterDescription=${event.data.posterDescription}&posterX=${event.data.posterX}&posterY=${event.data.posterY}`
    );
}

watch(
    () => state.posterRatio,
    (ratio) => {
        if (ratio.value === "custom") {
            preview.value.style.width = Number(state.posterX) + "px";
            preview.value.style.height = Number(state.posterY) + "px";
        } else {
            preview.value.style.width =
                Number(state.posterRatio.value.split(":")[0]) *
                    Number(state.posterX) +
                "px";
            preview.value.style.height =
                Number(state.posterRatio.value.split(":")[1]) *
                    Number(state.posterX) +
                "px";
            state.posterY =
                Number(state.posterRatio.value.split(":")[1]) *
                Number(state.posterX);
        }
    }
);

watch(
    () => state.posterX,
    () => {
        if (state.posterRatio.value === "custom") {
            preview.value.style.width = Number(state.posterX) + "px";
        } else {
            preview.value.style.width =
                Number(state.posterRatio.value.split(":")[0]) *
                    Number(state.posterX) +
                "px";
            preview.value.style.height =
                Number(state.posterRatio.value.split(":")[1]) *
                    Number(state.posterX) +
                "px";
            state.posterY =
                Number(state.posterRatio.value.split(":")[1]) *
                Number(state.posterX);
        }
    }
);

watch(
    () => state.posterY,
    () => {
        if (state.posterRatio.value === "custom") {
            preview.value.style.height = Number(state.posterY) + "px";
        }
    }
);
</script>

<style scoped>
.wrapper {
    display: flex;
    gap: 20px;

    .form {
        width: max(250px, 40%);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .preview-wraper {
        width: 100%;
        height: 100%;

        .preview {
            background-color: var(--color-content-soft);
            width: 100px;
            height: 100px;
        }
    }
}
</style>
