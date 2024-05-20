const gameBoard = {
  gameBoard: ["", "", "", "", "", "", "", "", ""],
};



const player = function (name, symbol) {
  return { name, symbol };
};
//newPlayer = player('rafa', 'X')

const game = {
  play: (player, position) => {
    gameBoard.gameBoard[position] = player.symbol;
    // console.log(gameBoard.gameBoard[position.x][position.y]);
  },
};

// game.play(newPlayer, 1)
