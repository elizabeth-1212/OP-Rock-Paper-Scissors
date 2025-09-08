
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
    let computerScore = 0;
    let humanScore = 0;


function playRound (humanChoice, computerChoice) {
    //humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } 
    
    else { 
        if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") { 
        
        console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }

        if (computerChoice === "rock" && humanChoice === "scissors" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
        }
    }
}

    for (let i = 0; i < 5; i++) {
        playRound (getHumanChoice(), getComputerChoice()); 
    }

    if (humanScore === computerScore) {
        console.log ("It's a tie!");
    } else if (humanScore > computerScore) {
        console.log ("You win!");
    } else {
        console.log ("Computer wins!");
    }

    console.log("PLAYER POINTS: " + humanScore);
    console.log("COMPUTER POINTS: " + computerScore);
}


playGame();



    

    




/*
// Get the computer's choice
const computerSelection = getComputerChoice();

// Prompt the player for their choice
const playerSelection = prompt('Choose your weapon: rock, paper, or scissors?');

// Check the result and display it
const result = playRound(playerSelection, computerSelection);
alert(`Computer chose: ${computerSelection}\nYour choice: ${playerSelection}\n\n${result}`);
*/


