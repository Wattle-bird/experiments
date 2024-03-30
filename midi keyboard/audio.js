let synth;

function startAudio() {
  Tone.start().then(() =>  {
    Tone.setContext(new Tone.Context({ latencyHint : "interactive", lookAhead: 0 }))

    synth = new Tone.PolySynth(Tone.DuoSynth).toDestination()
    const voiceSettings = {
      envelope: {
      attack: 0.005,
      decay: 0.5,
      sustain: 0.2,
      release: 0.2
    },
    oscillator: {
      type: "sawtooth"  }}
    synth.set({
      voice0: voiceSettings,
      voice1: voiceSettings,
      vibratoAmount: 0,
      harmonicity: 1.00,
      volume: -14
    }
    )
  })
}
S('#start').onclick = startAudio

function noteStart(note) {
  synth.triggerAttack(noteNames[note])
}

function noteEnd(note) {
  synth.triggerRelease(noteNames[note])
} 