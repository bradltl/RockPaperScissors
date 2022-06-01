console.log("Beginning Game")

const playerSelection = "rock";
//Prompt user for choice each round
//Convert to LowerCase
//Validate choice

let computerSelection = "";
let roundResult = "";




console.log(game())


function game() {
    //Play 5 rounds and keep score, stop when a player gets to 3
    for (let i = 1; i < 6; i++) {
        computerSelection = computerPlay();
        console.log("Round: " + i)
        console.log("Player selects: " + playerSelection)
        console.log("Computer selects: " + computerSelection)
        roundResult = playRound(playerSelection, computerSelection);
        console.log("Round result: " + roundResult)



    }



}

function playRound() {

    //Show inputs
    //console.log(playerSelection)
    //console.log(computerSelection)

    //Compare
    let playRoundResult = "";
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playRoundResult = "Rock beats Scissors. Player Wins";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        playRoundResult = "Paper beats Rock. Computer Wins";
    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        playRoundResult = "Both select Rock. It is a tie.";
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        playRoundResult = "Both select Scissors. It is a tie";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playRoundResult = "Scissors beats Paper. Player Wins";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        playRoundResult = "Rock beats Scissors. Computer Wins";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        playRoundResult = "Scissors beats Paper. Computer Wins";
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        playRoundResult = "Both select Paper. It is a tie";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        playRoundResult = "Paper beats Rock. Players Wins";
    }


    return playRoundResult


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
  

