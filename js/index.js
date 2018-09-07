window.onload = function(){
    var game = new Game("wheelcanvas");
    $(".number").on("click", function(e) {
        var number = (e.currentTarget.value.split(" "));
        game.addNumber(number[0], number[1])
         });

//   //$(".color").on("click", function(e){
//             var redBlack = (e.currentTarget.value);
            game.colorBetRedBlack() ;
            game.oddEvenBet();
         //});     
//    function spin(){
//         game.spinwheel.spin()
//     }
function prueba(){
            
    var zero = $("<div></div>")
    var input = $("<input></input>").attr("type", "button").attr("value", "0").attr("class", "number zero")
    $(".test").append(zero)
  zero.append(input)
  
  var div = $("<div></div>")
    
    var firstRow = $("<div></div>").attr('id', 'first-row')
    zero.append(firstRow)
   div.append(firstRow)
      var secondRow = $("<div></div>").attr('id', 'second-row')
    div.append(secondRow)
    var thirdRow = $("<div></div>").attr('id', 'third-row')
    div.append(thirdRow)
    var colors = $("<div></div>").attr('id', 'colors')
    div.append(colors)
    $(".test").append(div)
     var color = "red"
    var evenOrOdd = "odd"
    for(var i=3; i<=36; i+=3){
      var number = i + " " + color
      var clase = "number " + evenOrOdd + " " + color
      var input= $("<input></input>").attr("type", "button").attr("value", number).attr("class", clase)
      firstRow.append(input);
      if(color == "red" ) 
      {color = "black"}else 
      { color ="red" }
      if(evenOrOdd == "odd"){
        evenOrOdd= "even"
      }else {
        evenOrOdd = "odd"
      }
    }
      if(color == "red" ) 
      {color = "black"}else 
      { color ="red" }
      if(evenOrOdd == "odd"){
        evenOrOdd= "even"
      }else {
        evenOrOdd = "odd"
      }
      for(var i=2; i<=35; i+=3){
      var number = i + " " + color
      var clase = "number " + evenOrOdd + " " + color
      var input= $("<input></input>").attr("type", "button").attr("value", number).attr("class", clase)
      secondRow.append(input);
      if(color == "red" ) 
      {color = "black"}else 
      { color ="red" }
      if(evenOrOdd == "odd"){
        evenOrOdd= "even"
      }else {
        evenOrOdd = "odd"
      }
    }
    if(color == "red" ) 
      {color = "black"}else 
      { color ="red" }
      if(evenOrOdd == "odd"){
        evenOrOdd= "even"
      }else {
        evenOrOdd = "odd"
      }
      for(var i=1; i<=36; i+=3){
        var number = i + " " + color
        var clase = "number " + evenOrOdd + " " + color
        var input= $("<input></input>").attr("type", "button").attr("value", number).attr("class", clase)
        thirdRow.append(input);
        if(color == "red" ) 
        {color = "black"}else 
        { color ="red" }
        if(evenOrOdd == "odd"){
          evenOrOdd= "even"
        }else {
          evenOrOdd = "odd"
        }
      }
  
        
       
        var input= $("<input></input>").attr("type", "button").attr("value", "black").attr("class", "black")
        colors.append(input);
  
  var input= $("<input></input>").attr("type", "button").attr("value", "odd").attr("class","even")
        colors.append(input);
  
  var input= $("<input></input>").attr("type", "button").attr("value","even").attr("class","odd").attr("class","even")
        colors.append(input);
  
  var input= $("<input></input>").attr("type", "button").attr("value", color).attr("class","red").attr("class","red")
        colors.append(input);
        
      
  
  
      

   

    }

prueba ()
    game.start();
}
