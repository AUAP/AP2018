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
  image(img, 5,5);
  noStroke();
  fill(188, 185,169);
  beginShape(); //left top
  vertex(6,85);
  vertex(58,80);
  vertex(59,126);
  vertex(6,129);
  endShape(CLOSE);

  beginShape(); //second left top
  vertex(98,58);
  vertex(140,51);
  vertex(139,124);
  vertex(98,127);
  endShape(CLOSE);

  beginShape();  //middle big one
  vertex(173,28);
  vertex(235,18);
  vertex(279,29);
  vertex(268,267);
  vertex(166,264);
  endShape(CLOSE);

  beginShape();  //top second right
  vertex(332,33);
  vertex(373,28);
  vertex(372,84);
  vertex(330,90);
  endShape(CLOSE);

  beginShape();  //top right
  vertex(435,27);
  vertex(484,20);
  vertex(483,79);
  vertex(435,85);
  endShape(CLOSE);

  beginShape();  //bottom right
  vertex(332,160);
  vertex(484,151);
  vertex(483,286);
  vertex(331,280);
  endShape(CLOSE);

  beginShape();  //bottom left
  vertex(6,168);
  vertex(123,161);
  vertex(117,275);
  vertex(7,272);
  endShape(CLOSE);

}

function mousePressed() {
  console.log(mouseX, mouseY);
}
