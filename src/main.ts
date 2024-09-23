import Router from './lib/router'
import routes from './router'
import './views/home'
import './views/about'

class MainComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get component(): string {
    const path = location.pathname.toLowerCase()
    switch (path) {
      case '/':
        return 'home-page'
      case '/about':
        return 'about-page'
      default:
        return 'not-found-page'
    }
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot!.innerHTML = `<${this.component}></${this.component}>`
  }
}

customElements.define('main-component', MainComponent)

setTimeout(() => new Router(routes), 2000)
