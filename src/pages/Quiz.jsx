import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../stores/useStore'
import { t } from '../i18n/translations'
import { ProgressBar } from '../components/ProgressBar'
import { ScoreDisplay } from '../components/ScoreDisplay'
import { useTTS } from '../hooks/useTTS'
import { playCorrectSound, playIncorrectSound, playClickSound } from '../utils/sounds'

export function Quiz() {
  const navigate = useNavigate()
  const { subject, topic, difficulty } = useParams()
  const {
    language,
    questions,
    currentIndex,
    score,
    feedback,
    answerQuestion,
    nextQuestion,
    clearFeedback,
  } = useStore()

  const { speak, stop } = useTTS(language)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentQuestion = questions[currentIndex]
  const total = questions.length

  // Speak question when it changes
  useEffect(() => {
    if (currentQuestion && !showFeedback) {
      const timer = setTimeout(() => {
        speak(currentQuestion.speech || currentQuestion.text)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, currentQuestion, speak, showFeedback])

  // Cleanup on unmount
  useEffect(() => {
    return () => stop()
  }, [stop])

  const handleAnswer = useCallback((choice) => {
    if (showFeedback || isTransitioning) return

    playClickSound()
    setSelectedAnswer(choice.text)
    setShowFeedback(true)

    const isCorrect = answerQuestion(choice.text, currentQuestion.correctAnswer)

    if (isCorrect) {
      playCorrectSound()
    } else {
      playIncorrectSound()
    }

    // Auto-advance after feedback
    setIsTransitioning(true)
    setTimeout(() => {
      const result = nextQuestion()
      setSelectedAnswer(null)
      setShowFeedback(false)
      setIsTransitioning(false)

      if (result.finished) {
        stop()
        navigate(`/results/${subject}/${topic}/${difficulty}`)
      }
    }, 1500)
  }, [showFeedback, isTransitioning, answerQuestion, currentQuestion, nextQuestion, navigate, subject, topic, difficulty, stop])

  const handleReplay = () => {
    if (currentQuestion) {
      speak(currentQuestion.speech || currentQuestion.text)
    }
  }

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/', { replace: true })
    }
  }, [questions.length, navigate])

  if (!currentQuestion) return null

  return (
    <div className="page-container">
      {/* Header */}
      <div className="w-full max-w-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => {
              stop()
              navigate(`/questions/${subject}/${topic}/${difficulty}`)
            }}
            className="text-white/80 hover:text-white font-bold cursor-pointer"
          >
            ← {t(language, 'back')}
          </button>
          <ScoreDisplay score={score} total={total} />
        </div>

        {/* Progress */}
        <ProgressBar current={currentIndex + 1} total={total} />

        {/* Question counter */}
        <div className="text-center text-white/80 text-sm mt-2">
          {t(language, 'questionOf', { current: currentIndex + 1, total })}
        </div>
      </div>

      {/* Question Card */}
      <div className="card max-w-lg w-full animate-fade-in" key={currentIndex}>
        {/* Question */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-text-dark leading-relaxed">
            {currentQuestion.text}
          </h3>

          {/* Replay button */}
          <button
            onClick={handleReplay}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary
              rounded-xl hover:bg-primary/20 transition-colors cursor-pointer font-bold"
          >
            🔊 {t(language, 'replay')}
          </button>
        </div>

        {/* Choices */}
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.choices.map((choice) => {
            let buttonClass = 'bg-white hover:bg-gray-50 border-gray-200 text-text-dark'

            if (showFeedback) {
              if (choice.isCorrect) {
                buttonClass = 'bg-green-100 border-green-400 text-green-800'
              } else if (choice.text === selectedAnswer && !choice.isCorrect) {
                buttonClass = 'bg-red-100 border-red-400 text-red-800'
              } else {
                buttonClass = 'bg-gray-50 border-gray-200 text-gray-400'
              }
            }

            return (
              <button
                key={choice.label}
                onClick={() => handleAnswer(choice)}
                disabled={showFeedback}
                className={`
                  option-button ${buttonClass}
                  ${showFeedback ? 'cursor-default' : 'cursor-pointer'}
                  transition-all duration-300
                `}
              >
                <span className="font-bold mr-3 text-primary">
                  {choice.label}.
                </span>
                {choice.text}
                {showFeedback && choice.isCorrect && (
                  <span className="ml-2">✅</span>
                )}
                {showFeedback && choice.text === selectedAnswer && !choice.isCorrect && (
                  <span className="ml-2">❌</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {showFeedback && feedback && (
          <div className={`
            mt-4 p-4 rounded-2xl text-center font-bold text-lg animate-bounce-in
            ${feedback.type === 'correct'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
            }
          `}>
            {feedback.type === 'correct' ? (
              <span>🎉 {t(language, 'correct')}</span>
            ) : (
              <span>
                💪 {t(language, 'incorrect')}
                <br />
                <span className="text-sm font-normal">
                  {t(language, 'correctAnswer', { answer: feedback.answer })}
                </span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
