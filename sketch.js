var M_rect,F_rect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(800,400);
  M_rect = createSprite(400, 200, 50, 50);
  F_rect = createSprite(100, 200, 50, 50);
  M_rect.shapeColor = "red";
  F_rect.shapeColor = "red";
  gameObject1=createSprite(200,100,80,80);
  gameObject2=createSprite(300,100,80,80);
  gameObject3=createSprite(400,100,80,80);
  gameObject4=createSprite(500,100,80,80);
  gameObject1.shapeColor="red";
  gameObject2.shapeColor="red";
  gameObject3.shapeColor="red";
  gameObject4.shapeColor="red";
  
  M_rect.debug = true;
  F_rect.debug = true;
  gameObject1.debug=true;
  gameObject2.debug=true;
  gameObject3.debug=true;
  gameObject4.debug=true;

}

function draw() {
  background(255,255,255);  
M_rect.y = World.mouseY;
M_rect.x = World.mouseX;
if(isTouching(M_rect,gameObject3))
{
  M_rect.shapeColor = "green";
  gameObject3.shapeColor = "green";

}
else 
{
  M_rect.shapeColor = "red";
  gameObject3.shapeColor = "red";
}
  drawSprites();
}
