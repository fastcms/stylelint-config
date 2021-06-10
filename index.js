module.exports = {
  defaultSeverity: 'warning',

  extends: [
    './lib/common.js',
    './lib/css-modules.js',
    './lib/property-order.js',
    './lib/prettier.js',
  ],

  plugins: [
    './plugin/declaration-block-no-ignored-properties.js',
    './plugin/no-unsupported-browser-features.js',
  ],

  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignorePartialSupport: true,
      },
    ],
  },
};
