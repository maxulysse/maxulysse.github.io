import js from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.astro"],
        languageOptions: {
            parser: tseslintParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": tseslintPlugin,
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "off",
            "no-unused-vars": "off",
            "prefer-const": "error",
        },
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tseslintParser,
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    },
    {
        files: ["public/js/**/*.js"],
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "script",
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "prefer-const": "error",
        },
    },
    {
        ignores: ["dist", ".astro", "node_modules", "public/assets"],
    },
];
