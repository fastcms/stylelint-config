module.exports = {
  defaultSeverity: 'warning',

  extends: [
    './lib/common.js',
    './lib/css-modules.js',
    './lib/miniprogram.js',
    './lib/property-order.js',
    './lib/prettier.js',
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
};
