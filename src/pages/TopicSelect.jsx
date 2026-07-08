import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { LanguageSelector } from '../components/LanguageSelector'
import { playClickSound } from '../utils/sounds'
import { getTopics } from '../generators'

export function TopicSelect() {
  const navigate = useNavigate()
  const { subject } = useParams()
  const { language, setTopic } = useStore()

  const topics = getTopics(subject)

  const handleSelect = (topic) => {
    playClickSound()
    setTopic(topic)
    navigate(`/difficulty/${subject}/${topic}`)
  }

  const topicColors = [
    'bg-pink-500 hover:bg-pink-600 border-pink-400',
    'bg-teal-500 hover:bg-teal-600 border-teal-400',
    'bg-indigo-500 hover:bg-indigo-600 border-indigo-400',
    'bg-rose-500 hover:bg-rose-600 border-rose-400',
    'bg-amber-500 hover:bg-amber-600 border-amber-400',
  ]

  return (
    <div className="page-container">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <button
        onClick={() => navigate('/subjects')}
        className="absolute top-4 left-4 text-white/80 hover:text-white text-lg font-bold cursor-pointer"
      >
        ← {t(language, 'back')}
      </button>

      <div className="max-w-lg w-full">
        <h2 className="title-text mb-2 animate-slide-up">
          {t(language, 'subjects.' + subject)}
        </h2>
        <p className="subtitle-text mb-8 animate-slide-up">
          {t(language, 'chooseTopic')}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <button
              key={topic}
              onClick={() => handleSelect(topic)}
              className={`
                ${topicColors[index % topicColors.length]}
                text-white rounded-3xl p-6 shadow-lg hover:shadow-xl
                transform hover:scale-105 transition-all duration-300
                cursor-pointer active:scale-95 border-2
                animate-bounce-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl mb-2">
                {t(language, `topicIcons.${topic}`)}
              </div>
              <div className="font-bold text-base md:text-lg">
                {t(language, `topics.${subject}.${topic}`)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
