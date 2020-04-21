const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1;


function setup() {
 var canvas =  createCanvas(400,400);
engine = Engine.create();
 world = engine.world;

 log1 = new rectanglelog (100,290,60,160);
 fill("beige");
 log2 = new rectanglelog(300,290,60,160);
 fill("cyan");   
 log3 = new rectanglelog (200,185,60,170);
 fill("red");
 log4 = new rectanglelog (40,225,60, 290);
 fill("blue");  
 log5 = new rectanglelog (361,225,60,290);
 fill("orange");
 log6 = new rectanglelog (200,320,140,100);
 fill("red");
 

}
function preload() {
  backgroundImg = loadImage("castle.png");
}
function draw() {
  var canvas = createCanvas(400,400);
  background(backgroundImg);

Engine.update(engine);

triangle(200,30,169,100,231,100);
fill("violet");

triangle(100,150,70,210,130,210);
fill("indigo");

triangle(300,150,269,210,331,210);
fill("blue");

triangle(40,10,10,80,70,80);
fill("green");

triangle(360,10,330,80,390,80);
fill("brown");

line(100,150,100,75);

triangle(110,210,100,210,100,210);




//wall.display();
log1.display();
log2.display();
log3.display();
log4.display();
log5.display();
log6.display();



//drawSprites();
}