// jQuery lite
window.S = document.querySelector.bind(document);

// Random shorthand
function rand(x) {
  return Math.random() * x
}


ctx.fillRect(0,0,1000,1000)

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
  f: ""
}

// in radians
let angle = 0.5
let lineLength = 25

let actions = {
  b() {
    ctx.beginPath()
    ctx.strokeStyle = "#a65"
    ctx.lineWidth = 7
    ctx.lineCap = "butt"
    ctx.moveTo(0,0)
    ctx.translate(0,-lineLength)
    ctx.lineTo(0,0)
    ctx.stroke()
  }, 
  l() {
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.lineWidth = 15
    ctx.lineCap = "round"
    ctx.moveTo(0, 0)
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
    ctx.rotate(-angle)
  }, 
  "-": () => {
    ctx.rotate(angle)
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

function draw() {
  ctx.save()
  ctx.translate(500, 1000)
  
  string.split("").forEach((char) => {
    actions[char]()
  })
  
  ctx.restore()
}

draw()