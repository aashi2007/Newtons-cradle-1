
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1, rope2, rope3, rope4, rope5; 
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var roof;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight/ 1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = 
	{
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);
	//Create the Bodies Here.
	Engine.run(engine);

	rope1 = new Rope(pendulum1.body, roof.body, - pendulumDiameter*2, 0);
	rope2 = new Rope(pendulum2.body, roof.body, - pendulumDiameter*2, 0);
	rope3 = new Rope(pendulum3.body, roof.body, - pendulumDiameter*2, 0);
	rope4 = new Rope(pendulum4.body, roof.body, - pendulumDiameter*2, 0);
	rope5 = new Rope(pendulum5.body, roof.body, - pendulumDiameter*2, 0);

	pendulum1 = new Pendulum(rope1.body, roof.body);
	pendulum2 = new Pendulum(rope2.body, roof.body);
	pendulum3 = new Pendulum(rope3.body, roof.body);
	pendulum4 = new Pendulum(rope4.body, roof.body);
	pendulum5 = new Pendulum(rope5.body, roof.body);

	roof = createSprite(200, 200, windowWidth / 2, windowHeight / 1.5);

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY})
}