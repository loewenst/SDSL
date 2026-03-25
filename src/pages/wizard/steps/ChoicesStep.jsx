import { StepLayout } from '../components/StepLayout'
import { NavButtons } from './NavButtons'

export function ChoicesStep({ data, errors, onChoiceChange, onArtistIndex, onNext, onBack }) {
  return (
    <StepLayout
      title="Step 2 — Answer Choices"
      subtitle="Enter 4 artist options and mark the correct one."
      footer={<NavButtons onBack={onBack} onNext={onNext} />}
    >
      <p className="text-gray-400 font-dosis text-xs -mt-2">
        Mark the correct artist with the radio button.
      </p>

      {data.choices.map((choice, i) => (
        <div key={i} className="flex items-center gap-3">
          <input
            type="radio"
            name="artist-index"
            checked={data.artistIndex === i}
            onChange={() => onArtistIndex(i)}
            className="accent-game-blue shrink-0 w-4 h-4 cursor-pointer"
          />
          <div className="flex-1">
            <input
              value={choice}
              onChange={e => onChoiceChange(i, e.target.value)}
              placeholder={`Choice ${i + 1}${data.artistIndex === i ? ' (correct artist)' : ''}`}
              className={`w-full bg-black/40 border ${errors[`choice_${i}`] ? 'border-red-500' : data.artistIndex === i ? 'border-game-blue/60' : 'border-gray-600'} rounded-lg px-3 py-2 text-white font-dosis text-sm focus:outline-none focus:border-game-blue`}
            />
            {errors[`choice_${i}`] && (
              <p className="text-red-400 text-xs font-dosis mt-0.5">{errors[`choice_${i}`]}</p>
            )}
          </div>
        </div>
      ))}
    </StepLayout>
  )
}
