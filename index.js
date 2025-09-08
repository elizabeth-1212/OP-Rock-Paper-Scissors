// get random computer choice
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

//get human input
function getHumanChoice() {
    let choice = prompt("Choose your weapon: rock, paper, or scissors.");
    return choice;
}

//play the game
function playGame () {
    //set score variables to 0
    let computerScore = 0;
    let humanScore = 0;

//function to play 1 round
function playRound (humanChoice, computerChoice) {
    //humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } 
    //adding rules for game
    //if human wins, increase score by 1 point
    else { 
        if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") { 
        
        console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    //if computer wins, increase computer score by 1 point
        if (computerChoice === "rock" && humanChoice === "scissors" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
        }
    }
}
    //create loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound (getHumanChoice(), getComputerChoice()); 
    }
    //compute score and announce winner of game
    if (humanScore === computerScore) {
        console.log ("It's a tie!");
    } else if (humanScore > computerScore) {
        console.log ("You win!");
    } else {
        console.log ("Computer wins!");
    }
    //print end score
    console.log("PLAYER POINTS: " + humanScore);
    console.log("COMPUTER POINTS: " + computerScore);
}


playGame();



    

    




