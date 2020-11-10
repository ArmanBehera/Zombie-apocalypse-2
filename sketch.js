var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var rect1, rect2, rect3, rectBody1, rectBody2, rectBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution : 0.5, isStatic:true});
	World.add(world, packageBody);
	

	// Creating a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	// Creating rectangle sprites
	rect1 = createSprite(width / 2, 650, 200, 20);
	rect1.shapeColor = color("red");

	rect2 = createSprite(310, 590, 20, 100);
	rect2.shapeColor = color("red");

	rect3 = createSprite(490, 590, 20, 100);
	rect3.shapeColor = color("red"); 

	// Creating rectangle bodies
	rectBody1 = Bodies.rectangle(width /2, 650, 200, 50, {isStatic : true});
	World.add(world, rectBody1);

	rectBody2 = Bodies.rectangle(310, 590, 20, 100, {isStatic : true});
	World.add(world, rectBody2);

	rectBody3 = Bodies.rectangle(490, 590, 20, 100, {isStatic : true});
	World.add(world, rectBody3);
}


function draw() {
  	rectMode(CENTER);

 	Engine.update(engine);

 	background(0);

  	packageSprite.x= packageBody.position.x 
 	packageSprite.y= packageBody.position.y 

	keyPressed();

  	drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Making the package bounce by setting the gravity function(iStatic) to true
	Body.setStatic(packageBody, false);

  }
}



