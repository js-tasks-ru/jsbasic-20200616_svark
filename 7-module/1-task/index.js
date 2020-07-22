import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createMenu()
  }

  get elem() {
    return this.root
  }

  createMenu() {
    this.root = this.createDivElement('ribbon')
    this.createButton('left')
    this.createMenuItems()
    this.createButton('right')
  }

  createMenuItems() {
    this.ribbonInner = document.createElement('nav')
    this.ribbonInner.classList.add('ribbon__inner')
    this.categories.forEach(item => {
      const menuItem = this.createMenuItem(item)
      this.ribbonInner.append(menuItem)
    });
    this.ribbonInner.addEventListener('scroll', () => {
      this.arrowsVisible()
    })
    this.root.append(this.ribbonInner)
  }

  arrowsVisible() {
    const leftArrow = document.querySelector('.ribbon__arrow_left')
    const rightArrow = document.querySelector('.ribbon__arrow_right')
    const scrollEnd = this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth
    if (!this.ribbonInner.scrollLeft || scrollEnd < 1) {
      leftArrow.classList.toggle('ribbon__arrow_visible')
      rightArrow.classList.toggle('ribbon__arrow_visible')
    }
  }

  createMenuItem(category) {
    const item = document.createElement('a')
    const event = new CustomEvent('ribbon-select', {
      detail: category.id,
      bubbles: true
    })
    item.setAttribute('href', '#')
    if (!category.id) {
      item.classList.add('ribbon__item', 'ribbon__item_active')
      item.setAttribute('data-id', '')
    } else {
      item.classList.add('ribbon__item')
      item.setAttribute('data-id', category.id)
    }
    item.innerHTML = category.name
    item.addEventListener('click', () => {
      document.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active')
      document.querySelector(`a[data-id][data-id="${category.id}"]`).classList.add('ribbon__item_active')
      this.root.dispatchEvent(event)
    })
    return item
  }

  createButton(direction) {
    const button = document.createElement('button')
    button.classList.add('ribbon__arrow', `ribbon__arrow_${direction}`)
    if (direction !== 'left') {
      button.classList.add('ribbon__arrow_visible')
    }
    button.setAttribute('type', 'button')
    button.append(this.createImgElement('/assets/images/icons/', 'angle-icon.svg', 'icon'))
    const multiplyValue = direction !== 'left' ? 1 : -1
    button.addEventListener('click', () => {
      this.ribbonInner.scrollBy(350 * multiplyValue, 0)
    })
    this.root.append(button)
  }

  createDivElement(className, innerHTML) {
    let result = null
    result = document.createElement('div')
    result.classList.add(className)
    if (innerHTML) {
      result.innerHTML = innerHTML
    }
    return result
  }

  createImgElement(path, src, alt, className) {
    let result = null
    result = document.createElement('img')
    result.setAttribute('src', `${path}${src}`)
    if (alt) {
      result.setAttribute('alt', alt)
    }
    if (className) {
      result.classList.add(className)
    }
    return result
  }
}
