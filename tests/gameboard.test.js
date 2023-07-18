const Gameboard = require('../src/gameboard');

test('Creates an empty 10x10 field', () => {
  const gameboard = new Gameboard();
  expect(gameboard.field).toEqual([[], [], [], [], [], [], [], [], [], []]);
});
