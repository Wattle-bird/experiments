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
    ctx.strokeStyle = this.options.leafColor
    ctx.lineWidth = this.options.leafWidth
    ctx.lineCap = "round"
    ctx.moveTo(0, -5)
    ctx.translate(0, -30)
    ctx.lineTo(0, 0)
    ctx.stroke()
  }

  ["+"](ctx) {
    ctx.rotate(-this.options.angle+this.sway)
  }

  ["-"](ctx) {
    ctx.rotate(this.options.angle+this.sway)
  }

  ["("](ctx) {
    ctx.save()
  }

  [")"](ctx) {
    ctx.restore()
  }
}

function makeTreeRendererOptions() {
  return {
    swayAngle: 0.05,
    swaySpeed: 0.01,
    leafColor: `hsl(${rand(180) - 30} ${rand(100)}% ${rand(60)+ 40}%)`,
    leafWidth: rand(40) + 20,
    leafLength: rand(40),
    angle: rand(1) + 0.3
  }
}