/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    // @see https://github.com/expo/expo/blob/main/packages/eslint-config-expo/.eslintrc.js
    "expo",
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
    "eslint:recommended",
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked.ts
    "plugin:@typescript-eslint/recommended-type-checked",
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // @see https://typescript-eslint.io/rules/array-type
    "@typescript-eslint/array-type": "off",

    // @see https://typescript-eslint.io/rules/consistent-type-definitions/
    "@typescript-eslint/consistent-type-definitions": "off",

    // @see https://typescript-eslint.io/rules/consistent-type-imports/
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],

    // @see https://typescript-eslint.io/rules/no-unused-vars/
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // @see https://typescript-eslint.io/rules/require-await/
    "@typescript-eslint/require-await": "off",

    // @see https://typescript-eslint.io/rules/no-misused-promises/
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: { attributes: false },
      },
    ],

    // https://typescript-eslint.io/rules/no-var-requires/
    "@typescript-eslint/no-var-requires": "off",
  },
  ignorePatterns: [
    //'.eslintrc.cjs',
    "babel.config.js",
    //'metro.config.js'
  ],
};

module.exports = config;
