// set up canvas
$('#display').innerHTML = `
 <div id=d style="
  aspect-ratio:1;
  max-width:100%;
  max-height:100%;
  margin: auto;
 ">
  <canvas class=crisp width=64 height=64 id=c style="
   background: #ddd;
   width: 100%;
   height: 100%
  ">
 </div>
`
let ctx = $('#c').getContext('2d')


// image data to image function
function imgFromData(imgData) {
 let canvas = document.createElement("canvas")
 canvas.width = imgData.width
 canvas.height = imgData.height
 let ctx = canvas.getContext('2d');
 imgData.data.forEach((data, i) => {
  if (data) {
   let x = i % imgData.width
   let y = Math.floor(i / imgData.width)
   ctx.fillRect(x, y, 1, 1)
  }
 })
 return canvas
}
 

// human
let imgDataHuman = {"data":[0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0],"width":8,"height":8}
let imgHuman = imgFromData(imgDataHuman)


// draw it!
ctx.drawImage(imgHuman, 0, 0)