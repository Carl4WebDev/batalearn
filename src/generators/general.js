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

function makeChoices(correct, wrongs) {
  const options = shuffle([correct, ...wrongs])
  const labels = ['A', 'B', 'C', 'D']
  return options.map((opt, i) => ({
    label: labels[i],
    text: opt,
    isCorrect: opt === correct,
  }))
}

// Colors data
const colorsData = {
  easy: [
    { color: 'Red', emoji: '🔴', examples: ['Apple', 'Fire truck', 'Rose'] },
    { color: 'Blue', emoji: '🔵', examples: ['Sky', 'Ocean', 'Blueberry'] },
    { color: 'Green', emoji: '🟢', examples: ['Grass', 'Tree', 'Frog'] },
    { color: 'Yellow', emoji: '🟡', examples: ['Sun', 'Banana', 'Star'] },
    { color: 'Orange', emoji: '🟠', examples: ['Orange fruit', 'Pumpkin', 'Carrot'] },
    { color: 'Purple', emoji: '🟣', examples: ['Grape', 'Eggplant', 'Lavender'] },
    { color: 'Pink', emoji: '💗', examples: ['Flamingo', 'Pig', 'Cotton candy'] },
    { color: 'Black', emoji: '⚫', examples: ['Night sky', 'Cat', 'Piano key'] },
    { color: 'White', emoji: '⚪', examples: ['Snow', 'Cloud', 'Milk'] },
    { color: 'Brown', emoji: '🟤', examples: ['Chocolate', 'Bear', 'Tree bark'] },
  ],
  medium: [
    { object: 'Grass', color: 'Green', wrongColors: ['Red', 'Blue', 'Yellow'] },
    { object: 'Sun', color: 'Yellow', wrongColors: ['Blue', 'Green', 'Purple'] },
    { object: 'Sky', color: 'Blue', wrongColors: ['Red', 'Green', 'Yellow'] },
    { object: 'Snow', color: 'White', wrongColors: ['Blue', 'Green', 'Red'] },
    { object: 'Pumpkin', color: 'Orange', wrongColors: ['Red', 'Green', 'Purple'] },
    { object: 'Banana', color: 'Yellow', wrongColors: ['Red', 'Green', 'Brown'] },
    { object: 'Strawberry', color: 'Red', wrongColors: ['Blue', 'Green', 'Yellow'] },
    { object: 'Ocean', color: 'Blue', wrongColors: ['Green', 'Red', 'Yellow'] },
  ],
  hard: [
    { question: 'What color do you get when you mix red and blue?', correct: 'Purple', wrongs: ['Green', 'Orange', 'Brown'] },
    { question: 'What color do you get when you mix red and yellow?', correct: 'Orange', wrongs: ['Purple', 'Green', 'Pink'] },
    { question: 'What color do you get when you mix blue and yellow?', correct: 'Green', wrongs: ['Purple', 'Orange', 'Brown'] },
    { question: 'What color do you get when you mix white and black?', correct: 'Gray', wrongs: ['Brown', 'Blue', 'Purple'] },
    { question: 'What color do you get when you mix red and white?', correct: 'Pink', wrongs: ['Purple', 'Orange', 'Peach'] },
  ],
}

// Shapes data
const shapesData = {
  easy: [
    { shape: 'Circle', emoji: '⭕', sides: 0, wrongShapes: ['Square', 'Triangle', 'Rectangle'] },
    { shape: 'Square', emoji: '⬜', sides: 4, wrongShapes: ['Circle', 'Triangle', 'Star'] },
    { shape: 'Triangle', emoji: '🔺', sides: 3, wrongShapes: ['Circle', 'Square', 'Rectangle'] },
    { shape: 'Rectangle', emoji: '▬', sides: 4, wrongShapes: ['Circle', 'Triangle', 'Star'] },
    { shape: 'Star', emoji: '⭐', sides: 5, wrongShapes: ['Circle', 'Square', 'Triangle'] },
    { shape: 'Heart', emoji: '❤️', sides: 0, wrongShapes: ['Circle', 'Star', 'Diamond'] },
    { shape: 'Diamond', emoji: '💎', sides: 4, wrongShapes: ['Circle', 'Triangle', 'Heart'] },
  ],
  medium: [
    { question: 'How many sides does a triangle have?', correct: '3', wrongs: ['4', '5', '2'] },
    { question: 'How many sides does a square have?', correct: '4', wrongs: ['3', '5', '6'] },
    { question: 'How many corners does a rectangle have?', correct: '4', wrongs: ['3', '5', '2'] },
    { question: 'What shape has no sides?', correct: 'Circle', wrongs: ['Square', 'Triangle', 'Rectangle'] },
    { question: 'What shape is a stop sign?', correct: 'Octagon', wrongs: ['Hexagon', 'Pentagon', 'Circle'] },
  ],
  hard: [
    { question: 'How many sides does a hexagon have?', correct: '6', wrongs: ['5', '7', '8'] },
    { question: 'How many sides does an octagon have?', correct: '8', wrongs: ['6', '7', '10'] },
    { question: 'What is a 3D circle called?', correct: 'Sphere', wrongs: ['Cube', 'Cylinder', 'Cone'] },
    { question: 'What is a 3D square called?', correct: 'Cube', wrongs: ['Sphere', 'Pyramid', 'Cylinder'] },
  ],
}

// Foods data
const foodsData = {
  easy: [
    { food: 'Apple', emoji: '🍎', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Dessert'] },
    { food: 'Banana', emoji: '🍌', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Carrot', emoji: '🥕', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Dessert'] },
    { food: 'Bread', emoji: '🍞', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Milk', emoji: '🥛', category: 'Dairy', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Egg', emoji: '🥚', category: 'Protein', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Rice', emoji: '🍚', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Chicken', emoji: '🍗', category: 'Meat', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
  ],
  medium: [
    { question: 'Which food is a fruit?', correct: 'Apple', wrongs: ['Carrot', 'Bread', 'Chicken'] },
    { question: 'Which food is a vegetable?', correct: 'Broccoli', wrongs: ['Banana', 'Milk', 'Rice'] },
    { question: 'Which food gives us strong bones?', correct: 'Milk', wrongs: ['Candy', 'Chips', 'Soda'] },
    { question: 'Which food is a good source of protein?', correct: 'Egg', wrongs: ['Cookie', 'Candy', 'Chips'] },
    { question: 'Which food grows underground?', correct: 'Potato', wrongs: ['Apple', 'Orange', 'Grape'] },
  ],
  hard: [
    { question: 'What vitamin does orange juice have lots of?', correct: 'Vitamin C', wrongs: ['Vitamin A', 'Vitamin D', 'Vitamin K'] },
    { question: 'What food group does cheese belong to?', correct: 'Dairy', wrongs: ['Meat', 'Grain', 'Fruit'] },
    { question: 'What mineral helps build strong bones?', correct: 'Calcium', wrongs: ['Iron', 'Zinc', 'Sodium'] },
  ],
}

// Community Helpers data
const communityData = {
  easy: [
    { helper: 'Doctor', emoji: '👨‍⚕️', action: 'sick people get better', wrongHelpers: ['Teacher', 'Firefighter', 'Chef'] },
    { helper: 'Teacher', emoji: '👩‍🏫', action: 'children learn new things', wrongHelpers: ['Doctor', 'Pilot', 'Farmer'] },
    { helper: 'Firefighter', emoji: '🧑‍🚒', action: 'put out fires', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Police Officer', emoji: '👮', action: 'keep us safe', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Chef', emoji: '👨‍🍳', action: 'cook delicious food', wrongHelpers: ['Doctor', 'Teacher', 'Pilot'] },
    { helper: 'Pilot', emoji: '👨‍✈️', action: 'fly airplanes', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Farmer', emoji: '👨‍🌾', action: 'grow food for us', wrongHelpers: ['Doctor', 'Pilot', 'Chef'] },
    { helper: 'Nurse', emoji: '👩‍⚕️', action: 'help sick people feel better', wrongHelpers: ['Teacher', 'Pilot', 'Chef'] },
  ],
  medium: [
    { question: 'Who teaches children at school?', correct: 'Teacher', wrongs: ['Doctor', 'Pilot', 'Chef'] },
    { question: 'Who puts out fires?', correct: 'Firefighter', wrongs: ['Doctor', 'Police', 'Chef'] },
    { question: 'Who flies airplanes?', correct: 'Pilot', wrongs: ['Doctor', 'Teacher', 'Farmer'] },
    { question: 'Who grows our food?', correct: 'Farmer', wrongs: ['Doctor', 'Teacher', 'Pilot'] },
    { question: 'Who delivers mail?', correct: 'Mail carrier', wrongs: ['Doctor', 'Teacher', 'Chef'] },
  ],
  hard: [
    { question: 'Who fixes broken pipes?', correct: 'Plumber', wrongs: ['Electrician', 'Carpenter', 'Mechanic'] },
    { question: 'Who fixes electrical problems?', correct: 'Electrician', wrongs: ['Plumber', 'Carpenter', 'Mechanic'] },
    { question: 'Who builds houses?', correct: 'Carpenter', wrongs: ['Plumber', 'Electrician', 'Mechanic'] },
    { question: 'Who fixes cars?', correct: 'Mechanic', wrongs: ['Plumber', 'Electrician', 'Carpenter'] },
  ],
}

// Colors Generator
export function generateColors(difficulty, lang) {
  if (difficulty === 'easy') {
    const item = randItem(colorsData.easy)
    const wrongs = colorsData.easy.filter(c => c.color !== item.color).slice(0, 3).map(c => c.color)

    const questionText = lang === 'fil'
      ? `${item.emoji} Anong kulay ito?`
      : `${item.emoji} What color is this?`

    return {
      id: `color-${item.color}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(item.color, wrongs),
      correctAnswer: item.color,
      subject: 'general',
      topic: 'colors',
    }
  }

  if (difficulty === 'medium') {
    const item = randItem(colorsData.medium)
    const questionText = lang === 'fil'
      ? `Anong kulay ang ${item.object}?`
      : `What color is ${item.object}?`

    return {
      id: `color-${item.object}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(item.color, item.wrongColors),
      correctAnswer: item.color,
      subject: 'general',
      topic: 'colors',
    }
  }

  const item = randItem(colorsData.hard)
  return {
    id: `color-mix-${Date.now()}`,
    text: item.question,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'general',
    topic: 'colors',
  }
}

// Shapes Generator
export function generateShapes(difficulty, lang) {
  if (difficulty === 'easy') {
    const item = randItem(shapesData.easy)
    const questionText = lang === 'fil'
      ? `${item.emoji} Anong hugis ito?`
      : `${item.emoji} What shape is this?`

    return {
      id: `shape-${item.shape}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(item.shape, item.wrongShapes),
      correctAnswer: item.shape,
      subject: 'general',
      topic: 'shapes',
    }
  }

  const data = difficulty === 'medium' ? shapesData.medium : shapesData.hard
  const item = randItem(data)

  return {
    id: `shape-${item.question.slice(0, 20)}-${Date.now()}`,
    text: `🔷 ${item.question}`,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'general',
    topic: 'shapes',
  }
}

// Foods Generator
export function generateFoods(difficulty, lang) {
  if (difficulty === 'easy') {
    const item = randItem(foodsData.easy)
    const questionText = lang === 'fil'
      ? `${item.emoji} Saang grupo ng pagkain ang ${item.food}?`
      : `${item.emoji} What food group is ${item.food}?`

    return {
      id: `food-${item.food}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(item.category, item.wrongCategories),
      correctAnswer: item.category,
      subject: 'general',
      topic: 'foods',
    }
  }

  const data = difficulty === 'medium' ? foodsData.medium : foodsData.hard
  const item = randItem(data)

  return {
    id: `food-${item.question.slice(0, 20)}-${Date.now()}`,
    text: `🍎 ${item.question}`,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'general',
    topic: 'foods',
  }
}

// Community Helpers Generator
export function generateCommunity(difficulty, lang) {
  if (difficulty === 'easy') {
    const item = randItem(communityData.easy)
    const questionText = lang === 'fil'
      ? `${item.emoji} Sino ang tumutulong para ${item.action}?`
      : `${item.emoji} Who helps ${item.action}?`

    return {
      id: `community-${item.helper}-${Date.now()}`,
      text: questionText,
      speech: questionText,
      choices: makeChoices(item.helper, item.wrongHelpers),
      correctAnswer: item.helper,
      subject: 'general',
      topic: 'community',
    }
  }

  const data = difficulty === 'medium' ? communityData.medium : communityData.hard
  const item = randItem(data)

  return {
    id: `community-${item.question.slice(0, 20)}-${Date.now()}`,
    text: `👷 ${item.question}`,
    speech: item.question,
    choices: makeChoices(item.correct, item.wrongs),
    correctAnswer: item.correct,
    subject: 'general',
    topic: 'community',
  }
}

export const generalGenerators = {
  colors: generateColors,
  shapes: generateShapes,
  foods: generateFoods,
  community: generateCommunity,
}
