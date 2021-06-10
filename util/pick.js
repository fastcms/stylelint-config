/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {object} object The source object.
 * @param {string[]} props The property paths to pick.
 * @returns {object} Returns the new object.
 */
function pick(object, props) {
  const result = {};

  if (object == null) {
    return {};
  }

  for (const prop of props) {
    if (object.prop !== undefined) {
      result[prop] = object.prop;
    }
  }

  return result;
}

module.exports = pick;
