var content = document.getElementById('content');

var gameState = {
    remainingPebbles: 3,
    activePlayer: "Player 1",
    numToTake: 0,
    maxToTake: 3,
    message: ""
}

setMessage();
content.innerHTML = renderGame();


function setMessage() {
    gameState.message = `It's ${gameState.activePlayer}'s turn! How many pebbles will you take?`
}

function renderGame() {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are ${gameState.remainingPebbles} pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                ${renderPebbles()}
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">${gameState.message}</h4>
            <div>
                <select id="takeInput">
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
    var pebblesHTML = `<div class="pebble"></div> `.repeat(gameState.remainingPebbles);
    return pebblesHTML;
}