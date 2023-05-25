class LSystem {
  constructor(rules, renderer, initialState, ctx) {
    this.rules = rules
    this.renderer = renderer
    this.state = initialState
    this.ctx = ctx

    this.step = 0
  }

  iterate() {
    this.step++

    let items = this.state.split(' ')
    let newItems = items.map((item) => {
      let type = item[0]
      if (this.rules[type] !== undefined) {
        return this.rules[type](item, this.step)
      } else {
        return item
      }
    })
    this.state = newItems.join(' ')
  }

  draw() {
    let items = this.state.split(' ')
    items.forEach((item) => {
      let type = item[0]
      if (this.renderer[type] !== undefined) {
        this.renderer[type](this.ctx, item, this.step)
      }
    })
  }
}