const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubberball;
var Iron;
var sandball1,sandball2,sandball3,sandball4,sandball5,sandball6,sandball7;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane (600,height,1200,20)
    hammer = new Hammer (10,100);
    rubberball= new Rubber (910,440,70);
    stone = new Stone (300,565,50,50);
    Iron = new iron (200,565);
    sandball1 = new Sandball(500,500,10);
    sandball2 = new Sandball(515,500,10);
    sandball3 = new Sandball(530,500,10);
    sandball4 = new Sandball(545,500,10);
    sandball5 = new Sandball(560,500,10);
    sandball6 = new Sandball(575,500,10);
    sandball7 = new Sandball(590,500,10);
   // console.log(stone.height,stone.width);
    


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubberball.display();
    stone.display();
    Iron.display();
    sandball1.display();
    sandball2.display();
    sandball3.display();
    sandball4.display();
    sandball5.display();
    sandball6.display();
    sandball7.display();

    
 
}