// constants
WIDTH = 8
HEIGHT = 8

// set up canvas
// ctx - canvas context
$('#display').innerHTML = `
<div style="display: flex; flex-direction: column; height: 100%; align-items: center;">

<canvas id=c class=crisp width=${WIDTH * 10} height=${HEIGHT * 10} style="background: grey;height: min(100%, 98vw);"></canvas>

<button>abc</button>
</div>
`
let ctx = $('#c').getContext('2d')

// click events
// onclick() - click handler
$('#c').onclick = (ev) => {
let x = ev.offsetX/ev.target.clientWidth
let y =
ev.offsetY/ev.target.clientHeight
onclick(x,y);
}


// image buffer
let img = {
 data: [],
 width: WIDTH,
 height: HEIGHT,
 get(x, y) {
  return this.data[x + y * this.height];
 },
 set(x,y,value) {
  this.data[x + y * this.height] = value;
 }
}
for (let i = 0; i < 64; i++) {
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
  ctx.fillRect(x*10,y*10,9,9)
 }
}
}
drawImg()
console.log('here')

// click event handler
function onclick(px,py) {
 let x = Math.floor(px*WIDTH)
 let y = Math.floor(py*HEIGHT)
 if (img.get(x,y))
  img.set(x,y,0)
 else
  img.set(x,y,1)
 drawImg()
 console.log(JSON.stringify(img));
}