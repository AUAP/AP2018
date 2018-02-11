//inspired by https://steemit.com/funny/@funnyquotes/the-art-gallery-of-the-future

var img;
var throbber;
var siz = 25;

function preload() {
  img = loadImage("images/Theartgalleryofthefuture.gif");
  throbber=createImg("images/throbber.gif");
}

function setup() {
  createCanvas(489, 500);
  noCursor();
  throbber.size(siz,siz);
  console.log("hello " + "world");
}

function draw() {
  throbber.position(mouseX,mouseY); //locate the gif
  image(img, 0,0);
  noStroke();
  fill(188, 185,169);
  beginShape(); //left top
  vertex(1,80);
  vertex(53,75);
  vertex(54,121);
  vertex(1,124);
  endShape(CLOSE);

  beginShape(); //second left top
  vertex(93,53);
  vertex(135,46);
  vertex(134,119);
  vertex(93,122);
  endShape(CLOSE);

  beginShape();  //middle big one
  vertex(168,23);
  vertex(230,13);
  vertex(274,24);
  vertex(263,262);
  vertex(161,259);
  endShape(CLOSE);

  beginShape();  //top second right
  vertex(327,28);
  vertex(368,23);
  vertex(367,79);
  vertex(325,85);
  endShape(CLOSE);

  beginShape();  //top right
  vertex(430,22);
  vertex(479,15);
  vertex(478,74);
  vertex(430,80);
  endShape(CLOSE);

  beginShape();  //bottom right
  vertex(327,155);
  vertex(479,146);
  vertex(478,281);
  vertex(326,275);
  endShape(CLOSE);

  beginShape();  //bottom left
  vertex(1,163);
  vertex(118,156);
  vertex(112,270);
  vertex(2,267);
  endShape(CLOSE);

}

function mousePressed() {
  console.log(mouseX, mouseY);
}
