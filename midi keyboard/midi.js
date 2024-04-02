let midi

function startMidi() {
  console.log("requesting midi access")
  navigator.requestMIDIAccess().then((midiAccess) => {
    console.log('midi acquired')
    midi = midiAccess
  }, () => {
    console.log('access denied')
  })
}

S('#midi').onclick = startMidi


function midiKeyDown(note) {
  midi.outputs.forEach((output) => {
    console.log("sending note on for " + note)
    console.log(output)
    output.send([0x90, note, 127])
  })
}

function midiKeyUp(note) {
  midi.outputs.forEach((output) => {
    console.log("sending note off for " + note)
    console.log(output)
    output.send([0x80, note, 127])
  })
}