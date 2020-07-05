/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result =''
  users.filter( user => user.age <= age).forEach( c => {
      result += `${c.name}, ${c.balance}`+'\n'
  });
  return result.slice(0, result.length-1)
}
