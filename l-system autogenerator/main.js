// jQuery lite
window.S = document.querySelector.bind(document);

// Random shorthand
function rand(x) {
  return Math.random() * x
}

function randomLetter() {
  return ['a', 'b', 'c'][Math.floor(rand(3))]
}

function randomItem() {
  return {
    lightness: Math.floor(20 + rand(70)),
    width: rand(10),
    length: rand(30) + 30,
    rotation: rand(Math.PI * 2)
  }
}


function drawItem(item, hue) {
  ctx.rotate(item.rotation)
  ctx.beginPath()
  ctx.strokeStyle = `hsl(${hue} 70% ${item.lightness}%)`
  //ctx.shadowColor = ctx.strokeStyle + 'aa'
  ctx.shadowColor = `hsl(${hue} 70% ${item.lightness/1.5}%)`
  ctx.lineWidth = item.width
  ctx.lineCap = "round"
  ctx.moveTo(0,0)
  ctx.translate(0,-item.length)
  ctx.lineTo(0,0)
  ctx.stroke()
}



function iterate(string, rules) {
  let chars = string.split("")
  let newChars = chars.map((char) => {
    if (rules[char] !== undefined) {
      return rules[char]
    } else {
      return char
    }
  })
  return newChars.join("")
}

function draw(string, items) {
  canvas.width += 0
  let hue1 = rand(360)
  let hue2 = hue1 + 30
  let hue3 = hue2 + 30

  ctx.translate(500, 500)
  ctx.shadowBlur = 10

  ctx.save()


  
  string.split("").forEach((char) => {
    drawItem(items[char], hue1)
  })
  
  ctx.restore()
  ctx.rotate(Math.PI * 2 / 3)
  ctx.save()
  
  string.split("").forEach((char) => {
    drawItem(items[char], hue2)
  })
  
  ctx.restore()
  ctx.rotate(Math.PI * 2 / 3)
  ctx.save()
  
  string.split("").forEach((char) => {
    drawItem(items[char], hue3)
  })
  
  ctx.restore()

  
}

function run() {
  let rules = {
    a: randomLetter() + randomLetter() + randomLetter(),
    b: randomLetter() + randomLetter() + randomLetter(),
    c: randomLetter() + randomLetter() + randomLetter()
  }
  
  let items = {
    a: randomItem(),
    b: randomItem(),
    c: randomItem()
  }
  
  let string = "a"

  upto(6, () => string = iterate(string, rules))

  draw(string, items)


  setTimeout(run, 3000)
}

run()