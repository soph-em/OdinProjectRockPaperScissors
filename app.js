//to keep running count
let playerScore = 0;
let computerScore = 0;
const rps = ["rock", "paper", "scissors"];

//selects R/P/S for computer choice
function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

// function for html buttons for user selection
function playerSelection(guess) {
  playRound(guess, getComputerChoice(rps));
}

function playRound(playerSelection, result) {
  let text = "";
  if (playerSelection == result) {
    text = "You Drew!";
  } else if (playerSelection == "paper" && result == "rock") {
    playerScore += 1;
    text = "You Win! Paper beats Rock!";
  } else if (playerSelection == "rock" && result == "paper") {
    computerScore += 1;
    text = "You Lose! Paper beats Rock!";
  } else if (playerSelection == "scissors" && result == "rock") {
    computerScore += 1;
    text = "You Lose! Rock beats Scissors";
  } else if (playerSelection == "rock" && result == "scissors") {
    playerScore += 1;
    text = "You Win! Rock beats Scissors!";
  } else if (playerSelection == "scissors" && result == "paper") {
    playerScore += 1;
    text = "You Win! Scissors beats Paper!";
  } else if (playerSelection == "paper" && result == "scissors") {
    computerScore += 1;
    text = "You Lose! Scissors beats Paper!";
  }

  let element = document.getElementById("score");

  element.innerText = `Your score: ${playerScore} Computer score: ${computerScore}`;

  game();

  return text;
}

function game() {
  if (playerScore === 5) {
    alert("You Won!");
  } else if (computerScore === 5) {
    alert("You Lost!");
  }
}
