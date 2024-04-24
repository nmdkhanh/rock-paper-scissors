const possibleChoices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let stillPlaying = true
const RESULT_WIN = "Win roi, may tinh chon: "
const RESULT_LOSE = "Thua roi, may tinh chon: "
const RESULT_DRAW = "Hoa roi, may tinh chon: "
let result
const yourScoreDisplay = document.querySelector(".score #your-score")
const computerScoreDisplay = document.querySelector(".score #computer-score")

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*3)
    return possibleChoices[randomIndex]
}
function playRound(playerChoice, computerChoice){
        if (playerChoice == computerChoice){
            result = RESULT_DRAW + computerChoice
        }
        else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
            result = RESULT_WIN + computerChoice
            playerScore ++
        }
        else {
            result = RESULT_LOSE + computerChoice
            computerScore ++
        }
        yourScoreDisplay.textContent = "Your score: " + playerScore;
        computerScoreDisplay.textContent = "Computer score: " + computerScore;
        document.querySelector(".result").textContent = result
        if (playerScore >= 5 || computerScore >=5){
            let playAgain = confirm("Game Over! \n" + result +"\nYour score: " + playerScore + "\nComputer score: " + computerScore+ "\nDo you want to play again?");
            if (playAgain) {
                playerScore = 0;
                computerScore = 0;
                yourScoreDisplay.textContent = "Your score: " + playerScore;
                computerScoreDisplay.textContent = "Your score: " + computerScore;
                stillPlaying = true
            }
            else{
                alert("Thanks for playing!")
            }
        }
}


const rockChoice = document.querySelector("#rock");
rockChoice.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperChoice = document.querySelector("#paper");
paperChoice.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsChoice = document.querySelector("#scissors");
scissorsChoice.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
