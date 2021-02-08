const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,option);
  World.add(world,ground);
  console.log(ground);

  var ball_options = {
    restitution:1
  }
  ball=Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50,50);
}