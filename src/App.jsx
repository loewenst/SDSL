import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import GamePage from './pages/GamePage'

const WizardPage    = import.meta.env.DEV ? lazy(() => import('./pages/wizard/WizardPage'))    : null
const SongLibrary   = import.meta.env.DEV ? lazy(() => import('./pages/wizard/SongLibrary'))   : null

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />

      {import.meta.env.DEV && WizardPage && (
        <Route
          path="/wizard"
          element={
            <Suspense fallback={<Loading />}>
              <WizardPage />
            </Suspense>
          }
        />
      )}

      {import.meta.env.DEV && SongLibrary && (
        <Route
          path="/wizard/songs"
          element={
            <Suspense fallback={<Loading />}>
              <SongLibrary />
            </Suspense>
          }
        />
      )}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function Loading() {
  return (
    <div className="min-h-screen bg-game-dark flex items-center justify-center">
      <p className="text-gray-400 font-dosis text-lg">Loading…</p>
    </div>
  )
}
