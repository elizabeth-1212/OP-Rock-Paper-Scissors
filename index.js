
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Choose your weapon: rock, paper, or scissors.");
    return choice;
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;
}

function playRound (humanChoice, computerChoice) {
    //humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } 
    
    else if 
        (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") { 
        
        console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }

    else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

/*
// Get the computer's choice
const computerSelection = getComputerChoice();

// Prompt the player for their choice
const playerSelection = prompt('Choose your weapon: rock, paper, or scissors?');

// Check the result and display it
const result = playRound(playerSelection, computerSelection);
alert(`Computer chose: ${computerSelection}\nYour choice: ${playerSelection}\n\n${result}`);
*/


