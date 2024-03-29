let synth;

function startAudio() {
  Tone.start().then(() =>  {
    Tone.setContext(new Tone.Context({ latencyHint : "interactive", lookAhead: 0 }))
    S('#keys-container').style.display = "grid"
    S('#keys-container').requestFullscreen()

    synth = new Tone.PolySynth(Tone.DuoSynth).toDestination()
    const voiceSettings = {
      envelope: {
      attack: 0.005,
      sustain: 1,
      release: 0.2
    },
    oscillator: {
      type: "sawtooth"
    }}
    synth.set({
      voice0: voiceSettings,
      voice1: voiceSettings,
      vibratoAmount: 0.3,
      harmonicity: 1.003,
      volume: -14
    }
    )
  })
}

function down(ev) {
  if (ev.buttons === 1) {
    synth.triggerRelease(ev.target.dataset.note)
    synth.triggerAttack(ev.target.dataset.note)
  }
  ev.target.releasePointerCapture(ev.pointerId)
  ev.preventDefault()
}
function up(ev) {
  synth.triggerRelease(ev.target.dataset.note)
  ev.preventDefault()
  ev.target.releasePointerCapture(ev.pointerId)
}

for(let key of document.querySelectorAll('.key')) {
  key.addEventListener("pointerdown", down)
  key.addEventListener("pointerenter", down)
  key.addEventListener("pointerleave", up)
  key.addEventListener("pointerup", up)
  key.addEventListener("pointercancel", up)

  if (key.dataset.note.includes('#')) {
    key.style.opacity = 0.6
  }

  key.innerHTML = key.dataset.note


}
//button.addEventListener("mouseup", up)
//button.addEventListener("touchend", up)

S("#start").onclick = startAudio