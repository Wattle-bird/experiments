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
  "3": "30(+l)(--l)",
  get l() {
    if (rand(3) > 1)
      return "0((+l)++lf)(f-l)"
    return "(+l)0(-l)f"
  },
  f: "l"
}

let growthRules = {
  "0": "1",
  "1": "2",
  "2": "3"
}

// in radians
let angle = 0.5
let lineLength = 25

let actions = {
  "0": () => {
    drawBranch(1)
  },
  "1": () => {
    drawBranch(2)
  },
  "2": () => {
    drawBranch(3)
  },
  "3": () => {
    drawBranch(4)
  },
  l() {
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.lineWidth = 9
    ctx.lineCap = "round"
    ctx.moveTo(0, -5)
    ctx.translate(0, (-lineLength) * step / 24)
    ctx.lineTo(0, 0)
    ctx.stroke()
  },
  f() {
    ctx.beginPath()
    ctx.fillStyle = "pink"
    ctx.arc(0, 10, Math.max(0, -16+step), 0, 7)
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

function drawBranch(size) {
  ctx.beginPath()
  ctx.strokeStyle = "#b86"
  ctx.lineWidth = 6
  ctx.lineCap = "butt"
  ctx.moveTo(0, 0)
  ctx.translate(0, (-lineLength) * size/4)
  ctx.lineTo(0, 0)
  ctx.stroke()
}

let string = "l"


function iterate(rules) {
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
//upto(5, iterate)

let step = 0

function draw() {
  canvas.width += 0
  step++
  step = step % 24
  if (!(step % 4)) {
    iterate(rules)
  } else {
    iterate(growthRules)
  }
  if (step === 0) {
    string = "l"
  }

  ctx.save()
  ctx.translate(500, 1000)

  string.split("").forEach((char) => {
    actions[char]()
  })

  ctx.restore()
  if (step === 23)
    setTimeout(draw, 2000)
  else
    setTimeout(draw, 1000 / 3)
}

draw()