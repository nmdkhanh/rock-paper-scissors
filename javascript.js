const possibleChoices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let stillPlaying = true
const RESULT_WIN = "Win roi, may tinh chon: "
const RESULT_LOSE = "Thua roi, may tinh chon: "
const RESULT_DRAW = "Hoa roi, may tinh chon: "
let result
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*3)
    return possibleChoices[randomIndex]
}
function playRound(playerChoice, computerChoice){
    while (!possibleChoices.includes(playerChoice.toLowerCase())){
        playerChoice = prompt("Nhap cho dung vao! Rock, Paper, Scissors?").toLowerCase()
    }
    if (playerChoice == computerChoice){
        result = RESULT_DRAW + computerChoice
    }
    else if ((playerChoice == "rock" & computerChoice == "scissors") || (playerChoice == "paper" & computerChoice == "rock") || (playerChoice == "scissors" & computerChoice == "paper")){
        result = RESULT_WIN + computerChoice
        playerScore ++
    }
    else {
        result = RESULT_LOSE + computerChoice
        computerScore ++
    }
    alert(result)
}

function playGame(){
    while (stillPlaying == true){
        playRound(prompt("Rock, Paper, Scissors? "), getComputerChoice())
         if (playerScore >= 3 || computerScore >= 3){
            stillPlaying = false
         }
    }
    alert("Diem cua ban: "+ playerScore +" va diem cua may tinh: " + computerScore)
}
playGame()

