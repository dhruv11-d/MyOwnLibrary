var fixedRect, movingRect,OB1,OB2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  OB1 = createSprite(300,300,200,20);
  OB1.shapeColor="green";
  OB2 = createSprite(300,300,100,10)
}

function draw() {
  background(0,0,0);  
  OB1.x = World.mouseX;
  OB1.y = World.mouseY;

  if(isTouching(OB2,OB1)){
    OB1.shapeColor = "red";
    OB2.shapeColor = "red";
  }
  else{
    OB1.shapeColor = "green";
    OB2.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false;
  }
}