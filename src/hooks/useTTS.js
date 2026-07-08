import { useCallback, useRef } from 'react'

export function useTTS(language) {
  const utteranceRef = useRef(null)

  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    // Set language
    utterance.lang = language === 'fil' ? 'fil-PH' : 'en-US'
    utterance.rate = 0.85 // Slightly slower for children
    utterance.pitch = 1.1 // Slightly higher pitch
    utterance.volume = 1

    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices()
    const langPrefix = language === 'fil' ? 'fil' : 'en'
    const matchingVoice = voices.find(v => v.lang.startsWith(langPrefix))

    if (matchingVoice) {
      utterance.voice = matchingVoice
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [language])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
  }, [])

  return { speak, stop }
}
