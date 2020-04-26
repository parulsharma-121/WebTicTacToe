let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 1;

function move(element, xpos, ypos) {
    if (board[xpos][ypos] == 0) {
        element.innerHTML = player == 1 ? "X" : "O";
        board[xpos][ypos] = player;
        if(checkWinner(board, player)){
            setTimeout(() => {
                alert("player " + player + " Won");
            }, 0);
            return;
        }

        if(checkDraw(board)){
            setTimeout(() => {
                alert("Game Draw");
            }, 0);
        }
        player = player == 1 ? 2 : 1;
    }
}

function checkWinner(board, player) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
            return true;
        }
    }
    for (let i = 0; i < board.length; i++) {
        if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
            return true;
        }
    }

    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
        return true;
    }

    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
       return true;
    }

    return false;

}

function checkDraw(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function restartGame(){
    window.location.href="index.html";
}