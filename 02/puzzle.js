const fs = require("fs");
const filename = "input.txt";
const fileContents = fs.readFileSync(filename).toString();

const rounds = fileContents.split("\n");
let score = 0;

const choiceScores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const scoreSheet = {
  X: {
    //ROCK
    A: 3, //ROCK
    B: 0, //PAPER
    C: 6, //SCISSORS
  },
  Y: {
    //PAPER
    A: 6, //ROCK
    B: 3, //PAPER
    C: 0, //SCISSORS
  },
  Z: {
    //SCISSORS
    A: 0, //ROCK
    B: 6, //PAPER
    C: 3, //SCISSORS
  },
};

const ourMoves = {
  Z: {
    // WIN
    A: "Y", // Paper (Y) beats Rock (A)
    B: "Z", // Scissors (Z) beats Paper (B)
    C: "X", // Rock (X) beats Scissors (C)
  },
  Y: {
    // DRAW
    A: "X", // Paper (Y) beats Rock (A)
    B: "Y", // Scissors (Z) beats Paper (B)
    C: "Z", // Rock (X) beats Scissors (C)
  },
  X: {
    // LOSE
    A: "Z", // Paper (Y) beats Rock (A)
    B: "X", // Scissors (Z) beats Paper (B)
    C: "Y", // Rock (X) beats Scissors (C)
  },
};

for (const round of rounds) {
  const choices = round.split(" ");
  const opponent = choices[0];
  const result = choices[1];
  const ours = ourMoves[result][opponent];

  console.log("Opponent: ", opponent);
  console.log("Result: ", result);
  console.log("Ours: ", ours);

  const roundScore = choiceScores[ours] + scoreSheet[ours][opponent];
  score += roundScore;
  console.log();
}

console.log("Final Score: ", score);
