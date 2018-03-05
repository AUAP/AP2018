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
  - A programming paradigm
  - The formal programming concept of objects was introduced in the mid-1960s with Simula 67, a major revision of Simula I, a programming language designed for discrete event simulation, created by Ole-Johan Dahl and Kristen Nygaard of the Norwegian Computing Center in Oslo. (Wikipedia)
  - A program execution is regarded as a physical model, simulating the behavior of either a real or imaginary part of the world (Madsen et al, 1993, p.16)
  - Objects are used for representing (or modeling) physical phenomena (Madsen et al, 1993, p.18)
  - Objects are computerized material (Madsen et al, 1993, p.18)
  - Objects are designed both to manage data and to carry out operations (Lee, 2013, 17)
<p><p><p>

  - A class specifies the structure of its objects' attributes and the possible behaviors/actions of its objects.
    - like a template and blueprint of things
  - Think of an object as a specific instance (objects are instances of classes - Lee, 2013, p. 20)
    - An object holds specific values of attributes (but these values can change over time)
    - An object has behaviors, which can perform action(s) in different ways
    - In other words, "attributes and actions are combined to make up a single unified object" (Lee, 2013, 17)
  - e.g1 A person with **properties** like name=winnie, haircolor=brown, wear glasses, height=165cm, favoriteColor=blue ...
  - e.g2 A person **runs** from Aarhus C to Aarhus N (run is the method- which will be defined via functions)
  - Translate into programming concepts where a program may have more than one person with the same properties but different values: 

   Person        |
  -------------  |
  Name, HairColor, withGlasses, Height, FavoriteColor, FromLocation, ToLocation|
  run()     

![object](https://github.com/AUAP/AP2018/blob/master/class05/object0.png)

- Discussion in Groups:
```
Try to discuss a game that you are familiar with and describe the characters/objects 
by using the concept of class and object. 
```

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
- Coding Step by Step (4.2): The car object has been created but you need to specify how you want the car to perform and to show the changes over time => remember to display them on a screen. 
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

- [RunMe](https://rawgit.com/AUAP/AP2018/master/class05/sketch05/index.html) and [source code](https://github.com/AUAP/AP2018/blob/master/class05/sketch05/sketch.js)

- In-class task: 
  - Download the code of sketch05
  - Add one more behavior/method for the class Car.
  
#### Tasks for next week
- miniEx5 - [Games with Objects](https://github.com/AUAP/AP2018/blob/master/all_miniex/mini_ex5.md)
- Peer-tutoring: Group 4 / Respondents: Group 5, Topic: Conditions with sound and video files

---
#### The concept of Object Orientation (my own notes)
-p. 17: In OOP, "software is not broken down into either operations or data, but rather into abstract software artifacts, called objects"

"These objects are designed both to manage data and to carry out operations"

-p. 18: abstraction: "capturing and focusing on the important details, while leaving out those that are less important"

-> oop allows creation of objects that represent only a portion of the real world objects. It describes the "outside view" of an object, and not the objects inner workings, or encapsulated information. "

-> p. 32: "an abstraction is a generalization of an object which includes only those details necessary to define it and to differentiate it from other objects"

-> "it retains only those details required for accurate description and identification of the object, but excludes all other nonessential information (Jia 2003)"

-p. 18: "an object in the world of computer programming is an entity with attributes that belong to and describe it"

"These attributes can be actions the object is capable of performing, an interface to access those attributes and actions, and most importantly, a unique identity"

"An object is a specific instance of a class, which can be thought of as a blueprint for that object"

-each object has an unique identity.

-"An object inherits most of its attributes from its class, but these attributes may differ amongst the object instances of that class"

-the concept of state of an object..

-p. 19: "objects are able to both change states and react to state changes" through methods

-"AN object's constructor is the actual method that handles the creation and initialization of the object" -> physically places that object into the computer's memory

-Similarly, "erasing an object, and thus freeing up the memory in which it resided"

-why delete object? free up memory and provide room in the system memory, potentially for the creation of other objects. "It also prevents faulty code from creating memory leaks"

-p. 20: "objects are instances of classes"

-metaphor: class as DNA -> description of attributes

-p. 20: "a class is the concept behind an object, or the 'essence' of an object, while an object itself is a tangible entity with a place in space and time (or system memory) (Booch 1994)"

object depends on class as "the object could not exist without the class that it is derived from"

->"a class must be defined before the object can even be conceived"

-adv of oo:

1/ modularity -> break into smaller modules -> reduce overall complexity -> efficiency and workability -> reusability (creation of independent components, each with a distinct function) -> a/ opportunistic and accidental reuse -> for new project b/ deliberate reuse  -> with reusability in mind

-p. 24: information hiding -> encapsulation





