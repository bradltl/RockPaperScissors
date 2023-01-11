console.log("Beginning Game")

const playerSelection = "rock";
//Prompt user for choice each round
//Convert to LowerCase
//Validate choice

let computerSelection = "";
let roundResult = "";
let playerScore = 0;
let computerScore = 0;
let keepPlaying = "true";


console.log(game())


function game() {
    //Play 5 rounds and keep score, stop when a player gets to 3
    console.log("Begin Game Function")
    //playerScore = 3 || computerScore = 3
    //i < 6
    /*for (let i = 1; i < 20; i++) {
        computerSelection = computerPlay();
        console.log("Round: " + i)
        console.log("Player selects: " + playerSelection)
        console.log("Computer selects: " + computerSelection)
        roundResult = playRound(playerSelection, computerSelection);
        console.log("Round result: " + roundResult)
        console.log("Player score: "+ playerScore)
        console.log("Computer score: " + computerScore)
        console.log("Keep playing:" + keepPlaying)
    }
    */

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



        //gameOver(playerScore, computerScore)
        console.log("Before keepPlaying = " + keepPlaying)
        keepPlaying = gameOver(playerScore, computerScore);
        console.log("After keepPlaying = " + keepPlaying)        
        //keepPlaying = false;
        
        i = i +1;

   }
   



}


function playRound() {

    //Compare
    let playRoundResult = "";
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playRoundResult = "Rock beats Scissors. Player Wins";
        playerScore = playerScore + 1;

    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        playRoundResult = "Paper beats Rock. Computer Wins";
        computerScore = computerScore + 1;

    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        playRoundResult = "Both select Rock. It is a tie.";

    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        playRoundResult = "Both select Scissors. It is a tie";

    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playRoundResult = "Scissors beats Paper. Player Wins";
        playerScore = playerScore + 1;

    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        playRoundResult = "Rock beats Scissors. Computer Wins";
        computerScore = computerScore + 1;

    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        playRoundResult = "Scissors beats Paper. Computer Wins";
        computerScore = computerScore + 1;

    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        playRoundResult = "Both select Paper. It is a tie";

    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        playRoundResult = "Paper beats Rock. Players Wins";
        playerScore = playerScore + 1;

    }

    return playRoundResult


}

function gameOver(playerScore, computerScore) {
    
    console.log("Begin gameOver Function")
    console.log("gO-PS = " +playerScore)
    console.log("gO-CS = " +computerScore)
    
    //console.log("gO keepPlaying = " + keepPlaying)
      

    
    if (playerScore === 3){
        //|| (computerScore === 3)
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
    //console.log(computerChoiceNum)

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
  

