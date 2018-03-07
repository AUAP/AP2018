//sketch06  10 print in Commodore64
/*
Ref:
1. In the book 10Print: 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
2. Shiffman's video: https://www.youtube.com/watch?v=bEyTZ5ZZxZs


Rules:
1. Throw a dice randomly
2. Half of the chance print a backward slash
3. The other half of the chance will print a forward slash
4. Fill the whole canvas with the randomly generated slash
invent your own 10Print by creating your own rules!
*/

let x = 0;
let y = 0;
let spacing = 10;

function setup() {
  createCanvas(500,800);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) <0.5) {  //probabilty
    //line(0,0,10,10); //backward slash
    line(x,y,x+spacing,y+spacing);
  } else {
    //line(0,10,10,0); //forward slash
    line(x,y+spacing,x+spacing,y); //forward slash
  }
  x+=10;
  if (x > width) {
    x = 0;
    y += spacing;

  }
}
