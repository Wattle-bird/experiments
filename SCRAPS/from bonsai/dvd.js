// set up canvas
$('#display').innerHTML = `
 <canvas id=c class="contain crisp" 
  width=64 height=48>
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


// DVD logo
let imgDataDVD = {"data":[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"width":16,"height":12}
let imgDVDs = [imgFromData(imgDataDVD, "red"), imgFromData(imgDataDVD, "green"), imgFromData(imgDataDVD, "blue")]


// interval timer
if (window.intervalTimer)
 clearInterval(window.intervalTimer);
window.intervalTimer = 
 setInterval(intervalFunc, 1000/30)

function intervalFunc() { 
 update()
 draw()
}


// setup
let dvdx = Math.random() * (64 - 16)
let dvdy = Math.random() * (48 - 12)
let dx = 1, dy = 1
let color = 0


// update
function update() {
 dvdx += dx
 dvdy += dy
 if (dvdx > 64 - 16 || dvdx < 1) {
  dx = -dx
  color = (color + 1) % 3
 }
 if (dvdy > 48 - 10 || dvdy < 1) {
  dy = -dy
  color = (color + 1) % 3
 }
}


// draw
function draw() {
 ctx.fillRect(0, 0, 64, 64)
 ctx.drawImage(imgDVDs[color], dvdx|0, dvdy|0)
}