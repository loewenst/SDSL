// Unified modal component used for hints, explainers, win/lose, and difficulty settings.
import { assetUrl } from '../utils/assetUrl'
// The type field on `modal` determines layout and buttons.

// Converts \n to <br> and preserves existing HTML tags (used for trusted internal data only).
function RichText({ content, className = '' }) {
  const html = content.replace(/\n/g, '<br />')
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function HintContent({ hint }) {
  if (hint.type === 'audio') {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-gray-300 font-dosis">Here is a clip from the song:</p>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls className="w-full max-w-xs">
          <source src={assetUrl(hint.content)} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )
  }
  if (hint.type === 'image') {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-gray-300 font-dosis">Here is an image from the music video:</p>
        <img
          src={assetUrl(hint.content)}
          alt="Music video still"
          className="max-w-full max-h-48 rounded-lg object-contain"
        />
      </div>
    )
  }
  // type === 'text'
  return (
    <RichText
      content={hint.content}
      className="text-[clamp(0.85rem,2.4vmin,1.05rem)] font-dosis text-white/90 leading-relaxed text-center"
    />
  )
}

export function Modal({ modal, currentSong, onClose, onNext, onReset }) {
  if (!modal) return null

  const { type } = modal

  // --- Shared layout primitives ---
  const backdrop = (
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={type === 'hint' ? onClose : undefined}
    />
  )

  const card = (children) => (
    <div className="
      relative z-10 animate-fade-slide-up
      w-[min(90vw,680px)] max-h-[85vh]
      bg-[#5a5757] rounded-2xl shadow-2xl
      flex flex-col overflow-hidden
    ">
      {children}
    </div>
  )

  const heading = (text) => (
    <div className="
      bg-[#403d3d] px-6 py-4 flex-shrink-0
      text-white font-dosis font-bold
      text-[clamp(0.85rem,2.4vmin,1.1rem)]
      text-center leading-snug
    ">
      <RichText content={text} />
    </div>
  )

  const body = (children) => (
    <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col items-center gap-4">
      {children}
    </div>
  )

  const footer = (children) => (
    <div className="flex-shrink-0 flex justify-center gap-4 px-6 py-4 bg-[#4a4747]">
      {children}
    </div>
  )

  const btn = (label, onClick, style = 'primary') => {
    const base = 'px-6 py-2.5 min-w-[120px] rounded-xl font-dosis font-semibold text-sm transition-all duration-150'
    const styles = {
      primary:  `${base} bg-[#555] text-white border border-gray-500 hover:bg-[#666]`,
      selected: `${base} bg-game-blue text-white border border-game-blue hover:bg-blue-500`,
      action:   `${base} bg-game-gold text-black border border-game-gold hover:brightness-110`,
    }
    return (
      <button key={label} onClick={onClick} className={styles[style]}>
        {label}
      </button>
    )
  }

  // --- Modal types ---

  if (type === 'hint') {
    const lyricLines = currentSong?.lyrics?.split('\n') ?? []
    const lyricHtml  = lyricLines.join('<br />')
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {backdrop}
        {card(
          <>
            {heading(lyricHtml)}
            {body(<HintContent hint={modal.hint} />)}
            {footer(btn('Close Hint', onClose))}
          </>
        )}
      </div>
    )
  }

  if (type === 'explainer') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        {card(
          <>
            {heading(currentSong?.explainer?.heading ?? '')}
            {body(
              <RichText
                content={currentSong?.explainer?.text ?? ''}
                className="text-[clamp(0.85rem,2.4vmin,1.05rem)] font-dosis text-white/90 leading-relaxed text-left max-w-prose"
              />
            )}
            {footer(btn('Next', onNext))}
          </>
        )}
      </div>
    )
  }

  if (type === 'win') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        {card(
          <>
            {heading('Congratulations \u2014 You Won!')}
            {body(
              <p className="text-white/90 font-dosis text-center text-base leading-relaxed">
                I hope you found these lyrics as profound and hard-hitting as I did.
                <br /><br />
                Play again to discover even more surprisingly deep song lyrics!
              </p>
            )}
            {footer(btn('Play Again', onReset, 'action'))}
          </>
        )}
      </div>
    )
  }

  if (type === 'lose') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        {card(
          <>
            {heading('Better Luck Next Time!')}
            {body(
              <p className="text-white/90 font-dosis text-center text-base leading-relaxed">
                I hope you found these lyrics as profound and hard-hitting as I did.
                <br /><br />
                Play again for a chance to hear even more Surprisingly Deep Song Lyrics!
              </p>
            )}
            {footer(btn('Play Again', onReset, 'action'))}
          </>
        )}
      </div>
    )
  }

  return null
}
