// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "none",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  "plugins": ["prettier-plugin-tailwindcss"]
};

export default config;
