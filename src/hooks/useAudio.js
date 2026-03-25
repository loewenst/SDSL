import { useRef, useEffect, useCallback } from 'react'

// Manages game audio: one-shot sound effects and a looping clip.
// Functions are stable refs so they're safe in useEffect dependency arrays.
export function useAudio(volume) {
  const volumeRef = useRef(volume)
  const clipRef   = useRef(null)

  // Keep volumeRef in sync and mute/unmute the active clip immediately.
  useEffect(() => {
    volumeRef.current = volume
    if (clipRef.current) {
      clipRef.current.muted = !volume
    }
  }, [volume])

  // Play a one-shot sound effect.
  const playSound = useCallback((src) => {
    if (!volumeRef.current) return
    const audio = new Audio(src)
    audio.play().catch(() => {})
  }, [])

  // Stop any current clip and start a new one.
  const playClip = useCallback((src) => {
    if (clipRef.current) clipRef.current.pause()
    clipRef.current = new Audio(src)
    clipRef.current.muted = !volumeRef.current
    clipRef.current.play().catch(() => {})
  }, [])

  const stopClip = useCallback(() => {
    if (clipRef.current) {
      clipRef.current.pause()
      clipRef.current.currentTime = 0
    }
  }, [])

  return { playSound, playClip, stopClip }
}
