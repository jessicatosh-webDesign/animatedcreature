 let armrotation=-45;
let speed = 2.72;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  
  
//Sky
  background(180, 232, 237);
  fill(255);
strokeWeight(1);
  
  
//Ground
    fill(191, 237, 180);
    rect(0, 300, 400, 100, 5);
 
  
//Head of Creature (shape and ears)
    fill(252, 183, 174);
    triangle(80, 80, 60, 95, 60, 65);
    triangle(140, 100, 95, 95, 145, 65);
    triangle(70, 90, 100, 60, 130, 88);
    ellipse(100, 120, 100, 90);

  
//Face Features (eyes)
    fill(252, 250, 252);
    ellipse (80, 105, 9, 12);
    ellipse (100, 105, 9, 12);
    ellipse (120, 105, 9, 12);
  
  
//Face Features (pupils)
    fill(0);
    ellipse (80, 105, 3, 5);
    ellipse (100, 105, 3, 5);
    ellipse (120, 105, 3, 5);
  
  
//Face Features (Nose)
    fill (242, 165, 237);
    ellipse (100, 122, 13, 8);

  
//Face Features (Mouth)
    point(125, 135);
    point(110, 145);
    point(90, 145);
    point(75, 135);
    strokeWeight(1);

    noFill();
    strokeWeight(1);
    beginShape();
    curveVertex(75, 135);
    curveVertex(90, 145);
    curveVertex(110, 145);
    curveVertex(125, 135);
    endShape();

  
//Blush
    strokeWeight(0);
    fill (245, 127, 127);
    ellipse (73, 130, 13, 8);
    ellipse (126, 130, 13, 8);

  
//Body of Creature
    strokeWeight(1);
    fill(247, 157, 0);
    rect(60, 160, 80, 100, 5);

  
//Flower on Body (center)
    strokeWeight(0);
    fill(240, 227, 187);
    ellipse (100, 210, 20, 20);

  
//Flower on Body
    strokeWeight(0);
    fill(238, 187, 240);
    ellipse (83, 212, 13, 10);
    ellipse (86, 200, 13, 10);
    ellipse (115, 200, 13, 10);
    ellipse (92, 224, 13, 10);
    ellipse (108, 224, 13, 10);
    ellipse (117, 213, 13, 10);
    ellipse (100, 194, 13, 10);
  
  
//Arms
  strokeWeight(1);
    fill (252, 183, 174);
  push();
  translate(140,175);
  rotate(radians(armrotation));
    rect (0, 0, 20, 10, 50);
  armrotation = armrotation+speed;
  if (armrotation >=45)
    {
      speed = -speed;
    }
  if (armrotation <=-45)
    {
      speed = -speed;
    }
  
  pop();
    rect (40, 175, 20, 10, 50);

  
//Legs
    fill (252, 183, 174);
    rect (65, 260, 10, 40);
    rect (80, 260, 10, 40);
    rect (110, 260, 10, 40);
    rect (125, 260, 10, 40);

  
//Tree Base
    strokeWeight(1);
    fill(160, 82, 45);
    rect(280, 150, 30, 150);
  
  
//Tree Leaves 1
  strokeWeight(1);
    fill(221, 247, 208);
    ellipse (250, 160, 70, 50);
  
  
//Tree Leaves 2
  strokeWeight(1);
    fill(163, 235, 127);
    ellipse (230, 120, 70, 50);
  
  
//Tree Leaves 3
  strokeWeight(1);
    fill(136, 171, 118);
    ellipse (270, 100, 70, 50);

  
//Tree Leaves 4
  strokeWeight(1);
    fill(160, 245, 118);
    ellipse (280, 130, 70, 50);
  
  
//Tree Leaves 5
  strokeWeight(1);
    fill(109, 209, 59);
    ellipse (330, 100, 70, 50);
  
  
//Tree Leaves 6
  strokeWeight(1);
    fill(181, 212, 165);
    ellipse (350, 120, 70, 50);
  
  
//Tree Leaves 7
  strokeWeight(1);
    fill(207, 230, 195);
    ellipse (350, 150, 70, 50);
  
  
//Tree Leaves 8
  strokeWeight(1);
    fill(92, 191, 42);
    ellipse (340, 140, 70, 50);
  
  
//Tree Leaves 9
  strokeWeight(1);
    fill(48, 133, 5);
    ellipse (310, 160, 70, 50);


}