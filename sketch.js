var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(10, 200, 40, 10);
  bullet.velocityX=speed;
  bullet.shapeColor=color(80,80,80);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}
function draw() {
  background(255,255,255);

  var deformation = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  text("Speed = "+speed,50,50); 
  text("Weight = "+weight,300,50);
  text("Thickness = "+thickness,550,50); 
  text("Deformation = "+deformation,800,50); 


  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    if(deformation > 10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(deformation < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
    bullet.velocityX=0;;
  }
  drawSprites();
}