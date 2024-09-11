/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  plugins: [
    // @ianvs/prettier-plugin-sort-imports options
    // importの順序を指定する
    // https://github.com/IanVS/prettier-plugin-sort-imports#importorder
    "@ianvs/prettier-plugin-sort-imports",
    // prettier-plugin-tailwindcss options
    // tailwindの設定ファイルを指定する。デフォルトでは既存プロジェクトのtailwind.config.jsを参照します。
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#customizing-your-tailwind-config-path
    "prettier-plugin-tailwindcss",
  ],
  // @ianvs/prettier-plugin-sort-imports options
  // importの順序を指定する
  // https://github.com/IanVS/prettier-plugin-sort-imports#importorder
  importOrder: [
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^(expo(.*)$)|^(expo$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@acm/(.*)$",
    "^acm/(.*)$",
    "^@/",
    "^~/",
    "^[../]",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  // TypeScriptのバージョンを指定します。
  importOrderTypeScriptVersion: "5.0.0",
  // Prettierのフォーマットの設定
  // https://prettier.io/docs/en/options.html#arrow-function-parentheses
  arrowParens: "always",
  // https://prettier.io/docs/en/options.html#print-width
  printWidth: 80,
  // https://prettier.io/docs/en/options.html#quotes
  singleQuote: false,
  // https://prettier.io/docs/en/options.html#semicolons
  semi: true,
  // https://prettier.io/docs/en/options.html#trailing-commas
  trailingComma: "all",
  // https://prettier.io/docs/en/options.html#tab-width
  tabWidth: 2,
  // https://prettier.io/docs/en/options.html#prose-wrap
  proseWrap: "always", // printWidth line breaks in md/mdx
};

export default config;
