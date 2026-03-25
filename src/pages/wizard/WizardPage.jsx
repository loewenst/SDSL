import { useWizardState } from '../../hooks/useWizardState'
import { saveSong } from '../../services/wizardApi'
import { ProgressBar } from './components/ProgressBar'
import { WelcomeStep }  from './steps/WelcomeStep'
import { BasicsStep }   from './steps/BasicsStep'
import { ChoicesStep }  from './steps/ChoicesStep'
import { LyricsStep }   from './steps/LyricsStep'
import { HintsStep }    from './steps/HintsStep'
import { ExplainerStep} from './steps/ExplainerStep'
import { ClipStep }     from './steps/ClipStep'
import { ConfirmStep }  from './steps/ConfirmStep'
import { SuccessStep }  from './steps/SuccessStep'

export default function WizardPage() {
  const w = useWizardState()
  const { state, stepName } = w

  async function handleSave() {
    w.setSaving(true)
    w.setSaveError(null)
    try {
      const song = w.buildSong()
      await saveSong(song)
      w.next()
    } catch (err) {
      w.setSaveError(err.message)
    } finally {
      w.setSaving(false)
    }
  }

  return (
    <div className="bg-game-dark min-h-screen">
      <ProgressBar stepName={stepName} />

      {stepName === 'welcome' && (
        <WelcomeStep onNext={w.next} />
      )}

      {stepName === 'basics' && (
        <BasicsStep
          data={state.data}
          errors={state.errors}
          onChange={w.setField}
          onNext={w.next}
          onBack={w.back}
        />
      )}

      {stepName === 'choices' && (
        <ChoicesStep
          data={state.data}
          errors={state.errors}
          onChoiceChange={w.setChoice}
          onArtistIndex={w.setArtistIndex}
          onNext={w.next}
          onBack={w.back}
        />
      )}

      {stepName === 'lyrics' && (
        <LyricsStep
          data={state.data}
          errors={state.errors}
          onChange={w.setField}
          onNext={w.next}
          onBack={w.back}
        />
      )}

      {stepName === 'hints' && (
        <HintsStep
          data={state.data}
          errors={state.errors}
          onAdd={w.addHint}
          onUpdate={w.updateHint}
          onRemove={w.removeHint}
          onNext={w.next}
          onBack={w.back}
        />
      )}

      {stepName === 'explainer' && (
        <ExplainerStep
          data={state.data}
          errors={state.errors}
          onChange={w.setField}
          onNext={w.next}
          onBack={w.back}
        />
      )}

      {stepName === 'clip' && (
        <ClipStep
          data={state.data}
          errors={state.errors}
          onClip={w.setClip}
          onNext={w.next}
          onBack={w.back}
        />
      )}

      {stepName === 'confirm' && (
        <ConfirmStep
          buildSong={w.buildSong}
          data={state.data}
          saving={state.saving}
          saveError={state.saveError}
          onBack={w.back}
          onSave={handleSave}
        />
      )}

      {stepName === 'success' && (
        <SuccessStep
          songName={state.data.songName}
          onAddAnother={w.reset}
        />
      )}
    </div>
  )
}
