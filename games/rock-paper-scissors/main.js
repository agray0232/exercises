var content = document.getElementById('content');

var gameData =
{
    gameRunning: true,
    message: "",
    winner: "",
    playerChoice: "",
    computerChoice: ""
}

content.innerHTML = renderGame();

function play(choice) {
    gameData.playerChoice = choice;
    gameData.computerChoice = chooseRandom();
    gameData.winner = getWinner(gameData.playerChoice, gameData.computerChoice);
    setMessage();

    content.innerHTML = renderGame();
}

function chooseRandom() {
    var choice = "Scissors";

    return choice;
}

function getWinner(playerChoice, computerChoice) {
    var winner = "";

    if (playerChoice === computerChoice) {
        winner = ""; // Redundant but clear
    }
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")) {
        winner = "Player";
    }
    else {
        winner = "Computer";
    }
    return winner;
}

function setMessage() {
    switch (gameData.winner) {
        case "Player":
            gameData.message = "You win!";
            break;
        case "Computer":
            gameData.message = "Computer won! Try again.";
            break;
        case "":
            gameData.message = "Tie! What are the chances?!";
            break;
        default:
            break;
    }
}


function renderGame() {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button onclick="play(\'Rock\')" class="btn btn-primary">Rock</button>
                <button onclick="play(\'Paper\')" class="btn btn-primary">Paper</button>
                <button onclick="play(\'Scissors\')" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${gameData.playerChoice}</b></div>
                <div class="m-5">The computer played: <b>${gameData.computerChoice}</b></div>
            </div>
            <h1 class="text-center">${gameData.message}</h1>
        </div>
    `
}