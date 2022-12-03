'use strict';

const fs = require('node:fs');

// Load the data
fs.readFile('./data.txt', (err, data) => {
  if (err) throw new Error(err);

  const stringData = data.toString();

  // convert to array?
  const parsedStringData = stringData.split('\n');
  // parse into groups of three
  const threed = [];
  let howManyTimes = 0;
  let temp = [];

  parsedStringData.forEach((entry) => {
    if (howManyTimes < 3) {
      temp.push(entry);
      howManyTimes++;
    } else {
      threed.push(temp);
      temp = [];
      temp.push(entry);
      howManyTimes = 1;
    }
  });

  // console.log(threed);
  const commonLettersArray = threed.map((arr) => {
   return findCommonLetter(...arr);
  });

  const redouched = commonLettersArray.reduce((acc, next) => {
    // Add those up based on priority
    return acc + (next ? convertToPriorityNumber(next) : 0);
  }, 0);

  console.log(redouched);

});

function convertToPriorityNumber(ch) {
  return ch.charCodeAt(0) < 97 ? ch.charCodeAt(0) - 38 : ch.charCodeAt(0) - 96;
}

function findCommonLetter(string1, string2, string3) {
  let diff = '';
  string2.split('').forEach((ch, index) => {
    const foundString1 = string1.split('').find((s) => { return ch === s }) || '';
    const foundString3 = string3.split('').find((s) => { return ch === s }) || '';
    if (foundString1 === foundString3) {
      if (!diff.includes(foundString1)) {
       diff += foundString1;
      }
    }
  });

  console.log(diff);
  return diff;
}
