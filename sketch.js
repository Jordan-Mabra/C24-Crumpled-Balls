
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, bin1,bin2,bin3, paper;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	
	bin2 = new Bin(713,390,130,10);
	bin1 = new Bin(650,400,10,120);
	bin3 = new Bin(770,400,10,120);

	paper = new Paper(100,300,10);
	ground = Bodies.rectangle(width/2, 400, width, 10, {isStatic:true});
	World.add(world, ground);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  

  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();

 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:13, y: -13});

	}
}


