import { FileUpload } from './FileUpload'

const AUDIO_TYPES = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac', 'audio/mp4', 'audio/webm', 'audio/flac', 'audio/x-wav', 'audio/x-m4a']

export function HintCard({ hint, index, onChange, onRemove, error }) {
  function handleTypeChange(e) {
    onChange(index, { type: e.target.value, content: '' })
  }

  function handleContentChange(e) {
    onChange(index, { content: e.target.value })
  }

  return (
    <div className="border border-gray-700 rounded-xl p-4 bg-black/30 relative">
      <button
        onClick={() => onRemove(index)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-400 text-lg leading-none"
        title="Remove hint"
      >
        ×
      </button>

      <div className="flex gap-3 mb-3 flex-wrap">
        {['text', 'audio', 'image'].map(t => (
          <label key={t} className="flex items-center gap-1.5 cursor-pointer font-dosis text-sm text-gray-300">
            <input
              type="radio"
              name={`hint-type-${index}`}
              value={t}
              checked={hint.type === t}
              onChange={handleTypeChange}
              className="accent-game-blue"
            />
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </label>
        ))}
      </div>

      {hint.type === 'text' && (
        <textarea
          value={hint.content || ''}
          onChange={handleContentChange}
          rows={3}
          placeholder="Enter hint text… (you can use <i>italics</i> and \n for line breaks)"
          className="w-full bg-black/40 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white font-dosis resize-y focus:outline-none focus:border-game-blue"
        />
      )}

      {hint.type === 'audio' && (
        <FileUpload
          label="Upload audio hint"
          accept={AUDIO_TYPES.join(',')}
          subdir="audio"
          currentPath={hint.content}
          onUploaded={(publicPath) => onChange(index, { content: publicPath })}
        />
      )}

      {hint.type === 'image' && (
        <FileUpload
          label="Upload image hint"
          accept="image/png,image/jpeg,image/gif,image/webp"
          subdir="images"
          currentPath={hint.content}
          onUploaded={(publicPath) => onChange(index, { content: publicPath })}
        />
      )}

      {error && <p className="text-red-400 text-xs font-dosis mt-2">{error}</p>}
    </div>
  )
}
