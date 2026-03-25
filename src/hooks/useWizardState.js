import { useReducer, useCallback } from 'react'

// Steps (in order)
export const STEPS = [
  'welcome',     // 0 – intro
  'basics',      // 1 – song name, artist (chosen from 4 choices), album
  'choices',     // 2 – 4 answer choices (artist is one of them)
  'lyrics',      // 3 – the featured lyric
  'hints',       // 4 – up to 4 hints (text / audio / image)
  'explainer',   // 5 – explainer heading + text
  'clip',        // 6 – audio clip upload
  'confirm',     // 7 – full JSON preview before save
  'success',     // 8 – done
]

const initialData = {
  songName: '',
  album: '',
  // choices[artistIndex] is the correct artist
  choices: ['', '', '', ''],
  artistIndex: 0,
  lyrics: '',
  hints: [],          // array of { type, content, _file? }
  explainerHeading: '',
  explainerText: '',
  clip: null,         // { filename, base64, publicPath } | null
}

const initialState = {
  step: 0,
  data: initialData,
  errors: {},
  saving: false,
  saveError: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'GO_TO_STEP':
      return { ...state, step: action.step, errors: {} }

    case 'NEXT':
      return { ...state, step: Math.min(state.step + 1, STEPS.length - 1), errors: {} }

    case 'BACK':
      return { ...state, step: Math.max(state.step - 1, 0), errors: {} }

    case 'SET_FIELD':
      return { ...state, data: { ...state.data, [action.field]: action.value }, errors: {} }

    case 'SET_CHOICE': {
      const choices = [...state.data.choices]
      choices[action.index] = action.value
      return { ...state, data: { ...state.data, choices }, errors: {} }
    }

    case 'SET_ARTIST_INDEX':
      return { ...state, data: { ...state.data, artistIndex: action.index }, errors: {} }

    case 'ADD_HINT':
      return {
        ...state,
        data: {
          ...state.data,
          hints: [...state.data.hints, action.hint],
        },
      }

    case 'UPDATE_HINT': {
      const hints = state.data.hints.map((h, i) =>
        i === action.index ? { ...h, ...action.patch } : h
      )
      return { ...state, data: { ...state.data, hints } }
    }

    case 'REMOVE_HINT': {
      const hints = state.data.hints.filter((_, i) => i !== action.index)
      return { ...state, data: { ...state.data, hints } }
    }

    case 'SET_CLIP':
      return { ...state, data: { ...state.data, clip: action.clip } }

    case 'SET_ERRORS':
      return { ...state, errors: action.errors }

    case 'SET_SAVING':
      return { ...state, saving: action.saving }

    case 'SET_SAVE_ERROR':
      return { ...state, saveError: action.error }

    case 'RESET':
      return { ...initialState }

    default:
      return state
  }
}

// Per-step validation
function validate(step, data) {
  const errors = {}

  if (STEPS[step] === 'basics') {
    if (!data.songName.trim()) errors.songName = 'Song name is required.'
    if (!data.album.trim()) errors.album = 'Album name is required.'
  }

  if (STEPS[step] === 'choices') {
    data.choices.forEach((c, i) => {
      if (!c.trim()) errors[`choice_${i}`] = 'This choice is required.'
    })
    // Ensure the "correct artist" slot is filled
    if (!data.choices[data.artistIndex]?.trim()) {
      errors[`choice_${data.artistIndex}`] = 'The correct artist is required.'
    }
  }

  if (STEPS[step] === 'lyrics') {
    if (!data.lyrics.trim()) errors.lyrics = 'Lyrics are required.'
  }

  if (STEPS[step] === 'hints') {
    if (data.hints.length === 0) errors.hints = 'Add at least one hint.'
    data.hints.forEach((h, i) => {
      if (!h.content?.trim()) errors[`hint_${i}`] = 'Hint content is required.'
    })
  }

  if (STEPS[step] === 'explainer') {
    if (!data.explainerHeading.trim()) errors.explainerHeading = 'Heading is required.'
    if (!data.explainerText.trim()) errors.explainerText = 'Text is required.'
  }

  if (STEPS[step] === 'clip') {
    if (!data.clip) errors.clip = 'A clip is required.'
  }

  return errors
}

export function useWizardState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setField = useCallback((field, value) =>
    dispatch({ type: 'SET_FIELD', field, value }), [])

  const setChoice = useCallback((index, value) =>
    dispatch({ type: 'SET_CHOICE', index, value }), [])

  const setArtistIndex = useCallback((index) =>
    dispatch({ type: 'SET_ARTIST_INDEX', index }), [])

  const addHint = useCallback((hint) =>
    dispatch({ type: 'ADD_HINT', hint }), [])

  const updateHint = useCallback((index, patch) =>
    dispatch({ type: 'UPDATE_HINT', index, patch }), [])

  const removeHint = useCallback((index) =>
    dispatch({ type: 'REMOVE_HINT', index }), [])

  const setClip = useCallback((clip) =>
    dispatch({ type: 'SET_CLIP', clip }), [])

  const goTo = useCallback((step) =>
    dispatch({ type: 'GO_TO_STEP', step }), [])

  const next = useCallback(() => {
    const errors = validate(state.step, state.data)
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors })
      return false
    }
    dispatch({ type: 'NEXT' })
    return true
  }, [state.step, state.data])

  const back = useCallback(() =>
    dispatch({ type: 'BACK' }), [])

  const reset = useCallback(() =>
    dispatch({ type: 'RESET' }), [])

  const setSaving = useCallback((saving) =>
    dispatch({ type: 'SET_SAVING', saving }), [])

  const setSaveError = useCallback((error) =>
    dispatch({ type: 'SET_SAVE_ERROR', error }), [])

  // Build the final song object from wizard data
  function buildSong() {
    const { data } = state
    return {
      lyrics: data.lyrics,
      choices: data.choices,
      artist: data.choices[data.artistIndex],
      hints: data.hints.map(({ type, content }) => ({ type, content })),
      explainer: {
        heading: data.explainerHeading,
        text: data.explainerText,
      },
      clip: data.clip?.publicPath || '',
    }
  }

  return {
    state,
    stepName: STEPS[state.step],
    setField,
    setChoice,
    setArtistIndex,
    addHint,
    updateHint,
    removeHint,
    setClip,
    goTo,
    next,
    back,
    reset,
    setSaving,
    setSaveError,
    buildSong,
  }
}
