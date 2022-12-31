


//selects random from rock, paper, or scissors
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

//function for html buttons for user selection
function playerSelection(guess) {
    const rps = ["rock", "paper", "scissors"]
    console.log(playRound(guess,getComputerChoice(rps)))
    
}

//to keep running count
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection,result) {
    let text = ''
    if (playerSelection == result) {
        
        text = "You Drew!"
    } 
    else if (playerSelection == "paper" && result == "rock"){
        playerScore +=1
        text = "You Win! Paper beats Rock!"
         
    }
    else if (playerSelection == "rock" && result =="paper") {
        computerScore += 1
        text = "You Lose! Paper beats Rock!"
    }
    else if (playerSelection == "scissors" && result == "rock"){
        computerScore += 1
        text = "You Lose! Rock beats Scissors"
    }
    else if (playerSelection == "rock" && result =="scissors"){
        playerScore +=1
        text = "You Win! Rock beats Scissors!"
    }
    else if (playerSelection == "scissors" && result == "paper") {
        playerScore +=1
        text = "You Win! Scissors beats Paper!"
    }
    else if (playerSelection == "paper" && result =="scissors"){
        computerScore += 1
        text = "You Lose! Scissors beats Paper!"
    }
    let element = document.getElementById('score') 
    // console.log(element)
    element.innerText = `Your score: ${playerScore} Computer score: ${computerScore}`
    return text
}

function game() {
 
    for (let i = 0; i <= 5; i++) {
        if (i < 5){
            playRound()
            let result = getComputerChoice(rps);
            let playerSelection = playerSelection()
            // const playerSelection = prompt("what is your guess")
            console.log(playRound(playerSelection, result))
        }
        else if (i == 5){
            
            if (playerScore > computerScore){
                console.log("You win this round!")
            }
            else if (computerScore > playerScore){
                console.log("Computer wins this round!")
            }
            else {
                console.log("You drew!")
            }
        }
        }
        
     };
     



