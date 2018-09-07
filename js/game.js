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
    this.money -= this.bet;
       this.myBalance();
    console.log(this.colorRedBlack)
    this.colorBet.push([this.colorRedBlack, parseInt(this.bet)])
   console.log(this.colorBet)
}.bind(this))}

  Game.prototype.clearColorBet = function(){
   return this.colorBet = [];
  }

  Game.prototype.clearOddEvenBet = function(){
    return this.oddEven = []
  }

  Game.prototype.oddEvenBet = function(){
     $(".valor").on("click", function(e){
       this.oddEvenTable = (e.currentTarget.value);
       //console.log(this.oddEvenTable)
       this.money -= this.bet;
       this.myBalance();
       this.oddEven.push([this.oddEvenTable, parseInt(this.bet)])
       console.log(this.oddEven)
     }.bind(this))}

   Game.prototype.checkOddEven = function(number){
    if (number % 2 == 0){
      return "even"
    }else{
      return "odd"
    }
       };


Game.prototype.setBet = function() {
  $(".bet").text(this.bet + "$");
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
      for(i=0; i < this.oddEven.length; i++){
        console.log(this.oddEven[i][0])
         if (this.luckynumber % 2 == 0 && this.oddEven[i][0] == "even"){
         console.log("Has ganado " + this.oddEven[i][1] * 2 + "$");
         this.money += this.oddEven[i][1]*2;
         this.myBalance();
         break;
         }
        if(this.luckynumber % 2 == 1 && this.oddEven[i][0] == "odd") {
             console.log("Has ganado " + this.oddEven[i][1] == "$");
             this.money += this.oddEven[i][1] *2;
             this.myBalance();
             break;
         }
         
      }  
      for(i=0; i < this.colorBet.length; i++){
       console.log(this.colorBet)
        if (color == this.colorBet[i][0]){
        console.log("Has ganado " + this.colorBet[i][1] * 2 + "$");
        this.money += this.colorBet[i][1] * 2 ;
        this.myBalance();
        break;
       }}
      for (i = 0; i < this.myNumbers.length; i++) {
        if (this.luckynumber == this.myNumbers[i][0]) {
          console.log(this.myNumbers)
          console.log("Has ganado " + this.myNumbers[i][1] * 36 + "$");
          this.money += this.myNumbers[i][1] * 36;
          
          this.myBalance();
          break;
        }
      }
      console.log(this.luckynumber);
      this.clearOddEvenBet();
      this.clearColorBet();
      this.saveBet();
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
Game.prototype.addColorBet = function(color){
  var findColor = false; 
  for (i = 0; i< this.colorBet.length; i++){
    if(this.colorBet[i][0] == color) {
      findColor = true;
      this.colorBet[i][1] += parseInt(this.bet);
    }}
    if(findColor == false) {
this.colorBet[i][1] += parseInt(this.bet);
break;
}
}

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
Game.prototype.moveOn = function(){
  $("#next").on("click", function(){
  return $("#principal").toggle()
    })
}
console.log(moveOn())