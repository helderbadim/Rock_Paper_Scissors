"use strict";

//Logic to get computer choice
let randomNumber = Math.trunc(Math.random() * 3) + 1;
let computerChoice;

//Logic to get Human choice
let humanChoice;
const getHumanChoice = function () {
  humanChoice = prompt(`Rock, paper or scissors?`).toLowerCase();
  console.log(humanChoice);
};

//Defining human and computer scores variables (they need to be mutable so we declare it using let)
let humanScore;
let computerScore;

//Associate random number to rock, paper or scissors
const getComputerChoice = function () {
  if (randomNumber === 1) {
    computerChoice = `rock`;
    console.log(computerChoice);
    return;
  } else if (randomNumber === 2) {
    computerChoice = `paper`;
    console.log(computerChoice);
    return;
  } else if (randomNumber === 3) {
    computerChoice = `scissors`;
    console.log(computerChoice);
    return;
  }
};

// Write the logic to play a single round
computerScore = 0;
humanScore = 0;

const playRound = function () {
  getHumanChoice();
  getComputerChoice();
  if (humanChoice !== computerChoice) {
    if (humanChoice === `rock` && computerChoice === `scissors`) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else if (humanChoice === `scissors` && computerChoice === `paper`) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else if (humanChoice === `paper` && computerChoice === `rock`) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
      computerScore++;
    }
  } else if (humanChoice === computerChoice) {
    console.log(`It's a draw!`);
  }
  console.log(humanScore);
  console.log(computerScore);
};

//Write the logic to play the game 5 times
for (let i = 0; i < 5; i++) {
  playRound();
}

//Display the winner and the respective scores
if (humanScore > computerScore) {
  console.log(`You won!😆`);
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
} else {
  console.log(`You lost!😿`);
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}
