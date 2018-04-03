import $        from 'jquery'
import Slider   from './Slider'
import Image    from './Image'
import Text     from './Text'

class Home {
    constructor({ data }) {
        console.log(data);
        this.data = data

        const images = this.data.map(data => data.image)
        const texts  = this.data.map(data => data.text )
        this.sliders = [
            new Slider({ constructor: Image, className: 'images', data: images }),
            new Slider({ constructor: Image, className: 'images', data: images }),
            new Slider({ constructor: Image, className: 'images', data: images }),
            new Slider({ constructor: Text , className: 'texts' , data: texts  })
        ]

        this.$ = $('<div class="home"></div>')
            .append(this.sliders.map(slider => slider.$))

        this.sliders[0].mask({ r: 15, cx: 57, cy: 40 })
        this.sliders[1].mask({ r:  4, cx: 31, cy: 52 })
        this.sliders[2].mask({ r:  4, cx: 40, cy: 84 })

        this.to(0)
    }

    to(index) {
        index = index % this.data.length

        this.sliders.map(slider => slider.to(index))
    }

    render() {

    }
}

export default Home
