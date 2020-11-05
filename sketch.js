var car;
var wall
var speed, weight
var deformation;






function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(100, 200, 75, 60);
  car.shapeColor = "blue";
  car.velocityX = speed;
  wall = createSprite(1500,200, 50, 200);
 
}

function draw() {
  background(0); 
  carIsTouching();
  
  drawSprites();
}

function carIsTouching(){
  if(car.x - wall.x < wall.width/2 + car.width/2 && 
    wall.x - car.x < wall.width/2 + car.width/2 &&
    car.y - wall.y < wall.height/2 + car.height/2 &&
    wall.y - car.y < wall.height/2 + car.height/2){
      car.velocityX = 0;
      deformation = 0.5*weight*speed*speed/22500;
    if(deformation<80){
      car.shapeColor = "green";
     }
     if(deformation>80 && deformation<180){
       car.shapeColor = "yellow";
     }
     if(deformation>180){
       car.shapeColor = "red";
     }

    }
}