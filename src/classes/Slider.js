import $ from 'jquery'

class Slider {
  constructor({ constructor, className, data }) {
    this.slides = data.map(data => new constructor(data))

    this.$ = $(`<div class="${ className }"></div>`)
      .append(this.slides.map(slide => slide.$))
  }

  to(index) {
    this.slides.map((slide, i) =>
      slide.$
        .css('transform', `translateX(${ (i - index) * 100 }vw)`)
    )
  }

  mask({ r, cx, cy }) {
    this.$
      .css('clip-path', `circle(${ r }vw at ${ cx }vw ${ cy }vh)`)
  }
}

export default Slider
