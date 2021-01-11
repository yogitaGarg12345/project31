var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup(){
  createCanvas(800,800)
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,790,800,20)

  //division1 = new Divisions(150,620,20,390)
  //division2 = new Divisions(310,620,20,390)
  //division3 = new Divisions(470,620,20,390)
  //division4 = new Divisions(630,620,20,390)
  //division5 = new Divisions(790,620,20,390)
  //division6 = new Divisions(10,620,20,390)

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
Engine.update(engine);

ground1.display();

//division1.display();
//division2.display();
//division3.display();
//division4.display();
//division5.display();
//division6.display();

for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
for (var k = 0; k < divisions.length; k++) {
  
  divisions[k].display();
}
  
}