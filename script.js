let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
// Generage the target value
const generateTarget = () => Math.floor(Math.random() * 10);


// Determine if the human or computer wins:
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const gapHuman = Math.abs(currentHumanGuess - target);
  const gapComputer = Math.abs(computerGuess - target);
  
  if(gapHuman <= gapComputer) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;
