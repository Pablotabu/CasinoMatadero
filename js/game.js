function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.myNumbers = [];
    this.reset();
    this.luckynumber = -1;
    this.money = 1000;
    this.colorBet = []
  }


 Game.prototype.setBet = function(){
     $(".bet").text(this.bet);
 }

Game.prototype.start = function() {
  this.draw();
};

Game.prototype.draw = function() {
  this.spinwheel.draw();
};


Game.prototype.myBalance = function(){
    $(".mybalance").text(this.money + "$")
   }


Game.prototype.reset = function() {
  this.bet = 1;
  this.spinwheel = new SpinWheel(this);
  $("#spin").on("click",function() {
      this.spinwheel.spin();
      this.spinwheel.stopRotateWheel();
      for (i = 0 ; i < this.myNumbers.length; i++){
          if(this.luckynumber == this.myNumbers[i][0]){
              console.log("Has ganado " + this.myNumbers[i][1] * 36 + "$");
              this.money += this.myNumbers[i][1] * 36;
              this.myBalance();
        this.clearBeat();
              break;
          }else
          { this.clearBeat()
          }
         }
      console.log(this.luckynumber)
    }.bind(this)
  ) // "bind" hace que coja las propiedades anteriores al ultimo scope;

   $(".chips").on("click", function(e) {
    this.bet = e.currentTarget.value;
    console.log(this)
    this.setBet(this.bet);
    
  }.bind(this));
};

Game.prototype.clearBeat = function(){
   this.myNumbers = [];
}



Game.prototype.addNumber = function(number){
  console.log(this.bet)
  var findNumber = false;
   for(i = 0 ; i < this.myNumbers.length; i++){
     if(this.myNumbers[i][0] == number){
         this.money -= this.bet;
         this.myBalance();
         console.log(this.money)
         findNumber = true;
         this.myNumbers[i][1] += parseInt(this.bet);
         break;
        }
    }
    if(findNumber == false){
        this.money -= this.bet
        this.myBalance()
        this.myNumbers.push([parseInt(number),parseInt(this.bet)])
   }
     console.log(this.myNumbers)
}




