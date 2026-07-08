import { useState, useEffect } from 'react'

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C63FF', '#FF8A5C', '#A8E6CF', '#FFB6C1', '#87CEEB']
const SHAPES = ['circle', 'square', 'triangle']

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function Confetti({ count = 50 }) {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const newPieces = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: randomBetween(0, 100),
      delay: randomBetween(0, 2000) / 1000,
      duration: randomBetween(2000, 4000) / 1000,
      color: COLORS[randomBetween(0, COLORS.length - 1)],
      shape: SHAPES[randomBetween(0, SHAPES.length - 1)],
      size: randomBetween(6, 14),
      rotation: randomBetween(0, 360),
    }))
    setPieces(newPieces)
  }, [count])

  if (pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.shape !== 'triangle' ? piece.color : 'transparent',
            borderRadius: piece.shape === 'circle' ? '50%' : piece.shape === 'square' ? '2px' : '0',
            borderLeft: piece.shape === 'triangle' ? `${piece.size / 2}px solid transparent` : 'none',
            borderRight: piece.shape === 'triangle' ? `${piece.size / 2}px solid transparent` : 'none',
            borderBottom: piece.shape === 'triangle' ? `${piece.size}px solid ${piece.color}` : 'none',
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}
