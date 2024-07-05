const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Animal Sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Traditional Animal Names
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Traditional Animal Colors
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// Arrays

// 4. Traditional Rainbow Colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Initials for Colors
const [r, o, y, g, b, , v] = colors;

// 6. Indigo using `indg`
const [, , , , , indg] = colors;

// Objects

// 7. Destructuring Muppet Object
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructuring Nested Muppet Object
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
