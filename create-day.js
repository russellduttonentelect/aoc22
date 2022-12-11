const fs = require("fs");

if (process.argv.length <= 2) {
  throw new Error("No day number specified");
}

const folderName = process.argv[2];

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

const puzzleContent = `const fs = require("fs");

const fileContents = fs.readFileSync("example.txt").toString();
// const fileContents = fs.readFileSync("input.txt").toString();
const _ = require("lodash");
const lines = fileContents.split("\\n");`;

fs.writeFileSync(`${folderName}/puzzle.js`, puzzleContent);
fs.writeFileSync(`${folderName}/input.txt`, "");
fs.writeFileSync(`${folderName}/example.txt`, "");
