var content = document.getElementById('content');
var gameDataStorage =
{
    gameRunning: true,
    gameState: "initializing",
    refreshRate: 750,
    board:
        [["", "", ""],
        ["", "", ""],
        ["", "", ""]],
    message: "",
    startingPlayer: "X",
    activePlayer: "",
    winner: "",
    playAgainClass: "",
    plays: 0,
    minPlays: 4,
    boardSize: [3, 3]
}

setTimeout(run, gameDataStorage.refreshRate);

function run() {
    if (gameDataStorage.gameRunning) {
        switch (gameDataStorage.gameState) {
            case "initializing":
                intializeGame(gameDataStorage.startingPlayer);
                break;
            case "playing":
                if (checkWinner()) {
                    gameDataStorage.gameState = "complete";
                    gameDataStorage.playAgainClass = "visible";
                }
                break;
            case "complete":
                break;
            default:
                break;
        }
        setMessage();
        content.innerHTML = renderBoard(gameDataStorage.board);
        //debugger;
        setTimeout(run, gameDataStorage.refreshRate);
    }
}

function intializeGame(startingPlayer) {
    gameDataStorage.activePlayer = gameDataStorage.startingPlayer;
    gameDataStorage.board =
        [["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]];
    gameDataStorage.gameState = "playing";
    gameDataStorage.message = `It's player ${gameDataStorage.activePlayer}'s turn!`;
    gameDataStorage.plays = 0;
    gameDataStorage.playAgainClass = "invisible";
}

function markSpace(row, column) {
    gameDataStorage.board[row][column] = gameDataStorage.activePlayer;
    gameDataStorage.plays++;
    switchPlayer();
}

function switchPlayer() {
    switch (gameDataStorage.activePlayer) {
        case "X":
            gameDataStorage.activePlayer = "O";
            break;
        case "O":
            gameDataStorage.activePlayer = "X";
            break;
        default:
            break;
    }
}

function checkWinner() {
    var winnerFound = false;
    if (gameDataStorage.plays > gameDataStorage.minPlays) {
        for (i = 0; i < gameDataStorage.boardSize[0]; i++) {
            if (checkRow(i)) {
                winnerFound = true;
            }
        }
        for (i = 0; i < gameDataStorage.boardSize[1]; i++) {
            if (checkCol(i)) {
                winnerFound = true;
            }
        }
        if (checkDiagonal()) {
            winnerFound = true;
        }
    }
    return winnerFound;
}

function checkRow(index) {
    var foundWin = false;
    var row = gameDataStorage.board[index];
    if (row[0] !== "-" && row[0] === row[1] && row[0] === row[2]) {
        foundWin = true;
        gameDataStorage.winner = row[0];
    }
    return foundWin;
}

function checkCol(index) {
    var foundWin = false;
    if (gameDataStorage.board[0][index] !== "-" &&
        gameDataStorage.board[0][index] === gameDataStorage.board[1][index] &&
        gameDataStorage.board[0][index] === gameDataStorage.board[2][index]) {
        foundWin = true;
        gameDataStorage.winner = gameDataStorage.board[0][index];
    }
    return foundWin;
}

function checkDiagonal() {
    var foundWin = false;
    if (gameDataStorage.board[0][0] !== "-" &&
        gameDataStorage.board[0][0] === gameDataStorage.board[1][1] &&
        gameDataStorage.board[0][0] === gameDataStorage.board[2][2]) {
        foundWin = true;
        gameDataStorage.winner = gameDataStorage.board[0][0];
    }
    if (gameDataStorage.board[0][2] !== "-" &&
        gameDataStorage.board[0][2] === gameDataStorage.board[1][1] &&
        gameDataStorage.board[0][2] === gameDataStorage.board[2][0]) {
        foundWin = true;
        gameDataStorage.winner = gameDataStorage.board[0][2];
    }
    return foundWin;
}

function setMessage() {
    switch (gameDataStorage.gameState) {
        case "initializing":
            gameDataStorage.message = "";
            break;
        case "playing":
            gameDataStorage.message = `It's player ${gameDataStorage.activePlayer}'s turn!`;
            break;
        case "complete":
            if (gameDataStorage.winner !== "") {
                gameDataStorage.message = `Player ${gameDataStorage.winner} won!`;
            }
            else {
                gameDataStorage.message = "Tie!";
            }
            break;
        default:
            break;
    }
}

function renderBoard(board) {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>${gameDataStorage.message}</h4>
            <div class="w-50 text-center">
                <button onclick="markSpace(0,0)">${board[0][0]}</button>
                <button onclick="markSpace(0,1)">${board[0][1]}</button>
                <button onclick="markSpace(0,2)">${board[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="markSpace(1,0)">${board[1][0]}</button>
                <button onclick="markSpace(1,1)">${board[1][1]}</button>
                <button onclick="markSpace(1,2)">${board[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="markSpace(2,0)">${board[2][0]}</button>
                <button onclick="markSpace(2,1)">${board[2][1]}</button>
                <button onclick="markSpace(2,2)">${board[2][2]}</button>
            </div>
        </div>  
        <div class="${gameDataStorage.playAgainClass} container d-flex flex-column justify-content-start align-items-center">
            <button onclick="gameDataStorage.gameState=\'initializing\';" class="text-center" id="PlayAgain">Play again</button>
        </div>
    `
}

