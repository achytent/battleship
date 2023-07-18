class Gameboard {
  constructor() {
    this.field = [];
    for (let i = 0; i < 10; i++) this.field[i] = new Array(10);
  }
}

module.exports = Gameboard;
