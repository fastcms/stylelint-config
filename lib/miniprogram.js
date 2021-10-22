/**
 * @type {import("stylelint").Configuration}
 */
module.exports = {
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
};
