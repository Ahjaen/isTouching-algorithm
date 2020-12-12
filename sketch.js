var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 70);
  movingRect = createSprite(600, 200, 70, 50);
  fixedRect.debug=true;
  movingRect.debug=true;
  movingRect.shapeColor="white";
  fixedRect.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (movingRect.x-fixedRect.x <= (movingRect.width/2+fixedRect.width/2) && 
    fixedRect.x-movingRect.x <= (movingRect.width/2+fixedRect.width/2) && 
    movingRect.y-fixedRect.y <= (movingRect.height/2+fixedRect.height/2) && 
    fixedRect.y-movingRect.y <= (movingRect.height/2+fixedRect.height/2)){
    movingRect.shapeColor="orange";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="white";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}