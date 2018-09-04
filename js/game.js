function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.myNumbers = [];
  this.reset();
  this.luckynumber = -1;
}
Game.prototype.setBet = function(){
    $(".bet").text(this.bet);
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
    console.log(this)
    this.setBet(this.bet);
  }.bind(this));
};


Game.prototype.draw = function() {
  this.spinwheel.draw();
};

// function setBet(bet) {
//   $(".bet").text(bet);
// }

Game.prototype.addNumber = function(number){
  console.log(this.bet)
   this.myNumbers.push([number,this.bet])

   console.log(this.myNumbers)
}



// $(".number").on("click", function(e){
//     console.log(e.currentTarget.value)
//     })
//  $(".number").on("click", function(e){
//     console.log(e.currentTarget.value)
// })
