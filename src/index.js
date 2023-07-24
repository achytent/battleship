import Player from './player.js';
import Board from './gameboard.js';
import './style.css';

let currentMove = 0; // 0 for player, 1 for computer
let gameover = false;

const playerBoard = new Board();
const computerBoard = new Board();

//render

function createLayout() {
  const main = document.querySelector('main');

  const playerField = document.createElement('div');
  playerField.classList.add('gamefield');
  for (let i = 0; i < 100; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.dataset.id = i;
    cellDiv.classList.add('cell');
    playerField.appendChild(cellDiv);
  }
  main.appendChild(playerField);

  const computerField = document.createElement('div');
  computerField.classList.add('gamefield');
  for (let i = 0; i < 100; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.dataset.id = 100 + i;
    cellDiv.classList.add('cell');
    computerField.appendChild(cellDiv);
  }
  main.appendChild(computerField);
}

function nameModal() {
  // Enter the player's name and proceed to the game
}

// Computer placing ships on the board

// Player placing ships on the board

nameModal();

createLayout();

while (!gameover) {
  if (currentMove === 0) {
    /*
      Collect data about current move
    */
    player.makeMove();

    // Check for gameover, for sunk ships
  }
}
