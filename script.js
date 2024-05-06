const gameBoard = {
  gameBoard: [[], [], []],
};

const player = {
  player1: {
    name: "",
    Symbol: "X",
  },
  player2: {
    name: "",
    Symbol: "O",
  },
  setupPlayerName: (name) => {
    if (player.player1.name == "") {
      player.player1.name = name;
    } else {
      player.player2.name = name;
    }
  },
};

const game = {
  play: (player, position) => {
    gameBoard.gameBoard[position.x][position.y] = player.Symbol;
    console.log(gameBoard.gameBoard[position.x][position.y]);
  },
};


// position = {x:0, y:1}