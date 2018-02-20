//sketch03a

function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 background(10);
 frameRate (10);  //try to change this parameter
}

function draw() {
 noStroke();
 fill(10,80);  //check this syntax with alpha value
 rect(0, 0, width, height);
 drawThrobber(9);
}

function drawThrobber(num) {
  push();
  translate(width/2, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  var cir = 360/num*(frameCount%num);  //to know which one among 9 possible positions.
  rotate(radians(cir));
  noStroke();
  fill(255,255,0);
  ellipse(35,0,22,22);  //the moving dot(s), the x is the distance from the center
  pop();

  stroke(255,0,0);
  line(60,0,60,height);   //a static line

}
