class HomePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <h1> Home </h1>
    <a href="/about">about</a>
    `
  }
}

customElements.define('home-page', HomePage)
