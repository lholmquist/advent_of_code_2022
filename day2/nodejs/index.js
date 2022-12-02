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
  C: 3, // Scissors
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3 // Scissors
}

function convertToScores(arr) {
  // convert the A B C and X Y Z to scores
}

function doGameShit(theirMove, myMove) {
  let score = 0;
  // Tie
  if (gameKey[theirMove] === gameKey[myMove]) {
    score += 3;
    score += Number(gameKey[myMove]);
  } else if (myMove === 'Z' && theirMove === 'B') {
    // Win with scissors
    score += 6;
    score += Number(gameKey[myMove]);
  } else if (myMove === 'Y' && theirMove === 'A') {
    // Win with paper
    score += 6;
    score += Number(gameKey[myMove]);
  } else if (myMove === 'X' && theirMove === 'C') {
    // Win with Rock
    score += 6;
    score += Number(gameKey[myMove]);
  } else {
    // Lost
    score += 0;
    score += Number(gameKey[myMove]);
  }

  return score;
}


/*

A for Rock, B for Paper, and C for Scissors.

X for Rock, Y for Paper, and Z for Scissors


The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

*/
