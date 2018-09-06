function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.myNumbers = [];
  this.reset();
  this.luckynumber = -1;
  this.money = 1000;
  this.oldNumbers = [];
  this.colorBet = [];
  this.colorRedBlack = []
  this.oddEven = []
  this.oddEvenTable = []
  this.luckycolor;
}
Game.prototype.repeatBet = function() {
  this.myNumbers = this.oldNumbers.splice(0);
  console.log(this.myNumbers);
  for (i = 0; i < this.myNumbers.length; i++) {
    this.money -= this.myNumbers[i][1];
    this.myBalance();
    console.log(this.money);
  }
};

 Game.prototype.colorBetRedBlack = function(){
  $(".color").on("click", function(e){
    this.colorRedBlack = (e.currentTarget.value);
    console.log(this.colorRedBlack)
    this.colorBet.push([this.colorRedBlack, this.bet])
   console.log(this.colorBet)
}.bind(this))}

  Game.prototype.stopBet = function(){
    console.log($(".mybalance").innerHTML)
  }

  Game.prototype.oddEvenBet = function(){
     $(".valor").on("click", function(e){
       this.oddEvenTable = (e.currentTarget.value);
       //console.log(this.oddEvenTable)
       this.oddEven.push([this.oddEvenTable, this.bet])
       console.log(this.oddEven)
     }.bind(this))}

   Game.prototype.checkOddEven = function(number){
    if (number % 2 == 0){
      return "even"
    }else{
      return "odd"
    }
       };

   Game.prototype.checkColorBet = function(){}   
    

  
 //console.log(oddEvenBet())

Game.prototype.setBet = function() {
  $(".bet").text(this.bet);
};

Game.prototype.start = function() {
  this.draw();
};

Game.prototype.draw = function() {
  this.spinwheel.draw();
};

Game.prototype.myBalance = function() {
  $(".mybalance").text(this.money + "$");
  
};



Game.prototype.reset = function() {
  this.bet = 1;
  this.spinwheel = new SpinWheel(this);
  $("#spin").on("click",function() {
      this.spinwheel.spin();
      this.spinwheel.stopRotateWheel();
      var color = this.spinwheel.colors[this.spinwheel.numbers.indexOf(this.luckynumber)]
      console.log(color);
     console.log(this.myNumbers)
       if(color == this.myNumbers[i][2]){
         console.log("Has ganado " + this.myNumbers[i][2] * 2 + "$");
       }
      for (i = 0; i < this.myNumbers.length; i++) {
        console.log(this.luckynumber)
        if (this.luckynumber == this.myNumbers[i][0]) {
          console.log(this.myNumbers)
          console.log("Has ganado " + this.myNumbers[i][1] * 36 + "$");
          this.money += this.myNumbers[i][1] * 36;
          
          this.myBalance();
          break;
        }
      }
      this.saveBet();
      console.log(this.luckynumber);
    }.bind(this)
  ); // "bind" hace que coja las propiedades anteriores al ultimo scope;

  $(".chips").on( "click", function(e) {
      this.bet = e.currentTarget.value;
      console.log(this);
      this.setBet(this.bet);
    }.bind(this)
  );
  $(".repeatbet").on("click",function() {
      console.log(this.oldNumbers);
      this.repeatBet();
    }.bind(this)
  );
};

Game.prototype.saveBet = function() {
  this.oldNumbers = this.myNumbers.splice(0);
  return this.oldNumbers;
};

Game.prototype.addNumber = function(number, color) {
  console.log(this.bet);
  var findNumber = false;
  for (i = 0; i < this.myNumbers.length; i++) {
    if (this.myNumbers[i][0] == number) {
      this.money -= this.bet;
      this.myBalance();
      console.log(this.money);
      findNumber = true;
      this.myNumbers[i][1] += parseInt(this.bet);
      break;
    }
  }
  if (findNumber == false) {
    this.money -= this.bet;
    this.myBalance();
   var evenOdd = this.checkOddEven(parseInt(number))
    this.myNumbers.push([parseInt(number), parseInt(this.bet), evenOdd, color]);
  }
  console.log(this.myNumbers);
};
