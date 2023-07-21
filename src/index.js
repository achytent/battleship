const Player = require('./player');
const Board = require('./gameboard');
let currentMove = 0; // 0 for player, 1 for computer
let gameover = false;

const playerBoard = new Board();

function createPlayer(name) {
  const player = new Player(name);
}

while (!gameover) {
  if (currentMove === 0) {
    /* 
      Collect data about current move
    */
    player.makeMove();
  }
}
