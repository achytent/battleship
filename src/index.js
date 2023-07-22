import Player from './player.js';
import Board from './gameboard.js';
import './style.css';

let currentMove = 0; // 0 for player, 1 for computer
let gameover = false;

const playerBoard = new Board();
const computerBoard = new Board();

function createPlayer(name) {
  const player = new Player(name);
}

//render

function createLayout() {
  const main = document.querySelector('main');
}

function nameModal() {}

// Computer placing ships on the board

// Player placing ships on the board

while (!gameover) {
  if (currentMove === 0) {
    /*
      Collect data about current move
    */
    player.makeMove();

    // Check for gameover, for sunk ships
  }
}
