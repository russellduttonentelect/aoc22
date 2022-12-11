const fs = require("fs");

const fileContents = fs.readFileSync("./input.txt").toString();

const elves = fileContents.split("\n\n");
var max = 0;
var second = 0;
var third = 0;

for (var elf of elves) {
  const calorieList = elf.split("\n");
  const calories = calorieList.reduce((total, current) => total + Number(current), 0);
  if (calories >= max) {
    third = second;
    second = max;
    max = calories;
  } else if (calories < max && calories >= second) {
    third = second;
    second = calories;
  } else if (calories < second && calories >= third) {
    third = calories;
  }

  console.log("Calories: ", calories);
  console.log("Max: ", max);
  console.log("2nd: ", second);
  console.log("3rd: ", third);
  console.log();
}

console.log(max + second + third);
