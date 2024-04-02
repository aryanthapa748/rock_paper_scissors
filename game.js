function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock") {
    if (computerSelection === "paper"){
      return "You loose!";
    } else if(computerSelection === "scissors"){
      return "You win!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock"){
      return "You win!";
    } else if(computerSelection === "scissors"){
      return "You loose!";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper"){
      return "You win!";
    } else if(computerSelection === "rock"){
      return "You loose!";
    }
}

if (playerSelection === computerSelection){
      return "It's a tie !!";
    }

    else {
      return "Invalid Choice. Enter a valid choice !!"
    }
}

function playGame(){
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++ ){
    const player = prompt("Lets play 5 rounds !! \nChoose one: Rock, Paper, or Scissors");
    const playerSelection = player.toLowerCase();
    const computerSelection = getComputerChoice();

    const resultMessage = playRound(playerSelection, computerSelection);
    alert(resultMessage + "\nComputer chose " +  computerSelection + ", You chose " + playerSelection);

    if (resultMessage.includes("win")){
      playerScore++;
    } else if (resultMessage.includes("lose")){
      computerScore++;
    }
  }
    if(playerScore > computerScore){
      alert("You won the game! Final score: You - " + playerScore + " , Computer - " + computerScore);
    } else if (computerScore > playerScore){
      alert("You lost the game! Final score: You - " + playerScore + " , Computer - " + computerScore);
    } else {
      alert("It's a tie! Final score: You - " + playerScore + ", Computer - " + computerScore);
    }

  }

  playGame();
