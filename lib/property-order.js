/**
 * Generates CSS properties with prefix.
 *
 * @param {string | undefined} prefix - Prefix of direction.
 * @param {string | undefined} suffix - Suffix of direction.
 * @param {boolean | undefined} withShorthand - Should including shorthand.
 * @returns {string[]} CSS properties with prefix and suffix.
 */
function trbl(prefix, suffix, withShorthand) {
  let shorthand = '';
  let properties = ['top', 'right', 'bottom', 'left'];

  if (prefix) {
    shorthand = prefix;
    properties = properties.map((property) => `${prefix}-${property}`);
  }

  if (suffix) {
    shorthand = shorthand ? `${shorthand}-${suffix}` : shorthand;
    properties = properties.map((property) => `${property}-${suffix}`);
  }

  return withShorthand && shorthand ? [shorthand, ...properties] : properties;
}

/**
 * Generates min and max CSS properties with suffix.
 *
 * @param {string} suffix - Suffix of CSS properties.
 * @returns {string[]} CSS properties with suffix.
 */
function minMax(suffix) {
  return [suffix, `min-${suffix}`, `max-${suffix}`];
}

const propertiesOrder = [
  // Special helpers
  ['composes', '@import', '@extend', '@mixin', '@at-root'],

  // Reset
  ['all', 'appearance'],

  // Position
  ['position', 'inset', ...trbl(), 'z-index'],

  // Layout
  [
    'display',

    'float',
    'clear',

    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',

    'grid',
    'grid-area',
    'grid-template',
    'grid-template-areas',
    'grid-template-rows',
    'grid-template-columns',
    'grid-row',
    'grid-row-start',
    'grid-row-end',
    'grid-column',
    'grid-column-start',
    'grid-column-end',
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-gap',
    'grid-row-gap',
    'grid-column-gap',

    'box-orient',
    'line-clamp',

    'gap',
    'row-gap',
    'column-gap',

    'place-items',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'justify-items',
    'justify-self',

    'order',

    'columns',
    'column-gap',
    'column-fill',
    'column-rule',
    'column-rule-width',
    'column-rule-style',
    'column-rule-color',
    'column-span',
    'column-count',
    'column-width',
  ],

  // Box model
  [
    'box-sizing',

    ...trbl('margin', '', true),

    ...minMax('width'),
    ...minMax('height'),

    ...trbl('padding', '', true),

    ...trbl('border', '', true),
    ...trbl('border', 'width', true),
    ...trbl('border', 'style', true),
    ...trbl('border', 'color', true),

    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',

    'border-image',
    'border-image-source',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',

    'outline',
    'outline-offset',
    'outline-width',
    'outline-style',
    'outline-color',

    'overflow',
    'overflow-x',
    'overflow-y',
    'overflow-scrolling',

    'overscroll-behavior',
    'overscroll-behavior-x',
    'overscroll-behavior-y',
    'overscroll-behavior-inline',
    'overscroll-behavior-block',

    'background',
    'background-attachment',
    'background-blend-mode',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-position-x',
    'background-position-y',
    'background-repeat',
    'background-size',

    'box-shadow',
    'clip',
    'clip-path',
    'filter',
    'isolation',
    'mask',
    'mix-blend-mode',
    'object-fit',
    'opacity',
    'visibility',
  ],

  // Typography
  [
    'content',
    'quotes',

    'color',

    'font',
    'font-family',
    'font-size',
    'font-style',
    'font-weight',
    'font-feature-settings',
    'font-kerning',
    'font-variant',
    'font-variant-ligatures',
    'font-variant-caps',
    'font-variant-alternates',
    'font-variant-numeric',
    'font-variant-east-asian',
    'font-variant-position',
    'font-size-adjust',
    'font-stretch',
    'font-emphasize',
    'font-emphasize-position',
    'font-emphasize-style',

    'font-smooth',
    'font-smoothing',
    'osx-font-smoothing',

    'text-align',
    'text-align-last',
    'text-indent',
    'text-justify',
    'text-rendering',
    'text-shadow',
    'text-transform',
    'text-size-adjust',

    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-style',
    'text-emphasis-position',

    'text-decoration',
    'text-decoration-line',
    'text-decoration-thickness',
    'text-decoration-style',
    'text-decoration-color',

    'text-underline-position',
    'text-underline-offset',

    'text-overflow',
    'text-overflow-ellipsis',
    'text-overflow-mode',

    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',

    'border-collapse',
    'border-spacing',
    'caption-side',
    'empty-cells',
    'table-layout',

    'direction',
    'hyphens',
    'letter-spacing',
    'line-height',
    'overflow-wrap',
    'tab-size',
    'user-select',
    'vertical-align',
    'white-space',
    'word-break',
    'word-spacing',
    'word-wrap',
    'writing-mode',
  ],

  // SVG
  [
    'fill',
    'fill-opacity',
    'fill-rule',

    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
  ],

  // Transform & Transition & Animation
  [
    'backface-visibility',
    'perspective',
    'perspective-origin',
    'transform',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'animation',
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state',
    'will-change',
  ],

  // Misc
  [
    'cursor',
    'pointer-events',
    'touch-action',

    'counter-reset',
    'counter-increment',

    'page-break-before',
    'page-break-after',
    'page-break-inside',

    'resize',
    'zoom',

    'nav-index',
    'nav-up',
    'nav-right',
    'nav-down',
    'nav-left',
  ],
];

/**
 * @type {import("stylelint").Configuration}
 */
module.exports = {
  plugins: ['stylelint-order'],

  rules: {
    // CSS rules order
    'order/order': [
      [
        // Imports
        { type: 'at-rule', name: 'import' },

        // Variables
        'at-variables',
        'dollar-variables',
        'custom-properties',

        // Inheritance
        { type: 'at-rule', name: 'extend' },

        // Mixins
        { type: 'at-rule', name: 'include' },
        { type: 'at-rule', name: 'mixin' },
        { type: 'at-rule', name: 'add-mixin' },
        { type: 'at-rule', name: 'apply' },

        // Declarations
        'declarations',

        // Pseudo-elements
        {
          type: 'rule',
          selector: /^&::[\w-]+/,
          hasBlock: true,
        },

        // Pseudo-classes
        {
          type: 'rule',
          selector: /^&:[\w-]+/,
          hasBlock: true,
        },

        // Nested Rules
        'rules',

        // Breakpoint Mixins
        {
          type: 'at-rule',
          name: 'include',
          parameter: /breakpoints?/i,
          hasBlock: true,
        },
        {
          type: 'at-rule',
          name: 'mixin',
          parameter: /breakpoints?/i,
          hasBlock: true,
        },
        {
          type: 'at-rule',
          name: 'add-mixin',
          parameter: /breakpoints?/i,
          hasBlock: true,
        },

        // Media Queries
        {
          type: 'at-rule',
          name: 'media',
          hasBlock: true,
        },
      ],
      {
        disableFix: false,
      },
    ],

    // CSS properties order
    'order/properties-order': [
      propertiesOrder.map((group) => ({
        properties: group,
      })),
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
