class Form {
    constructor (){

    }
    display(){
        var title=createElement('h2', 'Multiplayer Car RacingGame');
        title.position(110,0);
        var input = createInput("name");
        input.position(130,160);
       var button = createButton('play');
  button.position(250, 200);
  var greeting=createElement("h3");
  
  button.mousePressed(function(){
      input.hide();
      button.hide();
      var name = input.value();
      playerCount=playerCount+1;
      player.updateCount(playerCount);
      player.update(name);
      greeting.html("hello"+name);
      greeting.position(130,160);
  })
  
    }

}