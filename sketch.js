var swordImage,sword;
var play = 1;
var end = 0;
var gamestate = 1;
var fruitsGroup, fruit1, fruit2, fruit3, fruit4;
var gamoverImage, gameover;

function preload(){
  
  swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  alien1 = loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  gameoverImage = loadImage("gameover.png")
}

function setup(){
  sword = createSprite(40,200,10,10);
  sword.addImage("sword.png",swordImage); 
  sword.scale = 0.5;
  
  gameover = createSprite(175,200,10,10);
  gameover.addImage("gameover.png",gameoverImage);
  gameover.visible = false;
  
  fruitsGroup = createGroup();
  
  alienGroup = createGroup();
}

function draw(){
  background("white");
  
  if(gamestate === play){
    sword.y = World.mouseY;
  sword.x = World.mouseX;
      if(fruitsGroup.isTouching(sword)){
    fruitsGroup.destroyEach();
  }
  
  fruitsGroup.setVelocityYEach(10);
  alienGroup.setVelocityYEach(10);
  
  spawnFruits();
  spawnaliens();
     if(alienGroup.isTouching(sword)){
      gamestate = end;
    }
  }
  
  else if(gamestate === end){
   fruitsGroup.setVelocityYEach(0);
    alienGroup.setVelocityYEach(0);
    gameover.visible = true;
  }

drawSprites();
}

function spawnFruits(){
  if (frameCount % 60 === 0){
   var fruit = createSprite(200,400,10,40);
   
    fruit.velocityY = -200; 
    fruit.x = Math.round(random(50,350))
   
    //generate random fruits
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;
    }
  
    fruit.scale = 0.3;
  
    fruitsGroup.add(fruit);
  
}

}

function spawnaliens(){
  if (frameCount % 100 === 0){
   var alien = createSprite(200,400,10,40);
   
    alien.velocityY = -200; 
    alien.x = Math.round(random(50,350))
   
    //generate random fruits
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: alien.addImage(alien1);
              break;
      case 2: alien.addImage(alien2);
              break;

      default: break;
    }
  
    alien.scale = 0.8;
  
    alienGroup.add(alien);
  
}

}
