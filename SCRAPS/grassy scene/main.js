// jQuery lite
window.S = document.querySelector.bind(document);

function rand(x) {
  return Math.random() * x
}

let canvas = S('#canvas');
let ctx = canvas.getContext("2d")

canvas.width = 1000
canvas.height = 500

ctx.lineWidth = 3

upto(canvas.width, (x) => {
  let hue = 100 + rand(40)
  let sat = 60 + rand(30)
  let lig = 20 + rand(40)
  ctx.strokeStyle = `hsl(${hue} ${sat}% ${lig}%)`
  
  let endX = x - 10 + rand(20)
  let endY = canvas.height - 80 + rand(40)
  
  ctx.beginPath()
  ctx.moveTo(x, canvas.height)
  ctx.lineTo(endX, endY) 
  ctx.stroke()
}) 