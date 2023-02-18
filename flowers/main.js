let drawFunctions = {
  simpleFlower: drawSimpleFlower,
  empty: drawEmpty
}

function drawEmpty() { return "<div></div>"; }

const WIDTH = 10;
const HEIGHT = 10;

let grid = [];
for (let col = 0; col < WIDTH; col++) {
  grid.push(new Array());
  for (let row = 0; row < HEIGHT; row++) {
    grid[col].push({type: "empty"});
  }
}

for(let i = 0; i < 10; i++) {
  let x = Math.floor(Math.random() * WIDTH);
  let y = Math.floor(Math.random() * HEIGHT);
  grid[x][y] = generateSimpleFlower();
}

document.body.innerHTML += "<div id='grid'></div>";

for(y = 0; y < HEIGHT; y++) {
  for(x = 0; x < WIDTH; x++) {
    let content = drawFunctions[grid[x][y].type](grid[x][y])
    document.getElementById('grid').innerHTML += content;
  }
}