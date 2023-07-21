const Ship = require('../src/ship');

test('Ship can be successfully created', () => {
  const exampleShip = new Ship(4);
  expect(exampleShip).toHaveLength(4);
  expect(exampleShip.timesHit).toBe(0);
});

test('Determines if the ship is sunk', () => {
  const firstShip = new Ship(4);
  firstShip.hit();
  firstShip.hit();
  firstShip.hit();
  firstShip.hit();
  expect(firstShip.isSunk).toBe(true);
  const secondShip = new Ship(4);
  secondShip.hit();
  secondShip.hit();
  expect(secondShip.isSunk).toBe(false);
});

test('Ship can be hit', () => {
  const exampleShip = new Ship(2);
  exampleShip.hit();
  expect(exampleShip.timesHit).toBe(1);
});

test('Ship can change direction', () => {
  const exampleShip = new Ship(3);
  exampleShip.changeDirection();
  expect(exampleShip.isHorizontal).toBe(true);
});
