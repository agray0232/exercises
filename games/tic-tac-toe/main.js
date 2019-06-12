var content = document.getElementById('content');
var gameConfig =
{
    refreshRate: 750,
    board:
        [["", "", ""],
        ["", "", ""],
        ["", "", ""]],
    message: "",
    startingPlayer: "X",
    minPlays: 4,
    maxPlays: 9,
    boardSize: [3, 3]
}
var gameData =
{
    gameRunning: true,
    gameState: "initializing",
    board:
        [["", "", ""],
        ["", "", ""],
        ["", "", ""]],
    message: "",
    activePlayer: "",
    winner: "",
    playAgainClass: "",
    plays: 0
}

setTimeout(run, gameConfig.refreshRate);

function run() {
    if (gameData.gameRunning) {
        switch (gameData.gameState) {
            case "initializing":
                intializeGame(gameConfig.startingPlayer);
                break;
            case "playing":
                if (checkWinner() || checkTie()) {
                    gameData.gameState = "complete";
                    gameData.playAgainClass = "visible";
                }
                break;
            case "complete":
                break;
            default:
                break;
        }
        setMessage();
        content.innerHTML = renderBoard(gameData.board);
        setTimeout(run, gameConfig.refreshRate);
    }
}

function intializeGame(startingPlayer) {
    gameData.activePlayer = gameConfig.startingPlayer;
    gameData.board =
        [["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]];
    gameData.gameState = "playing";
    gameData.message = `It's player ${gameData.activePlayer}'s turn!`;
    gameData.plays = 0;
    gameData.playAgainClass = "invisible";
}

function markSpace(row, column) {
    gameData.board[row][column] = gameData.activePlayer;
    gameData.plays++;
    switchPlayer();
}

function switchPlayer() {
    debugger;
    switch (gameData.activePlayer) {
        case "X":
            gameData.activePlayer = "O";
            break;
        case "O":
            gameData.activePlayer = "X";
            break;
        default:
            break;
    }
}

function checkTie() {
    var tie = false;
    if (gameData.plays === gameConfig.maxPlays) {
        tie = true;
    }
    return tie;
}

function checkWinner() {
    var winnerFound = false;
    if (gameData.plays > gameConfig.minPlays) {
        for (i = 0; i < gameConfig.boardSize[0]; i++) {
            if (checkRow(i)) {
                winnerFound = true;
            }
        }
        for (i = 0; i < gameConfig.boardSize[1]; i++) {
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
    var row = gameData.board[index];
    if (row[0] !== "-" && row[0] === row[1] && row[0] === row[2]) {
        foundWin = true;
        gameData.winner = row[0];
    }
    return foundWin;
}

function checkCol(index) {
    var foundWin = false;
    if (gameData.board[0][index] !== "-" &&
        gameData.board[0][index] === gameData.board[1][index] &&
        gameData.board[0][index] === gameData.board[2][index]) {
        foundWin = true;
        gameData.winner = gameData.board[0][index];
    }
    return foundWin;
}

function checkDiagonal() {
    var foundWin = false;
    if (gameData.board[0][0] !== "-" &&
        gameData.board[0][0] === gameData.board[1][1] &&
        gameData.board[0][0] === gameData.board[2][2]) {
        foundWin = true;
        gameData.winner = gameData.board[0][0];
    }
    if (gameData.board[0][2] !== "-" &&
        gameData.board[0][2] === gameData.board[1][1] &&
        gameData.board[0][2] === gameData.board[2][0]) {
        foundWin = true;
        gameData.winner = gameData.board[0][2];
    }
    return foundWin;
}

function setMessage() {
    switch (gameData.gameState) {
        case "initializing":
            gameData.message = "";
            break;
        case "playing":
            gameData.message = `It's player ${gameData.activePlayer}'s turn!`;
            break;
        case "complete":
            if (gameData.winner !== "") {
                gameData.message = `Player ${gameData.winner} won!`;
            }
            else {
                gameData.message = "Tie!";
            }
            break;
        default:
            break;
    }
}

function getDisabled(row, col) {
    var disabled = "";
    if (gameData.gameState !== "playing" ||
        (gameData.board[row][col] !== "-" && gameData.board[row][col] !== "")) {
        disabled = "disabled";
    }
    return disabled;
}

function renderBoard(board) {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>${gameData.message}</h4>
            <div class="w-50 text-center">
                <button onclick="markSpace(0,0)" ${getDisabled(0, 0)}>${board[0][0]}</button>
                <button onclick="markSpace(0,1)" ${getDisabled(0, 1)}>${board[0][1]}</button>
                <button onclick="markSpace(0,2)" ${getDisabled(0, 2)}>${board[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="markSpace(1,0)" ${getDisabled(1, 0)}>${board[1][0]}</button>
                <button onclick="markSpace(1,1)" ${getDisabled(1, 1)}>${board[1][1]}</button>
                <button onclick="markSpace(1,2)" ${getDisabled(1, 2)}>${board[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="markSpace(2,0)" ${getDisabled(2, 0)}>${board[2][0]}</button>
                <button onclick="markSpace(2,1)" ${getDisabled(2, 1)}>${board[2][1]}</button>
                <button onclick="markSpace(2,2)" ${getDisabled(2, 2)}>${board[2][2]}</button>
            </div>
        </div>  
        <div class="${gameData.playAgainClass} container d-flex flex-column justify-content-start align-items-center">
            <button onclick="gameData.gameState=\'initializing\';" class="text-center" id="PlayAgain">Play again</button>
        </div>
    `
}

