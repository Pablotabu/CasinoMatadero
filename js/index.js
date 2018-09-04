window.onload = function(){
    var game = new Game("wheelcanvas");
    $(".number").on("click", function(e) {
        var number = (e.currentTarget.value);
        game.addNumber(number)
         });
    function spin(){
        game.spinwheel.spin()
    }
    game.start();
}
