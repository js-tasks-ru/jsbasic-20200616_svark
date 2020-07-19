/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
export default class UserTable {
  rows = null
  table = null
  tbody = null

  createHeader() {
    this._table = document.createElement('table')
    this._table.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>`
  }

  createButton(row) {
    const buttonCell = document.createElement('td')
    const button = document.createElement('button')
    button.innerHTML = 'X'
    button.addEventListener('click', () => {
        row.remove()
      })
    buttonCell.append(button)
    row.append(buttonCell)
  }

  createRow(row) {
    const currentRow = document.createElement('tr')
      for (const key in row) {
        const currentCell = document.createElement('td')
        currentCell.innerHTML = row[key]
        currentRow.append(currentCell)
      }
      this.createButton(currentRow)
      this._tbody.append(currentRow)
  }

  createBody() {
    this._tbody = document.createElement('tbody')
    this._rows.forEach( row => {
      this.createRow(row)
    })
    this._table.append(this._tbody)
  }

  constructor(rows) {
    this._rows = rows
    this.createHeader()
    this.createBody()
  }

  get elem() {
    return this._table
  }
}
