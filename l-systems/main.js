// jQuery lite
window.S = document.querySelector.bind(document);

// Random shorthand
function rand(x) {
  return Math.random() * x
}

// b is branch
// l is leaf
// f is flower
// ( is push state
// ) is pop state
// + is turn left
// - is turn right
let rules = {
  b: "b(+l)(--l)b", 
  l: "b((+l)++lf)(f-l)",
  f: "(--l)"
}

// in radians
let angle = 0.5
let lineLength = 25

let actions = {
  b() {
    ctx.beginPath()
    ctx.strokeStyle = "#b86"
    ctx.lineWidth = 6
    ctx.lineCap = "butt"
    ctx.moveTo(0,0)
    ctx.translate(0,-lineLength)
    ctx.lineTo(0,0)
    ctx.stroke()
  }, 
  l() {
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.lineWidth = 12
    ctx.lineCap = "round"
    ctx.moveTo(0, -9)
    ctx.translate(0, -lineLength)
    ctx.lineTo(0, 0)
    ctx.stroke()
  },
  f() {
    ctx.beginPath()
    ctx.fillStyle = "pink"
    ctx.arc(0,10,6,0,7)
    ctx.fill()
  }, 
  "+": () => {
    ctx.rotate(-angle + Math.sin(ticks/99)*0.1)
  }, 
  "-": () => {
    ctx.rotate(angle + Math.sin(ticks/99)*0.1)
  }, 
  "(": () => {
    ctx.save()
  }, 
  ")": () => {
    ctx.restore()
  }
}

let string = "l"


function iterate() {
  let chars = string.split("")
  let newChars = chars.map((char) => {
    if (rules[char] !== undefined) {
      return rules[char]
    } else {
      return char
    }
  })
  string = newChars.join("")
}
upto(5, iterate)

let ticks = 0

function draw() {
  canvas.width += 0
  ticks++
  
  ctx.save()
  ctx.translate(500, 1000)
  
  string.split("").forEach((char) => {
    actions[char]()
  })
  
  ctx.restore()
  
  requestAnimationFrame(draw)
}

draw()