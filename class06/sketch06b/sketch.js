/*
sketch06
Rules:
1. Pick a random throbber's slash
2. Fill the screen with the random throbber's slash
3. Randomly select one throbber and rotate it
4. Select another throbber randomly and rotate itself
*/

let slash = ["—"," \\"," |"," /"];
let throbber =[];
let spacing = 20;
let grid_pointer =0;
let slash_counter =0;

function setup() {
  createCanvas(560,600);
  frameRate(4);
  background(255);
  for (let h = 0; h < height; h+=spacing) {
    for (let w = 0; w< width; w+=spacing) {
      append(throbber, new Throbber(floor(random(0,slash.length)), w, h));
    }
  }
}

function draw() {
    background(255);

    for (let i = 0; i <throbber.length; i++) {
      throbber[i].display(false);
      //throbber[i].doThrob();  //all will throb
    }

    if (slash_counter > slash.length){  //pick a random throbber to rotate (rotate 5 times in a row)
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
      fill(10);
    }
    textSize(20);
    text(slash[this.no], this.pos.x, this.pos.y);
  }

  doThrob() {
    this.no++;
    if (this.no == slash.length) {
      this.no =0;
    }
  }
}
