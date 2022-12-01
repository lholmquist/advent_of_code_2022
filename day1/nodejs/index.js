'use strict';

const fs = require('node:fs')

// Load the Text Data
fs.readFile('./calories-data.txt', (err, data) => {
  if (err) throw new Error(err);

  const stringData = data.toString();

  const parsedStringData = stringData.split('\n\n');

  const mapped = parsedStringData.map((d) => {
    return sum(d.split('\n'));
  })

  // Find the highest value
  const maxNumber = findMax(mapped);

  // this is the total calories
  console.log(maxNumber);

  const topThree = findMaxThree(mapped);

  // Find the top three
  console.log(topThree);
  console.log(sum(topThree));


});

function sum(entry) {
  return entry.reduce((acc, curr) => {
    return Number(acc) + Number(curr);
  }, 0)
}

function findMax(arr) {
  const max = Math.max(...arr);

  return max;
}

function findMaxThree(arr) {
  arr.sort((a, b) => {
    return b - a;
  });

  return [arr[0], arr[1], arr[2]];
}
