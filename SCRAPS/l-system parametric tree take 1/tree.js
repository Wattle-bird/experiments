const ANGLE = 0.4

class Tree {
  constructor() {
    this.items = [new LeafItem(this)]
  }

  iterate() {
    this.items = this.items.map((item) => item.iterate()).flat()
  }

  draw(ctx) {
    ctx.save()
    this.items.forEach((item) => item.draw(ctx))
    ctx.restore()
  }
}

class LeafItem {
  constructor() {
    this.type = 'Leaf'
  }

  iterate() {
    return [
      new BranchItem(),
      new SaveItem(),
      new RotateItem(-ANGLE),
      new LeafItem(),
      new RestoreItem(),
      new RotateItem(ANGLE),
      new BranchItem(),
      new SaveItem(),
      new RotateItem(ANGLE),
      new LeafItem(),
      new RestoreItem()
    ]
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.lineWidth = 9
    ctx.lineCap = "round"
    ctx.moveTo(0, -5)
    ctx.translate(0, -8)
    ctx.lineTo(0, 0)
    ctx.stroke()
  }
}


class BranchItem {
  constructor() {
    this.type = 'Branch'
  }

  iterate() {
    return [
      this,
      new BranchItem()
    ]
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = "#b86"
    ctx.lineWidth = 6
    ctx.lineCap = "butt"
    ctx.moveTo(0, 0)
    ctx.translate(0, -10)
    ctx.lineTo(0, 0)
    ctx.stroke()
  }
}

class SaveItem {
  constructor() {
    this.type = "Save"
  }

  iterate() {return this}
  draw(ctx) {ctx.save()}
}

class RestoreItem {
  constructor() {
    this.type = "Restore"
  }

  iterate() {return this}
  draw(ctx) {ctx.restore()}
}

class RotateItem {
  constructor(angle) {
    this.type = "Rotate " + angle
    this.angle = angle
  }

  iterate() {return this}
  draw(ctx) {ctx.rotate(this.angle)}
}