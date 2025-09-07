
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

/*
function getHumanChoice(){
    let humanChoice = prompt("Please choose: rock, paper, or scissors.").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert ("Invalid choice.");
        humanChoice = prompt("Please enter: rock, paper, or scissors.").toLowerCase();
    }
    return humanChoice;
} 
console.log (getHumanChoice);
*/

function playRound (compChoice, humanChoice) {
    if (compChoice === humanChoice) {
        return "It's a tie.";
    }

    else if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "scissors" && compChoice === "paper") ||
        (humanChoice === "paper" && compChoice === "rock")
    ){
        return `You win, ${humanChoice} beats ${compChoice}.`; 
    }

    return `You lose, ${compChoice} beats ${humanChoice}.`;
}

const getComputerChoice = compChoice();
const getHumanChoice = humanChoice();


/*
function getHumanChoice(){
    let humanChoice = prompt("Please choose: rock, paper, or scissors.").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert ("Invalid choice.");
        humanChoice = prompt("Please enter: rock, paper, or scissors.").toLowerCase();
    }
    return humanChoice;
} 
console.log (getHumanChoice);
*/

// Get the computer's choice
const computerChoice = getComputerChoice();

// Prompt the player for their choice
const playerChoice = prompt('Choose your weapon: rock, paper, or scissors?');

// Check the result and display it
const result = playRound(playerChoice, computerChoice);
alert(`Computer chose: ${computerChoice}\nYour choice: ${playerChoice}\n\n${result}`);


