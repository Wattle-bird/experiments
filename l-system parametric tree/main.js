window.canvas = document.querySelector("#canvas")
window.ctx = canvas.getContext("2d")

canvas.width = 1000
canvas.height = 1000

ctx.translate(500, 1000)

let tree = new Tree();
upto(5, () => tree.iterate())
tree.draw(ctx)
console.log(tree.items)