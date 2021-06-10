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

module.exports = trbl;
