// Generate sounds using Web Audio API (no external files needed)
const AudioCtx = window.AudioContext || window.webkitAudioContext
let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new AudioCtx()
  }
  return audioCtx
}

export function playCorrectSound() {
  try {
    const ctx = getAudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = 'sine'
    osc.frequency.setValueAtTime(523.25, ctx.currentTime) // C5
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1) // E5
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2) // G5

    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.4)
  } catch {
    // Audio not available
  }
}

export function playIncorrectSound() {
  try {
    const ctx = getAudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = 'sine'
    osc.frequency.setValueAtTime(330, ctx.currentTime) // E4
    osc.frequency.setValueAtTime(262, ctx.currentTime + 0.15) // C4

    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.3)
  } catch {
    // Audio not available
  }
}

export function playCelebrationSound() {
  try {
    const ctx = getAudioContext()
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.50]

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08)

      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.08)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.08 + 0.2)

      osc.start(ctx.currentTime + i * 0.08)
      osc.stop(ctx.currentTime + i * 0.08 + 0.2)
    })
  } catch {
    // Audio not available
  }
}

export function playClickSound() {
  try {
    const ctx = getAudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = 'sine'
    osc.frequency.setValueAtTime(800, ctx.currentTime)

    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.05)
  } catch {
    // Audio not available
  }
}
