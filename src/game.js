function Game() {}

Game.prototype.create = function () {
  this.input.addMoveCallback(function (pointer, x, y, isClick) {
    var stage = pointer.game.stage;
    var math = pointer.game.math;
    var centerX = stage.width * .5;
    var centerY = stage.height * .5;
    var angle = math.radToDeg(math.angleBetween(centerX, centerY, x, y));
    console.debug("move!", [{angle: angle, centerX: centerX, centerY: centerY, x: x, y:y}]);
    // TODO Draw this!
  });
};

Game.prototype.update = function () {};

Game.prototype.onInputDown = function () {
  this.game.state.start('menu');
};

module.exports = Game;
