import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import eslintConfigPrettier from "eslint-config-prettier";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default createConfigForNuxt({
    ...eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier, 
})
