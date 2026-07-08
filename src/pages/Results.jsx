import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { Confetti } from '../components/Confetti'
import { playCelebrationSound } from '../utils/sounds'

export function Results() {
  const navigate = useNavigate()
  const { subject, topic, difficulty } = useParams()
  const { language, score, answers, questions, highScores, resetConfig } = useStore()

  const total = questions.length
  const percent = Math.round((score / total) * 100)
  const key = `${subject}-${topic}-${difficulty}`
  const highScore = highScores[key] || 0
  const isNewHighScore = score === highScore && score > 0
  const incorrect = total - score

  const [showConfetti, setShowConfetti] = useState(false)
  const [animateScore, setAnimateScore] = useState(false)

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/', { replace: true })
    }
  }, [questions.length, navigate])

  useEffect(() => {
    if (percent >= 70) {
      setShowConfetti(true)
      playCelebrationSound()
    }
    setTimeout(() => setAnimateScore(true), 300)
  }, [percent])

  const getMessage = () => {
    if (percent >= 90) return { emoji: '🏆', text: t(language, 'amazingWork') }
    if (percent >= 70) return { emoji: '🎉', text: t(language, 'greatJob') }
    if (percent >= 50) return { emoji: '👍', text: t(language, 'niceWork') }
    return { emoji: '💪', text: t(language, 'keepTrying') }
  }

  const message = getMessage()

  const handlePlayAgain = () => {
    resetConfig()
    navigate(`/questions/${subject}/${topic}/${difficulty}`)
  }

  const handleChooseTopic = () => {
    resetConfig()
    navigate(`/topics/${subject}`)
  }

  const handleReturnHome = () => {
    resetConfig()
    navigate('/')
  }

  return (
    <div className="page-container">
      {showConfetti && <Confetti />}

      <div className="card max-w-md w-full text-center">
        {/* Celebration Message */}
        <div className="mb-6">
          <div className="text-6xl md:text-7xl mb-4 animate-celebrate">
            {message.emoji}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {message.text}
          </h2>
        </div>

        {/* Score */}
        <div className={`
          bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 mb-6 text-white
          ${animateScore ? 'animate-bounce-in' : 'opacity-0'}
        `}>
          <div className="text-sm opacity-80 mb-1">{t(language, 'yourScore')}</div>
          <div className="text-5xl md:text-6xl font-bold mb-2">
            {score}/{total}
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            {t(language, 'percentage', { percent })}
          </div>

          {isNewHighScore && (
            <div className="mt-3 bg-yellow-400/20 rounded-xl py-2 px-4 inline-block">
              <span className="text-yellow-300 font-bold">
                🌟 {t(language, 'newHighScore')}
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-3">
            <div className="text-2xl font-bold text-green-600">{score}</div>
            <div className="text-xs text-green-500">{t(language, 'correctAnswers')}</div>
          </div>
          <div className="bg-red-50 rounded-2xl p-3">
            <div className="text-2xl font-bold text-red-600">{incorrect}</div>
            <div className="text-xs text-red-500">{t(language, 'incorrectAnswers')}</div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-3">
            <div className="text-2xl font-bold text-blue-600">{total}</div>
            <div className="text-xs text-blue-500">{t(language, 'totalQuestions')}</div>
          </div>
        </div>

        {/* High Score */}
        {highScore > 0 && !isNewHighScore && (
          <div className="mb-6 text-text-muted">
            {t(language, 'highScore', { score: highScore })}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handlePlayAgain}
            className="btn-primary w-full"
          >
            🔄 {t(language, 'playAgain')}
          </button>
          <button
            onClick={handleChooseTopic}
            className="btn-accent w-full"
          >
            📚 {t(language, 'chooseAnotherTopic')}
          </button>
          <button
            onClick={handleReturnHome}
            className="btn-secondary w-full"
          >
            🏠 {t(language, 'returnHome')}
          </button>
        </div>
      </div>
    </div>
  )
}
