function drawSimpleFlower(flower) {
  let color = ((flower.r * 0x100) + (flower.g * 0x10) + flower.b).toString(16);
  let delay = 0 - Math.random()*3;

  return `<div><div class=wiggle style="width: 30px; height: 30px; animation-delay: ${delay}s; position: relative; top: ${flower.y}px; left: ${flower.x}px; font-weight: 900; display: inline-block;">
  <div style="text-align: center; width: 30px; position: absolute; color: green;">|</div>
  <div style="text-align: center; width: 30px; position: absolute; top: -7px; color: #${color}; text-shadow: 0 0 2px #00000050">${flower.symbol}</div>
  </div></div>`
}

function generateSimpleFlower() {
  return {
    r: Math.floor(Math.random() * 0xf + 1), 
    g: Math.floor(Math.random() * 0xf + 1), 
    b: Math.floor(Math.random() * 0xf + 1), 
    symbol: simpleFlowerSymbols[Math.floor(Math.random() * 5)],
    x: Math.random()*10-5,
    y: Math.random()*10-5,
    type: "simpleFlower"
  }
}

let simpleFlowerSymbols = ['*','#','%','&','@'];