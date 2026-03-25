// Auto-dismissing toast notification (e.g. "No hints remaining").
export function Toast({ message }) {
  if (!message) return null

  return (
    <div className="
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
      bg-red-600 text-white font-dosis font-bold
      px-8 py-4 rounded-xl border-2 border-red-800
      shadow-lg text-base animate-fade-slide-up
      pointer-events-none
    ">
      {message}
    </div>
  )
}
