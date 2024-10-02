module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Add Prettier plugin
  ],
  rules: {
    "vue/multi-word-component-names": 0, // Disable rule for multi-word component names
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": "error", // Show prettier issues as ESLint errors
  },
};