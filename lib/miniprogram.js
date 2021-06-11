module.exports = {
  rules: {
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
