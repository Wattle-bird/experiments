class TreeRenderer {
  constructor(options) {
    this.options = options
    
    this.sway = 0
  }

  updateSway(tick) {
    this.sway = Math.sin(tick * this.options.swaySpeed) * this.options.swayAngle
  }

  b(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = "#b86"
    ctx.lineWidth = 6
    ctx.lineCap = "butt"
    ctx.moveTo(0, 0)
    ctx.translate(0, -30)
    ctx.lineTo(0, 0)
    ctx.stroke()  
  }

  l(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = "#00aa0099"
    ctx.lineWidth = 30
    ctx.lineCap = "round"
    ctx.moveTo(0, -5)
    ctx.translate(0, -30)
    ctx.lineTo(0, 0)
    ctx.stroke()
  }

  ["+"](ctx) {
    ctx.rotate(-0.5+this.sway)
  }

  ["-"](ctx) {
    ctx.rotate(0.5+this.sway)
  }

  ["("](ctx) {
    ctx.save()
  }

  [")"](ctx) {
    ctx.restore()
  }
}

function makeTreeRendererOptions() {
  
}