import $ from 'jquery'

class Image {
    constructor(image) {
        console.log(image);
        this.image = image

        this.$ = $('<div class="image"></div>')
            .css('background-image', `url(${ this.image })`)
    }

    translate(x) {
        this.$.css('transform', `translateX(${ x }vw)`)
    }
}

export default Image
