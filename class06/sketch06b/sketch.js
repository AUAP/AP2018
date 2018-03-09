/*
Throb (ver1) by Winnie Soon (adapted to a book cover and a screensaver)
sketch06
Rules:
1. Pick a random throbber's slash
2. Fill the screen with the random throbber's slash
3. Randomly select one throbber and rotate it
4. Select another throbber randomly and rotate itself
*/

let slash = ["—"," \\"," |"," /"];
let throbber =[];
let spacing = 30;
let grid_pointer =0;
let slash_counter =0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(2);
  background(0);
  for (let h = 0; h < height; h+=spacing) {
    for (let w = 0; w< width; w+=spacing) {
      append(throbber, new Throbber(floor(random(0,slash.length)), w, h));
    }
  }
}

function draw() {
    background(0);

    for (let i = 0; i <throbber.length; i++) {
      throbber[i].display(false);
      //throbber[i].doThrob();  //all will throb
    }

    if (slash_counter > slash.length){  //pick a random throbber to rotate //change the no. of rotation n line35 and 39
      grid_pointer = floor(random(0,throbber.length));
      slash_counter = 0 ;
    }
    if (slash_counter <=slash.length) {
      throbber[grid_pointer].display(true);
      throbber[grid_pointer].doThrob();
      slash_counter++;
    }

}

class Throbber{
  constructor(no, xpos, ypos) {
  this.no = no;
  this.pos = new createVector(xpos, ypos);
  }

  display(state) {
    if (state) {
      fill (255,0,0);
    } else {
      fill(230);
    }
    textSize(30);
    text(slash[this.no], this.pos.x, this.pos.y);
  }

  doThrob() {
    this.no++;
    if (this.no == slash.length) {
      this.no =0;
    }
  }
}
