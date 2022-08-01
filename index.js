function getComputerChoice(){
    let computerNumber = random(3);
    let computerGuess = "";

    switch (computerNumber){
        case 1: 
            computerGuess = "Rock";
            break;
        case 2:
            computerGuess = "Paper";
            break;
        case 3:
            computerGuess = "Scissors";
            break;
        default:
        break;
    }
};