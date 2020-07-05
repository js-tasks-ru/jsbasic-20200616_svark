/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const strArray = str.split('-')
  for (let i = 1; i < strArray.length; i++) {
    const el = strArray[i]
    strArray[i] = el[0].toUpperCase() + el.slice(1, el.length);
  }
  return strArray.join('')
}
