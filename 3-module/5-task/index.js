/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  }
  const tmp1 = str.split(' ').filter(i => !isNaN(i) && Boolean(i))
  const tmp2 = str.split(' ').filter(i => isNaN(i)).join().split(',').filter(i => !isNaN(i) && Boolean(i))
  const numbers = tmp1.concat(tmp2).map(i => +i).sort((a, b) => a - b)
  if (numbers.length >= 2) {
    result.min = numbers[0]
    result.max = numbers[numbers.length - 1]
  }
  return result
}
