function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
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

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}.`
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}.`
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}.`
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    } else {
        return "It's a draw! Try again."
    }
}