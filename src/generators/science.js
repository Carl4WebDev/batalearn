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

// Animals data - 50+ easy, 50+ medium, 50+ hard
const animalsData = {
  easy: [
    { name: 'Cat', sound: 'Meow', habitat: 'House' },
    { name: 'Dog', sound: 'Bark', habitat: 'House' },
    { name: 'Fish', sound: 'Blub', habitat: 'Water' },
    { name: 'Bird', sound: 'Tweet', habitat: 'Sky' },
    { name: 'Cow', sound: 'Moo', habitat: 'Farm' },
    { name: 'Duck', sound: 'Quack', habitat: 'Pond' },
    { name: 'Pig', sound: 'Oink', habitat: 'Farm' },
    { name: 'Hen', sound: 'Cluck', habitat: 'Farm' },
    { name: 'Sheep', sound: 'Baa', habitat: 'Farm' },
    { name: 'Horse', sound: 'Neigh', habitat: 'Farm' },
    { name: 'Rooster', sound: 'Cock-a-doodle-doo', habitat: 'Farm' },
    { name: 'Goat', sound: 'Bleat', habitat: 'Farm' },
    { name: 'Donkey', sound: 'Hee-haw', habitat: 'Farm' },
    { name: 'Turkey', sound: 'Gobble', habitat: 'Farm' },
    { name: 'Frog', sound: 'Ribbit', habitat: 'Pond' },
    { name: 'Owl', sound: 'Hoot', habitat: 'Forest' },
    { name: 'Wolf', sound: 'Howl', habitat: 'Forest' },
    { name: 'Snake', sound: 'Hiss', habitat: 'Forest' },
    { name: 'Bee', sound: 'Buzz', habitat: 'Garden' },
    { name: 'Cricket', sound: 'Chirp', habitat: 'Garden' },
    { name: 'Mouse', sound: 'Squeak', habitat: 'House' },
    { name: 'Lion', sound: 'Roar', habitat: 'Africa' },
    { name: 'Elephant', sound: 'Trumpet', habitat: 'Africa' },
    { name: 'Monkey', sound: 'Ooh ooh', habitat: 'Jungle' },
    { name: 'Whale', sound: 'Song', habitat: 'Ocean' },
    { name: 'Dolphin', sound: 'Click', habitat: 'Ocean' },
    { name: 'Seal', sound: 'Bark', habitat: 'Ocean' },
    { name: 'Penguin', sound: 'Honk', habitat: 'Antarctica' },
    { name: 'Bear', sound: 'Growl', habitat: 'Forest' },
    { name: 'Tiger', sound: 'Growl', habitat: 'Jungle' },
    { name: 'Parrot', sound: 'Squawk', habitat: 'Jungle' },
    { name: 'Crow', sound: 'Caw', habitat: 'City' },
    { name: 'Pigeon', sound: 'Coo', habitat: 'City' },
    { name: 'Squirrel', sound: 'Chatter', habitat: 'Park' },
    { name: 'Rabbit', sound: 'Thump', habitat: 'Garden' },
    { name: 'Chicken', sound: 'Bawk', habitat: 'Farm' },
    { name: 'Goose', sound: 'Honk', habitat: 'Pond' },
    { name: 'Peacock', sound: 'Scream', habitat: 'Zoo' },
    { name: 'Bat', sound: 'Screech', habitat: 'Cave' },
    { name: 'Mosquito', sound: 'Buzz', habitat: 'Everywhere' },
    { name: 'Fly', sound: 'Buzz', habitat: 'Everywhere' },
    { name: 'Grasshopper', sound: 'Chirp', habitat: 'Field' },
    { name: 'Crow', sound: 'Caw', habitat: 'Field' },
    { name: 'Woodpecker', sound: 'Peck', habitat: 'Forest' },
    { name: 'Robin', sound: 'Chirp', habitat: 'Garden' },
    { name: 'Cuckoo', sound: 'Cuckoo', habitat: 'Forest' },
    { name: 'Kitten', sound: 'Mew', habitat: 'House' },
    { name: 'Puppy', sound: 'Yip', habitat: 'House' },
    { name: 'Calf', sound: 'Bawl', habitat: 'Farm' },
    { name: 'Lamb', sound: 'Baa', habitat: 'Farm' },
  ],
  medium: [
    { name: 'Elephant', habitat: 'Africa', feature: 'trunk' },
    { name: 'Lion', habitat: 'Africa', feature: 'mane' },
    { name: 'Penguin', habitat: 'Antarctica', feature: 'tuxedo colors' },
    { name: 'Monkey', habitat: 'Jungle', feature: 'long tail' },
    { name: 'Bear', habitat: 'Forest', feature: 'thick fur' },
    { name: 'Giraffe', habitat: 'Africa', feature: 'long neck' },
    { name: 'Rabbit', habitat: 'Garden', feature: 'long ears' },
    { name: 'Turtle', habitat: 'Pond', feature: 'shell' },
    { name: 'Owl', habitat: 'Forest', feature: 'big eyes' },
    { name: 'Frog', habitat: 'Pond', feature: 'long tongue' },
    { name: 'Zebra', habitat: 'Africa', feature: 'stripes' },
    { name: 'Cheetah', habitat: 'Africa', feature: 'spots' },
    { name: 'Kangaroo', habitat: 'Australia', feature: 'pouch' },
    { name: 'Koala', habitat: 'Australia', feature: 'eucalyptus diet' },
    { name: 'Panda', habitat: 'China', feature: 'black and white fur' },
    { name: 'Flamingo', habitat: 'Lake', feature: 'pink feathers' },
    { name: 'Peacock', habitat: 'Forest', feature: 'colorful tail' },
    { name: 'Octopus', habitat: 'Ocean', feature: 'eight arms' },
    { name: 'Dolphin', habitat: 'Ocean', feature: 'intelligence' },
    { name: 'Whale', habitat: 'Ocean', feature: 'huge size' },
    { name: 'Shark', habitat: 'Ocean', feature: 'sharp teeth' },
    { name: 'Seahorse', habitat: 'Ocean', feature: 'horse-shaped head' },
    { name: 'Crab', habitat: 'Beach', feature: 'claws' },
    { name: 'Lobster', habitat: 'Ocean', feature: 'large claws' },
    { name: 'Jellyfish', habitat: 'Ocean', feature: 'tentacles' },
    { name: 'Starfish', habitat: 'Ocean', feature: 'five arms' },
    { name: 'Snail', habitat: 'Garden', feature: 'spiral shell' },
    { name: 'Butterfly', habitat: 'Garden', feature: 'colorful wings' },
    { name: 'Bee', habitat: 'Garden', feature: 'stinger' },
    { name: 'Ant', habitat: 'Ground', feature: 'strength' },
    { name: 'Spider', habitat: 'House', feature: 'web' },
    { name: 'Scorpion', habitat: 'Desert', feature: 'stinger tail' },
    { name: 'Camel', habitat: 'Desert', feature: 'hump' },
    { name: 'Hippopotamus', habitat: 'Africa', feature: 'large mouth' },
    { name: 'Rhinoceros', habitat: 'Africa', feature: 'horn' },
    { name: 'Crocodile', habitat: 'River', feature: 'sharp teeth' },
    { name: 'Alligator', habitat: 'Swamp', feature: 'wide snout' },
    { name: 'Eagle', habitat: 'Mountain', feature: 'sharp eyes' },
    { name: 'Hawk', habitat: 'Sky', feature: 'sharp claws' },
    { name: 'Ostrich', habitat: 'Africa', feature: 'cannot fly' },
    { name: 'Parrot', habitat: 'Jungle', feature: 'colorful feathers' },
    { name: 'Toucan', habitat: 'Jungle', feature: 'large beak' },
    { name: 'Pelican', habitat: 'Beach', feature: 'pouch beak' },
    { name: 'Walrus', habitat: 'Arctic', feature: 'tusks' },
    { name: 'Polar bear', habitat: 'Arctic', feature: 'white fur' },
    { name: 'Arctic fox', habitat: 'Arctic', feature: 'thick fur' },
    { name: 'Snowy owl', habitat: 'Arctic', feature: 'white feathers' },
    { name: 'Reindeer', habitat: 'Arctic', feature: 'antlers' },
    { name: 'Wolf', habitat: 'Forest', feature: 'pack behavior' },
    { name: 'Fox', habitat: 'Forest', feature: 'bushy tail' },
  ],
  hard: [
    { name: 'Chameleon', feature: 'color-changing skin' },
    { name: 'Dolphin', feature: 'echolocation' },
    { name: 'Octopus', feature: 'three hearts' },
    { name: 'Flamingo', feature: 'pink feathers from food' },
    { name: 'Kangaroo', feature: 'strong legs for jumping' },
    { name: 'Panda', feature: 'bamboo diet' },
    { name: 'Koala', feature: 'sleeps 20 hours a day' },
    { name: 'Seahorse', feature: 'male carries babies' },
    { name: 'Platypus', feature: 'lays eggs but is a mammal' },
    { name: 'Narwhal', feature: 'spiral tusk' },
    { name: 'Axolotl', feature: 'can regrow limbs' },
    { name: 'Tardigrade', feature: 'can survive in space' },
    { name: 'Mantis shrimp', feature: 'strongest punch' },
    { name: 'Electric eel', feature: 'can generate electricity' },
    { name: 'Bombardier beetle', feature: 'shoots hot chemicals' },
    { name: 'Archerfish', feature: 'shoots water at insects' },
    { name: 'Honey badger', feature: 'fearless predator' },
    { name: 'Pistol shrimp', feature: 'creates sonic boom' },
    { name: 'Flying fish', feature: 'can glide above water' },
    { name: 'Vampire bat', feature: 'feeds on blood' },
    { name: 'Komodo dragon', feature: 'venomous bite' },
    { name: 'King cobra', feature: 'longest venomous snake' },
    { name: 'Peregrine falcon', feature: 'fastest animal' },
    { name: 'Cheetah', feature: 'fastest land animal' },
    { name: 'Sloth', feature: 'slowest mammal' },
    { name: 'Hummingbird', feature: 'can fly backwards' },
    { name: 'Arctic tern', feature: 'longest migration' },
    { name: 'Blue whale', feature: 'largest animal ever' },
    { name: 'African elephant', feature: 'largest land animal' },
    { name: 'Rafflesia', feature: 'largest flower' },
    { name: 'Colossal squid', feature: 'largest eyes' },
    { name: 'Japanese spider crab', feature: 'largest leg span' },
    { name: 'Giant tortoise', feature: 'longest lifespan' },
    { name: 'Mayfly', feature: 'shortest lifespan' },
    { name: 'Archerfish', feature: 'uses tools to hunt' },
    { name: 'Crow', feature: 'can use tools' },
    { name: 'Dolphin', feature: 'recognizes itself in mirror' },
    { name: 'Elephant', feature: 'never forgets' },
    { name: 'Parrot', feature: 'can mimic human speech' },
    { name: 'Bee', feature: 'communicates with dance' },
    { name: 'Ant', feature: 'can carry 50 times its weight' },
    { name: 'Spider', feature: 'makes silk stronger than steel' },
    { name: 'Firefly', feature: 'produces light' },
    { name: 'Glowworm', feature: 'produces light' },
    { name: 'Cuttlefish', feature: 'changes color instantly' },
    { name: 'Pufferfish', feature: 'inflates when scared' },
    { name: 'Anglerfish', feature: 'uses light to attract prey' },
    { name: 'Mimic octopus', feature: 'copies other animals' },
    { name: 'Leaf insect', feature: 'looks like a leaf' },
    { name: 'Stick insect', feature: 'looks like a stick' },
  ],
}

// Plants data - 50+ easy, 30+ medium, 20+ hard
const plantsData = {
  easy: [
    { part: 'Roots', function: 'Absorb water from soil', wrongParts: ['Leaves', 'Flower', 'Stem'] },
    { part: 'Leaves', function: 'Make food from sunlight', wrongParts: ['Roots', 'Flower', 'Stem'] },
    { part: 'Flower', function: 'Makes seeds for new plants', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Stem', function: 'Holds the plant up', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Fruit', function: 'Protects the seeds', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Seeds', function: 'Grow into new plants', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Bark', function: 'Protects the tree trunk', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Thorns', function: 'Protect the plant from animals', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Pollen', function: 'Helps make new seeds', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Petals', function: 'Attract bees and butterflies', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Branches', function: 'Hold leaves up to the sun', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Trunk', function: 'Gives the tree strength', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Needles', function: 'Help some trees keep water', wrongParts: ['Roots', 'Flower', 'Stem'] },
    { part: 'Vines', function: 'Help plants climb', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Tubers', function: 'Store food underground', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Bulbs', function: 'Store food for new growth', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Spores', function: 'Help ferns reproduce', wrongParts: ['Roots', 'Leaves', 'Seeds'] },
    { part: 'Nectar', function: 'Attracts pollinators', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Sap', function: 'Carries nutrients through the tree', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Crown', function: 'Is the top part of a tree', wrongParts: ['Roots', 'Stem', 'Seeds'] },
    { part: 'Taproot', function: 'Goes deep into the soil', wrongParts: ['Leaves', 'Flower', 'Stem'] },
    { part: 'Stamen', function: 'Produces pollen', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Pistil', function: 'Receives pollen', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Sepal', function: 'Protects the flower bud', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Stipule', function: 'Grows at the base of leaves', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Rhizome', function: 'Grows horizontally underground', wrongParts: ['Leaves', 'Flower', 'Stem'] },
    { part: 'Runner', function: 'Spreads the plant sideways', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Corm', function: 'Underground storage organ', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Tendril', function: 'Helps climbing plants grip', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Lenticel', function: 'Allows gas exchange in bark', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Chloroplast', function: 'Makes food using sunlight', wrongParts: ['Roots', 'Flower', 'Stem'] },
    { part: 'Cambium', function: 'Makes the tree grow wider', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Heartwood', function: 'Gives the tree strength', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Sapwood', function: 'Carries water up the tree', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Guard cells', function: 'Open and close stomata', wrongParts: ['Roots', 'Flower', 'Stem'] },
    { part: 'Stomata', function: 'Let gases in and out', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Phloem', function: 'Carries food down the plant', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Xylem', function: 'Carries water up the plant', wrongParts: ['Roots', 'Leaves', 'Flower'] },
    { part: 'Root hairs', function: 'Absorb water and nutrients', wrongParts: ['Leaves', 'Flower', 'Stem'] },
    { part: 'Root cap', function: 'Protects the root tip', wrongParts: ['Leaves', 'Flower', 'Stem'] },
    { part: 'Node', function: 'Is where leaves attach to stem', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Internode', function: 'Is the space between nodes', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Axil', function: 'Is where branch meets stem', wrongParts: ['Roots', 'Flower', 'Seeds'] },
    { part: 'Bract', function: 'Is a leaf-like part near flowers', wrongParts: ['Roots', 'Stem', 'Seeds'] },
    { part: 'Receptacle', function: 'Holds the flower parts', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Anther', function: 'Produces pollen grains', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Filament', function: 'Holds up the anther', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Style', function: 'Connects stigma to ovary', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Stigma', function: 'Catches pollen', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Ovary', function: 'Contains the ovules', wrongParts: ['Roots', 'Leaves', 'Stem'] },
    { part: 'Ovule', function: 'Becomes the seed', wrongParts: ['Roots', 'Leaves', 'Stem'] },
  ],
  medium: [
    { question: 'What do plants need to grow?', correct: 'Sunlight and water', wrongs: ['Only candy', 'Darkness', 'Ice cream'] },
    { question: 'Where do plants make their food?', correct: 'In their leaves', wrongs: ['In the roots', 'In the soil', 'In the flower'] },
    { question: 'What gas do plants take in?', correct: 'Carbon dioxide', wrongs: ['Oxygen', 'Nitrogen', 'Helium'] },
    { question: 'What do roots do?', correct: 'Absorb water', wrongs: ['Make food', 'Attract bees', 'Make seeds'] },
    { question: 'What attracts bees to flowers?', correct: 'Color and smell', wrongs: ['Size', 'Thorns', 'Roots'] },
    { question: 'What do plants release?', correct: 'Oxygen', wrongs: ['Carbon dioxide', 'Nitrogen', 'Helium'] },
    { question: 'What is the green pigment in leaves?', correct: 'Chlorophyll', wrongs: ['Melanin', 'Carotene', 'Hemoglobin'] },
    { question: 'What part of the plant makes food?', correct: 'Leaves', wrongs: ['Roots', 'Stem', 'Flower'] },
    { question: 'What part absorbs water?', correct: 'Roots', wrongs: ['Leaves', 'Stem', 'Flower'] },
    { question: 'What holds the plant upright?', correct: 'Stem', wrongs: ['Roots', 'Leaves', 'Flower'] },
    { question: 'What attracts pollinators?', correct: 'Flowers', wrongs: ['Roots', 'Stem', 'Leaves'] },
    { question: 'What protects seeds?', correct: 'Fruit', wrongs: ['Leaves', 'Stem', 'Roots'] },
    { question: 'What grows into a new plant?', correct: 'Seed', wrongs: ['Leaf', 'Stem', 'Root'] },
    { question: 'What carries water up the plant?', correct: 'Stem', wrongs: ['Roots', 'Leaves', 'Flower'] },
    { question: 'What do plants use to make food?', correct: 'Sunlight', wrongs: ['Moonlight', 'Darkness', 'Cold'] },
    { question: 'What season do most plants grow?', correct: 'Spring', wrongs: ['Winter', 'Fall', 'Summer'] },
    { question: 'What do plants need besides water and sun?', correct: 'Nutrients from soil', wrongs: ['Candy', 'Ice cream', 'Soda'] },
    { question: 'What part of a flower makes pollen?', correct: 'Stamen', wrongs: ['Pistil', 'Petal', 'Sepal'] },
    { question: 'What part of a flower receives pollen?', correct: 'Pistil', wrongs: ['Stamen', 'Petal', 'Sepal'] },
    { question: 'What is the male part of a flower?', correct: 'Stamen', wrongs: ['Pistil', 'Petal', 'Sepal'] },
    { question: 'What is the female part of a flower?', correct: 'Pistil', wrongs: ['Stamen', 'Petal', 'Sepal'] },
    { question: 'What covers a flower bud?', correct: 'Sepal', wrongs: ['Petal', 'Stamen', 'Pistil'] },
    { question: 'What colorful part attracts insects?', correct: 'Petal', wrongs: ['Sepal', 'Stamen', 'Pistil'] },
    { question: 'What do bees collect from flowers?', correct: 'Nectar', wrongs: ['Water', 'Seeds', 'Leaves'] },
    { question: 'What do seeds need to sprout?', correct: 'Water and warmth', wrongs: ['Cold and dark', 'Ice and snow', 'Candy and sugar'] },
    { question: 'What is a young plant called?', correct: 'Seedling', wrongs: ['Sapling', 'Sprout', 'Baby'] },
    { question: 'What type of plant loses leaves in fall?', correct: 'Deciduous', wrongs: ['Evergreen', 'Annual', 'Perennial'] },
    { question: 'What type of plant keeps leaves all year?', correct: 'Evergreen', wrongs: ['Deciduous', 'Annual', 'Perennial'] },
    { question: 'What is a plant that lives one year?', correct: 'Annual', wrongs: ['Perennial', 'Biennial', 'Deciduous'] },
    { question: 'What is a plant that lives many years?', correct: 'Perennial', wrongs: ['Annual', 'Biennial', 'Deciduous'] },
  ],
  hard: [
    { question: 'What is the process called when plants make food?', correct: 'Photosynthesis', wrongs: ['Digestion', 'Respiration', 'Fermentation'] },
    { question: 'What part of the plant carries water?', correct: 'Xylem', wrongs: ['Phloem', 'Chlorophyll', 'Pollen'] },
    { question: 'What gives leaves their green color?', correct: 'Chlorophyll', wrongs: ['Melanin', 'Carotene', 'Xanthophyll'] },
    { question: 'What part carries food down the plant?', correct: 'Phloem', wrongs: ['Xylem', 'Cambium', 'Pith'] },
    { question: 'What makes the tree grow wider?', correct: 'Cambium', wrongs: ['Xylem', 'Phloem', 'Pith'] },
    { question: 'What is the outermost layer of a tree?', correct: 'Bark', wrongs: ['Sapwood', 'Heartwood', 'Cambium'] },
    { question: 'What is the process of water moving through plants?', correct: 'Transpiration', wrongs: ['Photosynthesis', 'Respiration', 'Germination'] },
    { question: 'What is the process of seed sprouting?', correct: 'Germination', wrongs: ['Photosynthesis', 'Transpiration', 'Pollination'] },
    { question: 'What is the transfer of pollen called?', correct: 'Pollination', wrongs: ['Germination', 'Transpiration', 'Photosynthesis'] },
    { question: 'What is the process of seed formation?', correct: 'Fertilization', wrongs: ['Germination', 'Pollination', 'Transpiration'] },
    { question: 'What type of root goes deep?', correct: 'Taproot', wrongs: ['Fibrous root', 'Adventitious root', 'Lateral root'] },
    { question: 'What type of root spreads wide?', correct: 'Fibrous root', wrongs: ['Taproot', 'Adventitious root', 'Lateral root'] },
    { question: 'What is a plant that makes its own food?', correct: 'Autotroph', wrongs: ['Heterotroph', 'Parasite', 'Decomposer'] },
    { question: 'What is a plant that eats insects?', correct: 'Carnivorous', wrongs: ['Herbivorous', 'Parasitic', 'Autotrophic'] },
    { question: 'What is the study of plants called?', correct: 'Botany', wrongs: ['Zoology', 'Biology', 'Ecology'] },
    { question: 'What gas do plants absorb?', correct: 'Carbon dioxide', wrongs: ['Oxygen', 'Nitrogen', 'Hydrogen'] },
    { question: 'What gas do plants release?', correct: 'Oxygen', wrongs: ['Carbon dioxide', 'Nitrogen', 'Hydrogen'] },
    { question: 'What is the female reproductive part?', correct: 'Carpel', wrongs: ['Stamen', 'Petal', 'Sepal'] },
    { question: 'What is the male reproductive part?', correct: 'Stamen', wrongs: ['Carpel', 'Petal', 'Sepal'] },
    { question: 'What is a flower with both male and female parts?', correct: 'Perfect flower', wrongs: ['Imperfect flower', 'Monoecious', 'Dioecious'] },
    { question: 'What is a flower with only one sex?', correct: 'Imperfect flower', wrongs: ['Perfect flower', 'Monoecious', 'Dioecious'] },
    { question: 'What are plants that live on other plants?', correct: 'Epiphytes', wrongs: ['Parasites', 'Saprophytes', 'Autotrophs'] },
    { question: 'What are plants that grow without soil?', correct: 'Hydroponics', wrongs: ['Aeroponics', 'Geoponics', 'Aquaponics'] },
    { question: 'What is the waxy coating on leaves?', correct: 'Cuticle', wrongs: ['Epidermis', 'Mesophyll', 'Cutin'] },
    { question: 'What are the tiny pores on leaves?', correct: 'Stomata', wrongs: ['Lenticels', 'Hydathodes', 'Trichomes'] },
    { question: 'What cells open and close stomata?', correct: 'Guard cells', wrongs: ['Epidermal cells', 'Mesophyll cells', 'Companion cells'] },
    { question: 'What is the tissue that makes food?', correct: 'Mesophyll', wrongs: ['Epidermis', 'Xylem', 'Phloem'] },
    { question: 'What is the outer layer of cells?', correct: 'Epidermis', wrongs: ['Mesophyll', 'Xylem', 'Phloem'] },
    { question: 'What is the growing tip of a root?', correct: 'Meristem', wrongs: ['Cambium', 'Apical', 'Lateral'] },
    { question: 'What is the growing tip of a shoot?', correct: 'Apical meristem', wrongs: ['Lateral meristem', 'Cambium', 'Vascular cambium'] },
  ],
}

// Human Body data - 50+ easy, 30+ medium, 20+ hard
const humanBodyData = {
  easy: [
    { part: 'Eyes', function: 'Help you see', wrongParts: ['Ears', 'Nose', 'Mouth'] },
    { part: 'Ears', function: 'Help you hear', wrongParts: ['Eyes', 'Nose', 'Mouth'] },
    { part: 'Nose', function: 'Help you smell', wrongParts: ['Eyes', 'Ears', 'Mouth'] },
    { part: 'Mouth', function: 'Help you eat and talk', wrongParts: ['Eyes', 'Ears', 'Nose'] },
    { part: 'Hands', function: 'Help you grab things', wrongParts: ['Feet', 'Head', 'Legs'] },
    { part: 'Feet', function: 'Help you walk and run', wrongParts: ['Hands', 'Head', 'Arms'] },
    { part: 'Fingers', function: 'Help you pick up small things', wrongParts: ['Toes', 'Arms', 'Legs'] },
    { part: 'Toes', function: 'Help you balance', wrongParts: ['Fingers', 'Hands', 'Feet'] },
    { part: 'Arms', function: 'Help you lift things', wrongParts: ['Legs', 'Feet', 'Head'] },
    { part: 'Legs', function: 'Help you walk and jump', wrongParts: ['Arms', 'Hands', 'Head'] },
    { part: 'Head', function: 'Houses your brain', wrongParts: ['Arms', 'Legs', 'Feet'] },
    { part: 'Neck', function: 'Helps you turn your head', wrongParts: ['Arms', 'Legs', 'Back'] },
    { part: 'Back', function: 'Helps you stand up straight', wrongParts: ['Arms', 'Legs', 'Head'] },
    { part: 'Shoulders', function: 'Help you lift your arms', wrongParts: ['Legs', 'Feet', 'Head'] },
    { part: 'Elbows', function: 'Help you bend your arms', wrongParts: ['Knees', 'Ankles', 'Wrists'] },
    { part: 'Wrists', function: 'Help you move your hands', wrongParts: ['Ankles', 'Elbows', 'Knees'] },
    { part: 'Knees', function: 'Help you bend your legs', wrongParts: ['Elbows', 'Wrists', 'Ankles'] },
    { part: 'Ankles', function: 'Help you move your feet', wrongParts: ['Wrists', 'Elbows', 'Knees'] },
    { part: 'Teeth', function: 'Help you chew food', wrongParts: ['Tongue', 'Lips', 'Gums'] },
    { part: 'Tongue', function: 'Help you taste food', wrongParts: ['Teeth', 'Lips', 'Gums'] },
    { part: 'Lips', function: 'Help you speak clearly', wrongParts: ['Teeth', 'Tongue', 'Gums'] },
    { part: 'Hair', function: 'Protects your head', wrongParts: ['Skin', 'Nails', 'Teeth'] },
    { part: 'Nails', function: 'Protect your fingertips', wrongParts: ['Hair', 'Skin', 'Teeth'] },
    { part: 'Skin', function: 'Protects your body', wrongParts: ['Hair', 'Nails', 'Bones'] },
    { part: 'Bones', function: 'Give your body shape', wrongParts: ['Muscles', 'Skin', 'Hair'] },
    { part: 'Muscles', function: 'Help you move', wrongParts: ['Bones', 'Skin', 'Hair'] },
    { part: 'Heart', function: 'Pumps blood through your body', wrongParts: ['Lungs', 'Brain', 'Stomach'] },
    { part: 'Lungs', function: 'Help you breathe', wrongParts: ['Heart', 'Brain', 'Stomach'] },
    { part: 'Brain', function: 'Controls your body', wrongParts: ['Heart', 'Lungs', 'Stomach'] },
    { part: 'Stomach', function: 'Digests your food', wrongParts: ['Heart', 'Lungs', 'Brain'] },
    { part: 'Tummy', function: 'Holds the food you eat', wrongParts: ['Heart', 'Lungs', 'Brain'] },
    { part: 'Chest', function: 'Protects your heart and lungs', wrongParts: ['Back', 'Head', 'Legs'] },
    { part: 'Belly button', function: 'Is where you were connected to your mom', wrongParts: ['Heart', 'Lungs', 'Brain'] },
    { part: 'Eyebrows', function: 'Keep sweat out of your eyes', wrongParts: ['Eyelashes', 'Hair', 'Nails'] },
    { part: 'Eyelashes', function: 'Keep dust out of your eyes', wrongParts: ['Eyebrows', 'Hair', 'Nails'] },
    { part: 'Cheeks', function: 'Help you smile', wrongParts: ['Chin', 'Forehead', 'Nose'] },
    { part: 'Chin', function: 'Is below your mouth', wrongParts: ['Cheeks', 'Forehead', 'Nose'] },
    { part: 'Forehead', function: 'Is above your eyes', wrongParts: ['Chin', 'Cheeks', 'Nose'] },
    { part: 'Palms', function: 'Are the inside of your hands', wrongParts: ['Fingers', 'Wrists', 'Arms'] },
    { part: 'Soles', function: 'Are the bottom of your feet', wrongParts: ['Toes', 'Ankles', 'Legs'] },
    { part: 'Heel', function: 'Is the back of your foot', wrongParts: ['Toe', 'Ankle', 'Sole'] },
    { part: 'Knuckles', function: 'Help you make a fist', wrongParts: ['Elbows', 'Wrists', 'Fingers'] },
    { part: 'Thigh', function: 'Is the top part of your leg', wrongParts: ['Knee', 'Ankle', 'Shin'] },
    { part: 'Shin', function: 'Is the front of your lower leg', wrongParts: ['Thigh', 'Knee', 'Ankle'] },
    { part: 'Calf', function: 'Is the back of your lower leg', wrongParts: ['Thigh', 'Shin', 'Knee'] },
    { part: 'Hip', function: 'Connects your leg to your body', wrongParts: ['Knee', 'Ankle', 'Thigh'] },
    { part: 'Wrist', function: 'Connects your hand to your arm', wrongParts: ['Elbow', 'Shoulder', 'Finger'] },
    { part: 'Collarbone', function: 'Is between your neck and shoulder', wrongParts: ['Rib', 'Spine', 'Skull'] },
    { part: 'Ribcage', function: 'Protects your heart and lungs', wrongParts: ['Skull', 'Spine', 'Pelvis'] },
    { part: 'Spine', function: 'Helps you stand up straight', wrongParts: ['Skull', 'Ribcage', 'Pelvis'] },
    { part: 'Skull', function: 'Protects your brain', wrongParts: ['Spine', 'Ribcage', 'Pelvis'] },
  ],
  medium: [
    { question: 'How many bones does an adult have?', correct: '206', wrongs: ['100', '500', '50'] },
    { question: 'What pumps blood through your body?', correct: 'Heart', wrongs: ['Lungs', 'Brain', 'Stomach'] },
    { question: 'What helps you breathe?', correct: 'Lungs', wrongs: ['Heart', 'Brain', 'Liver'] },
    { question: 'What controls your body?', correct: 'Brain', wrongs: ['Heart', 'Stomach', 'Lungs'] },
    { question: 'How many teeth does an adult have?', correct: '32', wrongs: ['20', '50', '10'] },
    { question: 'What organ digests food?', correct: 'Stomach', wrongs: ['Heart', 'Lungs', 'Brain'] },
    { question: 'What organ filters blood?', correct: 'Kidneys', wrongs: ['Heart', 'Lungs', 'Brain'] },
    { question: 'What organ makes bile?', correct: 'Liver', wrongs: ['Heart', 'Lungs', 'Kidneys'] },
    { question: 'How many chambers does the heart have?', correct: '4', wrongs: ['2', '3', '5'] },
    { question: 'What carries blood from the heart?', correct: 'Arteries', wrongs: ['Veins', 'Capillaries', 'Nerves'] },
    { question: 'What carries blood to the heart?', correct: 'Veins', wrongs: ['Arteries', 'Capillaries', 'Nerves'] },
    { question: 'What is the largest muscle?', correct: 'Gluteus maximus', wrongs: ['Biceps', 'Quadriceps', 'Deltoid'] },
    { question: 'What is the strongest muscle?', correct: 'Masseter', wrongs: ['Biceps', 'Quadriceps', 'Gluteus'] },
    { question: 'What is the longest bone?', correct: 'Femur', wrongs: ['Humerus', 'Tibia', 'Fibula'] },
    { question: 'What is the smallest bone?', correct: 'Stapes', wrongs: ['Femur', 'Humerus', 'Tibia'] },
    { question: 'What vitamin does sunlight provide?', correct: 'Vitamin D', wrongs: ['Vitamin A', 'Vitamin C', 'Vitamin K'] },
    { question: 'What mineral builds strong bones?', correct: 'Calcium', wrongs: ['Iron', 'Zinc', 'Sodium'] },
    { question: 'What carries oxygen in blood?', correct: 'Hemoglobin', wrongs: ['Plasma', 'Platelets', 'White cells'] },
    { question: 'What fights infections?', correct: 'White blood cells', wrongs: ['Red blood cells', 'Platelets', 'Plasma'] },
    { question: 'What helps blood clot?', correct: 'Platelets', wrongs: ['Red blood cells', 'White blood cells', 'Plasma'] },
    { question: 'What is the liquid part of blood?', correct: 'Plasma', wrongs: ['Red cells', 'White cells', 'Platelets'] },
    { question: 'What sense is linked to memory?', correct: 'Smell', wrongs: ['Sight', 'Hearing', 'Touch'] },
    { question: 'What is the hardest substance in the body?', correct: 'Tooth enamel', wrongs: ['Bone', 'Cartilage', 'Nail'] },
    { question: 'What covers your brain?', correct: 'Skull', wrongs: ['Skin', 'Muscle', 'Cartilage'] },
    { question: 'What connects muscles to bones?', correct: 'Tendons', wrongs: ['Ligaments', 'Cartilage', 'Joints'] },
    { question: 'What connects bones to bones?', correct: 'Ligaments', wrongs: ['Tendons', 'Cartilage', 'Muscles'] },
    { question: 'What is the soft part of bones?', correct: 'Marrow', wrongs: ['Cartilage', 'Tendon', 'Ligament'] },
    { question: 'What makes red blood cells?', correct: 'Bone marrow', wrongs: ['Heart', 'Liver', 'Kidneys'] },
    { question: 'What is the control center of the cell?', correct: 'Nucleus', wrongs: ['Membrane', 'Cytoplasm', 'Mitochondria'] },
    { question: 'What is the powerhouse of the cell?', correct: 'Mitochondria', wrongs: ['Nucleus', 'Membrane', 'Cytoplasm'] },
  ],
  hard: [
    { question: 'What is the largest organ in the body?', correct: 'Skin', wrongs: ['Heart', 'Liver', 'Brain'] },
    { question: 'What carries oxygen in blood?', correct: 'Red blood cells', wrongs: ['White blood cells', 'Platelets', 'Plasma'] },
    { question: 'What is the smallest bone called?', correct: 'Stapes', wrongs: ['Femur', 'Tibia', 'Radius'] },
    { question: 'What is the largest artery?', correct: 'Aorta', wrongs: ['Pulmonary', 'Carotid', 'Femoral'] },
    { question: 'What is the largest vein?', correct: 'Vena cava', wrongs: ['Jugular', 'Femoral', 'Pulmonary'] },
    { question: 'What is the brain made of?', correct: 'Nervous tissue', wrongs: ['Muscle', 'Bone', 'Fat'] },
    { question: 'What is the spinal cord made of?', correct: 'Nervous tissue', wrongs: ['Muscle', 'Bone', 'Cartilage'] },
    { question: 'What is the basic unit of life?', correct: 'Cell', wrongs: ['Atom', 'Molecule', 'Organ'] },
    { question: 'What is the basic unit of the nervous system?', correct: 'Neuron', wrongs: ['Cell', 'Molecule', 'Organ'] },
    { question: 'What is the basic unit of muscle?', correct: 'Fiber', wrongs: ['Cell', 'Molecule', 'Organ'] },
    { question: 'What is the study of the body called?', correct: 'Anatomy', wrongs: ['Physiology', 'Biology', 'Zoology'] },
    { question: 'What is the study of body functions?', correct: 'Physiology', wrongs: ['Anatomy', 'Biology', 'Zoology'] },
    { question: 'What is the largest lymphatic organ?', correct: 'Spleen', wrongs: ['Thymus', 'Tonsils', 'Lymph node'] },
    { question: 'What organ produces insulin?', correct: 'Pancreas', wrongs: ['Liver', 'Kidneys', 'Stomach'] },
    { question: 'What organ stores bile?', correct: 'Gallbladder', wrongs: ['Liver', 'Pancreas', 'Stomach'] },
    { question: 'What is the windpipe called?', correct: 'Trachea', wrongs: ['Esophagus', 'Bronchi', 'Larynx'] },
    { question: 'What is the voice box called?', correct: 'Larynx', wrongs: ['Trachea', 'Pharynx', 'Esophagus'] },
    { question: 'What is the food pipe called?', correct: 'Esophagus', wrongs: ['Trachea', 'Pharynx', 'Larynx'] },
    { question: 'What is the muscular wall between chest and abdomen?', correct: 'Diaphragm', wrongs: ['Peritoneum', 'Pleura', 'Pericardium'] },
    { question: 'What is the outer layer of skin?', correct: 'Epidermis', wrongs: ['Dermis', 'Hypodermis', 'Cuticle'] },
    { question: 'What is the inner layer of skin?', correct: 'Dermis', wrongs: ['Epidermis', 'Hypodermis', 'Cuticle'] },
    { question: 'What produces tears?', correct: 'Lacrimal gland', wrongs: ['Salivary gland', 'Thyroid', 'Pituitary'] },
    { question: 'What produces saliva?', correct: 'Salivary gland', wrongs: ['Lacrimal gland', 'Thyroid', 'Pituitary'] },
    { question: 'What is the master gland?', correct: 'Pituitary', wrongs: ['Thyroid', 'Adrenal', 'Pineal'] },
    { question: 'What gland controls metabolism?', correct: 'Thyroid', wrongs: ['Pituitary', 'Adrenal', 'Pineal'] },
    { question: 'What gland produces adrenaline?', correct: 'Adrenal', wrongs: ['Thyroid', 'Pituitary', 'Pineal'] },
    { question: 'What is the funny bone actually?', correct: 'Ulnar nerve', wrongs: ['Humerus', 'Radius', 'Muscle'] },
    { question: 'What is the kneecap called?', correct: 'Patella', wrongs: ['Femur', 'Tibia', 'Fibula'] },
    { question: 'What is the shin bone called?', correct: 'Tibia', wrongs: ['Fibula', 'Femur', 'Patella'] },
    { question: 'What is the collarbone called?', correct: 'Clavicle', wrongs: ['Scapula', 'Sternum', 'Humerus'] },
  ],
}

// Earth data - 50+ easy, 30+ medium, 20+ hard
const earthData = {
  easy: [
    { question: 'What do we breathe?', correct: 'Air', wrongs: ['Water', 'Sand', 'Fire'] },
    { question: 'Where do fish live?', correct: 'In water', wrongs: ['In trees', 'In caves', 'In nests'] },
    { question: 'What falls from clouds?', correct: 'Rain', wrongs: ['Stars', 'Rocks', 'Leaves'] },
    { question: 'What is the big body of water called?', correct: 'Ocean', wrongs: ['River', 'Pond', 'Puddle'] },
    { question: 'What shines during the day?', correct: 'Sun', wrongs: ['Moon', 'Stars', 'Clouds'] },
    { question: 'What covers much of the Earth?', correct: 'Water', wrongs: ['Sand', 'Ice', 'Grass'] },
    { question: 'What is frozen water called?', correct: 'Ice', wrongs: ['Snow', 'Steam', 'Cloud'] },
    { question: 'What is water vapor called?', correct: 'Steam', wrongs: ['Ice', 'Snow', 'Cloud'] },
    { question: 'What falls in winter?', correct: 'Snow', wrongs: ['Rain', 'Hail', 'Sleet'] },
    { question: 'What is a big storm called?', correct: 'Hurricane', wrongs: ['Rain', 'Wind', 'Cloud'] },
    { question: 'What is a flash of light in the sky?', correct: 'Lightning', wrongs: ['Rain', 'Wind', 'Cloud'] },
    { question: 'What is the sound after lightning?', correct: 'Thunder', wrongs: ['Rain', 'Wind', 'Cloud'] },
    { question: 'What is a rainbow made of?', correct: 'Light', wrongs: ['Water', 'Paint', 'Clouds'] },
    { question: 'What is the ground we walk on?', correct: 'Earth', wrongs: ['Water', 'Air', 'Sky'] },
    { question: 'What is a very high hill?', correct: 'Mountain', wrongs: ['Valley', 'River', 'Lake'] },
    { question: 'What is a low area between mountains?', correct: 'Valley', wrongs: ['Mountain', 'Hill', 'River'] },
    { question: 'What is a long flowing water?', correct: 'River', wrongs: ['Lake', 'Ocean', 'Pond'] },
    { question: 'What is a still body of water?', correct: 'Lake', wrongs: ['River', 'Ocean', 'Stream'] },
    { question: 'What is a small lake?', correct: 'Pond', wrongs: ['River', 'Ocean', 'Lake'] },
    { question: 'What is a very dry place?', correct: 'Desert', wrongs: ['Forest', 'Jungle', 'Swamp'] },
    { question: 'What is a place with many trees?', correct: 'Forest', wrongs: ['Desert', 'Ocean', 'Mountain'] },
    { question: 'What is a flat area of land?', correct: 'Plain', wrongs: ['Mountain', 'Valley', 'Hill'] },
    { question: 'What is land surrounded by water?', correct: 'Island', wrongs: ['Continent', 'Peninsula', 'Isthmus'] },
    { question: 'What is water falling over a cliff?', correct: 'Waterfall', wrongs: ['River', 'Stream', 'Rapids'] },
    { question: 'What is a hole in the ground?', correct: 'Cave', wrongs: ['Mountain', 'Valley', 'Hill'] },
    { question: 'What is a strong wind called?', correct: 'Storm', wrongs: ['Breeze', 'Calm', 'Gentle'] },
    { question: 'What is a very cold place?', correct: 'Arctic', wrongs: ['Desert', 'Tropics', 'Forest'] },
    { question: 'What is a very hot place?', correct: 'Desert', wrongs: ['Arctic', 'Tropics', 'Forest'] },
    { question: 'What is a wetland area?', correct: 'Swamp', wrongs: ['Desert', 'Mountain', 'Plain'] },
    { question: 'What is a sandy area near the ocean?', correct: 'Beach', wrongs: ['Mountain', 'Forest', 'Desert'] },
    { question: 'What is a large area of ice?', correct: 'Glacier', wrongs: ['Mountain', 'River', 'Lake'] },
    { question: 'What is a crack in the Earth?', correct: 'Fissure', wrongs: ['Mountain', 'Valley', 'Cave'] },
    { question: 'What is a column of hot water?', correct: 'Geyser', wrongs: ['Volcano', 'River', 'Waterfall'] },
    { question: 'What is a flat-topped mountain?', correct: 'Mesa', wrongs: ['Valley', 'Hill', 'Canyon'] },
    { question: 'What is a deep narrow valley?', correct: 'Canyon', wrongs: ['Mountain', 'Plain', 'Hill'] },
    { question: 'What is a strong ocean current?', correct: 'Riptide', wrongs: ['Wave', 'Tide', 'Current'] },
    { question: 'What is a giant wave?', correct: 'Tsunami', wrongs: ['Tide', 'Wave', 'Current'] },
    { question: 'What is a rotating column of air?', correct: 'Tornado', wrongs: ['Hurricane', 'Storm', 'Wind'] },
    { question: 'What is a large body of salt water?', correct: 'Ocean', wrongs: ['Lake', 'River', 'Pond'] },
    { question: 'What is a small body of fresh water?', correct: 'Pond', wrongs: ['Ocean', 'Sea', 'Lake'] },
    { question: 'What is a stream of water?', correct: 'River', wrongs: ['Ocean', 'Lake', 'Pond'] },
    { question: 'What is a large flat area?', correct: 'Plain', wrongs: ['Mountain', 'Valley', 'Hill'] },
    { question: 'What is a point of land in water?', correct: 'Cape', wrongs: ['Bay', 'Gulf', 'Island'] },
    { question: 'What is a curve in the coastline?', correct: 'Bay', wrongs: ['Cape', 'Peninsula', 'Island'] },
    { question: 'What is a large bay?', correct: 'Gulf', wrongs: ['Bay', 'Cape', 'Island'] },
    { question: 'What is a narrow strip of land?', correct: 'Isthmus', wrongs: ['Peninsula', 'Island', 'Cape'] },
    { question: 'What is a piece of land in water?', correct: 'Peninsula', wrongs: ['Island', 'Cape', 'Isthmus'] },
    { question: 'What is a body of land surrounded by water?', correct: 'Island', wrongs: ['Peninsula', 'Cape', 'Isthmus'] },
    { question: 'What is a large body of land?', correct: 'Continent', wrongs: ['Island', 'Peninsula', 'Country'] },
    { question: 'What is the top of a mountain?', correct: 'Peak', wrongs: ['Base', 'Slope', 'Ridge'] },
    { question: 'What is a long narrow body of water?', correct: 'Fjord', wrongs: ['Bay', 'Gulf', 'Cove'] },
  ],
  medium: [
    { question: 'How many continents are there?', correct: '7', wrongs: ['5', '10', '3'] },
    { question: 'What is the biggest ocean?', correct: 'Pacific', wrongs: ['Atlantic', 'Indian', 'Arctic'] },
    { question: 'What causes earthquakes?', correct: 'Moving tectonic plates', wrongs: ['Heavy rain', 'Strong wind', 'Hot sun'] },
    { question: 'What is the water cycle?', correct: 'Evaporation, condensation, precipitation', wrongs: ['Only rain', 'Only evaporation', 'Only snow'] },
    { question: 'What layer protects us from the sun?', correct: 'Ozone layer', wrongs: ['Cloud layer', 'Dust layer', 'Air layer'] },
    { question: 'What are the layers of the atmosphere?', correct: 'Troposphere, stratosphere, mesosphere, thermosphere', wrongs: ['Only troposphere', 'Only stratosphere', 'Only thermosphere'] },
    { question: 'What causes tides?', correct: 'The moon\'s gravity', wrongs: ['The sun\'s heat', 'Wind', 'Earthquakes'] },
    { question: 'What causes seasons?', correct: 'Earth\'s tilt', wrongs: ['Distance from sun', 'Moon\'s gravity', 'Wind patterns'] },
    { question: 'What is the longest river?', correct: 'Nile', wrongs: ['Amazon', 'Mississippi', 'Yangtze'] },
    { question: 'What is the tallest mountain?', correct: 'Mount Everest', wrongs: ['K2', 'Kangchenjunga', 'Lhotse'] },
    { question: 'What is the largest desert?', correct: 'Sahara', wrongs: ['Gobi', 'Kalahari', 'Antarctic'] },
    { question: 'What is the largest rainforest?', correct: 'Amazon', wrongs: ['Congo', 'Daintree', 'Valdivian'] },
    { question: 'What is the deepest ocean?', correct: 'Pacific', wrongs: ['Atlantic', 'Indian', 'Arctic'] },
    { question: 'What is the saltiest sea?', correct: 'Dead Sea', wrongs: ['Red Sea', 'Black Sea', 'Caspian Sea'] },
    { question: 'What is the largest lake?', correct: 'Caspian Sea', wrongs: ['Superior', 'Victoria', 'Baikal'] },
    { question: 'What is the deepest lake?', correct: 'Baikal', wrongs: ['Superior', 'Victoria', 'Caspian Sea'] },
    { question: 'What is the largest island?', correct: 'Greenland', wrongs: ['Australia', 'Borneo', 'Madagascar'] },
    { question: 'What is the largest continent?', correct: 'Asia', wrongs: ['Africa', 'North America', 'Europe'] },
    { question: 'What is the smallest continent?', correct: 'Australia', wrongs: ['Europe', 'Antarctica', 'South America'] },
    { question: 'What is the hottest continent?', correct: 'Africa', wrongs: ['Asia', 'South America', 'Australia'] },
    { question: 'What is the coldest continent?', correct: 'Antarctica', wrongs: ['Arctic', 'Europe', 'Asia'] },
    { question: 'What is the most populated continent?', correct: 'Asia', wrongs: ['Africa', 'Europe', 'North America'] },
    { question: 'What is the largest country?', correct: 'Russia', wrongs: ['Canada', 'China', 'USA'] },
    { question: 'What is the most populated country?', correct: 'India', wrongs: ['China', 'USA', 'Indonesia'] },
    { question: 'What is the longest wall?', correct: 'Great Wall of China', wrongs: ['Berlin Wall', 'Hadrian\'s Wall', 'Western Wall'] },
    { question: 'What is the largest canyon?', correct: 'Grand Canyon', wrongs: ['Fish River Canyon', 'Yarlung Tsangpo', 'Copper Canyon'] },
    { question: 'What is the largest waterfall?', correct: 'Victoria Falls', wrongs: ['Niagara Falls', 'Angel Falls', 'Iguazu Falls'] },
    { question: 'What is the tallest waterfall?', correct: 'Angel Falls', wrongs: ['Victoria Falls', 'Niagara Falls', 'Iguazu Falls'] },
    { question: 'What is the largest coral reef?', correct: 'Great Barrier Reef', wrongs: ['Red Sea Reef', 'Mesoamerican Reef', 'New Caledonia Reef'] },
    { question: 'What is the largest volcano?', correct: 'Mauna Loa', wrongs: ['Mount Everest', 'Mount Fuji', 'Mount Vesuvius'] },
  ],
  hard: [
    { question: 'What are the layers of the Earth?', correct: 'Crust, mantle, core', wrongs: ['Crust, ocean, core', 'Soil, rock, lava', 'Sand, clay, rock'] },
    { question: 'What type of rock is formed by lava?', correct: 'Igneous', wrongs: ['Sedimentary', 'Metamorphic', 'Mineral'] },
    { question: 'What percentage of Earth is water?', correct: 'About 71%', wrongs: ['About 50%', 'About 90%', 'About 30%'] },
    { question: 'What type of rock is formed by layers?', correct: 'Sedimentary', wrongs: ['Igneous', 'Metamorphic', 'Mineral'] },
    { question: 'What type of rock is changed by heat?', correct: 'Metamorphic', wrongs: ['Igneous', 'Sedimentary', 'Mineral'] },
    { question: 'What is the study of rocks called?', correct: 'Geology', wrongs: ['Biology', 'Ecology', 'Meteorology'] },
    { question: 'What is the study of weather called?', correct: 'Meteorology', wrongs: ['Geology', 'Biology', 'Ecology'] },
    { question: 'What is the study of earthquakes called?', correct: 'Seismology', wrongs: ['Geology', 'Meteorology', 'Ecology'] },
    { question: 'What is the study of volcanoes called?', correct: 'Volcanology', wrongs: ['Geology', 'Seismology', 'Meteorology'] },
    { question: 'What is the study of oceans called?', correct: 'Oceanography', wrongs: ['Geology', 'Meteorology', 'Ecology'] },
    { question: 'What is the study of maps called?', correct: 'Cartography', wrongs: ['Geography', 'Geology', 'Topography'] },
    { question: 'What is the outermost layer of Earth?', correct: 'Crust', wrongs: ['Mantle', 'Core', 'Lithosphere'] },
    { question: 'What is the thickest layer of Earth?', correct: 'Mantle', wrongs: ['Crust', 'Core', 'Lithosphere'] },
    { question: 'What is the center of Earth?', correct: 'Core', wrongs: ['Mantle', 'Crust', 'Lithosphere'] },
    { question: 'What is the broken outer shell of Earth?', correct: 'Lithosphere', wrongs: ['Asthenosphere', 'Mesosphere', 'Crust'] },
    { question: 'What is the soft layer below lithosphere?', correct: 'Asthenosphere', wrongs: ['Lithosphere', 'Mesosphere', 'Crust'] },
    { question: 'What is the supercontinent called?', correct: 'Pangaea', wrongs: ['Gondwana', 'Laurasia', 'Rodinia'] },
    { question: 'What causes volcanoes?', correct: 'Magma rising to surface', wrongs: ['Earthquakes', 'Rain', 'Wind'] },
    { question: 'What is molten rock under Earth called?', correct: 'Magma', wrongs: ['Lava', 'Rock', 'Mineral'] },
    { question: 'What is molten rock on surface called?', correct: 'Lava', wrongs: ['Magma', 'Rock', 'Mineral'] },
    { question: 'What is the hardest natural mineral?', correct: 'Diamond', wrongs: ['Quartz', 'Topaz', 'Corundum'] },
    { question: 'What is the softest mineral?', correct: 'Talc', wrongs: ['Gypsum', 'Calcite', 'Fluorite'] },
    { question: 'What mineral is used in pencils?', correct: 'Graphite', wrongs: ['Lead', 'Carbon', 'Diamond'] },
    { question: 'What mineral is used in salt?', correct: 'Halite', wrongs: ['Quartz', 'Calcite', 'Gypsum'] },
    { question: 'What mineral is used in glass?', correct: 'Quartz', wrongs: ['Calcite', 'Gypsum', 'Feldspar'] },
    { question: 'What is the rock cycle?', correct: 'Rocks change from one type to another', wrongs: ['Rocks stay the same forever', 'Rocks dissolve in water', 'Rocks float on water'] },
    { question: 'What is erosion?', correct: 'Wearing away of rock', wrongs: ['Building up of rock', 'Melting of rock', 'Freezing of rock'] },
    { question: 'What is weathering?', correct: 'Breaking down of rock', wrongs: ['Building up of rock', 'Melting of rock', 'Freezing of rock'] },
    { question: 'What is deposition?', correct: 'Dropping of sediment', wrongs: ['Picking up sediment', 'Melting of rock', 'Freezing of rock'] },
    { question: 'What is a fossil?', correct: 'Preserved remains of ancient life', wrongs: ['A type of rock', 'A type of mineral', 'A type of gem'] },
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
    const otherAnimals = data.filter(a => a.name !== animal.name)
    wrongs = shuffle(otherAnimals).slice(0, 3).map(a => a.sound)
    correct = animal.sound

    questionText = lang === 'fil'
      ? `${animal.emoji || ''} Anong tunog ang ginagawa ng ${animal.name}?`
      : `${animal.emoji || ''} What sound does a ${animal.name} make?`
    questionSpeech = lang === 'fil'
      ? `Anong tunog ang ginagawa ng ${animal.name}?`
      : `What sound does a ${animal.name} make?`
  } else if (difficulty === 'medium') {
    const otherAnimals = data.filter(a => a.name !== animal.name)
    wrongs = shuffle(otherAnimals).slice(0, 3).map(a => a.habitat)
    correct = animal.habitat

    questionText = lang === 'fil'
      ? `${animal.emoji || ''} Saan nakatira ang ${animal.name}?`
      : `${animal.emoji || ''} Where does a ${animal.name} live?`
    questionSpeech = lang === 'fil'
      ? `Saan nakatira ang ${animal.name}?`
      : `Where does a ${animal.name} live?`
  } else {
    const otherAnimals = data.filter(a => a.name !== animal.name)
    wrongs = shuffle(otherAnimals).slice(0, 3).map(a => a.feature)
    correct = animal.feature

    questionText = lang === 'fil'
      ? `${animal.emoji || ''} Ano ang kakaiba sa ${animal.name}?`
      : `${animal.emoji || ''} What is special about a ${animal.name}?`
    questionSpeech = lang === 'fil'
      ? `Ano ang kakaiba sa ${animal.name}?`
      : `What is special about a ${animal.name}?`
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
      ? `${part.emoji || ''} Aling bahagi ng halaman ang ${part.function.toLowerCase()}?`
      : `${part.emoji || ''} Which part of a plant ${part.function.toLowerCase()}?`
    const speechText = lang === 'fil'
      ? `Aling bahagi ng halaman ang ${part.function.toLowerCase()}?`
      : `Which part of a plant ${part.function.toLowerCase()}?`

    return {
      id: `plant-${part.part}-${Date.now()}`,
      text: questionText,
      speech: speechText,
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
    text: `${item.question}`,
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
      ? `${part.emoji || ''} Anong bahagi ng katawan ang ${part.function.toLowerCase()}?`
      : `${part.emoji || ''} Which body part helps you ${part.function.replace('Help you ', '').toLowerCase()}?`
    const speechText = lang === 'fil'
      ? `Anong bahagi ng katawan ang ${part.function.toLowerCase()}?`
      : `Which body part helps you ${part.function.replace('Help you ', '').toLowerCase()}?`

    return {
      id: `body-${part.part}-${Date.now()}`,
      text: questionText,
      speech: speechText,
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
    text: `${item.question}`,
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
    text: `${item.question}`,
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
