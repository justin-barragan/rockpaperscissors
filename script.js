const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const computerPlay = () => {
    let result = Math.floor(Math.random() * 3 + 1);

    if (result === ROCK) return "Rock";
    
    else if (result === PAPER) return "Paper";

    else return "Scissors";
}

const formatInput = input => {
    return input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
}

const playRound = (playerSelection, computerSelection) => {
    // console.log(`${playerSelection}, ${computerSelection}`);
    if (playerSelection === "Rock") {
        switch(computerSelection) {
            case "Rock" : return "Tie! Double rock!";
            case "Paper" : return "Loss! Their paper beat your rock!";
            case "Scissors" : return "Win! Your rock beat their paper!";
        }
    }
    else if (playerSelection === "Paper") {
        switch(computerSelection) {
            case "Rock" : return "Win! Your paper beat their rock!";
            case "Paper": return "Tie! Double paper!";
            case "Scissors" : return "Loss! Their scissors beat your paper!";
        }
    }
    else {
        switch(computerSelection) {
            case "Rock" : return "Loss! Their rock beats your scissors!";
            case "Paper" : return "Win! Your scissors beats their paper!";
            case "Scissors" : return "Tie! Double scissors!";
        }
    }
}

console.log(playRound(computerPlay(), computerPlay()));

// let num1 = computerPlay();
// console.log(num1);