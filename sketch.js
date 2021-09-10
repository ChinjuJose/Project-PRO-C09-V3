var b1,b2;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  b1 = createButton("Red");
  b1.position(50,90);
  b1.mousePressed(changeRed);

  b2 = createButton("Green");
  b2.position(150,90);
  b2.mousePressed(changeGreen);
}

function draw() {
  background(r,g,b);
}

function changeRed(){
  r=255;
  g=0;
  b=0;
}

function changeGreen(){
  r=0;
  g=255;
  b=0;
}

