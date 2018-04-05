var x1 = 100;
var y1 = 100;
var x2 = 50;
var y2 = 50;

xPosition = 100

function preload() {
 Henrik = loadImage ("assets/Henrik.png")
  
}
function setup() {
  createCanvas (windowWidth, windowHeight);
   background (0,255,0); 
 
} 

function draw() {
  //background (0,255,0); 
  image (Henrik, x1,y1, 50, 50); if (keyIsDown(LEFT_ARROW))
  x1 = x1 - 5;
 
  if (keyIsDown(RIGHT_ARROW))
  x1 = x1 + 5
  
  if (keyIsDown(DOWN_ARROW))
  y1 = y1 + 5
  
  if (keyIsDown(UP_ARROW))
  y1 = y1 - 5
}
function mousePressed(){
   background (0,255,0);
}
 function windowResized(){
   resizeCavas (windowWidth, windowHeight);
 }