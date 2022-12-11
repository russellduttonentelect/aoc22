const fs = require("fs");

const fileContents = fs.readFileSync("example.txt").toString();
// const fileContents = fs.readFileSync("input.txt").toString();
const _ = require("lodash");
const markers = fileContents.split("");

const packetLength = 14;
const end = markers.length;

let index = packetLength;
while (index <= end) {
  const indexes = _.range(index - packetLength, index);
  const values = _.at(markers, indexes);

  const unique = _.uniq(values);

  if (unique.length == packetLength) {
    break;
  }

  index += 1;
}

console.log(index);
