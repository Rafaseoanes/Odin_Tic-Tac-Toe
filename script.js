const board = (function () {
  gameBoard = [];

  return { gameBoard };
})();

const player = function (name, symbol) {
  // let z = prompt("enter your name...")
  return { name, symbol };
};
//newPlayer = player('rafa', 'X')

const game = {
  winnerPositions: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ],
  currentPlayer: null,
  players: [],

  play: function (position) {
    if (board.gameBoard[position] !== undefined) {
      return;
    } else {
      board.gameBoard[position] = {
        symbol: this.currentPlayer.symbol,
        position: position
      }

      this.findWinner()
      this.changeTurns();
    }
  },
  findWinner: function () {
    const positions = board.gameBoard.filter((slot)=>{
      return slot.symbol == this.currentPlayer.symbol
    }).map(slot => slot.position)

    console.log(positions)
    for(let winnerPosition of  this.winnerPositions){
      
      if(winnerPosition.every(val => positions.includes(val))){
        console.log(`The winner is ${this.currentPlayer.name}, '${this.currentPlayer.symbol}'`)
        board.gameBoard = []
      }
    }
  },

  changeTurns: function () {
    this.currentPlayer = this.players.find(
      (p) => p.name !== this.currentPlayer.name
    );
  },

  start: function (player1, player2) {
    this.currentPlayer = player1;
    this.players = [player1, player2];
  },
};

const player1 = player("rafa", "X");
const player2 = player("camilo", "O");
game.start(player1, player2);
game.play(1);
game.play(5);
game.play(2);
game.play(6);
game.play(3);
game.play(4);
