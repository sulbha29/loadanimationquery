const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    ground.x = ground.width/2;
    warrior = new Warrior(100,370,30,40);
    warrior.velocityX = -2;
   // enemy = new Enemy((,750,40,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    if(ground.body.position.x <400){
      Matter.Body.setPosition(ground.body, {x:ground.width/2, y:height})
      //ground.x = ground.width/2;
    }
    warrior.display();
    
enemy.display();
    
   //if(frameCount%50===0){
     
    

    //}
   
}
