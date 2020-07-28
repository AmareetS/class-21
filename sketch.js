var fixedRect, movingRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  gameobject1=createSprite(400,100,60,40);
  gameobject2=createSprite(400,800,30,70);
  gameobject1.shapeColor="green";
  gameobject2.shapeColor="green";
  gameobject1.velocityY = +5;
  gameobject2.velocityY = -5;
  gameobject1.debug = true;
  gameobject2.debug = true;

}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect,fixedRect);
  bounceoff(gameobject1,gameobject2);

  drawSprites();
}