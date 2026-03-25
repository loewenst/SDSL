import { StepLayout } from '../components/StepLayout'
import { HintCard } from '../components/HintCard'
import { NavButtons } from './NavButtons'

export function HintsStep({ data, errors, onAdd, onUpdate, onRemove, onNext, onBack }) {
  return (
    <StepLayout
      title="Step 4 — Hints"
      subtitle="Add up to 4 hints (text, audio, or image). At least one required."
      footer={<NavButtons onBack={onBack} onNext={onNext} />}
    >
      {data.hints.length === 0 && (
        <p className="text-gray-500 font-dosis text-sm italic">No hints yet. Add one below.</p>
      )}

      {data.hints.map((hint, i) => (
        <HintCard
          key={i}
          hint={hint}
          index={i}
          onChange={onUpdate}
          onRemove={onRemove}
          error={errors[`hint_${i}`]}
        />
      ))}

      {errors.hints && (
        <p className="text-red-400 text-xs font-dosis">{errors.hints}</p>
      )}

      {data.hints.length < 4 && (
        <button
          onClick={() => onAdd({ type: 'text', content: '' })}
          className="w-full py-2 rounded-lg border-2 border-dashed border-gray-600
                     text-gray-400 hover:border-game-blue hover:text-game-blue
                     font-dosis text-sm transition-colors duration-200"
        >
          + Add Hint
        </button>
      )}
    </StepLayout>
  )
}
