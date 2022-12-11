const fs = require("fs");

// const fileContents = fs.readFileSync("example.txt").toString();
const fileContents = fs.readFileSync("input.txt").toString();
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

let hPosition = { x: 0, y: 0 };
let tPosition = { x: 0, y: 0 };
const tailHistory = new Set();
tailHistory.add(`${tPosition.x},${tPosition.y}`);

const moveH = (current, modifier, stepCount) => {
  for (const step of _.range(stepCount)) {
    current = updatePosition(current, modifier);
    const diff = tailToHead(current, tPosition);

    if (diff.distance > 1) {
      const tModifier = {
        x: _.clamp(current.x - tPosition.x, -1, 1),
        y: _.clamp(current.y - tPosition.y, -1, 1),
      };
      tPosition = updatePosition(tPosition, tModifier);
      tailHistory.add(`${tPosition.x},${tPosition.y}`);
    }

    // printBoard(current, tPosition);
  }

  return current;
};

const updatePosition = (current, modifier) => {
  return {
    x: current.x + modifier.x,
    y: current.y + modifier.y,
  };
};

const tailToHead = (h, t) => {
  const yDiff = h.y - t.y;
  const xDiff = h.x - t.x;

  return {
    distance: Math.round(Math.sqrt(yDiff ** 2 + xDiff ** 2)),
    x: xDiff,
    y: yDiff,
  };
};

const printBoard = (h, t) => {
  for (const y of _.range(4, -1, -1)) {
    let row = "";
    for (const x of _.range(0, 6)) {
      if (_.isEqual(h, { x, y })) {
        row = `${row} H`;
      } else if (_.isEqual(t, { x, y })) {
        row = `${row} T`;
      } else {
        row = `${row} *`;
      }
    }
    console.log(row);
  }
  console.log();
};

// printBoard(hPosition, tPosition);

for (const instruction of lines) {
  const dir = instruction.split(" ")[0];
  const stepCount = Number(instruction.split(" ")[1]);
  const modifier = movementModifier[dir];

  console.log(`=== ${dir} ${stepCount} ===\n`);
  hPosition = moveH(hPosition, modifier, stepCount);

  console.log();
}


// for (const y of _.range(4, -1, -1)) {
//   let row = "";
//   for (const x of _.range(0, 6)) {
//     if (tailHistory.has(`${x},${y}`)) {
//       row = `${row} #`;
//     } else {
//       row = `${row} *`;
//     }
//   }
//   console.log(row);
// }

console.log(tailHistory.size);