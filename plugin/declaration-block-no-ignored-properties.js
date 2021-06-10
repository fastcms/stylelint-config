const stylelint = require('stylelint');
const matchesStringOrRegExp = require('../util/matches-string-or-regexp');

const ruleName = 'plugin/declaration-block-no-ignored-properties';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: (ignore, cause) => `Unexpected "${ignore}" with "${cause}"`,
});

const ignoredRules = [
  {
    property: 'display',
    value: 'inline',
    ignoredProperties: [
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-bottom',
      'overflow',
      'overflow-x',
      'overflow-y',
    ],
  },
  {
    property: 'display',
    value: 'list-item',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'display',
    value: 'block',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'display',
    value: 'flex',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'display',
    value: 'table',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'display',
    value: '/^table-(row|row-group|column|column-group|header-group|footer-group|cell)$/',
    ignoredProperties: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  },
  {
    property: 'display',
    value: '/^table-(row|row-group|column|column-group|header-group|footer-group)$/',
    ignoredProperties: [
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
    ],
  },
  {
    property: 'display',
    value: '/^table-(row|row-group|column|column-group|header-group|footer-group|caption)$/',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'display',
    value: '/^table-(row|row-group)$/',
    ignoredProperties: ['width', 'min-width', 'max-width'],
  },
  {
    property: 'display',
    value: '/^table-(column|column-group)$/',
    ignoredProperties: ['height', 'min-height', 'max-height'],
  },
  {
    property: 'float',
    value: 'left',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'float',
    value: 'right',
    ignoredProperties: ['vertical-align'],
  },
  {
    property: 'position',
    value: 'static',
    ignoredProperties: ['top', 'right', 'bottom', 'left', 'z-index'],
  },
  {
    property: 'position',
    value: 'absolute',
    ignoredProperties: ['float', 'clear', 'vertical-align'],
  },
  {
    property: 'position',
    value: 'fixed',
    ignoredProperties: ['float', 'clear', 'vertical-align'],
  },
  {
    property: 'list-style-type',
    value: 'none',
    ignoredProperties: ['list-style-image'],
  },
  {
    property: 'overflow',
    value: 'visible',
    ignoredProperties: ['resize'],
  },
];

module.exports = stylelint.createPlugin(ruleName, (actual) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    root.walkRules((rule) => {
      const uniqueDeclarations = {};

      rule.walkDecls((declaration) => {
        uniqueDeclarations[declaration.prop] = declaration;
      });

      const checkThenReport = (property, index) => {
        const declaration = uniqueDeclarations[property];

        for (const ignoredRule of ignoredRules) {
          const matchProperty = matchesStringOrRegExp(property.toLowerCase(), ignoredRule.property);

          const matchValue = matchesStringOrRegExp(
            declaration.value.toLowerCase(),
            ignoredRule.value,
          );

          if (matchProperty && matchValue) {
            for (const [nodeIndex, node] of declaration.parent.nodes.entries()) {
              if (
                node.prop &&
                ignoredRule.ignoredProperties.includes(node.prop.toLowerCase()) &&
                index !== nodeIndex
              ) {
                stylelint.utils.report({
                  message: messages.rejected(node.prop, declaration.toString()),
                  node,
                  result,
                  ruleName,
                });
              }
            }
          }
        }
      };

      Object.keys(uniqueDeclarations).forEach(checkThenReport);
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
