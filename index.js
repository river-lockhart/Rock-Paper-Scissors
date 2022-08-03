const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const yourScore = document.querySelector("#yourScore");
const oppScore = document.querySelector("#oppScore");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
  keepScore();
  yourScore.textContent = `Your Score: ${playerScore}`;
  oppScore.textContent = `Opponent Score: ${computerScore}`;
  winnerScreen();

  //May come back to alter this function. Currently replaced by winnerScreen
  //restartGame(); 
}));

function computerTurn(){
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch(randNum){
    case 1:
      computer = "Rock";
      break;
    case 2: 
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner(){

  if(player == computer){
    return "Draw!";
  } 
  else if (computer == "Rock"){
    return (player == "Paper") ? "You Win!" : "You Lose!"
  }
  else if (computer == "Paper"){
    return (player == "Scissors") ? "You Win!" : "You Lose!"
  }
  else if (computer == "Scissors"){
    return (player == "Rock") ? "You Win!" : "You Lose!"
  }
}


function keepScore(){
  if (computer == "Rock" && player == "Paper"){
    playerScore ++;
  }
  else if (computer == "Paper" && player == "Rock"){
    computerScore ++;
  }
  else if (computer == "Paper" && player == "Scissors"){
    playerScore ++;
  }
  else if (computer == "Scissors" && player == "Paper"){
    computerScore ++;
  }
  else if (computer == "Scissors" && player == "Rock"){
    playerScore ++;
  }
  else if (computer == "Rock" && player == "Scissors"){
    computerScore ++;
  }
}

//Replaced by winnerScreen(). May come back to this function.
/*function restartGame(){
  if(playerScore == 5 || computerScore == 5){
      setTimeout(function(){
      window.location.reload();
   }, 1500);
  }
}*/

function winnerScreen(){
  if(playerScore === 5){
    alert("YOU WON, CONGRATULATIONS!");
      document.location.reload();
      clearInterval(interval);
  } else if(computerScore === 5){
    alert("YOU LOST, TRY AGAIN!");
      document.location.reload();
      clearInterval(interval);
  }
}





