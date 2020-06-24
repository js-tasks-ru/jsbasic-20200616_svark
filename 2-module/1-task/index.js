/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0
  for (const key in salaries) {
    result += typeof salaries[key] === 'number' ? salaries[key] : 0
  }
  return result
}

// let salaries = {
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false
// }
