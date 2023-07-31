var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}


var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}

			else
				arr[i][j].innerText = ''
		}
	}
}

let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

GetPuzzle.onclick = function () {
	var xhrRequest = new XMLHttpRequest()
	xhrRequest.onload = function () {
		var response = JSON.parse(xhrRequest.response)
		console.log(response)
		board = response.board
		FillBoard(board)
	}
	xhrRequest.open('get', 'https://sugoku.onrender.com/board?difficulty=random')
	//we can change the difficulty of the puzzle the allowed values of difficulty are easy, medium, hard and random
	xhrRequest.send()
}

SolvePuzzle.onclick = () => {
	SudokuSolver(board, 0, 0, 9);
};

function isValid(  board,  i,  j,  num,  n){
    // row and column check 
    for (let x =0; x < n; x++){
        if(board[i][x] == num || board[x][j] == num){
            return false;
        }
    }
    // subMatrix check 
    let rn = Math.sqrt(n);
    let si = i - i % rn;
    let sj = j - j % rn;

    for (let x = si; x < si + rn; x++ ){
        for (let y = sj; y < sj; y++){
            if(board[x][y] == num){
                return false;
            }
        }
    }
    return true;
}

function SudokuSolver ( board, i, j, n){
    // base case
    if( i == n){
        FillBoard(board)
        return true;
    }

    // if we are not insidethe board 
    if(j == n){
        return SudokuSolver(board, i+1, 0, n);
    }
    // if cell is already filled -> just leave it and move on
    if(board[i][j] != 0){
       return SudokuSolver(board,i,j+1,n);
    }
    // we try to fill the cell with an appropriate number 

    for(let num = 1; num <= 9 ; num++){
        // check is num can be filled
        if(isValid(board,i,j,num,n)){
            board[i][j] = num;
            let subAns = SudokuSolver(board,i,j+1,n);
            if(subAns){
                return true;
            }
            //back tracking-> undo the changes
            board[i][j] = 0;
        }
    }
    return false;
}