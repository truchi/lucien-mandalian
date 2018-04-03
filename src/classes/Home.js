import $        from 'jquery'
import Slider   from './Slider'
import Image    from './Image'
import Text     from './Text'

class Home {
  constructor({ data, masks }) {
    console.log(data);
    this.data = data
    this.masks = masks

    const images = this.data.map(data => data.image)
    const texts  = this.data.map(data => data.text )
    this.sliders = [
      new Slider({ constructor: Text , className: 'texts' , data: texts  })
    ]

    this.masks.forEach(() => {
      const slider = new Slider({ constructor: Image, className: 'images', data: images })
      this.sliders.unshift(slider)
    })

    this.$ = $('<div class="home"></div>')
      .append(this.sliders.map(slider => slider.$))

    this.index = 0
    this.to(this.index)
  }

  prev() {
    return this.to(this.index - 1)
  }

  next() {
    return this.to(this.index + 1)
  }

  to(index) {
    const mod = (i, n) => ((i % n) + n) % n
    this.index = mod(index, this.data.length)

    this.sliders.map(slider => slider.to(this.index))

    this.masks.forEach((mask, i) => {
      this.sliders[i].mask(mask)
    })
    this.masks.unshift(this.masks.pop())

    return this
  }

  render() {

  }
}

export default Home
