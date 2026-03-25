// Renders the song lyric with line-break support.
export function LyricDisplay({ lyrics }) {
  const lines = lyrics ? lyrics.split('\n') : []

  return (
    <div className="
      w-[min(60vw,520px)] md:w-[min(55vw,580px)]
      min-h-[28vh]
      border-4 border-game-blue rounded-2xl
      bg-game-dark/90
      flex items-center justify-center
      px-6 py-5
      text-center
    ">
      <p className="text-white text-[clamp(1rem,3.5vmin,1.6rem)] font-dosis font-semibold italic leading-relaxed">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}
