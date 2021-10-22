/**
 * @type {import("stylelint").Configuration}
 */
module.exports = {
  defaultSeverity: 'warning',

  extends: [
    'stylelint-config-standard',

    './lib/common.js',
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
      files: ['**/*.module.css', '**/*.module.scss', '**/*.module.less'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external'],
          },
        ],

        'property-no-unknown': [
          true,
          {
            ignoreProperties: ['composes', 'compose-with'],
            ignoreSelectors: [':export', /^:import/],
          },
        ],

        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['apply', 'responsive', 'screen', 'tailwind', 'value', 'variants'],
          },
        ],
      },
    },

    {
      files: ['**/*.wxss'],
      rules: {
        'unit-no-unknown': [
          true,
          {
            ignoreUnits: ['rpx'],
          },
        ],

        'selector-type-no-unknown': [
          true,
          {
            ignore: ['custom-elements'],
            ignoreTypes: ['camera', 'editor', 'icon', 'navigator', 'page', 'slider', 'swiper'],
          },
        ],
      },
    },

    {
      files: ['**/*.jsx', '**/*.tsx'],
      processors: ['stylelint-processor-styled-components'],
      extends: ['stylelint-config-styled-components'],
    },
  ],
};
