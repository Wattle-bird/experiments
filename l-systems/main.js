// jQuery lite
window.S = document.querySelector.bind(document);

// Random shorthand
function rand(x) {
  return Math.random() * x
}


ctx.fillRect(0,0,1000,1000)

// b is branch
// l is leaf
// ( is push state
// ) is pop state
// + is turn left
// - is turn right
let rules = {
  b: "b(+l)(--l)b", 
  l: "b((+l)++l)-l"
}

// in radians
let angle = 0.3
let lineLength = 25

let actions = {
  b() {
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.moveTo(0,0)
    ctx.translate(0,-lineLength)
    ctx.lineTo(0,0)
    ctx.stroke()
  }, 
  l() {
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.moveTo(0, 0)
    ctx.translate(0, -lineLength)
    ctx.lineTo(0, 0)
    ctx.stroke()
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
    if (rules[char]) {
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
  ctx.strokeStyle = "white"
  ctx.lineWidth = 5
  ctx.translate(500, 1000)
  
  string.split("").forEach((char) => {
    actions[char]()
  })
  
  ctx.restore()
}

draw()