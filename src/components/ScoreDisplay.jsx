export function ScoreDisplay({ score, total }) {
  return (
    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
      <span className="text-yellow-300 text-xl">⭐</span>
      <span className="text-white font-bold text-lg">
        {score}/{total}
      </span>
    </div>
  )
}
