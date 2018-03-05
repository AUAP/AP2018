//sketch05 - object orientation based on ES6 (class-based object oriented programming is introduced in ECMAScript 2015)

let car = [];
let button;
let bg;

function preload() {
  bg = loadImage("data/road.jpg");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 button = createButton('add+1');
 button.style('color','#555555');
 button.mousePressed(add);

 car[0] = new Car(color(255,0,0), 10, 10, 100, 20); //create/construct a new object instance
 car[1] = new Car(color(0,0,255), 15, 20, 300, 10);

}

function draw() {
 background(bg);
 button.position(width/2,5);

 for (let i = 0; i <car.length; i++) {
  car[i].drive();
  car[i].display();
 }
}

function add() {
  append(car,  new Car(color(random(155,255)), random(2,10), random(10,20), random(15,500), random(30)));  //only grey scale colors for newly added cars
}

//create a class: template/blueprint of objects
class Car {
  constructor(getcolor, speed, xpos, ypos, size) { //initalize the objects
    this.getcolor = getcolor;
    this.speed = speed;
    this.pos = new createVector(xpos, ypos);  //check this feature: https://p5js.org/reference/#/p5/createVector
    this.size = size;
  }

  drive() {
    this.pos.x+=this.speed;  //this.pos.x = this.pos.x + this.speed;
    if (this.pos.x > width) {
       this.pos.x = 0;
    }
  }

 display() {
   noStroke();
   fill(this.getcolor);
   rect(this.pos.x,this.pos.y,this.size,this.size);
 }

}
