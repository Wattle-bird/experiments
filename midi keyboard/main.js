const keycodes = [
  ["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"],
  ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"],
  ["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight"],
  ["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"]
]

const octave = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
]

const noteNames = []
for (let i = 1; i <= 10; i++) {
  for (let note of octave) {
    noteNames.push(note + i)
  }
}

const rowStartNotes = [
  noteNames.indexOf('D6'),
  noteNames.indexOf('G6'),
  noteNames.indexOf('B6'),
  noteNames.indexOf('E7'),
]

function keyLocation(key) {
  let location;
  keycodes.forEach((row, rowIndex) => {
    if (row.indexOf(key) != -1) {
      location = {row: rowIndex, column: row.indexOf(key)}
    }
  })
  if (!location) {
    throw {
      name: "InvalidKey",
      message: `Musical key "${key}" not found`
    }
  }
  return location
}

function locationToNote(loc) {
  return rowStartNotes[loc.row] + loc.column
}

document.addEventListener("keydown", (ev) => {
  if (ev.repeat) return;
  const note = locationToNote(keyLocation(ev.code))

  if (synth)
    noteStart(note);
  if (midi)
    midiKeyDown(note);

  ev.preventDefault()
})

document.addEventListener("keyup", (ev) => {
  const note = locationToNote(keyLocation(ev.code))

  if (synth)
    noteEnd(note);
  if (midi)
    midiKeyUp(note);

})