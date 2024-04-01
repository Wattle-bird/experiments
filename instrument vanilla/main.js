const button = S("#button")
let audioRunning = false
let ctx, oscillator, gain

function startAudio() {
  ctx = new AudioContext()

  gain = ctx.createGain()
  gain.value = 0
  gain.connect(ctx.destination)

  oscillator = ctx.createOscillator()
  oscillator.frequency.value = 440
  oscillator.type = "sawtooth"
  oscillator.connect(gain)
  oscillator.start()

  audioRunning = true;
}

function down() {
  if (!audioRunning)
    startAudio();

  gain.gain.value = 0.5
  console.log('down')
}

function up() {
  if (!audioRunning)
    startAudio();

  gain.gain.value = 0
  console.log("up")
}

button.addEventListener("mousedown", down)
button.addEventListener("mouseup", up)
button.addEventListener("touchstart", down)
button.addEventListener("touchend", up)

S("#start").onclick = startAudio