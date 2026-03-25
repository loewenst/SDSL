import { StepLayout } from '../components/StepLayout'
import { NavButtons } from './NavButtons'

export function LyricsStep({ data, errors, onChange, onNext, onBack }) {
  return (
    <StepLayout
      title="Step 3 — Featured Lyric"
      subtitle="Paste the lyric snippet shown to players. Use newlines to control line breaks."
      footer={<NavButtons onBack={onBack} onNext={onNext} />}
    >
      <textarea
        value={data.lyrics}
        onChange={e => onChange('lyrics', e.target.value)}
        rows={5}
        placeholder={"e.g. Oh yeah, life goes on\nlong after the thrill of living is gone"}
        className={`w-full bg-black/40 border ${errors.lyrics ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white font-dosis text-sm resize-y focus:outline-none focus:border-game-blue`}
      />
      {errors.lyrics && <p className="text-red-400 text-xs font-dosis">{errors.lyrics}</p>}

      {data.lyrics && (
        <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
          <p className="text-gray-400 font-dosis text-xs mb-2 uppercase tracking-wide">Preview</p>
          <p className="text-white font-dosis text-base italic whitespace-pre-line leading-relaxed">
            {data.lyrics}
          </p>
        </div>
      )}
    </StepLayout>
  )
}
