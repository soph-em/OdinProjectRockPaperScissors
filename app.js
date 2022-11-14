
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const rps = ["rock", "paper", "scissors"]
const result = getComputerChoice(rps);
// console.log(result)

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,result) {
    if (playerSelection == result) {
        return "You Drew!"
    } 
    else if (playerSelection == "paper" && result == "rock"){
        playerScore +=1
        return "You Win! Paper beats Rock!"
         
    }
    else if (playerSelection == "rock" && result =="paper") {
        computerScore += 1
        return "You Lose! Paper beats Rock!"
    }
    else if (playerSelection == "scissors" && result == "rock"){
        computerScore += 1
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection == "rock" && result =="scissors"){
        playerScore +=1
        return "You Win! Rock beats Scissors!"
    }
    else if (playerSelection == "scissors" && result == "paper") {
        playerScore +=1
        return "You Win! Scissors beats Paper!"
    }
    else if (playerSelection == "paper" && result =="scissors"){
        computerScore += 1
        return "You Lose! Scissors beats Paper!"
    }
}
// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, result));

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        const playerSelection = prompt("what is your guess")
        console.log(playRound(playerSelection, result))
        
     }
}

game()