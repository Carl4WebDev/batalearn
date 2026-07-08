import { useNavigate } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { LanguageSelector } from '../components/LanguageSelector'
import { playClickSound } from '../utils/sounds'

export function Home() {
  const navigate = useNavigate()
  const { language, totalQuizzes, totalCorrect, totalAnswered } = useStore()

  const handleStart = () => {
    playClickSound()
    navigate('/subjects')
  }

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  return (
    <div className="page-container">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <div className="card max-w-md w-full text-center animate-bounce-in">
        {/* Logo & Mascot */}
        <div className="mb-6">
          <img src="/batalearn-logo.png" alt="BataLearn" className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 animate-float drop-shadow-lg" />
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {t(language, 'appName')}
          </h1>
          <p className="text-text-muted text-lg">
            {t(language, 'tagline')}
          </p>
        </div>

        {/* Fun illustration */}
        <div className="flex justify-center gap-3 mb-8 text-4xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎓</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>✏️</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌟</span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎨</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🔬</span>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="btn-primary w-full text-xl md:text-2xl py-5"
        >
          🚀 {t(language, 'startButton')}
        </button>

        {/* Stats */}
        {totalQuizzes > 0 && (
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="bg-primary/10 rounded-2xl p-3">
              <div className="text-2xl font-bold text-primary">{totalQuizzes}</div>
              <div className="text-xs text-text-muted">{t(language, 'totalQuizzes')}</div>
            </div>
            <div className="bg-accent/10 rounded-2xl p-3">
              <div className="text-2xl font-bold text-accent">{totalCorrect}</div>
              <div className="text-xs text-text-muted">{t(language, 'totalCorrect')}</div>
            </div>
            <div className="bg-warning/10 rounded-2xl p-3">
              <div className="text-2xl font-bold text-warning">{accuracy}%</div>
              <div className="text-xs text-text-muted">{t(language, 'accuracy')}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
