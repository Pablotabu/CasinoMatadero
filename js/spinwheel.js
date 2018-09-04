
function SpinWheel(game) {
    this.game = game;

    this.colors = [
    "green",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black"
  ];
  this.numbers = [
    "0",
    "32",
    "15",
    "19",
    "4",
    "21",
    "2",
    "25",
    "17",
    "34",
    "6",
    "27",
    "13",
    "36",
    "11",
    "30",
    "8",
    "23",
    "10",
    "5",
    "24",
    "16",
    "33",
    "1",
    "20",
    "14",
    "31",
    "9",
    "22",
    "18",
    "29",
    "7",
    "28",
    "12",
    "35",
    "3",
    "26"
  ];

  var startAngle = 0;
  var arc = (Math.PI / 37) * 2;
  var spinTimeout = null;

  var spinArcStart = 10;
  var spinTime = 0;
  var spinTimeTotal = 0;

SpinWheel.prototype.draw = function() {
    this.drawRouletteWheel();
  }

  SpinWheel.prototype.drawRouletteWheel= function() {
      
    if (this.game.canvas.getContext) {
      var outsideRadius = 200;
      var textRadius = 160;
      var insideRadius = 125;

      
      this.game.ctx.clearRect(0, 0, 500, 500);

      this.game.ctx.strokeStyle = "black";
      this.game.ctx.lineWidth = 2;

      this.game.ctx.font = "bold 12px sans-serif";

      for (var i = 0; i < 37; i++) {
        var angle = startAngle + i * arc;
        this.game.ctx.fillStyle = this.colors[i];

        this.game.ctx.beginPath();
        this.game.ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        this.game.ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        this.game.ctx.stroke();
        this.game.ctx.fill();

        this.game.ctx.save();
        this.game.ctx.shadowOffsetX = -1;
        this.game.ctx.shadowOffsetY = -1;
        this.game.ctx.shadowBlur = 0;
        this.game.ctx.shadowColor = "rgb(220,220,220)";
        this.game.ctx.fillStyle = "black";
        this.game.ctx.translate(
          250 + Math.cos(angle + arc / 2) * textRadius,
          250 + Math.sin(angle + arc / 2) * textRadius
        );
        this.game.ctx.rotate(angle + arc / 2 + Math.PI / 2);
        var text = this.numbers[i];
        this.game.ctx.fillText(text, -this.game.ctx.measureText(text).width / 2, 0);
        this.game.ctx.restore();
      }

      //Arrow
      this.game.ctx.fillStyle = "black";
      this.game.ctx.beginPath();
      this.game.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      this.game.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      this.game.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      this.game.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      this.game.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      this.game.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      this.game.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      this.game.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      this.game.ctx.fill();
    }
  }

  SpinWheel.prototype.spin = function() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    this.rotateWheel();
  }

  SpinWheel.prototype.rotateWheel = function() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
      this.stopRotateWheel();
      return;
    }
    var spinAngle =
      spinAngleStart - this.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI) / 180;
    this.drawRouletteWheel();
    spinTimeout = setTimeout(this.rotateWheel(), 3000);
  }

  SpinWheel.prototype.stopRotateWheel = function () {
    clearTimeout(spinTimeout);
    var degrees = (startAngle * 180) / Math.PI + 90;
    var arcd = (arc * 180) / Math.PI;
    var index = Math.floor((360 - (degrees % 360)) / arcd);
    this.game.ctx.save();
    this.game.ctx.font = "bold 30px sans-serif";
    var text = this.numbers[index];
    this.game.luckynumber = text;
    console.log(this.game.luckynumber);
    this.game.ctx.fillText(text, 250 - this.game.ctx.measureText(text).width / 2, 250 + 10);
    this.game.ctx.restore();
  }

  SpinWheel.prototype.easeOut = function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }//preguntar si lo puedo quitar,no se para que sirve??
 
 console.log(this.game.luckynumber)
  
}