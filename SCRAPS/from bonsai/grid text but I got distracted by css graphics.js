display.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&display=swap');
</style> 

<pre id=a style="line-height: 1em; letter-spacing: 0.3em; font-family: 'Source Code Pro', sans-serif; width: max-content; background: #edb; padding: 10px;"></pre>

<div style="position: relative; font-size: 20px; background: yellow; width: 30px; height: 30px">
<div style="font-family: 'Source Code Pro'; text-align: center; width: 30px; position: absolute; color: green;"></div>
<div style="font-family: 'Source Code Pro'; text-align: center; width: 30px; position: absolute; top: -7px; color: #a00; -webkit-text-stroke: 1px #f00; animation: 3s infinite alternate moveLeft300px;">%</div>
</div>
`

WIDTH = 10;
HEIGHT = 10;

// make the grid
let grid = [];
for (h = 0; h < HEIGHT; h++) {
  grid.push(new Array());
  for (w = 0; w < WIDTH ; w++) {
    grid[h].push(' ');
  }
}

grid[1][5] = '.';
grid[1][6] = 'r';
grid[1][7] = 'F';
grid[1][8] = 'P';

// draw the grid
grid.forEach((row) => {
  row.forEach((cell) => {
    $('#a').innerHTML += cell;
  });
  $('#a').innerHTML += '\n';
});