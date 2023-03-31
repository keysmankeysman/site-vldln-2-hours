import { row, col, css } from '../utils'

class Block {
    constructor(type, value, options) {
        this.type = type
        this.value = value
        this.options = options
    }

    toHTML () {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options)
    }

    toHTML() {
        const { tag = 'h1', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options)
    }

    toHTML() {
        return row(`<img src="${this.value}" />`)
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options)
    }

    toHTML() {
        let html = this.value.map(col).join('')
        return row(html)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`))
    }
}
