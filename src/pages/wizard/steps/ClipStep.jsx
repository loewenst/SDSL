import { StepLayout } from '../components/StepLayout'
import { FileUpload } from '../components/FileUpload'
import { NavButtons } from './NavButtons'

const AUDIO_ACCEPT = 'audio/mpeg,audio/wav,audio/ogg,audio/aac,audio/mp4,audio/webm,audio/flac,audio/x-wav,audio/x-m4a'

export function ClipStep({ data, errors, onClip, onNext, onBack }) {
  return (
    <StepLayout
      title="Step 6 — Audio Clip"
      subtitle="Upload the short audio clip played in the explainer modal."
      footer={<NavButtons onBack={onBack} onNext={onNext} />}
    >
      <FileUpload
        label="Upload clip"
        accept={AUDIO_ACCEPT}
        subdir="audio"
        currentPath={data.clip?.publicPath}
        onUploaded={(publicPath) => onClip({ publicPath })}
      />
      {errors.clip && (
        <p className="text-red-400 text-xs font-dosis">{errors.clip}</p>
      )}

      {data.clip?.publicPath && (
        <audio controls src={data.clip.publicPath} className="w-full mt-2" />
      )}
    </StepLayout>
  )
}
