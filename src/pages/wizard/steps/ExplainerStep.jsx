import { StepLayout } from '../components/StepLayout'
import { NavButtons } from './NavButtons'

export function ExplainerStep({ data, errors, onChange, onNext, onBack }) {
  const suggestedHeading = [data.songName, data.choices[data.artistIndex], data.album]
    .filter(Boolean)
    .map((v, i) => {
      if (i === 0) return `Song: ${v}`
      if (i === 1) return `Artist: ${v}`
      return `Album: ${v}`
    })
    .join(' \u2014 ')

  return (
    <StepLayout
      title="Step 5 — Explainer"
      subtitle="Write the heading and the explanation shown after a player answers."
      footer={<NavButtons onBack={onBack} onNext={onNext} />}
    >
      <div>
        <label className="block text-gray-300 font-dosis text-sm mb-1">
          Heading
          {suggestedHeading && (
            <button
              type="button"
              onClick={() => onChange('explainerHeading', suggestedHeading)}
              className="ml-3 text-game-blue text-xs hover:underline"
            >
              Use suggested
            </button>
          )}
        </label>
        <input
          value={data.explainerHeading}
          onChange={e => onChange('explainerHeading', e.target.value)}
          placeholder="Song: … — Artist: … — Album: …"
          className={`w-full bg-black/40 border ${errors.explainerHeading ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white font-dosis text-sm focus:outline-none focus:border-game-blue`}
        />
        {errors.explainerHeading && (
          <p className="text-red-400 text-xs font-dosis mt-1">{errors.explainerHeading}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-300 font-dosis text-sm mb-1">Explainer Text</label>
        <textarea
          value={data.explainerText}
          onChange={e => onChange('explainerText', e.target.value)}
          rows={6}
          placeholder="Why is this lyric surprisingly deep? You can use <i>italics</i>."
          className={`w-full bg-black/40 border ${errors.explainerText ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white font-dosis text-sm resize-y focus:outline-none focus:border-game-blue`}
        />
        {errors.explainerText && (
          <p className="text-red-400 text-xs font-dosis mt-1">{errors.explainerText}</p>
        )}
      </div>
    </StepLayout>
  )
}
