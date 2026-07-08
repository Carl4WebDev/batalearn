import { create } from 'zustand'

const STORAGE_KEY = 'batalearn-progress'
const HISTORY_KEY = 'batalearn-history'
const LANG_KEY = 'batalearn-lang'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

function saveProgress(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      highScores: state.highScores,
      totalQuizzes: state.totalQuizzes,
      totalAnswered: state.totalAnswered,
      totalCorrect: state.totalCorrect,
    }))
  } catch {
    // localStorage full or unavailable
  }
}

function loadHistory() {
  try {
    const saved = localStorage.getItem(HISTORY_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  } catch {
    // localStorage full or unavailable
  }
}

function loadLanguage() {
  try {
    return localStorage.getItem(LANG_KEY) || 'en'
  } catch {
    return 'en'
  }
}

const saved = loadProgress()

export const useStore = create((set, get) => ({
  // Language
  language: loadLanguage(),
  setLanguage: (language) => {
    try { localStorage.setItem(LANG_KEY, language) } catch {}
    set({ language })
  },

  // Quiz configuration
  subject: null,
  topic: null,
  difficulty: null,
  questionCount: 10,

  setSubject: (subject) => set({ subject }),
  setTopic: (topic) => set({ topic }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setQuestionCount: (questionCount) => set({ questionCount }),

  // Quiz state
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],
  isQuizActive: false,
  feedback: null, // { type: 'correct' | 'incorrect', answer: string }

  setQuestions: (questions) => set({ questions }),
  setCurrentIndex: (currentIndex) => set({ currentIndex }),

  startQuiz: (questions) => set({
    questions,
    currentIndex: 0,
    score: 0,
    answers: [],
    isQuizActive: true,
    feedback: null,
  }),

  answerQuestion: (selected, correct) => {
    const state = get()
    const isCorrect = selected === correct
    const newScore = isCorrect ? state.score + 1 : state.score
    const newAnswers = [...state.answers, {
      question: state.questions[state.currentIndex],
      selected,
      correct,
      isCorrect,
    }]

    set({
      score: newScore,
      answers: newAnswers,
      feedback: {
        type: isCorrect ? 'correct' : 'incorrect',
        answer: correct,
      },
    })

    return isCorrect
  },

  nextQuestion: () => {
    const state = get()
    const nextIndex = state.currentIndex + 1

    if (nextIndex >= state.questions.length) {
      // Quiz finished
      const finalScore = state.score
      const total = state.questions.length
      const percent = Math.round((finalScore / total) * 100)

      // Update progress
      const key = `${state.subject}-${state.topic}-${state.difficulty}`
      const currentHigh = state.highScores[key] || 0
      const newHighScores = { ...state.highScores }
      if (finalScore > currentHigh) {
        newHighScores[key] = finalScore
      }

      const newTotalQuizzes = state.totalQuizzes + 1
      const newTotalAnswered = state.totalAnswered + total
      const newTotalCorrect = state.totalCorrect + finalScore

      // Save to history
      const history = loadHistory()
      history.unshift({
        subject: state.subject,
        topic: state.topic,
        difficulty: state.difficulty,
        score: finalScore,
        total,
        percent,
        date: new Date().toISOString(),
      })
      // Keep only last 100 entries
      if (history.length > 100) history.length = 100
      saveHistory(history)

      const newState = {
        highScores: newHighScores,
        totalQuizzes: newTotalQuizzes,
        totalAnswered: newTotalAnswered,
        totalCorrect: newTotalCorrect,
        isQuizActive: false,
        currentIndex: nextIndex,
        feedback: null,
      }

      set(newState)
      saveProgress(newState)

      return { finished: true, score: finalScore, total, percent, isHighScore: finalScore > currentHigh }
    }

    set({
      currentIndex: nextIndex,
      feedback: null,
    })

    return { finished: false }
  },

  clearFeedback: () => set({ feedback: null }),

  // Progress
  highScores: saved?.highScores || {},
  totalQuizzes: saved?.totalQuizzes || 0,
  totalAnswered: saved?.totalAnswered || 0,
  totalCorrect: saved?.totalCorrect || 0,

  // Reset quiz configuration
  resetConfig: () => set({
    subject: null,
    topic: null,
    difficulty: null,
    questionCount: 10,
  }),

  // Get history
  getHistory: () => loadHistory(),
}))
