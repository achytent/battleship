class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.isHorizontal = false;
  }
}

Ship.prototype.isSunk = function () {
  return this.length > this.timesHit ? false : true;
};

Ship.prototype.hit = function () {
  this.timesHit += 1;
};

Ship.prototype.changeDirection = function () {
  this.isHorizontal === false
    ? (this.isHorizontal = true)
    : (this.isHorizontal = false);
};

Ship.prototype.place = function (board, x, y) {
  // Check if the ship fits on a board with current coordinates of its head
  if (x + this.length > 10 || y + this.length > 10)
    throw 'Cannot place ship in this position';
  // Place the ship either horizontaly or vertically
  if (this.isHorizontal === false) {
    for (let i = 0; i < this.length; i++) {
      if (board.field[i + y][x] === 'O') throw 'Ships cannot overlap';
      board.field[i + y][x] = 'O';
    }
  }
  if (this.isHorizontal === true) {
    for (let i = 0; i < this.length; i++) {
      if (board.field[y][x + i] === 'O') throw 'Ships cannot overlap';
      board.field[y][x + i] = 'O';
    }
  }
  return board;
};

module.exports = Ship;
