const WIDTH = 10;
const HEIGHT = 10;

let grid = [];
for (let col = 0; col < WIDTH; col++) {
  grid.push(new Array());
  for (let row = 0; row < HEIGHT; row++) {
    grid[col].push("EMPTY");
  }
}