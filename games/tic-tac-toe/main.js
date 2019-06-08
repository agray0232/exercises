var content = document.getElementById('content');
var gameDataStorage =
{
    gameRunning: true,
    gameState: "initializing",
    refreshRate: 500,
    board:
        [["", "", ""],
        ["", "", ""],
        ["", "", ""]],
    startingPlayer: "X",
    activePlayer: "",
    winner: "",
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
                }
                break;
            case "complete":
                window.alert("Winner!");
                break;
            default:
                break;
        }
        content.innerHTML = renderBoard(gameDataStorage.board);

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
    gameDataStorage.plays = 0;
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
    }
    return winnerFound;
}

function checkRow(index) {
    var foundWin = false;
    var row = gameDataStorage.board[0]
    if (row[0] !== "-" && row[0] === row[1] && row[0] === row[2]) {
        foundWin = true;
        gameDataStorage.winner = row[0];
    }
    return foundWin;
}

function checkCol(index) {

}

function renderBoard(board) {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player ${gameDataStorage.activePlayer}'s turn!</h4>
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
    `
}

