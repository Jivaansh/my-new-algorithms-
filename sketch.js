var fixedRect, movingRect;
var gameObj1,gameObj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObj1 = createSprite(300, 100, 50, 80);
  gameObj2 = createSprite(500, 100, 50, 80);
  gameObj1.shapeColor="yellow";
  gameObj2.shapeColor="yellow";
  movingRect.velocityX=3;
  fixedRect.velocityX=-3;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  gameObj2.x = World.mouseX;
  gameObj2.y = World.mouseY;
   
  if (isTouching(gameObj1,gameObj2)){
    gameObj2.shapeColor = "red";
    gameObj1.shapeColor = "red";
  }
  else{
    gameObj1.shapeColor = "yellow";
    gameObj2.shapeColor = "yellow";
  }
  bounceOff(movingRect,fixedRect)
  drawSprites();
}
