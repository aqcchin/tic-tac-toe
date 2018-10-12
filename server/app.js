
var Board = function() {
  this.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
}

let showBoard = function(board) {
  for (var i = 0; i < 3; i++) {
    console.log(board[i][0] + '|' + board[i][1] + '|' + board[i][2]);

    if (i !== 3) {
      console.log('---');
    }
  }
}

let ticTacToe = function() {
  var board = new Board();
  console.log('Welcome to Tic Tac Toe!');
  console.log('Player 1\'s turn (X):');

  showBoard(board);
  

}

ticTacToe();
