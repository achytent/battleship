class Gameboard {
  constructor() {
    this.field = [];
    this.shipsOnField = 0;
    for (let i = 0; i < 10; i++) this.field[i] = new Array(10);
  }
}

Gameboard.prototype.checkField = function () {
  if (this.shipsOnField === 0) {
    // TODO gameover
  }
};

Gameboard.prototype.recieveAttack = function (x, y) {
  const ship = this.field[y][x];
  if (ship === undefined) {
    this.field[y][x] === '0';
    return;
  }
  if (ship.isSunk === true) throw 'Can not attack sunk ship';

  ship.hit();
  if (ship.isSunk === true) {
    this.shipsOnField -= 1;
  }
  this.checkField();
};

module.exports = Gameboard;
