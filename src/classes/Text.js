import $ from 'jquery'

class Text {
    constructor(text) {
        console.log(text);
        this.text = text

        this.$ = $('<div class="text"></div>')
            .append($(`<div class="number"  >${ this.text.number   }</div>`))
            .append($(`<div class="title"   >${ this.text.title    }</div>`))
            .append($(`<div class="subtitle">${ this.text.subtitle }</div>`))
    }

    translate(x) {
        this.$.css('transform', `translateX(${ x }vw)`)
    }
}

export default Text
