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

function playGame(){

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

    for (let step = 0; step < 5; step++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }

    if (humanScore > computerScore){
        return alert(`You won! :)\nHuman Score: ${humanScore} - ComputerScore: ${computerScore}`);
    } else if (humanScore === computerScore){
        return alert(`It's a draw :0!\nHuman Score: ${humanScore} - ComputerScore: ${computerScore}`);
    } else {
        return alert(`You lose! :(\nHuman Score: ${humanScore} - ComputerScore: ${computerScore}`);
    }
    
}

playGame();