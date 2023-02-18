// set up canvas
$('#display').innerHTML = `
 <canvas id=c class="contain crisp" 
  width=${12*13-1} height=83>
`
let ctx = $('#c').getContext('2d')


// image data to image function
function imgFromData(imgData, color) {
  let canvas = document.createElement("canvas")
  canvas.width = imgData.width
  canvas.height = imgData.height
  let ctx = canvas.getContext('2d')
  if (color) ctx.fillStyle = color
  imgData.data.forEach((data, i) => {
   if (data) {
    let x = i % imgData.width
    let y = Math.floor(i / imgData.width)
    ctx.fillRect(x, y, 1, 1)
   }
  })
  return canvas
 }


// card numbers
// draw at 3,3
let imgDataCardNums = {"data":[0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0],"width":70,"height":5}
let imgCardNums = imgFromData(imgDataCardNums, "black")


// card suits
// draw at 2,11
let imgDataSpades = {"data":[0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0],"width":7,"height":7}
let imgDataClubs = {"data":[0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0],"width":7,"height":7}
let imgDataDiamonds = {"data":[0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0],"width":7,"height":7}
let imgDataHearts = {"data":[0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0],"width":7,"height":7}
let imgSuits = [
 imgFromData(imgDataSpades, "black"),
 imgFromData(imgDataClubs, "black"),
 imgFromData(imgDataDiamonds, "red"),
 imgFromData(imgDataHearts, "red")
]


// card background
let imgDataCardBG = {"data":[0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0],"width":11,"height":20}
let imgCardBG = imgFromData(imgDataCardBG, "black")


// draw
for (let suite = 0; suite < 4; suite++) {
 let y = suite * 21
 for (let num = 0; num < 13; num++) {
  let x = num * 12
  ctx.drawImage(imgCardBG, x, y)
  ctx.drawImage(imgCardNums, num*5, 0, 5, 5, x+3, y+3, 5, 5)
  ctx.drawImage(imgSuits[suite], x+2, y+11)
 }
}