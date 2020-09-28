const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,shot;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(900,350,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(1025,200,100);
	mango2 = new Mango(1150,200,100);
	mango3 = new Mango(1275,200,100);
	mango4 = new Mango(1080,100,100);
	mango5 = new Mango(1200,100,100);
	stone = new Stone(150,550,40);
  shot = new Shot(stone.body,{x:150,y:350});
  boy=new Boy (350,200,300,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  textSize(18)
  
  text("Press Space for another chance", 800,100);

  background("lightBlue");

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  shot.display();
  boy.display();
 
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    shot.fly();

}

function detectCollision (lstone,lmango) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y);
    if (distance<-lmango.r+lstone.r) {
      Matter.Body.setStatic(lmango.body,false);
    }

} 

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		shot.attach(stone.body);
	}
}

