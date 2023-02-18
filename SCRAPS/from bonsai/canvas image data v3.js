// set up canvas
$('#display').innerHTML = `
 <canvas id=c class=contain 
  width=128 height=128>
`
let ctx = $('#c').getContext('2d');


// image data setup
let imgData = ctx.createImageData(
 ctx.canvas.width, ctx.canvas.height
)
let data =
 new Uint32Array(imgData.data.buffer)

function shade(algo) {
 for (x = 0; x < ctx.canvas.width; x++) {
  for (y = 0; y < ctx.canvas.height; y++) {
   data[y*ctx.canvas.width + x] = algo(x,y)
  }
 }
 ctx.putImageData(imgData, 0, 0)
}


// rgb2int
function rgb2int(r, g, b, a) {
  if (a === undefined) a = 0xff;
  return a*2**24 + b*2**16 + g*2**8 + r;
}


// draw
shade((x,y) => {
 return rgb2int(
  x%256,
  x*y%256,
  x*y*x%256
 )
})
