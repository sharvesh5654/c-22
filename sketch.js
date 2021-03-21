const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 


var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create()//myEngine.world;
  myWorld=myEngine.world;

  var options={
   isStatic:true
  }
ground=  Bodies.rectangle(200,390,400,10,options)
World.add(myWorld,ground)

var balloptions={

  restitution:1
  

}


ball= Bodies.circle(200,200,50,balloptions)
World.add(myWorld,ball)

console.log(ground.position.x)
}



function draw() {
  background("pink"); 
  Engine.update(myEngine);
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,10)
  circle(ball.position.x,ball.position.y,50)
}