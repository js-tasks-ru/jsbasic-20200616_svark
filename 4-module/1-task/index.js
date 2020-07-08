/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul')
  for (const item of friends) {
    ul.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`
  }
  return ul
}
