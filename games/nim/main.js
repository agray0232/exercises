var content = document.getElementById('content');
var takeInput = document.getElementById('takeInput');

var gameData = {
    gameRunning: true,
    refreshRate: 500,
    gameState: "playing",
    remainingPebbles: 16,
    activePlayer: "Player 1",
    numToTake: 3,
    maxToTake: 3,
    message: ""
}

setTimeout(run, gameData.refreshRate);

function run() {
    if (gameData.gameRunning) {
        switch (gameData.gameState) {
            case "initializing":
                break;
            case "playing":
                break;
            case "complete":
                break;
            default:
                break;
        }
        setMessage();
        content.innerHTML = renderGame();
        setTimeout(run, gameData.refreshRate);
    }
}

function setNumToTake(value) {
    gameData.numToTake = value;
}

function setMessage() {
    gameData.message = `It's ${gameData.activePlayer}'s turn! How many pebbles will you take?`
}

function renderGame() {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are ${gameData.remainingPebbles} pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                ${renderPebbles()}
            </div>
            <h4 class="mt-5">${gameData.message}</h4>
            <div>
                <select onchange="setNumToTake(value)" id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary">Take</button>
            </div>
        </div>
    `
}

function renderPebbles() {
    var pebblesHTML = ``;

    for (i = 0; i < gameData.remainingPebbles; i++) {
        if (i < gameData.numToTake) {
            pebblesHTML = pebblesHTML.concat(`<div class="pebble highlight"></div> `);
        }
        else {
            pebblesHTML = pebblesHTML.concat(`<div class="pebble"></div> `);
        }
    }

    return pebblesHTML;
}