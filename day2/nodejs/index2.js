'use strict';

const fs = require('node:fs');

// Load the data
fs.readFile('./data.txt', (err, data) => {
  if (err) throw new Error(err);

  const stringData = data.toString();

  //console.log(stringData);

  // convert to array?
  const parsedStringData = stringData.split('\n');

  const mapped = parsedStringData.map((m) => {
    const moves = m.split('');
    if (moves.length > 0) {
      return doGameShit(moves[0].trim(), moves[2].trim());
    }
  });

  const added = mapped.reduce((acc, next) => {
    if (next) {
      return acc + next;
    } else {
      return acc + 0;
    }
  }, 0);

  console.log(added);
});

const gameKey = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3 // Scissors
}

function convertToScores(arr) {
  // convert the A B C and X Y Z to scores
}

function doGameShit(theirMove, myMove) {
  let score = 0;
  // Tie
  if (myMove === 'Y') {
    // Choose the same thing
    score += 3;
    score += Number(gameKey[theirMove]);
  } else if (myMove === 'X') {
    // Must Lose
    score += 0;
    score += findMyMoveToLose(theirMove);
  } else {
    // WIn
    score += 6;
    score += findMyMoveToWin(theirMove);
  }

  return score;
}

function findMyMoveToWin(theirMove) {
    if (theirMove === 'A') {
    return 2;
  } else if (theirMove === 'B') {
    return 3;
  } else {
    return 1;
  }
}

function findMyMoveToLose(theirMove) {
  if (theirMove === 'A') {
    return 3;
  } else if (theirMove === 'B') {
    return 1;
  } else {
    return 2;
  }
}

/*

A for Rock, B for Paper, and C for Scissors.

X Lose, Y Tie, and Z Win

*/
