
function getComputerChoice(){
    let compChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * compChoice.length);
    return compChoice[index];
}

let word = getComputerChoice();
console.log (word);


function getHumanChoice(){
    let humanChoice = prompt("Please choose: rock, paper, or scissors.").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert ("Invalid choice.");
        humanChoice = prompt("Please enter: rock, paper, or scissors.").toLowerCase();
    }
    return humanChoice;
} 
console.log (getHumanChoice);


function playRound (compChoice, humanChoice) {
    if (compChoice === humanChoice) {
        return "It's a tie.";
    }

    if (
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

console.log (playRound(compChoice, humanChoice));