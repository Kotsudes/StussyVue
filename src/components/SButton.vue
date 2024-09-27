<template>
    <button
        :class="{
            outlined,
            primary,
            disabled,
            danger,
            rounded,
            action,
            noXBorders,
            noYBorders,
        }"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
    danger?: boolean;
    disabled?: boolean;
    outlined?: boolean;
    primary?: boolean;
    spinning?: boolean;
    rounded?: boolean;
    action?: boolean;
    noXBorders?: boolean;
    noYBorders?: boolean;
}>();
</script>

<style scoped lang="scss">
button {
    --color-button-content: var(--color-content);
    --color-button-border: var(--color-content-softer);

    font-size: 0.9rem;
    line-height: 32px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    padding: 0 var(--length-padding-m);
    background: none;
    color: var(--color-button-content);
    height: 36px;
    box-sizing: border-box;

    &.rounded {
        border-radius: var(--lenght-radius-base);
    }

    &.danger {
        --color-button-content: var(--color-error-content);
        --color-button-border: var(--color-error-liter);
    }

    .spinner {
        font-size: 1.5rem;
    }

    &.disabled {
        opacity: 0.5;
        filter: grayscale(0.75);
        color: var(--color-content-liter);

        &:hover {
            cursor: not-allowed;
        }
    }

    &.primary {
        background: var(--color-primary-background);
        border: 2px solid var(--color-primary-background);
        box-shadow: 0 4px 0px -8px transparent;

        &:hover:not(.disabled) {
            transform: translateY(-4px);
            box-shadow: 0 4px 16px -8px var(--color-primary-background);
        }
    }

    &:not(.outlined):not(.primary) {
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }

    &.outlined {
        border: 2px solid var(--color-button-border);
        padding: 0 calc(var(--length-padding-m) - 2px);

        &:hover:not(.disabled) {
            border-color: var(--color-button-content);
        }
    }

    &.noXBorders {
        border-left: none;
        border-right: none;
    }

    &.noYBorders {
        border-top: none;
        border-bottom: none;
    }

    &.action {
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: color 150ms ease-in-out;

        &:after {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 100%;
            background: var(--color-content-soft);
            opacity: 0.3;
            z-index: -1;
            transition: width 150ms ease-in-out;
        }

        &:hover {
            color: var(--color-content-soft);
            &:after {
                width: 110%;
            }
        }
    }
}
</style>
