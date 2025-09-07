
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound (humanChoice, compChoice) {
    
    if (humanChoice === compChoice) {
        return "It's a tie!";
    } 
    
    else if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper") 
    ){
        return `You win, ${humanChoice} beats ${compChoice}.`;
    }
    return `You lose, ${compChoice} beats ${humanChoice}.`;
}



// Get the computer's choice
const computerSelection = getComputerChoice();

// Prompt the player for their choice
const playerSelection = prompt('Choose your weapon: rock, paper, or scissors?');

// Check the result and display it
const result = playRound(playerSelection, computerSelection);
alert(`Computer chose: ${computerSelection}\nYour choice: ${playerSelection}\n\n${result}`);


