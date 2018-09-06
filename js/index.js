window.onload = function(){
    var game = new Game("wheelcanvas");
    $(".number").on("click", function(e) {
        var number = (e.currentTarget.value);
        game.addNumber(number)
         });

//   //$(".color").on("click", function(e){
//             var redBlack = (e.currentTarget.value);
            game.colorBetRedBlack() ;
            game.oddEvenBet();
         //});     
    function spin(){
        game.spinwheel.spin()
    }
    game.start();
}
