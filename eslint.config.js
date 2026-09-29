import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import astroEslint from "eslint-plugin-astro";
import prettierConfig from "eslint-config-prettier";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
    js.configs.recommended,
    ...astroEslint.configs.recommended,
    prettierConfig,
    {
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: true,
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "prefer-const": "error",
        },
    },
    {
        files: ["**/*.astro"],
        ...astroEslint.configs.recommended,
        rules: {
            ...astroEslint.configs.recommended.rules,
        },
    },
    {
        ignores: ["dist", ".astro", "node_modules", "public"],
    },
];
