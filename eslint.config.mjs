import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "error",
      "no-extra-semi": "error",
    },
  },

  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.{test,spec}.{js,jsx}", "**/setupTests.js"],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
