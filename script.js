var choices = "RPS"
var wins = 0
var ties = 0
var loses = 0

function RPS () {

var userChoice = prompt("Enter R for rock, P for paper, or S for scissors")
var computerChoice = choices.charAt(Math.floor(Math.random() * choices.length))
if (userChoice === computerChoice) {
    ties++
    alert("It's a tie!")
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
    return RPS()
}

if (userChoice === "R" && computerChoice === "P") {
    loses++
    alert("You're a loser!")
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
    return RPS()
}

if (userChoice === "R" && computerChoice === "S") {
    wins++
    alert("You're a winner!")
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
}

if (userChoice === "P" && computerChoice === "R") {
    wins++
    alert("You're a winner!")
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
}

if (userChoice === "P" && computerChoice === "S"){
    loses++
    alert("You're a loser!")
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
}

if (userChoice === "S" && computerChoice === "P") {
    wins++
    alert("You're a winner!")
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
}

if (userChoice === "S" && computerChoice === "R") {
    loses++
    alert("Wins: " + wins + "; Ties: " + ties + "; Loses: " + loses)
}
}

