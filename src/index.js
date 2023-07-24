import Player from './player.js';
import Board from './gameboard.js';
import './style.css';

const game = {
  currentMove: 0, // 0 for player, 1 for computer
  gameover: false,
};

const playerBoard = new Board();
const computerBoard = new Board();

// Render the gamefield
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

// Enter the players name and proceed to the game
function createModal() {
  const modalWindow = document.querySelector('.modal');
  modalWindow.classList.remove('invisible');
  modalWindow.classList.add('visible');
  const modalWindowForm = document.querySelector('.modal > form');
  modalWindowForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target['name'].value;
    game.player = new Player(name);
    modalWindow.classList.add('invisible');
    modalWindow.classList.remove('visible');
  });
}

createModal();
createLayout();

// Computer placing ships on the board

// Player placing ships on the board

while (!game.gameover) {
  if (game.currentMove === 0) {
    /*
      Collect data about current move
    */
    player.makeMove();

    // Check for gameover, for sunk ships
  }
}
