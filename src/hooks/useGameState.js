import { useReducer } from 'react'
import { songs as allSongs } from '../data/songs'

// --- Helpers ---

function shuffleArray(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function pickFromPool(pool) {
  const song            = pool[Math.floor(Math.random() * pool.length)]
  const shuffledChoices = shuffleArray(song.choices)
  const shuffledHints   = shuffleArray(song.hints)
  return { song, shuffledChoices, shuffledHints }
}

// --- Initial state ---

const SCORE_LENGTH = 10

const baseInitialState = {
  phase:          'start',    // 'start' | 'playing' | 'gameover'
  countdown:      null,       // null | 'Ready' | 'Set' | 'Go'
  currentSong:    null,
  songPool:       [...allSongs],
  shuffledChoices: [],
  shuffledHints:  [],
  scoreArray:     Array(SCORE_LENGTH).fill(0),
  hintCount:      3,
  difficulty:     'easy',     // 'easy' | 'hard'
  usedHintIndices: [],
  selectedAnswer: null,
  answerState:    null,       // null | 'pending' | 'correct' | 'wrong'
  modal:          null,       // null | { type, ...data }
  hintbarOpen:    false,
  volume:         true,
  gameResult:     null,       // null | 'win' | 'lose'
}

// --- Reducer ---

function reducer(state, action) {
  switch (action.type) {
    case 'SET_COUNTDOWN':
      return { ...state, countdown: action.payload }

    case 'START_PLAYING': {
      // Easy mode resets hint count each question; hard mode carries it over.
      const hintCount = state.difficulty === 'easy' ? 3 : state.hintCount
      return {
        ...state,
        phase:           'playing',
        countdown:       null,
        currentSong:     action.song,
        shuffledChoices: action.choices,
        shuffledHints:   action.hints,
        songPool:        action.pool,
        selectedAnswer:  null,
        answerState:     null,
        modal:           null,
        usedHintIndices: [],
        hintCount,
      }
    }

    case 'SELECT_ANSWER':
      return { ...state, selectedAnswer: action.answer, answerState: 'pending' }

    case 'REVEAL_ANSWER': {
      const correct      = action.answer === state.currentSong.artist
      const scoreIdx     = state.scoreArray.findIndex(s => s === 0)
      const newScore     = [...state.scoreArray]
      newScore[scoreIdx] = correct ? 1 : -1
      const gameResult   = (correct && scoreIdx === SCORE_LENGTH - 1)
        ? 'win'
        : !correct
          ? 'lose'
          : null
      return { ...state, answerState: correct ? 'correct' : 'wrong', scoreArray: newScore, gameResult }
    }

    case 'SHOW_MODAL':
      return { ...state, modal: action.modal }

    case 'CLOSE_MODAL':
      return { ...state, modal: null }

    case 'USE_HINT': {
      // Only decrement count if this hint index hasn't been viewed before.
      const alreadyUsed = state.usedHintIndices.includes(action.index)
      return {
        ...state,
        modal:           { type: 'hint', hint: action.hint },
        usedHintIndices: alreadyUsed ? state.usedHintIndices : [...state.usedHintIndices, action.index],
        hintCount:       alreadyUsed ? state.hintCount : state.hintCount - 1,
      }
    }

    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.difficulty }

    case 'TOGGLE_HINTBAR':
      return { ...state, hintbarOpen: !state.hintbarOpen }

    case 'TOGGLE_VOLUME':
      return { ...state, volume: !state.volume }

    case 'SET_GAMEOVER':
      return { ...state, phase: 'gameover', modal: action.modal }

    case 'RESET':
      return {
        ...baseInitialState,
        difficulty: state.difficulty,
        volume:     state.volume,
        songPool:   [...allSongs],
      }

    default:
      return state
  }
}

// --- Hook ---

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, baseInitialState)

  // Runs the "Ready / Set / Go" countdown, then calls onComplete.
  function runCountdown(onComplete) {
    const messages = ['Ready', 'Set', 'Go']
    messages.forEach((msg, i) => {
      setTimeout(() => dispatch({ type: 'SET_COUNTDOWN', payload: msg }), i * 750)
    })
    setTimeout(() => {
      dispatch({ type: 'SET_COUNTDOWN', payload: null })
      onComplete()
    }, messages.length * 750)
  }

  function startGame() {
    const pool = [...allSongs]
    runCountdown(() => {
      const { song, shuffledChoices, shuffledHints } = pickFromPool(pool)
      dispatch({ type: 'START_PLAYING', song, choices: shuffledChoices, hints: shuffledHints, pool })
    })
  }

  function selectAnswer(answer) {
    // Guard: ignore clicks during reveal or while a modal is open.
    if (state.answerState !== null || state.modal !== null) return

    dispatch({ type: 'SELECT_ANSWER', answer })

    // After 3s, reveal correct/wrong.
    setTimeout(() => {
      dispatch({ type: 'REVEAL_ANSWER', answer })
    }, 3000)

    // After 4s, open the explainer.
    setTimeout(() => {
      dispatch({ type: 'SHOW_MODAL', modal: { type: 'explainer' } })
    }, 4000)
  }

  function openHint(index) {
    const hint = state.shuffledHints[index]
    dispatch({ type: 'USE_HINT', index, hint })
  }

  function closeModal() {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  // Called when the user clicks "Next" inside the explainer modal.
  function advanceFromExplainer() {
    dispatch({ type: 'CLOSE_MODAL' })

    if (state.gameResult === 'win') {
      dispatch({ type: 'SET_GAMEOVER', modal: { type: 'win' } })
      return
    }
    if (state.gameResult === 'lose') {
      dispatch({ type: 'SET_GAMEOVER', modal: { type: 'lose' } })
      return
    }

    // Advance to next question.
    const newPool = state.songPool.filter(s => s.id !== state.currentSong.id)
    runCountdown(() => {
      const { song, shuffledChoices, shuffledHints } = pickFromPool(newPool)
      dispatch({ type: 'START_PLAYING', song, choices: shuffledChoices, hints: shuffledHints, pool: newPool })
    })
  }

  function setDifficulty(difficulty) {
    dispatch({ type: 'SET_DIFFICULTY', difficulty })
  }

  function toggleHintbar() {
    dispatch({ type: 'TOGGLE_HINTBAR' })
  }

  function toggleVolume() {
    dispatch({ type: 'TOGGLE_VOLUME' })
  }

  function resetGame() {
    dispatch({ type: 'RESET' })
  }

  return {
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
  }
}
