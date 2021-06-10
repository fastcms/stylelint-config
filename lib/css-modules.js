module.exports = {
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
};
