'use strict';

const fs = require('node:fs');

// Load the data
fs.readFile('./data.txt', (err, data) => {
  if (err) throw new Error(err);

  const stringData = data.toString();

  // convert to array?
  const parsedStringData = stringData.split('\n');

  const mapped = parsedStringData.map((d) => {
    // Get the length of the string
    // find the middle point
    const stringMiddle = d.length / 2;

    // split the array in half
    const compartmentOne = d.slice(0, stringMiddle);
    const compartmentTwo = d.slice(stringMiddle);

    // compare and find the same items in both
    return findCommonLetter(compartmentOne, compartmentTwo);
  });

  const redouched = mapped.reduce((acc, next) => {
    // Add those up based on priority
    console.log(next);
    return acc + (next ? convertToPriorityNumber(next) : 0);
  }, 0);

  console.log(redouched);

});

function convertToPriorityNumber(ch) {
  return ch.charCodeAt(0) < 97 ? ch.charCodeAt(0) - 38 : ch.charCodeAt(0) - 96;
}

function findCommonLetter(string1, string2) {
  let diff = '';
  string2.split('').forEach((ch, index) => {
    const foundString = string1.split('').find((s) => { return ch === s }) || '';
    if (!diff.includes(foundString)) {
      diff += foundString;
    }
  });
  return diff;
}
