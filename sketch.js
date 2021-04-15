var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var turn =0;
var particle;
var gameState = "start";
var count=0;
// var gamestste = "end";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
  {  
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) 
  {  
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
    plinkos.push(new Plinko(j,375));
  }  
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : " + score,20,30);
  text("Count : " + count,20,50);

  text("500", 25,515);
  text("500", 105,515);
  text("500", 185,515);
  text("500", 265,515);
  text("100", 345,515);
  text("100", 425,515);
  text("100", 505,515);
  text("200", 585,515);
  text("200", 665,515);
  text("200", 745,515);
  
  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();
  }
  
  // if(frameCount%60===0)
  // {
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  // }
 
  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }
   
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  if(particle!=null)
  {
    particle.display();
    if (particle.body.position.y>600) 
    {
      if(particle.body.position.x >= 0 && particle.body.position.x<=330)
      {
        //count--;  //reducing one extra increase done in mousePressed()
        score=score+500;
        particle=null;
        if(count>= 5) {gameState ="end";}
      }      
    }
  }

  if(particle!=null)
  {    
    particle.display();
    if (particle.body.position.y>600) 
    {      
      if (particle.body.position.x>330 && particle.body.position.x<=520) 
      {
        //count--;  //reducing one extra increase 
        score=score+100;
        particle=null;
        if(count >= 5) {gameState ="end";}               
      }     
    }
  }

  if(particle!=null)
  {
    particle.display();
    if (particle.body.position.y>600) 
    {      
      if (particle.body.position.x>520 && particle.body.position.x<800) 
      {
        //count--; //reducing one extra increase 
        score=score+200;
        particle=null;
        if(count >= 5) {gameState ="end";}
      }     
    }
  }

  if (gameState == "end") {
    textSize(80)
    text("GAME OVER!!!", 150, 350)
  }

}

function mousePressed()
{
  if (gameState != "end")
  {
    count++;  //Not sure why this is increasing by 2
    particle = new Particle(mouseX, 10, 10, 10);    
  }
}
