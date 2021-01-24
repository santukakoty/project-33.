
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles =[];
var plinko =[];
var divisions =[];

var divisionHeight=300;
var score=0;
var count=0;
var particle;
var gameState ="start";
//var gameState="end";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(500,750,1000,40);

  for (var i = 10; i <800; i = i + 80){
    divisions.push(new Divisions(i, 650, 10, 300));
  }
  for (var i = 15; i <800; i = i + 50){
    plinko.push(new Plinko(i,50));
  }
  for (var i = 40; i <800; i = i + 50){
    plinko.push(new Plinko(i,130));
  }
  for (var i = 15; i <800; i = i + 50){
    plinko.push(new Plinko(i,210));
  }
  for (var i = 40; i <800; i = i + 50){
    plinko.push(new Plinko(i,290));
  }
  for (var i = 15; i <800; i = i + 50){
    plinko.push(new Plinko(i,370));
  }  
}

function draw() {
  background("yellow"); 
  Engine.update(engine); 
  textSize(27);
  fill("purple");
  stroke("violet");
  text("Score : "+score,30,30);
  textSize(35);
  fill("darkblue");
  text(" 500 ",10,510);
  fill("red");
  text(" 500 ",90,510);
  fill("maroon");
  text(" 100 ",170,510);
  fill("purple");
  text(" 100 ",250,510);
  fill("lime");
  text(" 200 ",330,510);
  fill("gray");
  text(" 200 ",410,510);
  
  ground.display();
  for (var i = 0; i<divisions.length;i++){
    divisions[i].display();
  }
 
  //if(frameCount%7===0){
  //particles.push(new Particles(random(width/2-10, width/2+10),10,10));
 // }
  //for(var i=0;i<particles.length;i++){
   //particles[i].display();
  //}

  if(particle!=null)
  {
    particle.display();

    if (particle.body.position.y>650)
    {
      if (particle.body.position.x < 160)
      {
      score=score+500;
      particle=null;
      if(count>= 5) gameState = "end";
    }
    else if (particle.body.position.x < 320 && particle.body.position.x > 161)
    {
      score = score + 100;
      particle=null;
      if ( count>= 5)gameState = "end";

    }
    else if (particle.body.position.x < 480 && particle.body.position.x > 321)
    {
      score = score + 200;
      particle=null;
      if ( count>= 5)gameState = "end"
    }
  }
  }

  for (var i = 0; i<plinko.length;i++){
    plinko[i].display();
  }
}
if(gameState =="end"){
  textSixe(100);
  text("GameOver",10,250)
}

function mousePressed()
{
  if(gameState==="start")
  {
    count++;
    particle = new Particles(mouseX,10);
  }
}
