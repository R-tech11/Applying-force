const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, ground1, ground2, ground3;
var ball;
var right, push, rightImg, pushImg;

function preload()
{
  rightImg = createImg("right.png");
  rightImg.position(50, 50);
  rightImg.size(50, 50);
  rightImg.mouseClicked(hForce);

  pushImg = createImg("push.png");
  pushImg.position(100, 50);
  pushImg.size(50, 50);
  pushImg.mouseClicked(vForce);

}


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(200, 390, 400, 10);
  ground1 = new Ground(200, 10, 400, 10);
  ground2 = new Ground(10, 200, 10, 400);
  ground3 = new Ground(390, 200, 10, 400);

  var ball_options = {
    restitution: 1
  }

  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();

  ellipse(ball.position.x, ball.position.y, 20);

}

function hForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.01, y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.01})
}
