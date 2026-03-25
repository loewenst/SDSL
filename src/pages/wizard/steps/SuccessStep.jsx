import { Link } from 'react-router-dom'

export function SuccessStep({ songName, onAddAnother }) {
  return (
    <div className="min-h-screen bg-game-dark flex flex-col items-center justify-center px-6 text-center gap-8">
      <div className="text-5xl">🎶</div>
      <h2 className="font-sigmar text-game-blue text-3xl">Song Added!</h2>
      <p className="text-gray-300 font-dosis text-base max-w-md">
        <span className="text-white font-semibold">{songName || 'Your song'}</span> has been saved
        to <code className="text-gray-300">songs.json</code> and its files copied to{' '}
        <code className="text-gray-300">public/</code>.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={onAddAnother}
          className="px-8 py-3 rounded-full bg-game-blue text-white font-sigmar text-lg
                     hover:bg-game-blue/80 transition-colors duration-200"
        >
          Add Another Song
        </button>
        <Link
          to="/wizard/songs"
          className="px-8 py-3 rounded-full border-2 border-gray-500 text-gray-300 font-dosis text-base
                     hover:border-gray-300 hover:text-white transition-colors duration-200"
        >
          Song Library
        </Link>
      </div>
      <Link to="/" className="text-gray-600 hover:text-gray-400 font-dosis text-sm transition-colors">
        Go to game →
      </Link>
    </div>
  )
}
