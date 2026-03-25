export function NavButtons({ onBack, onNext, nextLabel = 'Next →', disabled = false }) {
  return (
    <div className="flex justify-between items-center">
      {onBack ? (
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 font-dosis text-sm
                     hover:border-gray-400 hover:text-white transition-colors duration-200"
        >
          ← Back
        </button>
      ) : <div />}
      {onNext && (
        <button
          onClick={onNext}
          disabled={disabled}
          className="px-6 py-2 rounded-lg bg-game-blue text-white font-dosis text-sm font-semibold
                     hover:bg-game-blue/80 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors duration-200"
        >
          {nextLabel}
        </button>
      )}
    </div>
  )
}
