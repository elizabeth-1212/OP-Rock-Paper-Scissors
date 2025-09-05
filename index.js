
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

let word = getComputerChoice();
console.log (word);


