var game = new Phaser.Game (
  800,
  600,
  Phaser.AUTO,
  'SnakeGame-game',
  { create: create }
);



function create () {
  var text = this.add.text(
    .5,
    .5,
    "=========>", 
    { font: "15px Arial",
      fill: "#ff0044",
      align: "center" }
  );
  
  var stage = this.stage;
  var math = this.math;
  
  this.input.addMoveCallback(function (pointer, x, y, isClick) {
    var angle = math.radToDeg(math.angleBetween(0, 0, x, y));
    text.angle = angle;
  });
} 
    /*
  game.input.maxPointers = 1;
  game.input.mousePointer.recordRate = 1000;
  
  game.scale.pageAlignHorizontally = true;
  var 
  var create = function () {
    text = this.add.text(
      0,
      0,
      "Angle:", 
      { font: "65px Arial",
        fill: "#ff0044",
        align: "center"});

  text.anchor.setTo(0.5, 0.5);
  this.input.addMoveCallback(function (pointer, x, y, isClick) {
    var stage = pointer.game.stage;
    var math = pointer.game.math;
    var centerX = stage.width * .5;
    var centerY = stage.height * .5;
    var angle = math.radToDeg(math.angleBetween(centerX, centerY, x, y));
    text = angle.toString();
  });
};
  game.mainText = this.game.add.text(.5, .5, '====>');


*/