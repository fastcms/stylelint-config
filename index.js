/**
 * @type {import("stylelint").Configuration}
 */
module.exports = {
  defaultSeverity: 'warning',

  extends: [
    'stylelint-config-standard',

    './lib/common.js',
    './lib/css-modules.js',
    './lib/miniprogram.js',
    './lib/property-order.js',

    'stylelint-config-prettier',
  ],

  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
  ],

  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: [],
      },
    ],
  },

  ignoreFiles: ['**/*.js', '**/*.ts'],

  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.jsx', '**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        'selector-class-pattern': null,
        'value-keyword-case': null,
      },
    },
  ],
};
