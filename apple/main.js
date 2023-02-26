// jQuery lite
window.S = document.querySelector.bind(document);

let canvas = S('#canvas');
let ctx = canvas.getContext('2d');

upto(20, (n) => {
  ctx.fillStyle = `hsl(${n*4} 80% 50%)`
  ctx.beginPath();
  let x1 = (n/14)-10/14;
  let height = (x1**2 + 1 - 2*x1**4) * 50;
  ctx.ellipse(100+(n*3), 150, 35, height, 0, 0, 7);
  ctx.fill();
})

ctx.beginPath();
ctx.strokeStyle = 'brown';
ctx.lineWidth = 5;
ctx.moveTo(128, 100);
ctx.lineTo(138, 80)
ctx.stroke();