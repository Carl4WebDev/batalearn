function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Alphabet data
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// Vocabulary data
const vocabularyData = {
  easy: [
    { word: 'cat', definition: 'A small furry pet that says meow', emoji: '🐱' },
    { word: 'dog', definition: 'A friendly pet that barks', emoji: '🐶' },
    { word: 'sun', definition: 'The bright thing in the sky', emoji: '☀️' },
    { word: 'hat', definition: 'You wear it on your head', emoji: '🎩' },
    { word: 'ball', definition: 'A round toy you can throw', emoji: '⚽' },
    { word: 'cup', definition: 'You drink from it', emoji: '🥤' },
    { word: 'book', definition: 'You read it', emoji: '📖' },
    { word: 'fish', definition: 'It swims in water', emoji: '🐟' },
    { word: 'bird', definition: 'It can fly in the sky', emoji: '🐦' },
    { word: 'tree', definition: 'It has leaves and grows tall', emoji: '🌳' },
    { word: 'moon', definition: 'It shines at night', emoji: '🌙' },
    { word: 'star', definition: 'It twinkles in the night sky', emoji: '⭐' },
    { word: 'rain', definition: 'Water that falls from clouds', emoji: '🌧️' },
    { word: 'cake', definition: 'A sweet treat for birthdays', emoji: '🎂' },
    { word: 'ship', definition: 'A big boat on the ocean', emoji: '🚢' },
  ],
  medium: [
    { word: 'elephant', definition: 'The largest land animal with a trunk', emoji: '🐘' },
    { word: 'garden', definition: 'A place where flowers and vegetables grow', emoji: '🌻' },
    { word: 'kitchen', definition: 'The room where you cook food', emoji: '🍳' },
    { word: 'butterfly', definition: 'An insect with colorful wings', emoji: '🦋' },
    { word: 'rainbow', definition: 'Colorful arc in the sky after rain', emoji: '🌈' },
    { word: 'mountain', definition: 'A very tall natural landform', emoji: '🏔️' },
    { word: 'hospital', definition: 'A place where sick people get help', emoji: '🏥' },
    { word: 'airplane', definition: 'A vehicle that flies in the sky', emoji: '✈️' },
    { word: 'dinosaur', definition: 'A large animal that lived long ago', emoji: '🦕' },
    { word: 'umbrella', definition: 'You use it to stay dry in rain', emoji: '☂️' },
  ],
  hard: [
    { word: 'magnificent', definition: 'Extremely beautiful or impressive', emoji: '✨' },
    { word: 'adventure', definition: 'An exciting and unusual experience', emoji: '🗺️' },
    { word: 'caterpillar', definition: 'A larva that turns into a butterfly', emoji: '🐛' },
    { word: 'telescope', definition: 'An instrument for looking at stars', emoji: '🔭' },
    { word: 'volunteer', definition: 'A person who helps without being paid', emoji: '🙋' },
    { word: 'celebrate', definition: 'To do something special for a happy event', emoji: '🎉' },
    { word: 'temperature', definition: 'How hot or cold something is', emoji: '🌡️' },
    { word: 'neighborhood', definition: 'The area where you live nearby', emoji: '🏘️' },
    { word: 'encyclopedia', definition: 'A book full of facts about many things', emoji: '📚' },
    { word: 'microscope', definition: 'An instrument for looking at tiny things', emoji: '🔬' },
  ],
}

// Spelling data - correct and common misspellings
const spellingData = {
  easy: [
    { correct: 'house', wrongs: ['hows', 'hous', 'huse'] },
    { correct: 'apple', wrongs: ['aple', 'appel', 'aple'] },
    { correct: 'happy', wrongs: ['hapy', 'happie', 'happe'] },
    { correct: 'water', wrongs: ['watter', 'wator', 'watar'] },
    { correct: 'friend', wrongs: ['freind', 'frind', 'frend'] },
    { correct: 'school', wrongs: ['schol', 'skool', 'shcool'] },
    { correct: 'flower', wrongs: ['flowr', 'flour', 'flwer'] },
    { correct: 'animal', wrongs: ['animle', 'anmal', 'animel'] },
    { correct: 'mother', wrongs: ['mothr', 'muther', 'mothar'] },
    { correct: 'father', wrongs: ['fathr', 'fathar', 'fathor'] },
    { correct: 'sister', wrongs: ['sistr', 'sistur', 'cister'] },
    { correct: 'brother', wrongs: ['brothr', 'bruther', 'brothar'] },
  ],
  medium: [
    { correct: 'beautiful', wrongs: ['beautful', 'beutiful', 'beatiful'] },
    { correct: 'birthday', wrongs: ['brithday', 'birthdey', 'birfday'] },
    { correct: 'chocolate', wrongs: ['choclate', 'chocolat', 'choclet'] },
    { correct: 'elephant', wrongs: ['elefant', 'elaphant', 'elephent'] },
    { correct: 'favorite', wrongs: ['favrite', 'favourite', 'favorit'] },
    { correct: 'garden', wrongs: ['gardan', 'gardin', 'gardon'] },
    { correct: 'holiday', wrongs: ['holaday', 'holliday', 'holidey'] },
    { correct: 'mountain', wrongs: ['mountin', 'moutain', 'mountan'] },
    { correct: 'rainbow', wrongs: ['rainbo', 'rainbrow', 'ranbow'] },
    { correct: 'tomorrow', wrongs: ['tommorow', 'tomorow', 'tomorow'] },
  ],
  hard: [
    { correct: 'necessary', wrongs: ['neccessary', 'necesary', 'neccesary'] },
    { correct: 'restaurant', wrongs: ['restarant', 'restraunt', 'resturant'] },
    { correct: 'Wednesday', wrongs: ['Wendsday', 'Wednsday', 'Wensday'] },
    { correct: 'February', wrongs: ['Febuary', 'Feburary', 'Febraury'] },
    { correct: 'bicycle', wrongs: ['bysicle', 'bicicle', 'bycicle'] },
    { correct: 'chocolate', wrongs: ['choclate', 'chocolat', 'chocholate'] },
    { correct: 'dangerous', wrongs: ['dangrous', 'dangeorus', 'dangereous'] },
    { correct: 'different', wrongs: ['diffrent', 'diferent', 'diffrent'] },
    { correct: 'favorite', wrongs: ['favrite', 'favourit', 'favorit'] },
    { correct: 'immediately', wrongs: ['imediately', 'immedietly', 'immeditely'] },
  ],
}

// Alphabet Generator
export function generateAlphabet(difficulty, lang) {
  const idx = Math.floor(Math.random() * 26)
  const letter = alphabet[idx]

  let questionText, questionSpeech, correct, wrongs

  if (difficulty === 'easy') {
    // What comes after X?
    const nextLetter = idx < 25 ? alphabet[idx + 1] : 'A'
    correct = nextLetter
    wrongs = shuffle(alphabet.filter(l => l !== nextLetter)).slice(0, 3)

    questionText = lang === 'fil'
      ? `Ano ang kasunod ng ${letter}?`
      : `What comes after ${letter}?`
    questionSpeech = questionText
  } else if (difficulty === 'medium') {
    // What comes before X?
    const prevLetter = idx > 0 ? alphabet[idx - 1] : 'Z'
    correct = prevLetter
    wrongs = shuffle(alphabet.filter(l => l !== prevLetter)).slice(0, 3)

    questionText = lang === 'fil'
      ? `Ano ang bago ng ${letter}?`
      : `What comes before ${letter}?`
    questionSpeech = questionText
  } else {
    // What is the Xth letter?
    correct = letter
    wrongs = shuffle(alphabet.filter(l => l !== letter)).slice(0, 3)

    const ordinal = idx + 1
    questionText = lang === 'fil'
      ? `Ano ang ika-${ordinal} na letra?`
      : `What is the ${ordinal}${ordinal === 1 ? 'st' : ordinal === 2 ? 'nd' : ordinal === 3 ? 'rd' : 'th'} letter of the alphabet?`
    questionSpeech = questionText
  }

  const labels = ['A', 'B', 'C', 'D']
  const options = shuffle([correct, ...wrongs])

  return {
    id: `alpha-${letter}-${Date.now()}`,
    text: questionText,
    speech: questionSpeech,
    choices: options.map((opt, i) => ({
      label: labels[i],
      text: opt,
      isCorrect: opt === correct,
    })),
    correctAnswer: correct,
    subject: 'english',
    topic: 'alphabet',
  }
}

// Vocabulary Generator
export function generateVocabulary(difficulty, lang) {
  const data = vocabularyData[difficulty] || vocabularyData.easy
  const item = randItem(data)

  const questionText = lang === 'fil'
    ? `Anong salita ang tumutukod sa: "${item.definition}"?`
    : `Which word means: "${item.definition}"?`

  const wrongWords = shuffle(data.filter(d => d.word !== item.word)).slice(0, 3).map(d => d.word)
  const correct = item.word
  const labels = ['A', 'B', 'C', 'D']
  const options = shuffle([correct, ...wrongWords])

  return {
    id: `vocab-${item.word}-${Date.now()}`,
    text: `${item.emoji} ${questionText}`,
    speech: questionText,
    choices: options.map((opt, i) => ({
      label: labels[i],
      text: opt,
      isCorrect: opt === correct,
    })),
    correctAnswer: correct,
    subject: 'english',
    topic: 'vocabulary',
  }
}

// Spelling Generator
export function generateSpelling(difficulty, lang) {
  const data = spellingData[difficulty] || spellingData.easy
  const item = randItem(data)

  const questionText = lang === 'fil'
    ? 'Aling salita ang tama ang baybay?'
    : 'Which word is spelled correctly?'

  const allOptions = shuffle([item.correct, ...item.wrongs.slice(0, 3)])
  const labels = ['A', 'B', 'C', 'D']

  return {
    id: `spell-${item.correct}-${Date.now()}`,
    text: questionText,
    speech: questionText,
    choices: allOptions.map((opt, i) => ({
      label: labels[i],
      text: opt,
      isCorrect: opt === item.correct,
    })),
    correctAnswer: item.correct,
    subject: 'english',
    topic: 'spelling',
  }
}

export const englishGenerators = {
  alphabet: generateAlphabet,
  vocabulary: generateVocabulary,
  spelling: generateSpelling,
}
