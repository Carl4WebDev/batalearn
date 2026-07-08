function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateWrongAnswers(correct, count = 3, min = 0, max = 100) {
  const wrongs = new Set()
  let attempts = 0

  while (wrongs.size < count && attempts < 50) {
    attempts++
    let wrong
    const strategy = Math.random()

    if (strategy < 0.4) {
      // Close to correct
      wrong = correct + randInt(-5, 5)
    } else if (strategy < 0.7) {
      // Off by one digit or operation error
      wrong = correct + randInt(-10, 10)
    } else {
      // Random in range
      wrong = randInt(Math.max(min, correct - 20), Math.min(max, correct + 20))
    }

    if (wrong !== correct && wrong >= 0 && !wrongs.has(wrong)) {
      wrongs.add(wrong)
    }
  }

  // Fill remaining with random
  while (wrongs.size < count) {
    const wrong = randInt(Math.max(0, correct - 30), correct + 30)
    if (wrong !== correct && !wrongs.has(wrong)) {
      wrongs.add(wrong)
    }
  }

  return shuffle([...wrongs])
}

function makeChoices(correct, wrongs) {
  const options = shuffle([correct, ...wrongs])
  const labels = ['A', 'B', 'C', 'D']
  return options.map((opt, i) => ({
    label: labels[i],
    text: String(opt),
    isCorrect: opt === correct,
  }))
}

// Addition Generator
export function generateAddition(difficulty, lang) {
  let a, b

  switch (difficulty) {
    case 'easy':
      a = randInt(1, 10)
      b = randInt(1, 10)
      break
    case 'medium':
      a = randInt(10, 50)
      b = randInt(10, 50)
      break
    case 'hard':
      a = randInt(50, 200)
      b = randInt(50, 200)
      break
    default:
      a = randInt(1, 10)
      b = randInt(1, 10)
  }

  const correct = a + b
  const wrongs = generateWrongAnswers(correct, 3, Math.max(0, correct - 20), correct + 20)

  const opSymbol = '+'
  const questionText = lang === 'fil'
    ? `Ano ang ${a} ${opSymbol} ${b}?`
    : `What is ${a} ${opSymbol} ${b}?`

  const questionSpeech = lang === 'fil'
    ? `Ano ang ${a} plus ${b}?`
    : `What is ${a} plus ${b}?`

  return {
    id: `add-${a}-${b}-${Date.now()}`,
    text: questionText,
    speech: questionSpeech,
    choices: makeChoices(correct, wrongs),
    correctAnswer: String(correct),
    subject: 'math',
    topic: 'addition',
  }
}

// Subtraction Generator
export function generateSubtraction(difficulty, lang) {
  let a, b

  switch (difficulty) {
    case 'easy':
      b = randInt(1, 5)
      a = randInt(b, 10)
      break
    case 'medium':
      b = randInt(5, 25)
      a = randInt(b + 10, 60)
      break
    case 'hard':
      b = randInt(20, 100)
      a = randInt(b + 10, 300)
      break
    default:
      b = randInt(1, 5)
      a = randInt(b, 10)
  }

  const correct = a - b
  const wrongs = generateWrongAnswers(correct, 3, Math.max(0, correct - 15), correct + 15)

  const questionText = lang === 'fil'
    ? `Ano ang ${a} - ${b}?`
    : `What is ${a} - ${b}?`

  const questionSpeech = lang === 'fil'
    ? `Ano ang ${a} minus ${b}?`
    : `What is ${a} minus ${b}?`

  return {
    id: `sub-${a}-${b}-${Date.now()}`,
    text: questionText,
    speech: questionSpeech,
    choices: makeChoices(correct, wrongs),
    correctAnswer: String(correct),
    subject: 'math',
    topic: 'subtraction',
  }
}

// Multiplication Generator
export function generateMultiplication(difficulty, lang) {
  let a, b

  switch (difficulty) {
    case 'easy':
      a = randInt(1, 5)
      b = randInt(1, 5)
      break
    case 'medium':
      a = randInt(2, 10)
      b = randInt(2, 10)
      break
    case 'hard':
      a = randInt(5, 12)
      b = randInt(5, 12)
      break
    default:
      a = randInt(1, 5)
      b = randInt(1, 5)
  }

  const correct = a * b
  const wrongs = generateWrongAnswers(correct, 3, Math.max(0, correct - 20), correct + 30)

  const questionText = lang === 'fil'
    ? `Ano ang ${a} x ${b}?`
    : `What is ${a} x ${b}?`

  const questionSpeech = lang === 'fil'
    ? `Ano ang ${a} times ${b}?`
    : `What is ${a} times ${b}?`

  return {
    id: `mul-${a}-${b}-${Date.now()}`,
    text: questionText,
    speech: questionSpeech,
    choices: makeChoices(correct, wrongs),
    correctAnswer: String(correct),
    subject: 'math',
    topic: 'multiplication',
  }
}

// Division Generator
export function generateDivision(difficulty, lang) {
  let a, b, correct

  switch (difficulty) {
    case 'easy':
      b = randInt(1, 5)
      correct = randInt(1, 5)
      a = b * correct
      break
    case 'medium':
      b = randInt(2, 10)
      correct = randInt(2, 10)
      a = b * correct
      break
    case 'hard':
      b = randInt(3, 12)
      correct = randInt(5, 15)
      a = b * correct
      break
    default:
      b = randInt(1, 5)
      correct = randInt(1, 5)
      a = b * correct
  }

  const wrongs = generateWrongAnswers(correct, 3, Math.max(0, correct - 10), correct + 10)

  const questionText = lang === 'fil'
    ? `Ano ang ${a} / ${b}?`
    : `What is ${a} / ${b}?`

  const questionSpeech = lang === 'fil'
    ? `Ano ang ${a} divided by ${b}?`
    : `What is ${a} divided by ${b}?`

  return {
    id: `div-${a}-${b}-${Date.now()}`,
    text: questionText,
    speech: questionSpeech,
    choices: makeChoices(correct, wrongs),
    correctAnswer: String(correct),
    subject: 'math',
    topic: 'division',
  }
}

export const mathGenerators = {
  addition: generateAddition,
  subtraction: generateSubtraction,
  multiplication: generateMultiplication,
  division: generateDivision,
}
