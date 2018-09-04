function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.reset();
  this.luckynumber = -1;
  this.myNumbers = [];
}
Game.prototype.start = function() {
  this.draw();
};

Game.prototype.reset = function() {
  this.bet = 0;
  this.spinwheel = new SpinWheel(this);
  $("#spin").on(
    "click",
    function() {
      this.spinwheel.spin();
    }.bind(this)
  ); // "bind" hace que coja las propiedades anteriores al ultimo scope;
  
  $(".chips").on("click", function(e) {
    this.bet = e.currentTarget.value;
    setBet(this.bet);
  });

  $(".number").on("click", function(e) {
    this.myNumbers = (e.currentTarget.value);
    console.log(this.myNumbers)
    });
    };

function addNumber(number){
    $(".number").text(number)
}

Game.prototype.draw = function() {
  this.spinwheel.draw();
};

function setBet(bet) {
  $(".bet").text(bet);
}

// $(".number").on("click", function(e){
//     console.log(e.currentTarget.value)
//     })
//  $(".number").on("click", function(e){
//     console.log(e.currentTarget.value)
// })
