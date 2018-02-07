var loading_img;
var imgsize_width = 150;  //try to change this parameter from 125-200
var imgsize_height = 100;

function preload() {
  //check also loadImage() from reference //https://p5js.org/reference/#/p5/loadImage
  loading_img=createImg("http://i.imgur.com/omGnqz7.gif"); //requires p5.dom lib, check https://p5js.org/reference/#/p5/createImg
}

function setup() {
  // put setup code here
  createCanvas(300,250);
  background(0,0,0);
  loading_img.size(imgsize_width,imgsize_height);
  console.log("hello " + "world"); //can add/concatenate words as well 
}

function draw() {
  // put drawing code here
  loading_img.position(76,76); //locate the gif
  noStroke();
  fill(255); //check https://p5js.org/reference/#/p5/fill
  rect(0,0,25,25);
  fill(100);
  ellipse(0,0,50,50);
  fill(155);
  rect(25,25,50,50);
  noFill();
  stroke(0, 153, 255);
  line(75,75,75,75+imgsize_height);
  line(75+imgsize_width+3,75,75+imgsize_width+3,75+imgsize_height);
  line(75,75,75+imgsize_width+3,75);
  line(75,75+imgsize_height+1,75+imgsize_width+3,75+imgsize_height+1);
  noStroke();
  fill(0, 153, 255);
  rect(25+50+imgsize_width+4,25+50+imgsize_height+2,imgsize_height,imgsize_height);
}
