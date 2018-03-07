//credit: http://www.openprocessing.org/sketch/228000
//sketch06
var r = 0;
var status = "up";

function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 noFill();
 frameRate(55);  //5 slow down
}

function draw() {
  background(255);
  for (var xcor = 0; xcor < width-50; xcor += 50){
    for (var ycor = 0; ycor < height-50; ycor += 50){
       drawSomething(xcor, ycor);
     }
  }

  //to keep increasing or decreasing the ellipses

  if (status == "up") {
  	r+=0.01;   //increase the size at a time
  }else{
  	r-=0.01;
  }

  //if it reaches certain size, change the direction
  if (r > 40){    //until r reaches a certain number, reset the status
   status = "down";
  }else if (r < 0) {
   status = "up";
  }
   console.log(r);
}

function drawSomething(x, y) {   // total horizontal ellipses (x axis = width/50); total vertical ellipses 19 (y axis = height/50) ) x2 ellipses (draw 2 ellipses at a time, see below)
  ellipse(x+50, y+25, 50*r, 50*r);
  ellipse(x+25, y+50, 50*r, 50*r);
}
