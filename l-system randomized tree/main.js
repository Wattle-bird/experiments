// Options
const treeRulesOptions = makeTreeRulesOptions()

const treeRendererOptions = {
  swayAngle: 0.05,
  swaySpeed: 0.01,
}

const initialState = 'b l'
const iterations = 4



let tick = 0
function draw(engine) {
  canvas.width += 0
  ctx.translate(500, 1000)
  tick++
  engine.renderer.updateSway(tick)
  engine.draw()
  requestAnimationFrame(() => draw(engine))
}

function main() {
  let rules = new TreeRules(treeRulesOptions)
  let renderer = new TreeRenderer(treeRendererOptions)
  let engine = new LSystem(rules, renderer, initialState, ctx)

  upto(iterations, () => engine.iterate())

  ctx.translate(500, 1000)

  draw(engine)

  setInterval(() => {
    engine.state = 'b l'
    upto(iterations, () => engine.iterate())
    rules.options = makeTreeRulesOptions()
  }, 2000)
}

main()