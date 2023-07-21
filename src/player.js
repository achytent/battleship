class Player {
  constructor(name) {
    this.name = name;
  }
}

Player.prototype.makeMove = function (board, x, y) {
  board.recieveAttack(x, y);
};

module.exports = Player;
