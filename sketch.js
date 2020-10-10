const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var maxDrops = 100;
var umbrella;
var drops = [];
var thunder1,thunder2,thunder3;
var thunder;
var engine;
var world;
var rand;

function preload(){

   thunder1 = loadImage("thunder1.png");
   thunder2 = loadImage("thunder2.png");
   thunder3 = loadImage("thunder3.png");

    
}

function setup(){
   var canvas = createCanvas(400,800);
   engine = Engine.create();
   
   world = engine.world;
   render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 400,
        height: 800,
       // wireframe: false
      }
    });
   

   umbrella = new Umbrella (200,650);

   if(frameCount % 150 === 0){

   for(var i = 0; i<maxDrops; i++){
      drops.push(new Drop(random(0,400), random(0,400)));
   }

}
}

function draw(){
 background("black");
 Engine.update(engine);

Render.run(render);

 rand = Math.round(random(1,3));

 if(frameCount % 20 === 0){
 thunder = createSprite(200,100,20,200);

    switch(rand){
       case 1:
          thunder.addImage(thunder1);
          break;
       case 2:
         thunder.addImage(thunder2);
         break;
      case 3:
         thunder.addImage(thunder3);
         break;
         default: break;
    }
 }

   umbrella.display();

   
   for( var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
   }
   drawSprites();
}
