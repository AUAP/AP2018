Announcement: Rules + change of date on guest Lecture: Anders Visti 

Again...this is the unstable/messy notes for class02: Having *Fun* with Basics

Agenda:
- Artwork showcase: what might be the notion of fun?
- Basic structure: HTML, CSS, JS
- The basics
  - Think in terms of a canvas
  - Coordinate system
  - Basic orientation/calculation
  - Variables
  - basic arithmetic operators
  - Real-time code jam/live coding with teletype on Atom
- ~~Errors + different types of errors: print(), console.log()~~
- ~~In-class challenge: Grid paper portrait in p5.js~~
- The concept of peer-tutoring
- Tasks for next week

### Artwork showcase and discussion: what might be the notion of fun?
![Interfight](https://github.com/AUAP/AP2018/blob/master/class02/interfight.png)
[Inter_fight](https://escuderoandaluz.com/2015/06/08/inter_fight/)(2015) by Cesar Escudero Andaluz
  - Interflight is a playful and artistic installation where users can interact with small robotic interfaces, at the same time these robots scroll and move on a touch-screen located on the floor of a cage where is displayed an interactive map.
  - In-class task: Take a look at the work and description, discuss how this work may express and address the notion of fun.

---

### Basic structure: HTML, CSS, JS
![Web](https://www.codeproject.com/KB/books/DevelopWebWidgetHtmlCssJs/bigpicture_small.png "web")
 
*Reference image: [Creating Web Widget with HTML, CSS, and JavaScript by Raj Lal](https://www.codeproject.com/Articles/81355/Chapter-Creating-Web-Widget-with-HTML-CSS-and-Ja)*

- **(Hypertext Markup Language) HTML**: a markup language that use tags to define elements within a document. It is more a structure that defines, organizes and governs a document  e.g the title, the language, the format, etc. It is a language, a human readable language that also instructs a browser to render the (html) tags, in which it defines how images, text or any other multimedia forms are displayed in web browsers. 
![html image](https://github.com/AUAP/AP2018/blob/master/class02/html.png)
- **(Cascading Style Sheet) CSS**: It is a language that applies styling to HTML elements. The sheet is like a template or a set of rules that determine how a webpage looks like. In other words, it is about styling and representation on a certain part of your page. e.g color, font size, tables, etc. If you look at line 5 below, it involves a selector 'body' (which is set in the HTML) and a declaration, including property like 'padding' and 'margin' with the value of '0' and the property 'background' with the value of 'lightblue'. 
  - CSS is usually definded in an external style sheet, but for simplicity for this example, I just put within the index.html with the tags <style></style> to signify it is a css. 
```
    <style>body {padding: 0; margin: 0;background-color:lightblue;} </style>
```
- **Javascript**: A high level scripting and interpreted langauge which was orginally designed and developed in 1995 at Netscape by Brendan Eich with an objective to run it on a web browser. Within the confusing discussion of Java and Javascript, they are not the same and are quite different, at least js is not a subset of Java. One could say that Javascript complements Java as not a compiled programming language, but an interpreted language instead. There are several characteristics of Javascript in terms of the original design:
  - lightweight
  - easy to use (especially for those with little or no programming experience)
  - able to construct complex applications
  - design to work with both frontend-HTML page authors and backend-enterprise application developers
  - dynamic objects with behaviors
  - supports object orientation
In terms of the relationship with HTML and CSS, Javascript supports dynamic interactions, both interactions between machines and humans with the ability to transmit, capture and manipulate data. As a result, it is usually descirbed as a dynamic language that adds behaviors to the content and its presentation. 

Line 6 and 7 above indicates how javascript files can be imported into the html page with the opening and closing tags <script></script>

---

### The basics: 
#### Think in terms of a canvas
![sketch02](https://github.com/AUAP/AP2018/blob/master/class02/sketch02.gif)
<br>
[Run me (sketch02- sample code)](https://rawgit.com/AUAP/AP2018/master/class02/sketch02/index.html)
<br>
[Source code of sketch02](https://github.com/AUAP/AP2018/blob/master/class02/sketch02/sketch02.js)

Questions: 
- Have you seen [this](https://steemit.com/funny/@funnyquotes/the-art-gallery-of-the-future)? (this is where I start from, and no photoshop for any image retouching)
- What is this sample code? 
- How does the program work?
  - How would you cover the paintings?
    - Which functions to use?
    - How to identify the coordinates?
- Any functions are new to you in sketch02? 

#### [Coordinate system](https://p5js.org/examples/structure-coordinates.html)
<br>
<img src="https://processing.org/tutorials/drawing/imgs/drawing-03.svg" width="550">

*Reference image: [Processing](https://processing.org)*

  - Numbers and pixels
  - createCanvas(), width, height
```javascript
function setup() {
  createCanvas(489, 500);
}
```
try: 
```javascript
console.log(width, height);
```
#### functions with a block of code inside
  - Default: i.e setup() and draw()
  - Other built in function: [preload()](https://p5js.org/reference/#/p5/preload)
    - about time and sequence
    - load before setup() is run
  - Self created function  (call a function) -> can be used and reused by calling its name
  - The function operator takes a self-defined name, a parameter list, and a block of statements, and returns a function object. See example below: 
```javascript
var whatIsTime = myTime(10,4);    //10,4 are arguments
console.log(whatIsTime);

function myTime(Distance, Speed){
  return Distance / Speed;
}

//The result in whatIsTime will be 2.5
```  
#### Commenting Code (code for running and code for not running)
- (see line 25) Single line: //locate the gif
- (see line 1-5) Multi line: /*something here and here */

### Basic orientation/calculation
```javascript
var img;
img = loadImage("images/Theartgalleryofthefuture.gif");
```
```javascript
var siz = 25;
throbber.size(siz,siz);
```
#### Variables 
   - Naming: [Variables](https://p5js.org/examples/data-variables.html)
   - think in terms of a container, where a value is stored and it can be changed over time.
   - e.g text, number, URL, etc 
   - Technically: it registers a memory cell/location (RAM) with the address, name, type and value 
   - interesting questions: how to remember(store) and how to forget(erase)? (if you are interested, see [here: Memory: To remember and forget](http://poeticcomputation.info/chapters/ch.2/)
   ![memory2](https://thetechjournal.com/wp-content/uploads/2012/10/ram-windows-speed-up.jpg)
   ![memory](http://www.tenouk.com/clabworksheet/labworksheet6_files/cprogrammingscanf004.png)
#### basic arithmetic operators 
   - add(+): Addition and concatenation > or both numbers and text/characters 
   - subtract(-)
   - multiply(*) 
   - divide(/)
   - Special operators: increment (++), decrement (--)
  ```javascript
  console.log("hello " + "world");
  ```
#### Questions
What's the difference between loadImage() and createImg() in sketch02? 
- Can you decode the logic behind why the sample code employs 'loadImage' and 'createImg' in loading the images?

#### Real-time code jam/live coding with teletype on Atom
<img src="https://github.com/AUAP/AP2018/blob/master/class02/teletype.png" width="350">

- install the [teletype package](https://teletype.atom.io/) on Atom: Preference > Install 
- get the sharing key 
- click the bottom right corner icon (like a wifi icon), then copy and paste the key onto the panel to start tinkering together
- **Challenge: How would you align the image in the middle of the canvas if the canvas size is now changed to 700,700 and with background (255) as below?**

```javascript
  function setup() {
    createCanvas(700, 700);
    background(255);
    noCursor();
    throbber.size(siz,siz);
    console.log("hello " + "world");
  }
```
***Hints:** translate(), width, height, img.width, img.height*

---

### Errors

In a broad sense, errors can be categorized in three types:

1. **Syntax errors**: problems with the syntax, also known as parsing errors. -> easier to catch and can be detected by a parser (i.e the browser in this case) e.g spelling errors or missing a closed bracket
```javascript
SyntaxError: missing ) after argument list
```
2. **Runtime errors**: It happens during the execution of a program and it can cause a program to terminate unexpectedly if an exception is not thrown while the syntax is correct. That is why it is also called exceptions. (e.g TypeError or ReferenceError in Firefox browser)
```javascript
TypeError: str is undefined
ReferenceError: hello is not defined
```  
3. **Logical errors**: Arguably the hardest error to locate as it deals with logics but not syntax. The code may still run perfectly but the result is not what you expected. 
  - try to identify where errors might occur, down to block of code or line of code
  - try to identify type errors
  - Use [Try/Catch/Finally/Throw an exception](https://www.w3schools.com/js/js_errors.asp) (details will be discussed in coming classes)

*Tips: Open your web console and use console.log to track your code and the value of variables*

---

### In-class challenge: Grid paper portrait in p5.js
Time to do some free style drawing. The challenge is to draw your neighbour's portrait on a grid paper and then convert the hand-drawing into a p5.js sketch. Upload your hand-drawing and your p5 sketch on Github.

Tips: Check out beginShape(), endShape(), [curveVertex()](https://p5js.org/reference/#/p5/curveVertex), [Bezier()](https://p5js.org/reference/#/p5/bezier), vertex(), arc(), PI

Example:<br>
Sketch: <br> <img src="http://nicole.pizza/itp/wp-content/uploads/2015/09/IMG_9936-1024x768.jpg" width="400px"> <br>
Final: <br><img src="http://nicole.pizza/itp/wp-content/uploads/2015/09/in-11.gif" width="400px">
<br>
Work by Nicole He

Some thoughts: Do think about how Adobe illustrator is designed and developed. What is vector graphics? 

---

### The concept of peer-tutoring
  - 9 groups [here](https://etherpad.net/p/ap2018)
  - The concept of presenters and respondents
  - The first one for next week: push(), pop()

---

### Tasks for next week
  - the concept of mini exercises
  - mini_ex2: [A fun drawing](https://github.com/AUAP/AP2018/blob/master/all_miniex/mini_ex2.md)
  - peer-tutoring: push(), pop()

---






### The concept of fun (my own notes)
  - Using the example of Love Letter Generator: "the fun of 'geekiness,' wit, the humour and extravagance of mathematical geniuses and their material processes of thinking and making" (p.2)
  - "Humour here is indicative of the pleasure of breakthrough, of thought experimentation, of unconstrained and purposeless but intense and curious and materially specific enquiry." (p. 2)
  - fun "unites pleasure and wit with affective engagement, conceptual, social and cultural practices and vivid, disturbing and inventive modes of thinking and making" (p.2)
  - hacker culture: homour+technical ability (p. 3)
  - open up criticism and thinking
  - "Fun in computing as a mode of thinking, making, experiencing is about a mode of reasoning, and as such it convolutes the question of rationalism, the qualities of logical reasoning, the autonomy of computation and relates to the sensibilities and creative drives of computing" (p. 4)
  - "Fun, within and with logical reason, relates to paradox, the incomputable" (p. 4)
  - "Fun that includes pleasure, humour and play, but also paradox, incongruity and pain, and that takes part in the construction, maintence and use of those computational machines through which creative populations produce value" (p. 5)
  - the concept of affect - "bringing the affective into computing or the structures of code and computing practices functioning aesthetically (Goffey)" (p. 5)
  - "Fun here is related to abstraction and notation, formal logic and experience, singularity and repetition, contingency and practice, incomputability and paradox, to the question of where computational processes start and end and which assemblages they construct and are part of, to the subjects and experience of and by computing, to how algorithms model and are modelled by the world and how they couple with other processes, within and outside computation, to the cultures and aesthetics of software, to its building upon itself, to its politics, desires and legal projects." (p. 5)
  - fun as a method and as a concept (p. 8) -> an onto-epistemological enactive device. -> explore various scale of fun that "creates conditions i nwhich forms of critical, political and collective expression of desiring fun can be seen and given voice." (p. 8)
  - fun relates to "forms of reasoning and the becoming of computing; it is experiential, affective and collective; it is a desiring process and a sensibility, a mode of thinking and of working; a horizon, an idea, a passion and an action." (p. 11)
  - how might fun moves away from the experience of a human user and "look for fun that belongs to programming structures, practices and real-world contexts"? 
  
### Afterclass thoughts (my own notes)
- As usual, I have prepared more than enough. We didn't manage to run through errors (which I need to put in another class) officially but we do manage to touch upon what might be the approach in tinkering code and how to locate the problem lines. But this needs more emphasis for new students as they are still quite new in understanding console.log (how to make full use of it) and how to identify the differences between functions and the tricks of modifying just one thing at a time and see the result)
- Mini ex2: could be incorporated basic shapes than just primarily with basic shapes
- No time to go through the in-class exericse on portrait drawing, but we spend sometimes discussing the questions and challenges that are from the sample code. 
- I think the approach of using a sample/creative code to walk through syntax and fundamental elements are quite effective because this is something students can visualize and relate immediately. (for example, translate(), various shapes drawing, load image, etc.) This is quite a different approach from computer science to go straight and talk about different syntax without a context, which personally I think the students cannot relate and don't know how to apply.
- I still take the approach of zooming in some foundamental concepts and walk through some basic stuff, esp the concept of canvas and variables. To sum up, we have walkthrough the followings:
    1. Discussed what might be the notion of fun
    2. Think in terms of a Canvas (size, width, height, coordinate system)
    3. New syntax: beginshape(), endShape(), vertex(), loadImage(), preload(), createImg(), frameRate(), functions, mousePressed(), translate(), mouseX and mouseY. 
    4. The difference between loadImage and createImg
    5. The concept of variables: declare, initialization and usage  (something can be stored, changed and reused)
 - May be it is also good to think about introducing geometry, scaling things, positive and negative space to explore various pattern via basic shapes. 
