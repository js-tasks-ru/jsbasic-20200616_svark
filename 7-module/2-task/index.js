import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.root = this.createDivElement('modal')
    this.root.append(this.createDivElement('modal__overlay'))
    this.inner = this.createDivElement('modal__inner')
    this.root.append(this.inner)
    this.header = this.createDivElement('modal__header')
    this.inner.append(this.header)
    this.closeButton = this.createButton('modal__close')
    this.closeButton.append(
      this.createImgElement('/assets/images/icons/','cross-icon.svg','close-icon')
    )
    this.inner.append(this.closeButton)
    this.title = document.createElement('h3')
    this.title.classList.add('modal__title')
    this.header.append(this.title)
    this.modalBody = this.createDivElement('modal__body')
    this.inner.append(this.modalBody)
    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.close()
      }
    })
  }

  setTitle(title) {
    this.title.innerHTML = title
  }

  setBody(text) {
    this.modalBody.innerHTML = ''
    this.modalBody.append(text)
  }

  open() {
    document.querySelector('body').append(this.root)
    document.querySelector('body').classList.add('is-modal-open')
  }

  close() {
    document.querySelector('body').classList.remove('is-modal-open')
    this.root.remove()
  }

  createButton(className) {
    const button = document.createElement('button')
    button.classList.add(className)
    button.addEventListener('click', () => { this.close() })
    return button
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

  createDivElement(className, innerHTML) {
    let result = null
    result = document.createElement('div')
    result.classList.add(className)
    if (innerHTML) {
      result.innerHTML = innerHTML
    }
    return result
  }
}
