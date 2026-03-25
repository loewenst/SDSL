// Grid of four answer choice buttons.
// answerState: null | 'pending' | 'correct' | 'wrong'
export function AnswerGrid({ choices, selectedAnswer, answerState, correctArtist, onSelect, disabled }) {
  return (
    <div className="
      grid grid-cols-1 sm:grid-cols-2
      gap-3 mt-6
      w-[min(55vw,520px)] md:w-[min(50vw,520px)]
    ">
      {choices.map((choice) => (
        <AnswerButton
          key={choice}
          choice={choice}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          correctArtist={correctArtist}
          onSelect={onSelect}
          disabled={disabled}
        />
      ))}
    </div>
  )
}

function AnswerButton({ choice, selectedAnswer, answerState, correctArtist, onSelect, disabled }) {
  const isSelected = selectedAnswer === choice
  const isCorrect  = choice === correctArtist

  let classes = 'h-14 w-full border-2 rounded-xl font-dosis font-semibold text-[clamp(0.8rem,2.2vmin,1rem)] flex items-center justify-center text-center px-3 transition-all duration-300 cursor-pointer select-none'

  if (!answerState) {
    // Default / hover state
    classes += ' border-game-blue bg-black/80 text-white hover:bg-gray-600 hover:border-gray-400 hover:text-black'
  } else if (isSelected && answerState === 'pending') {
    // Just clicked, waiting for reveal
    classes += ' border-gray-400 bg-gray-500 text-black'
  } else if (isCorrect && (answerState === 'correct' || answerState === 'wrong')) {
    // Reveal correct
    classes += ' border-green-500 bg-green-600 text-white'
  } else if (isSelected && answerState === 'wrong') {
    // Reveal wrong (selected answer)
    classes += ' border-game-gold bg-game-gold text-black'
  } else {
    // Inactive after reveal
    classes += ' border-game-blue bg-black/80 text-white opacity-60'
  }

  return (
    <div
      className={classes}
      onClick={() => !disabled && onSelect(choice)}
    >
      {choice}
    </div>
  )
}
