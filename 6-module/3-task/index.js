import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.root = this.createDivElement('carousel')
    this.createArrows()
    this.createInner()
  }

  get elem() {
    return this.root
  }

  createArrows() {
    const lastSlide = this.slides.length - 1
    let currentSlide = 0
    const inner = document.querySelector('.carousel__inner')

    const arrowLeft = this.createDivElement('carousel__arrow')
    arrowLeft.classList.add('carousel__arrow_left')
    arrowLeft.style.display = 'none'
    arrowLeft.append(this.createImgElement('/assets/images/icons/', 'angle-left-icon.svg', 'icon'))

    const arrowRight = this.createDivElement('carousel__arrow')
    arrowRight.classList.add('carousel__arrow_right')
    arrowRight.append(this.createImgElement('/assets/images/icons/', 'angle-icon.svg', 'icon'))

    arrowLeft.addEventListener('click', () => {
      currentSlide--
      this.carouselRoot.style.transform = `translateX(-${this.carouselRoot.offsetWidth * currentSlide}px)`
      arrowLeft.style.display = currentSlide === 0 ? 'none' : ''
      arrowRight.style.display = currentSlide === lastSlide ? 'none' : ''
    })
    arrowRight.addEventListener('click', () => {
      currentSlide++
      this.carouselRoot.style.transform = `translateX(-${this.carouselRoot.offsetWidth * currentSlide}px)`
      arrowLeft.style.display = currentSlide === 0 ? 'none' : ''
      arrowRight.style.display = currentSlide === lastSlide ? 'none' : ''
    })

    this.root.append(arrowLeft)
    this.root.append(arrowRight)
  }

  createInner() {
    this.carouselRoot = this.createDivElement('carousel__inner')
    this.root.append(this.carouselRoot)
    for (const slide of this.slides) {
      this.createSlide(slide)
    }
  }

  createSlide(product) {
    const slideRoot = this.createDivElement('carousel__slide')
    slideRoot.setAttribute('data-id', product.id)
    slideRoot.append(
      this.createImgElement('/assets/images/carousel/', product.image, 'slide', 'carousel__img')
    )
    const slideCaption = this.createDivElement('carousel__caption')
    slideCaption.append(
      this.createPriceElement('carousel__price', product.price)
    )
    slideCaption.append(
      this.createDivElement('carousel__title', product.name)
    )
    const button = this.createButton('carousel__button', product)
    button.append(this.createImgElement('/assets/images/icons/', 'plus-icon.svg', 'icon'))
    slideCaption.append(button)
    slideRoot.append(slideCaption)
    this.carouselRoot.append(slideRoot)
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
      this.root.dispatchEvent(event)
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
