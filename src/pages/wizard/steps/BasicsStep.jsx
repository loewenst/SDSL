import { StepLayout } from '../components/StepLayout'
import { NavButtons } from './NavButtons'

export function BasicsStep({ data, errors, onChange, onNext, onBack }) {
  return (
    <StepLayout
      title="Step 1 — Basics"
      subtitle="Enter the song name and album."
      footer={<NavButtons onBack={onBack} onNext={onNext} />}
    >
      <Field label="Song Name" error={errors.songName}>
        <input
          value={data.songName}
          onChange={e => onChange('songName', e.target.value)}
          placeholder="e.g. Mad Season"
          className={inputCls(errors.songName)}
        />
      </Field>

      <Field label="Album" error={errors.album}>
        <input
          value={data.album}
          onChange={e => onChange('album', e.target.value)}
          placeholder="e.g. Mad Season"
          className={inputCls(errors.album)}
        />
      </Field>
    </StepLayout>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-gray-300 font-dosis text-sm mb-1">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs font-dosis mt-1">{error}</p>}
    </div>
  )
}

function inputCls(error) {
  return `w-full bg-black/40 border ${error ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white font-dosis text-sm focus:outline-none focus:border-game-blue`
}
