module.exports = {
  extends: ['./index.js'],

  rules: {
    // Don't use prefix in wechat miniprogram
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // Limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 1,

    // Support miniprogram rpx unit
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    // Support custom elements and miniprogram components
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['camera', 'editor', 'icon', 'navigator', 'page', 'slider', 'swiper'],
      },
    ],
  },
};
