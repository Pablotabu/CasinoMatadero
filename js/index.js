window.onload = function(){
    var game = new Game("wheelcanvas");
    function spin(){
        game.spinwheel.spin()
    }
    game.start();
}
