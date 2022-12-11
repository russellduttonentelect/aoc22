const fs = require("fs");

// const fileContents = fs.readFileSync("example.txt").toString();
const fileContents = fs.readFileSync("input.txt").toString();
const _ = require("lodash");

const pairs = fileContents.split("\n");
let overlaps = 0;

for (const pair of pairs) {
  const sections = pair.split(",").map((section) => section.split("-"));
  const lowerFirst = Number(sections[0][0]);
  const upperFirst = Number(sections[0][1]);
  const lowerSecond = Number(sections[1][0]);
  const upperSecond = Number(sections[1][1]);

  console.log("Row: ", pair);
  if (
    _.inRange(lowerFirst, lowerSecond, upperSecond + 1) ||
    _.inRange(upperFirst, lowerSecond, upperSecond + 1) ||
    _.inRange(lowerSecond, lowerFirst, upperFirst + 1) ||
    _.inRange(upperSecond, lowerFirst, upperFirst + 1)
  ) {
    overlaps += 1;
  }
}

console.log(overlaps);
