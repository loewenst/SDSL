// Full-screen start overlay shown before the game begins.
// Lets the player choose difficulty and then click Play.
export function StartOverlay({ difficulty, onDifficulty, onPlay }) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-black/70 backdrop-blur-sm">

      {/* Title */}
      <h1 className="font-sigmar text-game-blue text-[clamp(1.8rem,7vmin,4rem)] text-center leading-tight drop-shadow-lg">
        Surprisingly Deep<br />Song Lyrics
      </h1>

      {/* Difficulty selector */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-gray-300 font-dosis text-sm tracking-wide uppercase">Choose Difficulty</p>
        <div className="flex gap-4">
          <DifficultyBtn
            label="Easy"
            subtitle="3 hints per question"
            active={difficulty === 'easy'}
            onClick={() => onDifficulty('easy')}
          />
          <DifficultyBtn
            label="Hard"
            subtitle="3 hints total"
            active={difficulty === 'hard'}
            onClick={() => onDifficulty('hard')}
          />
        </div>
      </div>

      {/* Play button */}
      <button
        onClick={onPlay}
        className="
          mt-2
          w-36 h-36 rounded-full
          bg-game-dark border-4 border-game-blue
          text-game-blue font-sigmar text-2xl
          shadow-[0_0_30px_rgba(65,140,202,0.5)]
          hover:bg-game-blue hover:text-white
          hover:shadow-[0_0_45px_rgba(65,140,202,0.8)]
          animate-bounce-scale
          transition-all duration-300
        "
      >
        PLAY
      </button>
    </div>
  )
}

function DifficultyBtn({ label, subtitle, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center px-5 py-3 rounded-xl
        border-2 font-dosis transition-all duration-200 min-w-[120px]
        ${active
          ? 'bg-game-blue/20 border-game-blue text-white'
          : 'bg-transparent border-gray-500 text-gray-400 hover:border-gray-300 hover:text-gray-200'
        }
      `}
    >
      <span className="font-bold text-base">{label}</span>
      <span className="text-xs mt-0.5 opacity-80">{subtitle}</span>
    </button>
  )
}
