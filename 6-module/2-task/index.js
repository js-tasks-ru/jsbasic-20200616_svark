import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  root = null

  constructor(product) {
    this._root = this.createDivElement('card')
    this.createCardTop(this._root, product)
    this.createCardBody(this._root, product)
  }

  get elem() {
    return this._root
  }

  createCardTop(root, product) {
    let cardTop = null
    let cardTopImage = null
    let cardTopText = null
    cardTopImage = this.createImgElement(
      '/assets/images/products/', product.image,
      'product', 'card__image'
    )
    cardTopText = this.createPriceElement('card__price', product.price)
    cardTop = this.createDivElement('card__top')
    cardTop.append(cardTopImage)
    cardTop.append(cardTopText)
    root.append(cardTop)
  }

  createCardBody(root, product) {
    let cardBody = null
    let cardBodyTitle = null
    let cardBodyButton = null
    let cardBodyButtonImage = null

    cardBody = this.createDivElement('card__body')
    cardBodyTitle = this.createDivElement('card__title', product.name)
    cardBodyButton = this.createButton('card__button', product)
    cardBodyButtonImage = this.createImgElement('/assets/images/icons/', 'plus-icon.svg', 'icon')
    cardBodyButton.append(cardBodyButtonImage)
    cardBody.append(cardBodyTitle)
    cardBody.append(cardBodyButton)
    root.append(cardBody)
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

  createButton(className, product) {
    let result = null
    const event = new CustomEvent('product-add', {
      detail: product.id,
      bubbles: true
    })
    result = document.createElement('button')
    result.classList.add(className)
    result.setAttribute('type', 'button')

    result.addEventListener('click', () => {
      this._root.dispatchEvent(event)
    })
    return result
  }

  createPriceElement(className, price) {
    let result = null
    result = document.createElement('span')
    result.classList.add(className)
    if (price) {
      result.innerHTML = `€${price.toFixed(2)}`
    }
    return result
  }
}
