const gameBoard = {
  gameBoard: [
    [],
    [],
    [],
  ],
};


const player = {
  createPlayer: (name) => {
    if (!this.player1) {
      this.player1 = name;
      console.log(this.player1);
    } else {
      this.player2 = name;
      console.log(this.player2);
    }
    
  },
};


const game = {
  play: (playerName, position) => {
    player.createPlayer(playerName)
    gameBoard.gameBoard[1].push(position)
    console.log(gameBoard.gameBoard[1])
  },
};
