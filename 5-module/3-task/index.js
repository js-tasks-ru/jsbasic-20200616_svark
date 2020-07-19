
function initCarousel() {
  const arrows = {
    left: document.querySelector('.carousel__arrow_left'),
    right: document.querySelector('.carousel__arrow_right'),
  }
  const inner = document.querySelector('.carousel__inner')
  let currentSlide = 0
  arrows.left.style.display = 'none'
  arrows.left.addEventListener('click', () => {
    currentSlide--
    inner.style.transform = `translateX(-${inner.offsetWidth * currentSlide}px)`
    arrows.left.style.display = currentSlide === 0 ? 'none' : ''
    arrows.right.style.display = currentSlide === 3 ? 'none' : ''
  })
  arrows.right.addEventListener('click', () => {
    currentSlide++
    inner.style.transform = `translateX(-${inner.offsetWidth * currentSlide}px)`
    arrows.left.style.display = currentSlide === 0 ? 'none' : ''
    arrows.right.style.display = currentSlide === 3 ? 'none' : ''
  })
}
