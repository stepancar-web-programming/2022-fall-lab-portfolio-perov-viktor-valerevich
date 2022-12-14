import { col, css, row } from '../utils'

class Block {
  constructor (value, options) {
    this.value = value
    this.options = options
  }

  toHTML () {
    throw new Error('метод toTHML должен быть реализован')
  }
}

export class VideoBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    return `<iframe width="100%" height="400" src="${this.value}" frameBorder="0"
                       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen></iframe>
               `
  }
}

export class TitleBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}</{$tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const { imageStyles: is, alt = '', styles } = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
  }
}

export class ImageActiveBlock extends ImageBlock {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const { imageStyles: is, alt = '', styles } = this.options
    return row(`<a href=""><img src="${this.value}" alt="${alt}" style="${css(is)}" /></a>`, css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const html = this.value.map(item => `<div className="col-sm">${item}</div>`)
    return row(`${html.join('')}`, css(this.options.styles))
  }
}

export class TextBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}
