const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var solo;
var backgroundImg;
var torre, torreImg;
var angle;
var cannon;

function preload() {

    backgroundImg = loadImage("./assets/background.gif")
    torreImg = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var solo_options={
    isStatic:true
  }

  solo = Bodies.rectangle(0, height-1, width*2, 1, solo_options);
  World.add(world, solo);

  torre = Bodies.rectangle(150, 350, 160,310, solo_options);
  World.add(world, torre);

  angle = 20;
  //criar um objeto da classe Cannon
  cannon = new Cannon (180,110,130,100, angle);


}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, 1200,600);
 
  Engine.update(engine);
  
  rect(solo.position.x, solo.position.y, width*2, 1);
  
  push();
  imageMode(CENTER);
  image(torreImg, torre.position.x, torre.position.y, 160,310);
  pop();
  
  cannon.display();
}
