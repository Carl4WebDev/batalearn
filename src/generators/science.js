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

// Animals data
const animalsData = {
  easy: [
    { name: 'Cat', emoji: '🐱', sound: 'Meow', habitat: 'House', fact: 'Cats purr when happy' },
    { name: 'Dog', emoji: '🐶', sound: 'Bark', habitat: 'House', fact: 'Dogs wag their tails' },
    { name: 'Fish', emoji: '🐟', sound: 'Blub', habitat: 'Water', fact: 'Fish swim in water' },
    { name: 'Bird', emoji: '🐦', sound: 'Tweet', habitat: 'Sky', fact: 'Birds can fly' },
    { name: 'Cow', emoji: '🐄', sound: 'Moo', habitat: 'Farm', fact: 'Cows give milk' },
    { name: 'Duck', emoji: '🦆', sound: 'Quack', habitat: 'Pond', fact: 'Ducks can swim' },
    { name: 'Pig', emoji: '🐷', sound: 'Oink', habitat: 'Farm', fact: 'Pigs love mud' },
    { name: 'Hen', emoji: '🐔', sound: 'Cluck', habitat: 'Farm', fact: 'Hens lay eggs' },
    { name: 'Sheep', emoji: '🐑', sound: 'Baa', habitat: 'Farm', fact: 'Sheep have wool' },
    { name: 'Horse', emoji: '🐴', sound: 'Neigh', habitat: 'Farm', fact: 'Horses can run fast' },
  ],
  medium: [
    { name: 'Elephant', emoji: '🐘', habitat: 'Africa', fact: 'Largest land animal', feature: 'trunk' },
    { name: 'Lion', emoji: '🦁', habitat: 'Africa', fact: 'King of the jungle', feature: 'mane' },
    { name: 'Penguin', emoji: '🐧', habitat: 'Antarctica', fact: 'Cannot fly but swims well', feature: 'tuxedo colors' },
    { name: 'Monkey', emoji: '🐒', habitat: 'Jungle', fact: 'Loves bananas', feature: 'long tail' },
    { name: 'Bear', emoji: '🐻', habitat: 'Forest', fact: 'Sleeps in winter', feature: 'thick fur' },
    { name: 'Giraffe', emoji: '🦒', habitat: 'Africa', fact: 'Tallest animal', feature: 'long neck' },
    { name: 'Rabbit', emoji: '🐰', habitat: 'Garden', fact: 'Hops around', feature: 'long ears' },
    { name: 'Turtle', emoji: '🐢', habitat: 'Pond', fact: 'Carries its home', feature: 'shell' },
    { name: 'Owl', emoji: '🦉', habitat: 'Forest', fact: 'Active at night', feature: 'big eyes' },
    { name: 'Frog', emoji: '🐸', habitat: 'Pond', fact: 'Starts as a tadpole', feature: 'long tongue' },
  ],
  hard: [
    { name: 'Chameleon', emoji: '🦎', fact: 'Changes color to blend in', feature: 'color-changing skin' },
    { name: 'Dolphin', emoji: '🐬', fact: 'Very intelligent sea mammal', feature: 'echolocation' },
    { name: 'Octopus', emoji: '🐙', fact: 'Has eight arms', feature: 'three hearts' },
    { name: 'Flamingo', emoji: '🦩', fact: 'Stands on one leg', feature: 'pink feathers' },
    { name: 'Kangaroo', emoji: '🦘', fact: 'Carries babies in pouch', feature: 'strong legs' },
    { name: 'Panda', emoji: '🐼', fact: 'Eats bamboo all day', feature: 'black and white fur' },
    { name: 'Koala', emoji: '🐨', fact: 'Sleeps 20 hours a day', feature: 'eucalyptus diet' },
    { name: 'Seahorse', emoji: '🌊', fact: 'Male carries the babies', feature: 'horse-shaped head' },
  ],
}

// Plants data
const plantsData = {
  easy: [
    { part: 'Roots', function: 'Absorb water from soil', emoji: '🌱', wrongParts: ['Leaves', 'Flower', 'Stem'] },
    { part: 'Leaves', function: 'Make food from sunlight', emoji: '🍃', wrongParts: ['Roots', 'Flower', 'Stem'] },
    { part: 'Flower', function: 'Makes seeds for new plants', emoji: '🌸', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Stem', function: 'Holds the plant up', emoji: '🌿', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Fruit', function: 'Protects the seeds', emoji: '🍎', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Seeds', function: 'Grow into new plants', emoji: '🌻', wrongParts: ['Roots', 'Leaves', 'Flower'] },
  ],
  medium: [
    { question: 'What do plants need to grow?', correct: 'Sunlight and water', wrongs: ['Only candy', 'Darkness', 'Ice cream'] },
    { question: 'Where do plants make their food?', correct: 'In their leaves', wrongs: ['In the roots', 'In the soil', 'In the flower'] },
    { question: 'What gas do plants take in?', correct: 'Carbon dioxide', wrongs: ['Oxygen', 'Nitrogen', 'Helium'] },
    { question: 'What do roots do?', correct: 'Absorb water', wrongs: ['Make food', 'Attract bees', 'Make seeds'] },
    { question: 'What attracts bees to flowers?', correct: 'Color and smell', wrongs: ['Size', 'Thorns', 'Roots'] },
  ],
  hard: [
    { question: 'What is the process called when plants make food?', correct: 'Photosynthesis', wrongs: ['Digestion', 'Respiration', 'Fermentation'] },
    { question: 'What part of the plant carries water?', correct: 'Xylem', wrongs: ['Phloem', 'Chlorophyll', 'Pollen'] },
    { question: 'What gives leaves their green color?', correct: 'Chlorophyll', wrongs: ['Melanin', 'Carotene', 'Xanthophyll'] },
  ],
}

// Human Body data
const humanBodyData = {
  easy: [
    { part: 'Eyes', function: 'Help you see', emoji: '👀', wrongParts: ['Ears', 'Nose', 'Mouth'] },
    { part: 'Ears', function: 'Help you hear', emoji: '👂', wrongParts: ['Eyes', 'Nose', 'Mouth'] },
    { part: 'Nose', function: 'Help you smell', emoji: '👃', wrongParts: ['Eyes', 'Ears', 'Mouth'] },
    { part: 'Mouth', function: 'Help you eat and talk', emoji: '👄', wrongParts: ['Eyes', 'Ears', 'Nose'] },
    { part: 'Hands', function: 'Help you grab things', emoji: '🖐️', wrongParts: ['Feet', 'Head', 'Legs'] },
    { part: 'Feet', function: 'Help you walk and run', emoji: '🦶', wrongParts: ['Hands', 'Head', 'Arms'] },
  ],
  medium: [
    { question: 'How many bones does an adult have?', correct: '206', wrongs: ['100', '500', '50'] },
    { question: 'What pumps blood through your body?', correct: 'Heart', wrongs: ['Lungs', 'Brain', 'Stomach'] },
    { question: 'What helps you breathe?', correct: 'Lungs', wrongs: ['Heart', 'Brain', 'Liver'] },
    { question: 'What controls your body?', correct: 'Brain', wrongs: ['Heart', 'Stomach', 'Lungs'] },
    { question: 'How many teeth does an adult have?', correct: '32', wrongs: ['20', '50', '10'] },
  ],
  hard: [
    { question: 'What is the largest organ in the body?', correct: 'Skin', wrongs: ['Heart', 'Liver', 'Brain'] },
    { question: 'What carries oxygen in blood?', correct: 'Red blood cells', wrongs: ['White blood cells', 'Platelets', 'Plasma'] },
    { question: 'What is the smallest bone called?', correct: 'Stapes', wrongs: ['Femur', 'Tibia', 'Radius'] },
  ],
}

// Earth data
const earthData = {
  easy: [
    { question: 'What do we breathe?', correct: 'Air', wrongs: ['Water', 'Sand', 'Fire'] },
    { question: 'Where do fish live?', correct: 'In water', wrongs: ['In trees', 'In caves', 'In nests'] },
    { question: 'What falls from clouds?', correct: 'Rain', wrongs: ['Stars', 'Rocks', 'Leaves'] },
    { question: 'What is the big body of water called?', correct: 'Ocean', wrongs: ['River', 'Pond', 'Puddle'] },
    { question: 'What shines during the day?', correct: 'Sun', wrongs: ['Moon', 'Stars', 'Clouds'] },
    { question: 'What covers much of the Earth?', correct: 'Water', wrongs: ['Sand', 'Ice', 'Grass'] },
  ],
  medium: [
    { question: 'How many continents are there?', correct: '7', wrongs: ['5', '10', '3'] },
    { question: 'What is the biggest ocean?', correct: 'Pacific', wrongs: ['Atlantic', 'Indian', 'Arctic'] },
    { question: 'What causes earthquakes?', correct: 'Moving tectonic plates', wrongs: ['Heavy rain', 'Strong wind', 'Hot sun'] },
    { question: 'What is the water cycle?', correct: 'Evaporation, condensation, precipitation', wrongs: ['Only rain', 'Only evaporation', 'Only snow'] },
    { question: 'What layer protects us from the sun?', correct: 'Ozone layer', wrongs: ['Cloud layer', 'Dust layer', 'Air layer'] },
  ],
  hard: [
    { question: 'What are the layers of the Earth?', correct: 'Crust, mantle, core', wrongs: ['Crust, ocean, core', 'Soil, rock, lava', 'Sand, clay, rock'] },
    { question: 'What type of rock is formed by lava?', correct: 'Igneous', wrongs: ['Sedimentary', 'Metamorphic', 'Mineral'] },
    { question: 'What percentage of Earth is water?', correct: 'About 71%', wrongs: ['About 50%', 'About 90%', 'About 30%'] },
  ],
}

function makeChoices(correct, wrongs) {
  const options = shuffle([correct, ...wrongs])
  const labels = ['A', 'B', 'C', 'D']
  return options.map((opt, i) => ({
    label: labels[i],
    text: opt,
    isCorrect: opt === correct,
  }))
}

// Animals Generator
export function generateAnimals(difficulty, lang) {
  const data = animalsData[difficulty] || animalsData.easy
  const animal = randItem(data)

  let questionText, questionSpeech, correct, wrongs

  if (difficulty === 'easy') {
    // What sound does X make?
    const otherAnimals = data.filter(a => a.name !== animal.name)
    wrongs = shuffle(otherAnimals).slice(0, 3).map(a => a.sound)
    correct = animal.sound

    questionText = lang === 'fil'
      ? `${animal.emoji} Anong tunog ang ginagawa ng ${animal.name}?`
      : `${animal.emoji} What sound does a ${animal.name} make?`
    questionSpeech = questionText
  } else if (difficulty === 'medium') {
    // Where does X live?
    const otherAnimals = data.filter(a => a.name !== animal.name)
    wrongs = shuffle(otherAnimals).slice(0, 3).map(a => a.habitat)
    correct = animal.habitat

    questionText = lang === 'fil'
      ? `${animal.emoji} Saan nakatira ang ${animal.name}?`
      : `${animal.emoji} Where does a ${animal.name} live?`
    questionSpeech = questionText
  } else {
    // What is special about X?
    const otherAnimals = data.filter(a => a.name !== animal.name)
    wrongs = shuffle(otherAnimals).slice(0, 3).map(a => a.feature)
    correct = animal.feature

    questionText = lang === 'fil'
      ? `${animal.emoji} Ano ang kakaiba sa ${animal.name}?`
      : `${animal.emoji} What is special about a ${animal.name}?`
    questionSpeech = questionText
  }

  return {
    id: `animal-${animal.name}-${Date.now()}`,
    text: questionText,
    speech: questionSpeech,
    choices: makeChoices(correct, wrongs),
    correctAnswer: correct,
    subject: 'science',
    topic: 'animals',
  }
}

// Plants Generator
export function generatePlants(difficulty, lang) {
  if (difficulty === 'easy') {
    const part = randItem(plantsData.easy)
    const wrongs = part.wrongParts
    const correct = part.part

    const questionText = lang === 'fil'
      ? `${part.emoji} Aling bahagi ng halaman ang ${part.function.toLowerCase()}?`
      : `${part.emoji} Which part of a plant ${part.function.toLowerCase()}?`

    return {
      id: `plant-${part.part}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(correct, wrongs),
      correctAnswer: correct,
      subject: 'science',
      topic: 'plants',
    }
  }

  const data = difficulty === 'medium' ? plantsData.medium : plantsData.hard
  const item = randItem(data)

  return {
    id: `plant-${item.question.slice(0, 20)}-${Date.now()}`,
    text: `🌱 ${item.question}`,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'science',
    topic: 'plants',
  }
}

// Human Body Generator
export function generateHumanBody(difficulty, lang) {
  if (difficulty === 'easy') {
    const part = randItem(humanBodyData.easy)
    const wrongs = part.wrongParts
    const correct = part.part

    const questionText = lang === 'fil'
      ? `${part.emoji} Anong bahagi ng katawan ang ${part.function.toLowerCase()}?`
      : `${part.emoji} Which body part helps you ${part.function.replace('Help you ', '').toLowerCase()}?`

    return {
      id: `body-${part.part}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(correct, wrongs),
      correctAnswer: correct,
      subject: 'science',
      topic: 'humanBody',
    }
  }

  const data = difficulty === 'medium' ? humanBodyData.medium : humanBodyData.hard
  const item = randItem(data)

  return {
    id: `body-${item.question.slice(0, 20)}-${Date.now()}`,
    text: `🧍 ${item.question}`,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'science',
    topic: 'humanBody',
  }
}

// Earth Generator
export function generateEarth(difficulty, lang) {
  const data = earthData[difficulty] || earthData.easy
  const item = randItem(data)

  return {
    id: `earth-${item.question.slice(0, 20)}-${Date.now()}`,
    text: `🌎 ${item.question}`,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'science',
    topic: 'earth',
  }
}

export const scienceGenerators = {
  animals: generateAnimals,
  plants: generatePlants,
  humanBody: generateHumanBody,
  earth: generateEarth,
}
