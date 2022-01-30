const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const computerPlay = () => {
    let result = Math.floor(Math.random() * 3 + 1);

    if (result === ROCK) return "Rock";
    
    else if (result === PAPER) return "Paper";

    else return "Scissors";
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection = "Rock") {
        switch(computerSelection) {
            case "Rock" : return "Tie! Double rock!";
            case "Paper" : return "Loss! Their paper beat your rock!";
            case "Scissors" : return "Win! Your rock beat their paper!";
        }
    }
}

console.log(playRound("Rock", "Rock"));

// let num1 = computerPlay();
// console.log(num1);