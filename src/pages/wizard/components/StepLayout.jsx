// Consistent wrapper for every wizard step.
export function StepLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen bg-game-dark flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-2xl">
        <h2 className="font-sigmar text-game-blue text-2xl mb-1">{title}</h2>
        {subtitle && (
          <p className="text-gray-400 font-dosis text-sm mb-6">{subtitle}</p>
        )}
        <div className="space-y-5">{children}</div>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </div>
  )
}
