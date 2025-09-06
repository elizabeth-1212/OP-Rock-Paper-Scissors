
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

let word = getComputerChoice();
console.log (word);


function getHumanChoice(){
    let choice = prompt('Please choose: rock, paper, or scissors.').toLowerCase();

    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        alert ('Invalid choice.');
        choice = prompt('Please enter: rock, paper, or scissors.').toLowerCase();
    }
    return choice;
} 
console.log (getHumanChoice);
