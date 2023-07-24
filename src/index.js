import Player from './player.js';
import Board from './gameboard.js';
import './style.css';
import Ship from './ship.js';

const game = {
  currentMove: 0, // 0 for player, 1 for computer
  gameover: false,
};

// Ship cells : amout of ships on the field
const shipsBundle = {
  1: 2,
  2: 1,
  3: 1,
  4: 1,
};

let playerBoard = new Board();
let computerBoard = new Board();

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

Object.keys(shipsBundle).forEach((shipType) => {
  for (let i = 0; i < shipsBundle[shipType]; i++) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const ship = new Ship(Number(shipType));
    if (Math.random < 0.5) {
      ship.changeDirection();
    }

    try {
      computerBoard = ship.place(computerBoard, x, y);
    } catch (error) {
      i -= 1;
    }
  }
});

// Player placing ships on the board

// while (!game.gameover) {
//   if (game.currentMove === 0) {
//     /*
//       Collect data about current move
//     */
//     player.makeMove();
//     // Check for gameover, for sunk ships
//   }
// }


