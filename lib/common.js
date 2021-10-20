/**
 * @type {import("stylelint").Configuration}
 */
module.exports = {
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['icon'],
      },
    ],
    'function-url-quotes': 'always',
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['prefers-reduced-data'],
      },
    ],
    'no-descending-specificity': null,
  },
};
