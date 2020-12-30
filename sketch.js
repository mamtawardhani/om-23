const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en;
var wo, box1
var b
function setup() {
  createCanvas(400,400);
  en=Engine.create()
  wo=en.world


b1=new Box(100,10,50,100)
b2=new Box(300,10,30,40)



}

function draw() {
  background(0);  

  Engine.update(en)
 b1.show()
 b2.show()
}

