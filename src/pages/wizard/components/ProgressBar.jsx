import { STEPS } from '../../../hooks/useWizardState'

// Steps to show in the progress bar (exclude welcome and success)
const VISIBLE = STEPS.filter(s => s !== 'welcome' && s !== 'success')

const LABELS = {
  basics:    'Basics',
  choices:   'Choices',
  lyrics:    'Lyrics',
  hints:     'Hints',
  explainer: 'Explainer',
  clip:      'Clip',
  confirm:   'Confirm',
}

export function ProgressBar({ stepName }) {
  const currentIdx = VISIBLE.indexOf(stepName)
  if (currentIdx === -1) return null

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="flex items-center gap-0">
        {VISIBLE.map((name, i) => {
          const done    = i < currentIdx
          const active  = i === currentIdx
          const isLast  = i === VISIBLE.length - 1
          return (
            <div key={name} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-dosis
                    border-2 transition-colors duration-200 shrink-0
                    ${active  ? 'bg-game-blue border-game-blue text-white' : ''}
                    ${done    ? 'bg-game-blue/40 border-game-blue/60 text-game-blue' : ''}
                    ${!active && !done ? 'bg-transparent border-gray-600 text-gray-500' : ''}
                  `}
                >
                  {done ? '✓' : i + 1}
                </div>
                <span className={`text-[10px] font-dosis mt-1 ${active ? 'text-game-blue' : done ? 'text-game-blue/60' : 'text-gray-600'}`}>
                  {LABELS[name]}
                </span>
              </div>
              {!isLast && (
                <div className={`flex-1 h-0.5 mb-4 mx-1 ${done ? 'bg-game-blue/60' : 'bg-gray-700'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
