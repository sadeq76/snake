import { RouterRecordRaw, RouterInterface } from './types'

export default class Router implements RouterInterface {
  constructor(private routes: RouterRecordRaw[]) {
    this.init()
  }

  init() {
    this.resetHyperlinkFunctionality()
    this.handlePopstate()
  }

  navigateTo(url: string) {
    history.pushState(null, '', url)
    window.dispatchEvent(new PopStateEvent('popstate'))
    this.handleRouting()
  }

  resetHyperlinkFunctionality() {
    document.querySelectorAll('a').forEach((item) =>
      item.addEventListener('click', (e: Event) => {
        e.preventDefault()
        this.navigateTo(item.href)
      })
    )
  }

  handlePopstate() {
    window.addEventListener('popstate', this.handleRouting)
  }

  handleRouting() {
    const path = window.location.pathname

    console.log(path)
  }
}
