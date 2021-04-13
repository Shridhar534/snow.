const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxSnow=100
var snow=[]


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  createCanvas(400,800)
  engine = Engine.create()
  world = engine.world   

  if(frameCount % 150 === 0){

   for(var i=0; i<maxSnow; i++){
       snow.push(new createDrop(random(0,400), random(0,400)));
   }

}
}

function draw() {
  background(255,255,255);  
  drawSprites();

  Engine.update(engine)
 
  console.log(hii)
 for(var i = 0; i<maxSnow; i++){
    snow[i].showDrop();
    snow[i].updateY()
}
}