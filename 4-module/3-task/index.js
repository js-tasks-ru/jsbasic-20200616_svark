/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight( table ) {
  let rows = table.rows
  for ( let i = 1; i < rows.length; i++ ) {
    let dataAvailable = rows[i].cells[3].getAttribute( 'data-available' )
    rows[i].hidden = dataAvailable === null
    rows[i].classList.add( dataAvailable === 'true' ? 'available' : 'unavailable' )
    rows[i].classList.add( rows[i].cells[2].innerHTML === 'm' ? 'male' : 'female' )
    if ( +rows[i].cells[1].innerHTML < 18 ) {
      rows[i].setAttribute( 'style', 'text-decoration: line-through' )
    }
  }
}
