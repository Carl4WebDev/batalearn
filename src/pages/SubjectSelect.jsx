import { useNavigate } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { LanguageSelector } from '../components/LanguageSelector'
import { playClickSound } from '../utils/sounds'

const subjects = ['math', 'english', 'science', 'general']

const subjectColors = {
  math: { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', border: 'border-blue-400' },
  english: { bg: 'bg-green-500', hover: 'hover:bg-green-600', border: 'border-green-400' },
  science: { bg: 'bg-purple-500', hover: 'hover:bg-purple-600', border: 'border-purple-400' },
  general: { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', border: 'border-orange-400' },
}

export function SubjectSelect() {
  const navigate = useNavigate()
  const { language, setSubject } = useStore()

  const handleSelect = (subject) => {
    playClickSound()
    setSubject(subject)
    navigate(`/topics/${subject}`)
  }

  return (
    <div className="page-container">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white/80 hover:text-white text-lg font-bold cursor-pointer"
      >
        ← {t(language, 'back')}
      </button>

      <div className="max-w-lg w-full">
        <h2 className="title-text mb-8 animate-slide-up">
          {t(language, 'chooseSubject')}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {subjects.map((subject, index) => {
            const colors = subjectColors[subject]
            return (
              <button
                key={subject}
                onClick={() => handleSelect(subject)}
                className={`
                  ${colors.bg} ${colors.hover} ${colors.border}
                  text-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl
                  transform hover:scale-105 transition-all duration-300
                  cursor-pointer active:scale-95 border-2
                  animate-bounce-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl mb-3">
                  {t(language, `subjectIcons.${subject}`)}
                </div>
                <div className="font-bold text-lg md:text-xl">
                  {t(language, `subjects.${subject}`)}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
