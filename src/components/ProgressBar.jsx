export function ProgressBar({ current, total, color = 'bg-success' }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full bg-white/20 rounded-full h-4 md:h-5 overflow-hidden shadow-inner">
      <div
        className={`${color} h-full rounded-full transition-all duration-500 ease-out relative`}
        style={{ width: `${percent}%` }}
      >
        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
      </div>
    </div>
  )
}
