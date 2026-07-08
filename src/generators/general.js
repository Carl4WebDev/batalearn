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

// Colors data - 50+ easy, 50+ medium, 10 hard
const colorsData = {
  easy: [
    { color: 'Red', emoji: '🔴' }, { color: 'Blue', emoji: '🔵' }, { color: 'Green', emoji: '🟢' },
    { color: 'Yellow', emoji: '🟡' }, { color: 'Orange', emoji: '🟠' }, { color: 'Purple', emoji: '🟣' },
    { color: 'Pink', emoji: '💗' }, { color: 'Black', emoji: '⚫' }, { color: 'White', emoji: '⚪' },
    { color: 'Brown', emoji: '🟤' }, { color: 'Gray', emoji: '🩶' }, { color: 'Gold', emoji: '🏆' },
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
    { object: 'Lemon', color: 'Yellow', wrongColors: ['Red', 'Green', 'Purple'] },
    { object: 'Cherry', color: 'Red', wrongColors: ['Blue', 'Yellow', 'Green'] },
    { object: 'Lime', color: 'Green', wrongColors: ['Red', 'Yellow', 'Purple'] },
    { object: 'Eggplant', color: 'Purple', wrongColors: ['Red', 'Green', 'Yellow'] },
    { object: 'Carrot', color: 'Orange', wrongColors: ['Red', 'Green', 'Purple'] },
    { object: 'Coal', color: 'Black', wrongColors: ['White', 'Brown', 'Gray'] },
    { object: 'Milk', color: 'White', wrongColors: ['Blue', 'Yellow', 'Red'] },
    { object: 'Chocolate', color: 'Brown', wrongColors: ['Red', 'White', 'Yellow'] },
    { object: 'Rose', color: 'Red', wrongColors: ['Blue', 'Yellow', 'Green'] },
    { object: 'Sunflower', color: 'Yellow', wrongColors: ['Red', 'Blue', 'Purple'] },
    { object: 'Blueberry', color: 'Blue', wrongColors: ['Red', 'Green', 'Yellow'] },
    { object: 'Cotton candy', color: 'Pink', wrongColors: ['Blue', 'Green', 'Yellow'] },
    { object: 'Penguin', color: 'Black', wrongColors: ['Brown', 'Gray', 'White'] },
    { object: 'Polar bear', color: 'White', wrongColors: ['Brown', 'Black', 'Gray'] },
    { object: 'Pig', color: 'Pink', wrongColors: ['Brown', 'White', 'Gray'] },
    { object: 'Frog', color: 'Green', wrongColors: ['Brown', 'Yellow', 'Red'] },
    { object: 'Orange fruit', color: 'Orange', wrongColors: ['Red', 'Yellow', 'Green'] },
    { object: 'Grape', color: 'Purple', wrongColors: ['Red', 'Green', 'Blue'] },
    { object: 'Watermelon rind', color: 'Green', wrongColors: ['Red', 'Yellow', 'Brown'] },
    { object: 'Raspberry', color: 'Red', wrongColors: ['Blue', 'Purple', 'Yellow'] },
    { object: 'Lavender', color: 'Purple', wrongColors: ['Blue', 'Pink', 'White'] },
    { object: 'Daisy', color: 'White', wrongColors: ['Red', 'Yellow', 'Pink'] },
    { object: 'Tomato', color: 'Red', wrongColors: ['Green', 'Yellow', 'Orange'] },
    { object: 'Cucumber', color: 'Green', wrongColors: ['Red', 'Yellow', 'Orange'] },
    { object: 'Peacock', color: 'Blue', wrongColors: ['Green', 'Red', 'Purple'] },
    { object: 'Fire truck', color: 'Red', wrongColors: ['Blue', 'Yellow', 'White'] },
    { object: 'School bus', color: 'Yellow', wrongColors: ['Red', 'Blue', 'Green'] },
    { object: 'Panda', color: 'Black', wrongColors: ['Brown', 'Gray', 'White'] },
    { object: 'Sand', color: 'Yellow', wrongColors: ['Brown', 'White', 'Orange'] },
    { object: 'Cotton', color: 'White', wrongColors: ['Blue', 'Pink', 'Yellow'] },
    { object: 'Rust', color: 'Brown', wrongColors: ['Red', 'Orange', 'Yellow'] },
    { object: 'Lily pad', color: 'Green', wrongColors: ['Red', 'Yellow', 'Blue'] },
    { object: 'Salmon', color: 'Pink', wrongColors: ['Red', 'Orange', 'White'] },
    { object: 'Robin egg', color: 'Blue', wrongColors: ['Green', 'White', 'Pink'] },
    { object: 'Peach', color: 'Orange', wrongColors: ['Red', 'Yellow', 'Pink'] },
    { object: 'Plum', color: 'Purple', wrongColors: ['Red', 'Blue', 'Brown'] },
    { object: 'Mint', color: 'Green', wrongColors: ['Blue', 'Yellow', 'White'] },
    { object: 'Pear', color: 'Green', wrongColors: ['Red', 'Yellow', 'Orange'] },
    { object: 'Avocado', color: 'Green', wrongColors: ['Brown', 'Yellow', 'Red'] },
    { object: 'Cranberry', color: 'Red', wrongColors: ['Blue', 'Purple', 'Pink'] },
    { object: 'Espresso', color: 'Brown', wrongColors: ['Black', 'Red', 'Yellow'] },
    { object: 'Coral', color: 'Pink', wrongColors: ['Red', 'Orange', 'Purple'] },
  ],
  hard: [
    { question: 'What color do you get when you mix red and blue?', correct: 'Purple', wrongs: ['Green', 'Orange', 'Brown'] },
    { question: 'What color do you get when you mix red and yellow?', correct: 'Orange', wrongs: ['Purple', 'Green', 'Pink'] },
    { question: 'What color do you get when you mix blue and yellow?', correct: 'Green', wrongs: ['Purple', 'Orange', 'Brown'] },
    { question: 'What color do you get when you mix white and black?', correct: 'Gray', wrongs: ['Brown', 'Blue', 'Purple'] },
    { question: 'What color do you get when you mix red and white?', correct: 'Pink', wrongs: ['Purple', 'Orange', 'Peach'] },
    { question: 'What color do you get when you mix blue and white?', correct: 'Light blue', wrongs: ['Purple', 'Green', 'Gray'] },
    { question: 'What color do you get when you mix yellow and red?', correct: 'Orange', wrongs: ['Green', 'Purple', 'Brown'] },
    { question: 'What color do you get when you mix green and yellow?', correct: 'Lime', wrongs: ['Blue', 'Orange', 'Brown'] },
    { question: 'What color do you get when you mix purple and white?', correct: 'Lavender', wrongs: ['Pink', 'Blue', 'Gray'] },
    { question: 'What color do you get when you mix black and white?', correct: 'Gray', wrongs: ['Brown', 'Blue', 'Silver'] },
    { question: 'What are the primary colors?', correct: 'Red, blue, yellow', wrongs: ['Green, orange, purple', 'Red, green, blue', 'Yellow, pink, brown'] },
    { question: 'What color is the sky on a clear day?', correct: 'Blue', wrongs: ['Green', 'Red', 'Yellow'] },
    { question: 'What color are most leaves?', correct: 'Green', wrongs: ['Red', 'Blue', 'Yellow'] },
    { question: 'What color is a stoplight\'s "go" signal?', correct: 'Green', wrongs: ['Red', 'Yellow', 'Blue'] },
    { question: 'What color is a stoplight\'s "stop" signal?', correct: 'Red', wrongs: ['Green', 'Yellow', 'Blue'] },
  ],
}

// Shapes data - 50+ easy, 20+ medium, 15+ hard
const shapesData = {
  easy: [
    { shape: 'Circle', emoji: '⭕', wrongShapes: ['Square', 'Triangle', 'Rectangle'] },
    { shape: 'Square', emoji: '⬜', wrongShapes: ['Circle', 'Triangle', 'Star'] },
    { shape: 'Triangle', emoji: '🔺', wrongShapes: ['Circle', 'Square', 'Rectangle'] },
    { shape: 'Rectangle', emoji: '▬', wrongShapes: ['Circle', 'Triangle', 'Star'] },
    { shape: 'Star', emoji: '⭐', wrongShapes: ['Circle', 'Square', 'Triangle'] },
    { shape: 'Heart', emoji: '❤️', wrongShapes: ['Circle', 'Star', 'Diamond'] },
    { shape: 'Diamond', emoji: '💎', wrongShapes: ['Circle', 'Triangle', 'Heart'] },
    { shape: 'Oval', emoji: '🥚', wrongShapes: ['Circle', 'Square', 'Rectangle'] },
    { shape: 'Crescent', emoji: '🌙', wrongShapes: ['Circle', 'Star', 'Heart'] },
    { shape: 'Arrow', emoji: '➡️', wrongShapes: ['Triangle', 'Star', 'Diamond'] },
    { shape: 'Cross', emoji: '➕', wrongShapes: ['Star', 'Diamond', 'Heart'] },
    { shape: 'Pentagon', emoji: '⬠', wrongShapes: ['Hexagon', 'Square', 'Triangle'] },
    { shape: 'Hexagon', emoji: '⬡', wrongShapes: ['Pentagon', 'Circle', 'Square'] },
    { shape: 'Octagon', emoji: '🛑', wrongShapes: ['Hexagon', 'Pentagon', 'Circle'] },
    { shape: 'Semicircle', emoji: '🌗', wrongShapes: ['Circle', 'Oval', 'Crescent'] },
  ],
  medium: [
    { question: 'How many sides does a triangle have?', correct: '3', wrongs: ['4', '5', '2'] },
    { question: 'How many sides does a square have?', correct: '4', wrongs: ['3', '5', '6'] },
    { question: 'How many corners does a rectangle have?', correct: '4', wrongs: ['3', '5', '2'] },
    { question: 'What shape has no sides?', correct: 'Circle', wrongs: ['Square', 'Triangle', 'Rectangle'] },
    { question: 'What shape is a stop sign?', correct: 'Octagon', wrongs: ['Hexagon', 'Pentagon', 'Circle'] },
    { question: 'How many sides does a pentagon have?', correct: '5', wrongs: ['4', '6', '3'] },
    { question: 'How many sides does a hexagon have?', correct: '6', wrongs: ['5', '7', '4'] },
    { question: 'What shape is a ball?', correct: 'Sphere', wrongs: ['Cube', 'Cylinder', 'Cone'] },
    { question: 'What shape is a dice?', correct: 'Cube', wrongs: ['Sphere', 'Cylinder', 'Pyramid'] },
    { question: 'What shape is a can?', correct: 'Cylinder', wrongs: ['Cube', 'Sphere', 'Cone'] },
    { question: 'What shape is a party hat?', correct: 'Cone', wrongs: ['Cylinder', 'Cube', 'Sphere'] },
    { question: 'What shape is a slice of pizza?', correct: 'Triangle', wrongs: ['Square', 'Circle', 'Rectangle'] },
    { question: 'What shape is a door?', correct: 'Rectangle', wrongs: ['Square', 'Circle', 'Triangle'] },
    { question: 'What shape is a window?', correct: 'Square', wrongs: ['Circle', 'Triangle', 'Star'] },
    { question: 'What shape is a coin?', correct: 'Circle', wrongs: ['Square', 'Triangle', 'Star'] },
    { question: 'What shape is a book cover?', correct: 'Rectangle', wrongs: ['Circle', 'Triangle', 'Square'] },
    { question: 'What shape is a kites usually?', correct: 'Diamond', wrongs: ['Circle', 'Square', 'Triangle'] },
    { question: 'How many sides does an octagon have?', correct: '8', wrongs: ['6', '7', '10'] },
    { question: 'What shape has 3 sides?', correct: 'Triangle', wrongs: ['Square', 'Rectangle', 'Pentagon'] },
    { question: 'What shape has 4 equal sides?', correct: 'Square', wrongs: ['Rectangle', 'Triangle', 'Rhombus'] },
  ],
  hard: [
    { question: 'How many sides does a hexagon have?', correct: '6', wrongs: ['5', '7', '8'] },
    { question: 'How many sides does an octagon have?', correct: '8', wrongs: ['6', '7', '10'] },
    { question: 'What is a 3D circle called?', correct: 'Sphere', wrongs: ['Cube', 'Cylinder', 'Cone'] },
    { question: 'What is a 3D square called?', correct: 'Cube', wrongs: ['Sphere', 'Pyramid', 'Cylinder'] },
    { question: 'What shape is a pyramid?', correct: 'Triangle', wrongs: ['Square', 'Circle', 'Rectangle'] },
    { question: 'How many faces does a cube have?', correct: '6', wrongs: ['4', '8', '5'] },
    { question: 'What is a shape with all equal sides called?', correct: 'Regular', wrongs: ['Irregular', 'Odd', 'Even'] },
    { question: 'How many vertices does a triangle have?', correct: '3', wrongs: ['4', '2', '5'] },
    { question: 'What shape has 10 sides?', correct: 'Decagon', wrongs: ['Nonagon', 'Octagon', 'Heptagon'] },
    { question: 'What shape has 7 sides?', correct: 'Heptagon', wrongs: ['Hexagon', 'Octagon', 'Nonagon'] },
    { question: 'What shape has 9 sides?', correct: 'Nonagon', wrongs: ['Octagon', 'Decagon', 'Heptagon'] },
    { question: 'How many edges does a cube have?', correct: '12', wrongs: ['8', '6', '10'] },
    { question: 'What is half a circle called?', correct: 'Semicircle', wrongs: ['Quarter', 'Third', 'Arc'] },
    { question: 'What 3D shape has a circular base and a point?', correct: 'Cone', wrongs: ['Cylinder', 'Sphere', 'Cube'] },
    { question: 'What 3D shape has two circular bases?', correct: 'Cylinder', wrongs: ['Cone', 'Sphere', 'Prism'] },
  ],
}

// Foods data - 50+ easy, 25+ medium, 15+ hard
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
    { food: 'Broccoli', emoji: '🥦', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Dessert'] },
    { food: 'Cheese', emoji: '🧀', category: 'Dairy', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Fish', emoji: '🐟', category: 'Protein', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Grape', emoji: '🍇', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Strawberry', emoji: '🍓', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Watermelon', emoji: '🍉', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Corn', emoji: '🌽', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Dessert'] },
    { food: 'Potato', emoji: '🥔', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Dessert'] },
    { food: 'Tomato', emoji: '🍅', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Dessert'] },
    { food: 'Pizza', emoji: '🍕', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Dessert'] },
    { food: 'Cookie', emoji: '🍪', category: 'Dessert', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Cake', emoji: '🎂', category: 'Dessert', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Ice cream', emoji: '🍦', category: 'Dessert', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Yogurt', emoji: '🥛', category: 'Dairy', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Steak', emoji: '🥩', category: 'Meat', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Shrimp', emoji: '🦐', category: 'Protein', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Peanut butter', emoji: '🥜', category: 'Protein', wrongCategories: ['Fruit', 'Vegetable', 'Dessert'] },
    { food: 'Pasta', emoji: '🍝', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Orange', emoji: '🍊', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Peach', emoji: '🍑', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Cherry', emoji: '🍒', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Lemon', emoji: '🍋', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Mango', emoji: '🥭', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Pineapple', emoji: '🍍', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Coconut', emoji: '🥥', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Kiwi', emoji: '🥝', category: 'Fruit', wrongCategories: ['Vegetable', 'Meat', 'Grain'] },
    { food: 'Peas', emoji: '🟢', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Lettuce', emoji: '🥬', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Onion', emoji: '🧅', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Pepper', emoji: '🌶️', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Cucumber', emoji: '🥒', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Mushroom', emoji: '🍄', category: 'Vegetable', wrongCategories: ['Fruit', 'Meat', 'Grain'] },
    { food: 'Sausage', emoji: '🌭', category: 'Meat', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Bacon', emoji: '🥓', category: 'Meat', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Turkey', emoji: '🦃', category: 'Meat', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Ham', emoji: '🍖', category: 'Meat', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Tuna', emoji: '🐟', category: 'Protein', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Bean', emoji: '🫘', category: 'Protein', wrongCategories: ['Fruit', 'Vegetable', 'Grain'] },
    { food: 'Honey', emoji: '🍯', category: 'Dessert', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Jam', emoji: '🍓', category: 'Dessert', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Cereal', emoji: '🥣', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Oatmeal', emoji: '🥣', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
    { food: 'Tortilla', emoji: '🫓', category: 'Grain', wrongCategories: ['Fruit', 'Vegetable', 'Meat'] },
  ],
  medium: [
    { question: 'Which food is a fruit?', correct: 'Apple', wrongs: ['Carrot', 'Bread', 'Chicken'] },
    { question: 'Which food is a vegetable?', correct: 'Broccoli', wrongs: ['Banana', 'Milk', 'Rice'] },
    { question: 'Which food gives us strong bones?', correct: 'Milk', wrongs: ['Candy', 'Chips', 'Soda'] },
    { question: 'Which food is a good source of protein?', correct: 'Egg', wrongs: ['Cookie', 'Candy', 'Chips'] },
    { question: 'Which food grows underground?', correct: 'Potato', wrongs: ['Apple', 'Orange', 'Grape'] },
    { question: 'Which food is a dairy product?', correct: 'Cheese', wrongs: ['Apple', 'Bread', 'Chicken'] },
    { question: 'Which food is a grain?', correct: 'Rice', wrongs: ['Apple', 'Carrot', 'Milk'] },
    { question: 'Which food is a meat?', correct: 'Chicken', wrongs: ['Apple', 'Bread', 'Rice'] },
    { question: 'Which food is a dessert?', correct: 'Cake', wrongs: ['Apple', 'Bread', 'Rice'] },
    { question: 'Which food is a berry?', correct: 'Strawberry', wrongs: ['Apple', 'Banana', 'Orange'] },
    { question: 'Which food is a citrus fruit?', correct: 'Orange', wrongs: ['Apple', 'Banana', 'Grape'] },
    { question: 'Which food is a root vegetable?', correct: 'Carrot', wrongs: ['Apple', 'Lettuce', 'Broccoli'] },
    { question: 'Which food is a leafy green?', correct: 'Lettuce', wrongs: ['Apple', 'Carrot', 'Potato'] },
    { question: 'Which food comes from the ocean?', correct: 'Fish', wrongs: ['Chicken', 'Beef', 'Pork'] },
    { question: 'Which food is a nut?', correct: 'Peanut', wrongs: ['Apple', 'Carrot', 'Bread'] },
    { question: 'Which food is a legume?', correct: 'Bean', wrongs: ['Apple', 'Carrot', 'Bread'] },
    { question: 'Which food is a tropical fruit?', correct: 'Mango', wrongs: ['Apple', 'Grape', 'Strawberry'] },
    { question: 'Which food is a stone fruit?', correct: 'Peach', wrongs: ['Apple', 'Banana', 'Grape'] },
    { question: 'Which food is a melon?', correct: 'Watermelon', wrongs: ['Apple', 'Banana', 'Grape'] },
    { question: 'Which food is a cruciferous vegetable?', correct: 'Broccoli', wrongs: ['Apple', 'Carrot', 'Potato'] },
    { question: 'Which food is a squash?', correct: 'Pumpkin', wrongs: ['Apple', 'Carrot', 'Potato'] },
    { question: 'Which food is an allium?', correct: 'Onion', wrongs: ['Apple', 'Carrot', 'Potato'] },
    { question: 'Which food is a nightshade?', correct: 'Tomato', wrongs: ['Apple', 'Carrot', 'Potato'] },
    { question: 'Which food is a pome fruit?', correct: 'Apple', wrongs: ['Banana', 'Grape', 'Strawberry'] },
    { question: 'Which food is a drupe?', correct: 'Cherry', wrongs: ['Apple', 'Banana', 'Grape'] },
  ],
  hard: [
    { question: 'What vitamin does orange juice have lots of?', correct: 'Vitamin C', wrongs: ['Vitamin A', 'Vitamin D', 'Vitamin K'] },
    { question: 'What food group does cheese belong to?', correct: 'Dairy', wrongs: ['Meat', 'Grain', 'Fruit'] },
    { question: 'What mineral helps build strong bones?', correct: 'Calcium', wrongs: ['Iron', 'Zinc', 'Sodium'] },
    { question: 'What vitamin helps you see in the dark?', correct: 'Vitamin A', wrongs: ['Vitamin C', 'Vitamin D', 'Vitamin K'] },
    { question: 'What mineral helps carry oxygen in blood?', correct: 'Iron', wrongs: ['Calcium', 'Zinc', 'Sodium'] },
    { question: 'What vitamin does sunlight give you?', correct: 'Vitamin D', wrongs: ['Vitamin A', 'Vitamin C', 'Vitamin K'] },
    { question: 'What food group provides energy?', correct: 'Carbohydrates', wrongs: ['Proteins', 'Fats', 'Vitamins'] },
    { question: 'What food group builds muscles?', correct: 'Proteins', wrongs: ['Carbohydrates', 'Fats', 'Vitamins'] },
    { question: 'What food group keeps you warm?', correct: 'Fats', wrongs: ['Carbohydrates', 'Proteins', 'Vitamins'] },
    { question: 'What is the main nutrient in bread?', correct: 'Carbohydrates', wrongs: ['Protein', 'Fat', 'Vitamin'] },
    { question: 'What is the main nutrient in meat?', correct: 'Protein', wrongs: ['Carbohydrates', 'Fat', 'Vitamin'] },
    { question: 'What is the main nutrient in butter?', correct: 'Fat', wrongs: ['Carbohydrates', 'Protein', 'Vitamin'] },
    { question: 'What vitamin is in carrots?', correct: 'Vitamin A', wrongs: ['Vitamin C', 'Vitamin D', 'Vitamin K'] },
    { question: 'What vitamin is in bananas?', correct: 'Vitamin B6', wrongs: ['Vitamin A', 'Vitamin C', 'Vitamin D'] },
    { question: 'What mineral is in bananas?', correct: 'Potassium', wrongs: ['Calcium', 'Iron', 'Zinc'] },
  ],
}

// Community Helpers data - 50+ easy, 30+ medium, 20+ hard
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
    { helper: 'Dentist', emoji: '🦷', action: 'take care of our teeth', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Veterinarian', emoji: '🐾', action: 'take care of sick animals', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Mail carrier', emoji: '📬', action: 'deliver letters and packages', wrongHelpers: ['Doctor', 'Teacher', 'Pilot'] },
    { helper: 'Bus driver', emoji: '🚌', action: 'drive children to school', wrongHelpers: ['Pilot', 'Teacher', 'Chef'] },
    { helper: 'Librarian', emoji: '📚', action: 'help us find books', wrongHelpers: ['Teacher', 'Doctor', 'Chef'] },
    { helper: 'Astronaut', emoji: '👨‍🚀', action: 'travel to space', wrongHelpers: ['Pilot', 'Doctor', 'Teacher'] },
    { helper: 'Scientist', emoji: '👨‍🔬', action: 'discover new things', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Artist', emoji: '🎨', action: 'create beautiful paintings', wrongHelpers: ['Teacher', 'Doctor', 'Chef'] },
    { helper: 'Musician', emoji: '🎵', action: 'play wonderful music', wrongHelpers: ['Teacher', 'Doctor', 'Chef'] },
    { helper: 'Baker', emoji: '🥖', action: 'bake fresh bread and cakes', wrongHelpers: ['Chef', 'Doctor', 'Teacher'] },
    { helper: 'Carpenter', emoji: '🔨', action: 'build and fix things with wood', wrongHelpers: ['Plumber', 'Doctor', 'Teacher'] },
    { helper: 'Plumber', emoji: '🔧', action: 'fix pipes and water problems', wrongHelpers: ['Carpenter', 'Doctor', 'Teacher'] },
    { helper: 'Electrician', emoji: '💡', action: 'fix electrical problems', wrongHelpers: ['Plumber', 'Doctor', 'Teacher'] },
    { helper: 'Mechanic', emoji: '🚗', action: 'fix cars and trucks', wrongHelpers: ['Plumber', 'Doctor', 'Teacher'] },
    { helper: 'Barber', emoji: '💇', action: 'cut and style hair', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Photographer', emoji: '📸', action: 'take beautiful photos', wrongHelpers: ['Artist', 'Doctor', 'Teacher'] },
    { helper: 'Construction worker', emoji: '👷', action: 'build houses and buildings', wrongHelpers: ['Carpenter', 'Doctor', 'Teacher'] },
    { helper: 'Soldier', emoji: '💂', action: 'protect our country', wrongHelpers: ['Police', 'Doctor', 'Teacher'] },
    { helper: 'Sailor', emoji: '⚓', action: 'sail ships on the ocean', wrongHelpers: ['Pilot', 'Doctor', 'Teacher'] },
    { helper: 'Zookeeper', emoji: '🦁', action: 'take care of zoo animals', wrongHelpers: ['Veterinarian', 'Doctor', 'Teacher'] },
    { helper: 'Lifeguard', emoji: '🏖️', action: 'keep swimmers safe', wrongHelpers: ['Doctor', 'Teacher', 'Police'] },
    { helper: 'Judge', emoji: '⚖️', action: 'make sure laws are followed', wrongHelpers: ['Police', 'Doctor', 'Teacher'] },
    { helper: 'Reporter', emoji: '📰', action: 'tell us the news', wrongHelpers: ['Teacher', 'Doctor', 'Librarian'] },
    { helper: 'Dancer', emoji: '💃', action: 'perform beautiful dances', wrongHelpers: ['Artist', 'Musician', 'Teacher'] },
    { helper: 'Actor', emoji: '🎭', action: 'perform in movies and plays', wrongHelpers: ['Dancer', 'Musician', 'Teacher'] },
    { helper: 'Writer', emoji: '✍️', action: 'write stories and books', wrongHelpers: ['Teacher', 'Librarian', 'Doctor'] },
    { helper: 'Detective', emoji: '🔍', action: 'solve mysteries and crimes', wrongHelpers: ['Police', 'Doctor', 'Teacher'] },
    { helper: 'Architect', emoji: '🏛️', action: 'design buildings', wrongHelpers: ['Carpenter', 'Doctor', 'Teacher'] },
    { helper: 'Fashion designer', emoji: '👗', action: 'design beautiful clothes', wrongHelpers: ['Artist', 'Doctor', 'Teacher'] },
    { helper: 'Janitor', emoji: '🧹', action: 'keep buildings clean', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Crossing guard', emoji: '🛑', action: 'help children cross the street safely', wrongHelpers: ['Police', 'Doctor', 'Teacher'] },
    { helper: 'Coach', emoji: '🏅', action: 'teach us how to play sports', wrongHelpers: ['Teacher', 'Doctor', 'Chef'] },
    { helper: 'Referee', emoji: '🏈', action: 'make sure games are played fairly', wrongHelpers: ['Coach', 'Doctor', 'Teacher'] },
    { helper: 'Tour guide', emoji: '🗺️', action: 'show visitors around places', wrongHelpers: ['Teacher', 'Doctor', 'Pilot'] },
    { helper: 'Flight attendant', emoji: '✈️', action: 'take care of passengers on planes', wrongHelpers: ['Pilot', 'Doctor', 'Teacher'] },
    { helper: 'Waiter', emoji: '🍽️', action: 'serve food at restaurants', wrongHelpers: ['Chef', 'Doctor', 'Teacher'] },
    { helper: 'Cashier', emoji: '💰', action: 'help us pay for things at stores', wrongHelpers: ['Doctor', 'Teacher', 'Chef'] },
    { helper: 'Security guard', emoji: '🛡️', action: 'keep people and places safe', wrongHelpers: ['Police', 'Doctor', 'Teacher'] },
    { helper: 'Tailor', emoji: '🧵', action: 'make and fix clothes', wrongHelpers: ['Fashion designer', 'Doctor', 'Teacher'] },
    { helper: 'Florist', emoji: '💐', action: 'arrange and sell flowers', wrongHelpers: ['Gardener', 'Doctor', 'Teacher'] },
    { helper: 'Gardener', emoji: '🌷', action: 'take care of gardens and plants', wrongHelpers: ['Farmer', 'Doctor', 'Teacher'] },
    { helper: 'Painter', emoji: '🎨', action: 'paint houses and buildings', wrongHelpers: ['Artist', 'Doctor', 'Teacher'] },
    { helper: 'Window cleaner', emoji: '🪟', action: 'clean windows on buildings', wrongHelpers: ['Janitor', 'Doctor', 'Teacher'] },
  ],
  medium: [
    { question: 'Who teaches children at school?', correct: 'Teacher', wrongs: ['Doctor', 'Pilot', 'Chef'] },
    { question: 'Who puts out fires?', correct: 'Firefighter', wrongs: ['Doctor', 'Police', 'Chef'] },
    { question: 'Who flies airplanes?', correct: 'Pilot', wrongs: ['Doctor', 'Teacher', 'Farmer'] },
    { question: 'Who grows our food?', correct: 'Farmer', wrongs: ['Doctor', 'Teacher', 'Pilot'] },
    { question: 'Who delivers mail?', correct: 'Mail carrier', wrongs: ['Doctor', 'Teacher', 'Chef'] },
    { question: 'Who takes care of sick animals?', correct: 'Veterinarian', wrongs: ['Doctor', 'Teacher', 'Nurse'] },
    { question: 'Who takes care of our teeth?', correct: 'Dentist', wrongs: ['Doctor', 'Teacher', 'Nurse'] },
    { question: 'Who helps us find books?', correct: 'Librarian', wrongs: ['Teacher', 'Doctor', 'Chef'] },
    { question: 'Who bakes bread and cakes?', correct: 'Baker', wrongs: ['Chef', 'Doctor', 'Teacher'] },
    { question: 'Who fixes cars?', correct: 'Mechanic', wrongs: ['Plumber', 'Doctor', 'Teacher'] },
    { question: 'Who fixes pipes?', correct: 'Plumber', wrongs: ['Electrician', 'Doctor', 'Teacher'] },
    { question: 'Who fixes electrical problems?', correct: 'Electrician', wrongs: ['Plumber', 'Doctor', 'Teacher'] },
    { question: 'Who builds houses?', correct: 'Carpenter', wrongs: ['Plumber', 'Doctor', 'Teacher'] },
    { question: 'Who cuts hair?', correct: 'Barber', wrongs: ['Doctor', 'Teacher', 'Chef'] },
    { question: 'Who takes photos?', correct: 'Photographer', wrongs: ['Artist', 'Doctor', 'Teacher'] },
    { question: 'Who keeps swimmers safe?', correct: 'Lifeguard', wrongs: ['Doctor', 'Teacher', 'Police'] },
    { question: 'Who makes sure laws are followed?', correct: 'Judge', wrongs: ['Police', 'Doctor', 'Teacher'] },
    { question: 'Who tells us the news?', correct: 'Reporter', wrongs: ['Teacher', 'Doctor', 'Librarian'] },
    { question: 'Who performs in movies?', correct: 'Actor', wrongs: ['Dancer', 'Musician', 'Teacher'] },
    { question: 'Who writes stories?', correct: 'Writer', wrongs: ['Teacher', 'Librarian', 'Doctor'] },
    { question: 'Who solves mysteries?', correct: 'Detective', wrongs: ['Police', 'Doctor', 'Teacher'] },
    { question: 'Who designs buildings?', correct: 'Architect', wrongs: ['Carpenter', 'Doctor', 'Teacher'] },
    { question: 'Who designs clothes?', correct: 'Fashion designer', wrongs: ['Artist', 'Doctor', 'Teacher'] },
    { question: 'Who keeps buildings clean?', correct: 'Janitor', wrongs: ['Doctor', 'Teacher', 'Chef'] },
    { question: 'Who helps children cross the street?', correct: 'Crossing guard', wrongs: ['Police', 'Doctor', 'Teacher'] },
    { question: 'Who teaches sports?', correct: 'Coach', wrongs: ['Teacher', 'Doctor', 'Chef'] },
    { question: 'Who makes sure games are fair?', correct: 'Referee', wrongs: ['Coach', 'Doctor', 'Teacher'] },
    { question: 'Who shows visitors around?', correct: 'Tour guide', wrongs: ['Teacher', 'Doctor', 'Pilot'] },
    { question: 'Who serves food at restaurants?', correct: 'Waiter', wrongs: ['Chef', 'Doctor', 'Teacher'] },
    { question: 'Who helps us pay at stores?', correct: 'Cashier', wrongs: ['Doctor', 'Teacher', 'Chef'] },
  ],
  hard: [
    { question: 'Who fixes broken pipes?', correct: 'Plumber', wrongs: ['Electrician', 'Carpenter', 'Mechanic'] },
    { question: 'Who fixes electrical problems?', correct: 'Electrician', wrongs: ['Plumber', 'Carpenter', 'Mechanic'] },
    { question: 'Who builds houses?', correct: 'Carpenter', wrongs: ['Plumber', 'Electrician', 'Mechanic'] },
    { question: 'Who fixes cars?', correct: 'Mechanic', wrongs: ['Plumber', 'Electrician', 'Carpenter'] },
    { question: 'Who designs buildings?', correct: 'Architect', wrongs: ['Carpenter', 'Plumber', 'Electrician'] },
    { question: 'Who studies stars and planets?', correct: 'Astronomer', wrongs: ['Scientist', 'Astronaut', 'Doctor'] },
    { question: 'Who studies rocks and fossils?', correct: 'Geologist', wrongs: ['Scientist', 'Archaeologist', 'Doctor'] },
    { question: 'Who studies ancient civilizations?', correct: 'Archaeologist', wrongs: ['Historian', 'Geologist', 'Scientist'] },
    { question: 'Who studies plants?', correct: 'Botanist', wrongs: ['Biologist', 'Zoologist', 'Doctor'] },
    { question: 'Who studies animals?', correct: 'Zoologist', wrongs: ['Botanist', 'Biologist', 'Doctor'] },
    { question: 'Who makes maps?', correct: 'Cartographer', wrongs: ['Geologist', 'Explorer', 'Architect'] },
    { question: 'Who makes laws?', correct: 'Lawmaker', wrongs: ['Judge', 'Lawyer', 'Police'] },
    { question: 'Who defends people in court?', correct: 'Lawyer', wrongs: ['Judge', 'Police', 'Detective'] },
    { question: 'Who studies the weather?', correct: 'Meteorologist', wrongs: ['Scientist', 'Geologist', 'Astronomer'] },
    { question: 'Who makes medicines?', correct: 'Pharmacist', wrongs: ['Doctor', 'Nurse', 'Scientist'] },
    { question: 'Who fixes teeth?', correct: 'Dentist', wrongs: ['Doctor', 'Nurse', 'Pharmacist'] },
    { question: 'Who delivers babies?', correct: 'Obstetrician', wrongs: ['Doctor', 'Nurse', 'Midwife'] },
    { question: 'Who takes X-rays?', correct: 'Radiologist', wrongs: ['Doctor', 'Nurse', 'Technician'] },
    { question: 'Who makes prosthetic limbs?', correct: 'Prosthetist', wrongs: ['Doctor', 'Engineer', 'Technician'] },
    { question: 'Who designs video games?', correct: 'Game designer', wrongs: ['Programmer', 'Artist', 'Writer'] },
    { question: 'Who writes computer programs?', correct: 'Programmer', wrongs: ['Game designer', 'Artist', 'Writer'] },
    { question: 'Who makes animated movies?', correct: 'Animator', wrongs: ['Artist', 'Director', 'Writer'] },
    { question: 'Who directs movies?', correct: 'Director', wrongs: ['Actor', 'Producer', 'Writer'] },
    { question: 'Who produces music?', correct: 'Music producer', wrongs: ['Musician', 'Singer', 'DJ'] },
    { question: 'Who styles celebrities?', correct: 'Stylist', wrongs: ['Fashion designer', 'Barber', 'Tailor'] },
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
    const speechText = lang === 'fil' ? 'Anong kulay ito?' : 'What color is this?'

    return {
      id: `color-${item.color}-${Date.now()}`,
      text: questionText,
      speech: speechText,
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
    const speechText = lang === 'fil' ? 'Anong hugis ito?' : 'What shape is this?'

    return {
      id: `shape-${item.shape}-${Date.now()}`,
      text: questionText,
      speech: speechText,
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
    const speechText = lang === 'fil'
      ? `Saang grupo ng pagkain ang ${item.food}?`
      : `What food group is ${item.food}?`

    return {
      id: `food-${item.food}-${Date.now()}`,
      text: questionText,
      speech: speechText,
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
    const speechText = lang === 'fil'
      ? `Sino ang tumutulong para ${item.action}?`
      : `Who helps ${item.action}?`

    return {
      id: `community-${item.helper}-${Date.now()}`,
      text: questionText,
      speech: speechText,
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
