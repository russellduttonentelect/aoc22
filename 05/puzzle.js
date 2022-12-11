const fs = require("fs");

const fileContents = fs.readFileSync("example.txt").toString();
// const fileContents = fs.readFileSync("input.txt").toString();
const _ = require("lodash");
const lines = fileContents.split("\n");