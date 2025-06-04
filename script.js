function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randomNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        default:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Pick an option.");
    return humanChoice
}

let computerScore = 0;
let humanScore = 0;