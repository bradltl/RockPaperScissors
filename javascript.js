console.log("Beginning Game")

//const playerSelection = "rock";

let computerSelection = "";
let roundResult = "";
let playerScore = 0;
let computerScore = 0;
let keepPlaying = "true";


//console.log(game())
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', playRound));


function game() {
    //Play rounds and keep score, stop when a player gets to 3

   let i = 1;
   
   while (keepPlaying === "true") {
        computerSelection = computerPlay();
        console.log("Round: " + i)
        console.log("Player selects: " + playerSelection)
        console.log("Computer selects: " + computerSelection)
        roundResult = playRound(playerSelection, computerSelection);
        console.log("Round result: " + roundResult)
        console.log("Player score: "+ playerScore)
        console.log("Computer score: " + computerScore)

        keepPlaying = gameOver(playerScore, computerScore);
        
        i = i +1;

   }
   



}


function playRound(e) {

    //Compare
    let playRoundResult = "";
    let playerSelection = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (playerSelection === computerSelection) {
        playRoundResult = "Both select Paper. It is a tie";
    }   else if (playerSelection == "rock" && computerSelection == "scissors" || 
            playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "rock") {
                playRoundResult = "Player Wins";
                playerScore = playerScore + 1; 
    } else {
        playRoundResult = "Computer Wins";
        computerScore = computerScore + 1;
    }


    return playRoundResult


}

function gameOver(playerScore, computerScore) {
  
    if (playerScore === 3 || computerScore === 3){
        console.log("gameover = true")
        return keepPlaying = "false" 
    } else {
        console.log("gameover = false")
        return keepPlaying = "true" 
    }
    
    
}


function computerPlay() {
    //Randomly select computer choice
    let computerChoiceNum = getRandomInt(3);
    let computerChoice = "shotgun"

    switch(computerChoiceNum) {
        case (computerChoiceNum = 0):
            computerChoice = "rock";
            break;
        case (computerChoiceNum = 1):
            computerChoice = "paper";
            break;
        case (computerChoiceNum = 2):
            computerChoice = "scissors";
            break;

    }

    return computerChoice
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

