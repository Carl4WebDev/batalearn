import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { LanguageSelector } from '../components/LanguageSelector'
import { playClickSound } from '../utils/sounds'

const difficulties = ['easy', 'medium', 'hard']

const difficultyConfig = {
  easy: { color: 'bg-green-500 hover:bg-green-600 border-green-400', stars: '⭐' },
  medium: { color: 'bg-yellow-500 hover:bg-yellow-600 border-yellow-400', stars: '⭐⭐' },
  hard: { color: 'bg-red-500 hover:bg-red-600 border-red-400', stars: '⭐⭐⭐' },
}

export function DifficultySelect() {
  const navigate = useNavigate()
  const { subject, topic } = useParams()
  const { language, setDifficulty } = useStore()

  const handleSelect = (difficulty) => {
    playClickSound()
    setDifficulty(difficulty)
    navigate(`/questions/${subject}/${topic}/${difficulty}`)
  }

  return (
    <div className="page-container">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <button
        onClick={() => navigate(`/topics/${subject}`)}
        className="absolute top-4 left-4 text-white/80 hover:text-white text-lg font-bold cursor-pointer"
      >
        ← {t(language, 'back')}
      </button>

      <div className="max-w-md w-full">
        <h2 className="title-text mb-8 animate-slide-up">
          {t(language, 'chooseDifficulty')}
        </h2>

        <div className="flex flex-col gap-4">
          {difficulties.map((diff, index) => {
            const config = difficultyConfig[diff]
            return (
              <button
                key={diff}
                onClick={() => handleSelect(diff)}
                className={`
                  ${config.color}
                  text-white rounded-3xl p-6 shadow-lg hover:shadow-xl
                  transform hover:scale-105 transition-all duration-300
                  cursor-pointer active:scale-95 border-2
                  animate-bounce-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-1">{config.stars}</div>
                <div className="font-bold text-xl md:text-2xl">
                  {t(language, `difficulties.${diff}`)}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
