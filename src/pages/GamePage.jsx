import { useEffect, useState } from 'react'
import { useGameState }      from '../hooks/useGameState'
import { useAudio }          from '../hooks/useAudio'
import { ScoreBar }          from '../components/ScoreBar'
import { LyricDisplay }      from '../components/LyricDisplay'
import { AnswerGrid }        from '../components/AnswerGrid'
import { HintBar }           from '../components/HintBar'
import { Modal }             from '../components/Modal'
import { Toast }             from '../components/Toast'
import { VolumeToggle }      from '../components/VolumeToggle'
import { StartOverlay }      from '../components/StartOverlay'
import { HowToPlayModal }    from '../components/HowToPlayModal'
import { AboutModal }        from '../components/AboutModal'

export default function GamePage() {
  const {
    state,
    startGame,
    selectAnswer,
    openHint,
    closeModal,
    advanceFromExplainer,
    setDifficulty,
    toggleHintbar,
    toggleVolume,
    resetGame,
  } = useGameState()

  const { playSound, playClip, stopClip } = useAudio(state.volume)

  // Local toast state for "no hints remaining" notification.
  const [toast, setToast] = useState(null)

  // Local state for info modals (How to Play / About).
  const [infoModal, setInfoModal] = useState(null) // 'howto' | 'about' | null

  // --- Audio triggers ---

  useEffect(() => {
    if (state.answerState === 'pending') {
      playSound('/audio/Answer Reveal.wav')
    }
  }, [state.answerState, playSound])

  useEffect(() => {
    if (state.answerState === 'correct') playSound('/audio/Correct Answer.wav')
    if (state.answerState === 'wrong')   playSound('/audio/Wrong Answer.wav')
  }, [state.answerState, playSound])

  useEffect(() => {
    if (state.modal?.type === 'explainer' && state.currentSong) {
      playClip(state.currentSong.clip)
    } else {
      stopClip()
    }
  }, [state.modal?.type, state.currentSong, playClip, stopClip])

  // --- Hint handler with toast fallback ---

  function handleHint(index) {
    const alreadyUsed = state.usedHintIndices.includes(index)
    if (state.hintCount === 0 && !alreadyUsed) {
      setToast('No hints remaining!')
      setTimeout(() => setToast(null), 1500)
      return
    }
    openHint(index)
  }

  // --- Derived display flags ---

  const showGame   = state.phase !== 'start' && !state.countdown
  const showHints  = state.phase === 'playing' && !state.modal
  const isRevealing = state.answerState !== null
  const answerDisabled = isRevealing || !!state.modal

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{
        backgroundImage: "url('https://i.imgur.com/b4m7vyE.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background tint */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* ── Main layout ── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header row */}
        <div className="flex items-center px-4 pt-4 pb-2 gap-2">
          <button
            onClick={() => setInfoModal('howto')}
            className="text-gray-300 hover:text-white font-dosis text-sm font-semibold transition-colors duration-150 px-2 py-1"
          >
            How to Play
          </button>
          <button
            onClick={() => setInfoModal('about')}
            className="text-gray-300 hover:text-white font-dosis text-sm font-semibold transition-colors duration-150 px-2 py-1"
          >
            About
          </button>
          <VolumeToggle volume={state.volume} onToggle={toggleVolume} />
          <h1 className="flex-1 text-center font-dosis font-bold text-game-blue text-[clamp(1.1rem,4vmin,2rem)] pr-12 md:pr-0">
            Surprisingly Deep Song Lyrics
          </h1>
        </div>

        {/* Mobile score bar (horizontal, below header) */}
        <div className="md:hidden">
          <ScoreBar scoreArray={state.scoreArray} />
        </div>

        {/* Game area — centered content */}
        <main className="flex-1 flex flex-col items-center justify-center py-4 px-4 relative">

          {/* Desktop score bar (vertical, absolute left) */}
          <ScoreBar scoreArray={state.scoreArray} />

          {/* Lyric + answers — only shown once game has started */}
          {showGame && state.currentSong && (
            <>
              <LyricDisplay lyrics={state.currentSong.lyrics} />
              <AnswerGrid
                choices={state.shuffledChoices}
                selectedAnswer={state.selectedAnswer}
                answerState={state.answerState}
                correctArtist={state.currentSong.artist}
                onSelect={selectAnswer}
                disabled={answerDisabled}
              />
            </>
          )}

          {/* Question progress indicator (playing phase only) */}
          {showGame && (
            <p className="mt-4 text-gray-400 font-dosis text-sm">
              Question {state.scoreArray.filter(s => s !== 0).length + 1} of 10
            </p>
          )}
        </main>
      </div>

      {/* ── Countdown overlay ── */}
      {state.countdown && (
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <span
            key={state.countdown}
            className="font-sigmar text-white text-[clamp(4rem,15vmin,9rem)] drop-shadow-2xl animate-fade-slide-up"
          >
            {state.countdown}
          </span>
        </div>
      )}

      {/* ── Start overlay ── */}
      {state.phase === 'start' && !state.countdown && (
        <StartOverlay
          difficulty={state.difficulty}
          onDifficulty={setDifficulty}
          onPlay={startGame}
        />
      )}

      {/* ── Hint bar ── */}
      {showHints && (
        <HintBar
          open={state.hintbarOpen}
          hintCount={state.hintCount}
          usedHintIndices={state.usedHintIndices}
          onToggle={toggleHintbar}
          onHint={handleHint}
          disabled={isRevealing}
        />
      )}

      {/* ── Modal ── */}
      <Modal
        modal={state.modal}
        currentSong={state.currentSong}
        onClose={closeModal}
        onNext={advanceFromExplainer}
        onReset={resetGame}
      />

      {/* ── Toast ── */}
      <Toast message={toast} />

      {/* ── Info modals ── */}
      {infoModal === 'howto' && <HowToPlayModal onClose={() => setInfoModal(null)} />}
      {infoModal === 'about' && <AboutModal     onClose={() => setInfoModal(null)} />}
    </div>
  )
}
