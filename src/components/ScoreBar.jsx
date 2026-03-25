// Renders 10 score boxes — vertical column (desktop) or horizontal row (mobile).
export function ScoreBar({ scoreArray }) {
  return (
    <>
      {/* Desktop: vertical column, bottom-to-top on the left side */}
      <div className="hidden md:flex flex-col-reverse gap-1.5 absolute left-5 bottom-20">
        {scoreArray.map((score, idx) => (
          <ScoreBox key={idx} score={score} />
        ))}
      </div>

      {/* Mobile: horizontal row below the header */}
      <div className="flex md:hidden flex-row justify-center gap-1 py-2 px-3">
        {scoreArray.map((score, idx) => (
          <ScoreBox key={idx} score={score} small />
        ))}
      </div>
    </>
  )
}

function ScoreBox({ score, small }) {
  const base = small
    ? 'w-7 h-6 text-xs border rounded flex items-center justify-center font-bold transition-all duration-300'
    : 'w-14 h-10 text-sm border rounded-lg flex items-center justify-center font-bold transition-all duration-300'

  const color =
    score === 1  ? 'bg-game-blue  border-game-blue  text-white' :
    score === -1 ? 'bg-transparent border-game-gold text-game-gold' :
                   'bg-transparent border-game-blue  text-transparent'

  return (
    <div className={`${base} ${color}`}>
      {score === -1 ? 'X' : ''}
    </div>
  )
}
