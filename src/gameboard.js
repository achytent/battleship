class Gameboard {
  constructor() {
    this.field = [];
    for (let i = 0; i < 10; i++) this.field[i] = new Array(10);
  }
}

Gameboard.prototype.recieveAttack = function (x, y) {
  const ship = this.field[y][x];
  if (ship === undefined) {
    this.field[y][x] === '0';
    return;
  }
  if (ship.isSunk === true) return;
  ship.hit();
};

module.exports = Gameboard;
