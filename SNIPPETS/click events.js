// click events
$('#c').onclick = (ev) => {
 let x = ev.offsetX/ev.target.clientWidth
 let y = ev.offsetY/ev.target.clientHeight
 onclick(x,y)
}


function onclick(x,y) {
 console.log(x,y)
}


// click events for object-fit: contain
$('#c').onclick = (ev) => {
 let t = ev.target
 // ratio of the element size to the canvas size
 let xRatio = t.offsetWidth/t.width
 let yRatio = t.offsetHeight/t.height
 
 let xPad = 0, yPad = 0, ratio = 1
 if (xRatio > yRatio) {
  // too wide, gaps to left and right

  // ratio canvas is rendered at
  ratio = yRatio

  // width in CSS pixels of the canvas
  let pixelWidth = t.width * ratio

  // padding exists on both sides
  xPad = (t.offsetWidth - pixelWidth) / 2
 } else {
  // too tall, gaps at top and bottom

  // ratio canvas is rendered at
  ratio = xRatio

  // height in CSS pixels of the canvas
  let pixelHeight = t.height * ratio

  // padding exists on both sides
  yPad = (t.offsetHeight - pixelHeight) / 2
 }
 // location of the click in actual canvas pixels
 let xInCanvas = (ev.offsetX - xPad)/ratio
 let yInCanvas = (ev.offsetY - yPad)/ratio

 // location of the click in fractions of the canvas
 let x = xInCanvas / t.width
 let y = yInCanvas / t.height
 
 // only callback when within the canvas
 if (x > 0 && x < 1 && y > 0 && y < 1)
  onclick(x,y)
}


function onclick(x,y) {
 console.log(x,y)
}