// set up canvas
$('#display').innerHTML = `
<div id=d style="aspect-ratio:1; max-width:100%;max-height:100%;margin: auto;">
<canvas id=c width=1000 height=1000 style="background: gray; width: 100%; height: 100%">
</div>`
let ctx = $('#c').getContext('2d')

// click events
$('#c').onclick = (ev) => {
let x = ev.offsetX/ev.target.clientWidth
let y =
ev.offsetY/ev.target.clientHeight
onclick(x,y);
}

// draw box on click
function onclick(x,y) {
ctx.canvas.width += 0;
let cx = x * ctx.canvas.width;
let cy = y * ctx.canvas.height;
ctx.fillRect(cx,cy,100,100)
}
