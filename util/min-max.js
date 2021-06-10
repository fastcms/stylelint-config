/**
 * Generates min and max CSS properties with suffix.
 *
 * @param {string} suffix - Suffix of CSS properties.
 * @returns {string[]} CSS properties with suffix.
 */
function minMax(suffix) {
  return [suffix, `min-${suffix}`, `max-${suffix}`];
}

module.exports = minMax;
