function prueba(){
    var zero = $("<div></div>")
    var input = $("<input></input>").attr("type", "button").attr("value", "0").attr("class", "number zero")
    $(".test").append(zero)
   zero.append(input)

    var firstRow = $("<div></div>").attr('id', 'first-row')
    $(".test").append(firstRow)
      var secondRow = $("<div></div>").attr('id', 'second-row')
    $(".test").append(secondRow)
    var thirdRow = $("<div></div>").attr('id', 'third-row')
    $(".test").append(thirdRow)
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

     var input= $("<input></input>").attr("type", "button").attr("value","even").attr("class","odd").attr("class","odd")
         colors.append(input);

      var input= $("<input></input>").attr("type", "button").attr("value", color).attr("class","red").attr("class","red")
      colors.append(input);
      
   

    }




