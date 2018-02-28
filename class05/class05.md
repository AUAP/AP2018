Messy notes of class05 - Object Orientation

Agenda:
- Design work/Game showcase: [ToFu Go](http://tofu-go.com/) by Francis Lam
- Peer-Tutoring: p5.play libary
- The theme about Object Orientation
- Sample code: start from scratch 
- Tasks for next week

[background video](https://loopvideos.com/V9NirY55HfU)

#### [ToFu Go](http://tofu-go.com/) by Francis Lam

![tofu go](http://tofu-go.com/iphone0.png)

- About Francis: Francis Lam is a designer, new media artist and programmer currently based in Shanghai. He was brought up and educated in Hong Kong. After his studies in Computer Science and Graphic Design, he moved to Boston and received his Master’s degree in Media Arts and Sciences from the MIT Media Lab. Francis is interested in the social aspects of interactive media and new interfaces for computer-mediated communications. His new media arts and installations have been exhibited and awarded worldwide. In 2008, he moved to Shanghai and joined Wieden+Kennedy as the Interactive Creative Director and Head of Interactive. Francis has created many digital and interactive work for clients such as Nike, Estée Lauder, Tiffany, Levi’s, Coca Cola and Unilever that drew the attention of millions of consumers in China. He is now the Chief Innovation and Technology Officer at Isobar China and leading Nowlab, the in-house R&D unit.

- Interview:[Francis Lam](http://www.design-china.org/post/35833433475/francis-lam)

#### The theme about Object Orientation

- Object Oriented Programming
  - A program execution is regarded as a physical model, simulating the behavior of either a real or imaginary part of the world (Madsen et al, 1993, p.16)
  - Objects are used for representing (or modeling) physical phenomena (Madsen et al, 1993, p.18)
  - Objects are computerized material (Madsen et al, 1993, p.18)
<p><p><p>

  - A class specifies the structure of its objects' attributes and the possible behaviors of its objects.
    - like a template and blueprint of things
  - Think of an object as a specific instance
    - An object holds specific values of attributes (but these values can change over time)
    - An object has behaviors, which can perform in different ways
  - e.g1 A person with **properties** like name=winnie, haircolor=brown, wear glasses, height=165cm, favoriteColor=blue ...
  - e.g2 A person **runs** from Aarhus C to Aarhus N (run is the method- which will be defined via functions)
  - Translate into programming concepts where a program may have more than one person with the same properties but different values: 

   Person        |
  -------------  |
  Name, HairColor, withGlasses, Height, FavoriteColor, FromLocation, ToLocation|
  run()     

![object](https://github.com/AUAP/AP2018/blob/master/class05/object0.png)

- In-class activity: Creating and Defining Car objects
![object1](https://github.com/AUAP/AP2018/blob/master/class05/car1.jpg)
  - what might be the attributes of a car? 
  - what might be the behaviors of a car? 
  
- Coding Step by Step (1): what would be your class name? 
```javascript
//create a class: template/blueprint of objects
class Car {

}

```
- Coding Step by Step (2): what are the attributes of a car? 
```javascript
//create a class: template/blueprint of objects
class Car {
  constructor(getcolor, speed, xpos, ypos, size) { //initalize the objects
    this.getcolor = getcolor;
    this.speed = speed;
    this.pos = new createVector(xpos, ypos);  //check this feature: https://p5js.org/reference/#/p5/createVector
    this.size = size;
  }
}
```
- Coding Step by Step (3.1): what are the behaviors of a car? (for example, assume the car can move from one location to another horizontally on a screen) 
```javascript
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
}
```
- Coding Step by Step (3.2): what are the behaviors of a car? (you need to display it on a screen) 
```javascript
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
```
- Coding Step by Step (4.1): The basic structure has been setup, next is to try to create a car object that can display on the screen
```javascript
let car = [];

function setup() {
 createCanvas(windowWidth, windowHeight);

 car[0] = new Car(color(255,0,0), 10, 10, 100, 20); //create/construct a new object instance
 car[1] = new Car(color(0,0,255), 15, 20, 300, 10); //if you want to create one more
}
```
- Coding Step by Step (4.2): The car object has been created but you need to specify what you want the car to perform and to show the changes over time and to display it on a screen. 
```javascript
let car = [];

function setup() {
 createCanvas(windowWidth, windowHeight);

 car[0] = new Car(color(255,0,0), 10, 10, 100, 20); //create/construct a new object instance
 car[1] = new Car(color(0,0,255), 15, 20, 300, 10); //if you want to create one more
}

function draw() {
 for (let i = 0; i <car.length; i++) {
  car[i].drive();
  car[i].display();
 }
}
```
- Coding Step by Step (5): 
  - Think about if you want to create a new object when here is a trigger point e.g click on a button to create a new page, or create a new car. 
  - Think about if objects will be forever stayed on the screen, will they disappear on a screen?
  - Some other syntax would be useful in relation to objects orientation in p5js, they are append() and splice() for creating and deleting objects. 

#### Tasks for next week
- miniEx5 - [Games with Objects](https://github.com/AUAP/AP2018/blob/master/all_miniex/mini_ex5.md)
- Peer-tutoring: Group 4 / Respondents: Group 5, Topic: Conditions with sound and video files


