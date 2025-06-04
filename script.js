function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice
    
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