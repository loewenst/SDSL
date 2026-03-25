import { Link } from 'react-router-dom'

export function WelcomeStep({ onNext }) {
  return (
    <div className="min-h-screen bg-game-dark flex flex-col items-center justify-center px-6 text-center gap-8">
      <h1 className="font-sigmar text-game-blue text-4xl drop-shadow-lg leading-tight">
        Song Wizard
      </h1>
      <p className="text-gray-300 font-dosis text-base max-w-md leading-relaxed">
        This wizard will walk you through adding a new song to{' '}
        <span className="text-white font-semibold">Surprisingly Deep Song Lyrics</span>.
        You'll enter the lyric, answer choices, hints, an explainer, and an audio clip.
      </p>
      <p className="text-gray-500 font-dosis text-sm max-w-md">
        Files you upload are saved directly to <code className="text-gray-300">public/</code> and
        the song is appended to <code className="text-gray-300">src/data/songs.json</code>.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-game-blue text-white font-sigmar text-lg
                     hover:bg-game-blue/80 transition-colors duration-200 shadow-lg"
        >
          Get Started
        </button>
        <Link
          to="/wizard/songs"
          className="px-8 py-3 rounded-full border-2 border-gray-600 text-gray-300 font-dosis text-base
                     hover:border-gray-400 hover:text-white transition-colors duration-200"
        >
          Song Library
        </Link>
      </div>
      <Link to="/" className="text-gray-600 hover:text-gray-400 font-dosis text-sm transition-colors">
        ← Back to game
      </Link>
    </div>
  )
}
