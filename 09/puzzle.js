const fs = require("fs");

const fileContents = fs.readFileSync("example.txt").toString();
// const fileContents = fs.readFileSync("input.txt").toString();
const _ = require("lodash");
const lines = fileContents.split("\n");

const movementModifier = {
  L: {
    x: -1,
    y: 0,
  },
  U: {
    x: 0,
    y: 1,
  },
  R: {
    x: 1,
    y: 0,
  },
  D: {
    x: 0,
    y: -1,
  },
};
const tailHistory = new Set("0,0");

const updatePosition = (current, modifier) => {
  return {
    x: current.x + modifier.x,
    y: current.y + modifier.y,
  };
};

const addSteps = (modifier, steps) => {
  for (const step of _.range(steps)) {
  }
  return {
    x: modifier.x * steps,
    y: modifier.y * steps,
  };
};

let hPosition = { x: 0, y: 0 };
let tPosition = { x: 0, y: 0 };

for (const instruction of lines) {
  // console.log(hPosition);
  for (const y of _.range(4, -1, -1)) {
    let row = "";
    for (const x of _.range(0, 6)) {
      if (_.isEqual(hPosition, { x, y })) {
        row = `${row} H`;
      } else {
        row = `${row} *`;
      }
    }
    console.log(row);
  }

  console.log();
  const dir = instruction.split(" ")[0];
  const stepCount = Number(instruction.split(" ")[1]);
  const modifier = movementModifier[dir];
  hPosition = updatePosition(hPosition, addSteps(modifier, stepCount));
}
