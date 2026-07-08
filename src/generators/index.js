import { mathGenerators } from './math'
import { englishGenerators } from './english'
import { scienceGenerators } from './science'
import { generalGenerators } from './general'

const allGenerators = {
  math: mathGenerators,
  english: englishGenerators,
  science: scienceGenerators,
  general: generalGenerators,
}

/**
 * Generate a set of unique questions for a quiz
 * @param {string} subject - math, english, science, general
 * @param {string} topic - The specific topic within the subject
 * @param {string} difficulty - easy, medium, hard
 * @param {number} count - Number of questions to generate
 * @param {string} lang - Language code (en or fil)
 * @returns {Array} Array of question objects
 */
export function generateQuestions(subject, topic, difficulty, count, lang = 'en') {
  const generator = allGenerators[subject]?.[topic]

  if (!generator) return []

  const questions = []
  const seenTexts = new Set()
  let attempts = 0
  const maxAttempts = count * 20

  // First pass: try to get unique questions
  while (questions.length < count && attempts < maxAttempts) {
    attempts++
    const question = generator(difficulty, lang)

    if (seenTexts.has(question.text)) continue

    seenTexts.add(question.text)
    questions.push(question)
  }

  // Second pass: if we still need more, allow duplicates from the pool
  const pool = [...questions]
  while (questions.length < count && pool.length > 0) {
    const question = pool[Math.floor(Math.random() * pool.length)]
    questions.push({
      ...question,
      id: `${question.id}-dup-${questions.length}`,
    })
  }

  return questions
}

/**
 * Get all available subjects
 */
export function getSubjects() {
  return Object.keys(allGenerators)
}

/**
 * Get all topics for a subject
 */
export function getTopics(subject) {
  return Object.keys(allGenerators[subject] || {})
}

/**
 * Check if a generator exists
 */
export function hasGenerator(subject, topic) {
  return !!allGenerators[subject]?.[topic]
}
