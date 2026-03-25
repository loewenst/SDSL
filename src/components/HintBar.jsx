// Collapsible hint panel.
// Desktop: slides in from the right side.
// Mobile: slides up from the bottom.
const ROMAN = ['I', 'II', 'III', 'IV']

export function HintBar({ open, hintCount, usedHintIndices, onToggle, onHint, disabled }) {
  const hintButtons = ROMAN.map((label, i) => {
    const used = usedHintIndices.includes(i)
    return (
      <button
        key={i}
        onClick={() => !disabled && onHint(i)}
        disabled={disabled}
        className={`
          w-20 h-10 rounded-lg text-sm font-semibold font-dosis
          border transition-all duration-150
          ${used
            ? 'bg-game-blue/30 border-game-blue text-game-blue'
            : 'bg-[#d6d0c4] border-[#d6d0c4] text-black hover:bg-[#b8b2a6]'
          }
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
      >
        Hint {label}
      </button>
    )
  })

  const hintLabel = (
    <span className="text-game-blue text-xs font-semibold font-dosis text-center">
      {hintCount} hint{hintCount !== 1 ? 's' : ''} left
    </span>
  )

  return (
    <>
      {/* ── Desktop (md+): right side panel ── */}
      <div className="hidden md:block">
        {/* Sliding panel */}
        <div className={`
          fixed top-0 right-0 h-full w-28 z-30
          bg-game-panel/85 backdrop-blur-sm
          flex flex-col items-center justify-center gap-4
          transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {hintLabel}
          {hintButtons}
        </div>

        {/* Toggle tab — always visible, shifts left when panel is open */}
        <button
          onClick={onToggle}
          className={`
            fixed top-1/2 -translate-y-1/2 z-40
            bg-game-panel/85 text-game-blue
            w-8 h-20 rounded-l-xl
            flex items-center justify-center
            hover:bg-game-panel transition-all duration-300
            ${open ? 'right-28' : 'right-0'}
          `}
        >
          <span className="writing-vertical text-[11px] font-bold font-dosis tracking-widest">
            HINTS
          </span>
        </button>
      </div>

      {/* ── Mobile (<md): bottom drawer ── */}
      <div className="md:hidden">
        {/* Toggle button at bottom */}
        <button
          onClick={onToggle}
          className="
            fixed bottom-4 right-4 z-40
            bg-game-panel/90 text-game-blue
            px-4 py-2 rounded-xl text-sm font-bold font-dosis
            border border-game-blue/40
          "
        >
          Hints ({hintCount})
        </button>

        {/* Bottom drawer */}
        <div className={`
          fixed bottom-0 left-0 right-0 z-30
          bg-game-panel/95 backdrop-blur-sm
          py-5 px-4
          flex flex-col items-center gap-4
          rounded-t-2xl
          transition-transform duration-300
          ${open ? 'translate-y-0' : 'translate-y-full'}
        `}>
          {hintLabel}
          <div className="flex flex-row gap-3">
            {hintButtons}
          </div>
        </div>
      </div>
    </>
  )
}
