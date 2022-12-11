const fs = require("fs");

// const fileContents = fs.readFileSync("example.txt").toString();
const fileContents = fs.readFileSync("input.txt").toString();
const _ = require("lodash");

const rucksacks = fileContents.split("\n").map((sack) => sack.split(""));
const groups = _.chunk(rucksacks, 3);

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let score = 0;

for (const group of groups) {
  const duplicate = _.intersection(...group)[0];
  const priority = priorities.indexOf(duplicate) + 1;
  score += priority;

  console.log("Duplicate: ", duplicate, ". Priority: ", priority);
}

console.log(score);
