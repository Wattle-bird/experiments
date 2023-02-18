let bend = Math.random()*0.6-0.3;
let color = ((Math.random()*0xaff+0x500)|0).toString(16);
let flowers = ['*','#','%','&','@'];
let flower = flowers[(Math.random()*flowers.length)|0];
let delay = 0 - Math.random()*3;
let x = Math.random()*10-5;
let y = Math.random()*10-5;


display.innerHTML += `
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&display=swap');

.wiggle {
  animation: 3s alternate infini      te wiggly;
  animation-timing-function: ease-in-out;
}

@keyframes wiggly {
  from { transform: matrix(1,0,-0.3,1,0,0) }
  to { transform: matrix(1,0,0.3,1,0,0) }
}
</style>
<div style="position: relative; font-size: 20px; background: tan; width: 30px; height: 30px; display: inline-block;">
<div class=wiggle style="transform-origin: bottom center; width: 30px; height: 30px; animation-delay: ${delay}s; position: relative; top: ${y}px; left: ${x}px;">
<div style="font-family: 'Source Code Pro'; text-align: center; width: 30px; position: absolute; color: green;">|</div>
<div style="font-family: 'Source Code Pro'; text-align: center; width: 30px; position: absolute; top: -7px; color: #${color}; text-shadow: 1px 1px #00000050">${flower}</div>
</div>
</div>
`