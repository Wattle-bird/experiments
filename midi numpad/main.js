const keycodes = ["Enter", "NumpadAdd", "NumpadSubtract", "Backspace",
    "Numpad3", "Numpad6", "Numpad9", "NumpadMultiply",
    "Numpad2", "Numpad5", "Numpad8", "NumpadDivide",
    "Numpad1", "Numpad4", "Numpad7", "Tab"
    ]

const octave = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
]

const keysPressed = new Map()

const noteNames = []
for (let i = 1; i <= 10; i++) {
  for (let note of octave) {
    noteNames.push(note + i)
  }
}

let upPressed = false
let downPressed = false
const initialOffset = 64
let offset = initialOffset

function showOffset() {
  S("#offset").innerHTML = offset
}
showOffset()

function keyLocation(key) {
  return keycodes.indexOf(key)
}

function locationToNote(loc) {
  return offset + loc
}

document.addEventListener("keydown", (ev) => {
  if (ev.repeat) return;

  if (ev.code === "Numpad0") {
    if (downPressed) {
      offset = initialOffset
      showOffset()
      return
    }
    offset += 4
    showOffset()
    upPressed = true
    return;
  }

  if (ev.code === "NumpadDecimal") {
    if (upPressed) {
      offset = initialOffset
      showOffset()
      return
    }
    offset -= 4
    showOffset()
    downPressed = true
    return;
  }

  if (keysPressed.get(ev.code)) return; // already pressed

  const loc = keyLocation(ev.code)
  if (loc === -1) return;

  const note = locationToNote(loc)

  if (synth)
    noteStart(note);
  if (midi)
    midiKeyDown(note);

  keysPressed.set(ev.code, note)

  ev.preventDefault()
})

document.addEventListener("keyup", (ev) => {
  if (ev.code === "Numpad0") {
    upPressed = false
    return;
  }

  if (ev.code === "NumpadDecimal") {
    downPressed = false
    return;
  }

  const note = keysPressed.get(ev.code)
  if (note === undefined) return;
  keysPressed.delete(ev.code)

  if (synth)
    noteEnd(note);
  if (midi)
    midiKeyUp(note);

})