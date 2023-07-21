const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

test('Recieves hit', () => {
  const exampleShip = new Ship(3);
  exampleShip.changeDirection();
  let gameboard = new Gameboard();
  gameboard = exampleShip.place(gameboard, 3, 3);
  gameboard.recieveAttack(3, 3);
  expect(gameboard.field[3][3].timesHit).toBe(1);
});
