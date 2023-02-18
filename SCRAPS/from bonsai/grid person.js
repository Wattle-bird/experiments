// set up canvas
$('#display').innerHTML = `
 <canvas id=c class="contain crisp" 
  width=128 height=128>
`
let ctx = $('#c').getContext('2d')


// image data to image function
function imgFromData(imgData, color) {
  let canvas = document.createElement("canvas")
  canvas.width = imgData.width
  canvas.height = imgData.height
  let ctx = canvas.getContext('2d')
  if (color) ctx.fillStyle = color
  imgData.data.forEach((data, i) => {
   if (data) {
    let x = i % imgData.width
    let y = Math.floor(i / imgData.width)
    ctx.fillRect(x, y, 1, 1)
   }
  })
  return canvas
 }


// human
let imgDataHuman = {"data":[0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0],"width":8,"height":8}
let imgHuman = imgFromData(imgDataHuman, "cyan")


// setup
let playerX = 1, playerY = 1


// draw
function draw() {
 ctx.fillRect(0,0,128,128)
 ctx.drawImage(imgHuman, playerX * 8, playerY * 8)
}
draw()