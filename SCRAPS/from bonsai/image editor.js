// constants
let WIDTH = 8
let HEIGHT = 8
let SCROLLING = false;
let GRIDX = 4
let GRIDY = 4


// set up canvas and toolbar
if (SCROLLING) {
$('#display').innerHTML = `
<div style="width: 100%; height: 100%; overflow: auto;">
<canvas class="crisp" width=${WIDTH * 30} height=${HEIGHT * 30} id=c style="background: #ddd;"></canvas><br>
<button id=save style="height: 30px;">Save</button>
</div>
`
} else {
$('#display').innerHTML = `
<canvas class="crisp contain" width=${WIDTH * 30} height=${HEIGHT * 30} id=c style="background: #ddd; width: 100%; height: calc(100% - 35px)"></canvas>
<button id=save style="height: 30px;">Save</button>
`
}
let ctx = $('#c').getContext('2d')


// image buffer
let img = {
 data: [],
 width: WIDTH,
 height: HEIGHT,
 get(x, y) {
  return this.data[x + y * this.width];
 },
 set(x,y,value) {
  this.data[x + y * this.width] = value;
 }
}
for (let i = 0; i < WIDTH * HEIGHT; i++) {
 img.data.push(0);
}


// draw image
function drawImg() {
for (let x = 0; x < WIDTH; x++) {
 for (let y = 0; y < HEIGHT; y++) {
  if (img.get(x,y))
   ctx.fillStyle = 'black'
  else
   ctx.fillStyle = 'white';
  ctx.fillRect(x*30+1,y*30+1,28,28)
 }
}
drawGrid()
}
drawImg()


// grid
function drawGrid() {
 ctx.strokeStyle = "#f0f"
 for (let x = 30 * GRIDX;
      x < ctx.canvas.width;
      x += 30 * GRIDX) {
  ctx.beginPath()
  ctx.moveTo(x, 0);
  ctx.lineTo(x, ctx.canvas.height);
  ctx.stroke()
 }
 for (let y = 30 * GRIDY;
      y < ctx.canvas.height;
      y += 30 * GRIDY) {
  ctx.beginPath()
  ctx.moveTo(0, y);
  ctx.lineTo(ctx.canvas.width, y);
  ctx.stroke()
 }
}


// click event handler
function onclick(px,py) {
 let x = Math.floor(px*WIDTH)
 let y = Math.floor(py*HEIGHT)
 if (img.get(x,y))
  img.set(x,y,0)
 else
  img.set(x,y,1)
 drawImg()
}


// save button
$("#save").onclick = () => {
 navigator.clipboard.writeText(
  JSON.stringify(img)
 );
 alert("Copied");
}


// click events for object-fit: contain
$('#c').onclick = (ev) => {
 let t = ev.target
 // ratio of the element size to the canvas size
 let xRatio = t.offsetWidth/t.width
 let yRatio = t.offsetHeight/t.height
 
 let xPad = 0, yPad = 0, ratio = 1
 if (xRatio > yRatio) {
  // too wide, gaps to left and right

  // ratio canvas is rendered at
  ratio = yRatio

  // width in CSS pixels of the canvas
  let pixelWidth = t.width * ratio

  // padding exists on both sides
  xPad = (t.offsetWidth - pixelWidth) / 2
 } else {
  // too tall, gaps at top and bottom

  // ratio canvas is rendered at
  ratio = xRatio

  // height in CSS pixels of the canvas
  let pixelHeight = t.height * ratio

  // padding exists on both sides
  yPad = (t.offsetHeight - pixelHeight) / 2
 }
 // location of the click in actual canvas pixels
 let xInCanvas = (ev.offsetX - xPad)/ratio
 let yInCanvas = (ev.offsetY - yPad)/ratio

 // location of the click in fractions of the canvas
 let x = xInCanvas / t.width
 let y = yInCanvas / t.height
 
 // only callback when within the canvas
 if (x > 0 && x < 1 && y > 0 && y < 1)
  onclick(x,y)
}
