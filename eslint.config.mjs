import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPlaywright from "eslint-plugin-playwright";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["package-lock.json", "playwright-report/**", "test-results/***"],
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-console": "error",
    },
  },
  ...tseslint.configs.recommended,
  eslintPluginPlaywright.configs["flat/recommended"],
  {
    rules: {
      "playwright/no-nested-step": "off",
    },
    settings: {
      playwright: {
        globalAliases: {
          test: ["setup"],
        },
      },
    },
  },
  eslintPluginPlaywright,
];
