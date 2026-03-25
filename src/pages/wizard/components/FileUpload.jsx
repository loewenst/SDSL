import { useState, useRef } from 'react'
import { uploadFile } from '../../../services/wizardApi'

const AUDIO_TYPES = new Set(['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac', 'audio/mp4', 'audio/webm', 'audio/flac', 'audio/x-wav', 'audio/x-m4a'])

/**
 * Drag-and-drop / click-to-upload component.
 * Reads the file as base64, sends to /api/wizard/upload-file, calls onUploaded(publicPath).
 */
export function FileUpload({ label, accept, subdir, currentPath, onUploaded }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError]         = useState(null)
  const inputRef = useRef()

  async function handleFile(file) {
    if (!file) return
    setError(null)

    // Validate MIME
    if (subdir === 'audio' && !AUDIO_TYPES.has(file.type)) {
      setError(`Unsupported file type "${file.type}". Please upload an audio file.`)
      return
    }

    setUploading(true)
    try {
      const base64 = await toBase64(file)
      const { publicPath } = await uploadFile(subdir, file.name, base64)
      onUploaded(publicPath)
    } catch (e) {
      setError(e.message)
    } finally {
      setUploading(false)
    }
  }

  function onInputChange(e) {
    handleFile(e.target.files?.[0])
  }

  function onDrop(e) {
    e.preventDefault()
    handleFile(e.dataTransfer.files?.[0])
  }

  return (
    <div>
      <div
        onDrop={onDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-600 hover:border-game-blue rounded-lg p-5 text-center cursor-pointer transition-colors duration-200"
      >
        <input ref={inputRef} type="file" accept={accept} onChange={onInputChange} className="hidden" />
        {uploading ? (
          <p className="text-gray-400 font-dosis text-sm">Uploading…</p>
        ) : currentPath ? (
          <p className="text-green-400 font-dosis text-sm break-all">
            ✓ {currentPath}
            <span className="block text-gray-400 text-xs mt-1">Click or drag to replace</span>
          </p>
        ) : (
          <p className="text-gray-400 font-dosis text-sm">
            {label}<br />
            <span className="text-xs text-gray-500">Click or drag &amp; drop</span>
          </p>
        )}
      </div>
      {error && <p className="text-red-400 text-xs font-dosis mt-1">{error}</p>}
    </div>
  )
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload  = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
