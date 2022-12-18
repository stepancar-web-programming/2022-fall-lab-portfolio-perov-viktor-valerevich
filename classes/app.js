import { Site } from './site'
import { Sidebar } from './sidebar'
import { counter } from '../utils'

export class App {
  constructor (view) {
    this.view = view
  }

  init () {
    const site = new Site('#site')
    site.render(this.view)

    const updateCallback = newBlock => {
      this.view.push(newBlock)
      site.render(this.view)
    }

    new Sidebar('#panel', updateCallback)

    counter()
  }
}
