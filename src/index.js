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

let playerBoard = new Board('Computer');
let computerBoard = new Board('Player');

// Render the gamefield
function createLayout() {
  const main = document.querySelector('main');

  const playerField = document.createElement('div');
  playerField.classList.add('gamefield');
  const playerNameDiv = document.createElement('div');
  playerNameDiv.textContent = game.player.name;
  playerField.appendChild(playerNameDiv);

  const playerCellsGroup = document.createElement('div');

  for (let i = 0; i < 100; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.dataset.id = i;
    cellDiv.classList.add('cell');
    cellDiv.classList.add('player');
    playerCellsGroup.appendChild(cellDiv);
  }
  playerField.appendChild(playerCellsGroup);
  main.appendChild(playerField);

  const computerField = document.createElement('div');
  computerField.classList.add('gamefield');
  const computerNameDiv = document.createElement('div');
  computerNameDiv.textContent = 'Computer';
  computerField.appendChild(computerNameDiv);

  const computerCellsGroup = document.createElement('div');

  for (let i = 0; i < 100; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.dataset.id = 100 + i;
    cellDiv.classList.add('cell');
    cellDiv.classList.add('computer');
    computerCellsGroup.appendChild(cellDiv);
  }
  computerField.appendChild(computerCellsGroup);
  main.appendChild(computerField);

  addListenerForAttacks();
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
    computerBoard.oponent = name;
    modalWindow.classList.add('invisible');
    modalWindow.classList.remove('visible');
    createLayout();
  });
}

function addListenerForAttacks() {
  const computerCells = document.querySelectorAll('.computer');
  computerCells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      const id = event.target.dataset.id - 100;
      const x = id % 10;
      const y = Math.floor(id / 10);
      const result = computerBoard.recieveAttack(x, y);
      switch (result) {
        case 'HIT':
          event.target.style.backgroundColor = 'red';
          break;
        case 'MISS':
          event.target.style.backgroundColor = 'lightgray';
          break;
        case 'SUNK':
          alert('cannot attack sunk ship');
          break;
      }
      hitBack();
    });
  });
}

function hitBack() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const result = playerBoard.recieveAttack(x, y);

  const hitCell = document.querySelector(`[data-id="${y * 10 + x}"]`);
  switch (result) {
    case 'HIT':
      hitCell.style.backgroundColor = 'red';
      break;
    case 'MISS':
      hitCell.style.backgroundColor = 'lightgray';
      break;
    case 'ERR':
      hitBack();
      break;
  }
}

// Computer placing ships on the board

Object.keys(shipsBundle).forEach((shipType) => {
  for (let i = 0; i < shipsBundle[shipType]; i++) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const ship = new Ship(Number(shipType));
    if (Math.random() < 0.5) {
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

Object.keys(shipsBundle).forEach((shipType) => {
  for (let i = 0; i < shipsBundle[shipType]; i++) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const ship = new Ship(Number(shipType));
    if (Math.random < 0.5) {
      ship.changeDirection();
    }

    try {
      playerBoard = ship.place(playerBoard, x, y);
    } catch (error) {
      i -= 1;
    }
  }
});

createModal();
