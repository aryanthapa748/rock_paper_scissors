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

const player = prompt("Choose one: Rock, Paper, or Scissors");
const playerSelection = player.toLowerCase();
const computerSelection = getComputerChoice();

console.log(`Computer chose ${computerSelection}!`);
console.log(`Player chose ${playerSelection}!`);
console.log(playRound(playerSelection, computerSelection));

const resultMessage = playRound(playerSelection, computerSelection);
alert(resultMessage + "\nComputer chose " + computerSelection + ", You chose " + playerSelection + " !");
