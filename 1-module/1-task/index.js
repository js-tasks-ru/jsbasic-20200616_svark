/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (!n) {
    return 1
  }
  let i = 1
  let result = n
  while ( i < n ) {
    result = result * ( n - i++ )
  }
  return result
}
