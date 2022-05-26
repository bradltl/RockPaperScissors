console.log("Beginning Game")

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log("Player selects: " + playerSelection)
console.log("Computer selects: " + computerSelection)


function game() {
    //Play 5 rounds and keep score, stop when a player gets to 3
    for (let i = 0; i < 5; i++) {



    }



}

function playRound(playerSelection, computerSelection) {

    //Compare


}

function computerPlay() {
    //Randomly select computer choice
    const computerChoiceNum = getRandomInt(3);
    let computerChoice = ""

    switch(computerChoiceNum) {
        case (computerChoiceNum == 0):
            computerChoice = "rock";
            break;
        case (computerChoiceNum == 1):
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";

    }

    return computerChoice
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



