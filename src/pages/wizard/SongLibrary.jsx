import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getSongs, deleteSong } from '../../services/wizardApi'

export default function SongLibrary() {
  const [songs, setSongs]         = useState(null)
  const [loadError, setLoadError] = useState(null)
  const [confirm, setConfirm]     = useState(null)  // id to confirm-delete
  const [deleting, setDeleting]   = useState(false)
  const [deleteError, setDeleteError] = useState(null)

  useEffect(() => {
    getSongs()
      .then(({ songs }) => setSongs(songs))
      .catch(e => setLoadError(e.message))
  }, [])

  async function handleDelete(id) {
    setDeleting(true)
    setDeleteError(null)
    try {
      await deleteSong(id)
      setSongs(prev => prev.filter(s => s.id !== id))
      setConfirm(null)
    } catch (e) {
      setDeleteError(e.message)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-game-dark px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h1 className="font-sigmar text-game-blue text-3xl">Song Library</h1>
          <div className="flex gap-3">
            <Link
              to="/wizard"
              className="px-5 py-2 rounded-lg bg-game-blue text-white font-dosis text-sm font-semibold
                         hover:bg-game-blue/80 transition-colors duration-200"
            >
              + Add a Song
            </Link>
            <Link
              to="/"
              className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 font-dosis text-sm
                         hover:border-gray-400 hover:text-white transition-colors duration-200"
            >
              Go to Game
            </Link>
          </div>
        </div>

        {/* Loading / Error */}
        {loadError && (
          <p className="text-red-400 font-dosis text-sm">{loadError}</p>
        )}
        {!songs && !loadError && (
          <p className="text-gray-500 font-dosis text-sm">Loading…</p>
        )}

        {/* Song list */}
        {songs && (
          <>
            <p className="text-gray-500 font-dosis text-xs mb-4">
              {songs.length} song{songs.length !== 1 ? 's' : ''} · minimum 10 required to delete
            </p>

            <ul className="space-y-3">
              {songs.map(song => (
                <li
                  key={song.id}
                  className="bg-black/30 border border-gray-700 rounded-xl px-5 py-4 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-dosis font-semibold text-sm truncate">
                      {song.explainer?.heading || `Song #${song.id}`}
                    </p>
                    <p className="text-gray-500 font-dosis text-xs mt-0.5 line-clamp-1 italic">
                      {song.lyrics?.replace(/\n/g, ' ') || ''}
                    </p>
                  </div>
                  <button
                    onClick={() => { setConfirm(song.id); setDeleteError(null) }}
                    disabled={songs.length <= 10}
                    title={songs.length <= 10 ? 'Cannot delete: minimum 10 songs' : 'Delete song'}
                    className="shrink-0 text-gray-600 hover:text-red-400 disabled:opacity-30
                               disabled:cursor-not-allowed transition-colors duration-150 text-lg leading-none pt-0.5"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Delete confirmation modal */}
      {confirm !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-game-dark border border-gray-600 rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center">
            <h3 className="font-sigmar text-white text-xl mb-3">Delete this song?</h3>
            <p className="text-gray-400 font-dosis text-sm mb-6">
              This removes it from <code>songs.json</code>. Any uploaded files in{' '}
              <code>public/</code> are not deleted.
            </p>
            {deleteError && (
              <p className="text-red-400 font-dosis text-xs mb-4">{deleteError}</p>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setConfirm(null)}
                disabled={deleting}
                className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 font-dosis text-sm
                           hover:border-gray-400 hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirm)}
                disabled={deleting}
                className="px-6 py-2 rounded-lg bg-red-700 text-white font-dosis text-sm font-semibold
                           hover:bg-red-600 disabled:opacity-50 transition-colors duration-200"
              >
                {deleting ? 'Deleting…' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
