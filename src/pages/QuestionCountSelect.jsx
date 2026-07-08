import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { LanguageSelector } from '../components/LanguageSelector'
import { playClickSound } from '../utils/sounds'
import { generateQuestions } from '../generators'

const counts = [5, 10, 20, 50]

export function QuestionCountSelect() {
  const navigate = useNavigate()
  const { subject, topic, difficulty } = useParams()
  const { language, setQuestionCount, startQuiz } = useStore()

  const handleSelect = (count) => {
    playClickSound()
    setQuestionCount(count)

    // Generate questions
    const questions = generateQuestions(subject, topic, difficulty, count, language)

    if (questions.length === 0) return

    startQuiz(questions)
    navigate(`/quiz/${subject}/${topic}/${difficulty}`)
  }

  return (
    <div className="page-container">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <button
        onClick={() => navigate(`/difficulty/${subject}/${topic}`)}
        className="absolute top-4 left-4 text-white/80 hover:text-white text-lg font-bold cursor-pointer"
      >
        ← {t(language, 'back')}
      </button>

      <div className="max-w-md w-full">
        <h2 className="title-text mb-8 animate-slide-up">
          {t(language, 'chooseQuestions')}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {counts.map((count, index) => (
            <button
              key={count}
              onClick={() => handleSelect(count)}
              className={`
                bg-white/90 text-primary rounded-3xl p-6 shadow-lg hover:shadow-xl
                transform hover:scale-105 transition-all duration-300
                cursor-pointer active:scale-95 border-2 border-primary/20
                animate-bounce-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                {count}
              </div>
              <div className="font-bold text-base md:text-lg text-text-muted">
                {t(language, `questions.${count}`)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
