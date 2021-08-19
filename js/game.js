class Game{
  constructor(){
  }
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }
  async start() {
    if(gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1 = createSprite(200,500);
    player1.addImage(playerImg);
    player1.scale = 0.5;
    
    player2 = createSprite(800,500);
    player2.addImage(playerImg);
    player2.scale = 0.5;
    
    players=[player1,player2];
  }
    
  play(){
    form.hide();
    Player.getPlayerInfo();
    image(bgImg, 0, 0, 1000, 800);
    var x = 100;
    var y = 200;
    var index = 0;
    drawSprites();
    for(var plr in allPlayers){             
      index = index+1;
      x = windowWidth/3-allPlayers[plr].distance;
      y = windowHeight/3+300;
      players[index -1].x = x;
      players[index - 1].y = y;
      if(index===player.index){
        fill("black");
        textSize(25);
        text(allPlayers[plr].name ,x-25,y+100);
      }
  // text("Player 1 :" + allPlayers.player1.score,40,40);
    }
    
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.distance -= 10
      player.update();
    }
    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

    if(keyDown("space")){
      if(frameCount%30===0){
      bullet = createSprite(allPlayers[plr].x,allPlayers[plr.y],40,70);
      bullet.velocityY = -2;
      }
    }

    if (frameCount % 100 === 0) {
      enemy = createSprite(random(0,900), 0, 10, 10);
      enemy.addImage(enemyImg);
      enemy.scale = 0.5;
      enemy.velocityY = 4;
      enemyGroup.add(enemy);
      enemyGroup.setLifetimeEach(600);
    }
    
  }
  end(){
    console.log("Game Ended");
  }
}