import { StepLayout } from '../components/StepLayout'
import { NavButtons } from './NavButtons'

export function ConfirmStep({ buildSong, data, saving, saveError, onBack, onSave }) {
  const song = buildSong()

  return (
    <StepLayout
      title="Step 7 — Confirm"
      subtitle="Review the song object that will be saved. Click Save when ready."
      footer={
        <NavButtons
          onBack={onBack}
          onNext={onSave}
          nextLabel={saving ? 'Saving…' : 'Save Song'}
          disabled={saving}
        />
      }
    >
      {saveError && (
        <div className="bg-red-900/40 border border-red-600 rounded-lg px-4 py-3">
          <p className="text-red-300 font-dosis text-sm">{saveError}</p>
        </div>
      )}

      <pre className="bg-black/50 border border-gray-700 rounded-xl p-4 text-xs text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap break-all">
        {JSON.stringify(song, null, 2)}
      </pre>

      <p className="text-gray-500 font-dosis text-xs">
        An <code>id</code> will be assigned automatically by the server.
      </p>
    </StepLayout>
  )
}
