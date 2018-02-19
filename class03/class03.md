Messy notes here...
Announcement: changes of groups; discussion of code/sample code/mini ex_code (study group?); mistakes/failure

#### Theme: Temporality: Infinite loops

Agenda:
- Introduce the theme briefly
- Peer-tutoring: push()/pop()
- Time/Throbber
- Decoding a throbber
- Artwork showcase: Asterisk Painting by John P. Bell
- Running Asterisk Painting in p5.js
- Tasks for next week

### Time/Throbber

*How is the notion of time related to contemporary software/network culture?*

"Loading webpages, waiting for social media feeds, streaming videos and content, are mundane activities in contemporary culture. Such mundane activity includes network-connected devices that transmit and distribute data across multiple sites — referred to as data. In these scenes, data are constantly perceived as a stream (Berry 2011, 3; 2012, 388; 2013, n.p; Fuller 2003, 52), indicating characteristics of vast  volume, speed of update, continuous flow and delivery. The concept of streams characterises the Internet rather than web pages (Berry 2011, 143). The web is a dynamic stream of information in which users can participate and follow. It is fast-changing and generative, data records are continuously updated and executed in a manner in which an end cannot be foreseen. There is a temporal dimension to the data stream and in today’s networked communication data streams indicate events that are regarded as instantaneous in capitalised economies. The now that we are experiencing through perceptible streams is entangled with computational logic."  (Soon:2017, p. 89)

#### Thobber vs Progress bar

![throbber](http://softwarestudies.projects.cavi.au.dk/images/9/99/Animatedthrobber.gif)

![progressbar](https://bash.cyberciti.biz/uploads/bashwiki/thumb/0/00/Shell-progress-bar.png/550px-Shell-progress-bar.png)

#### Some background
<img src="https://github.com/AUAP/AP2018/blob/master/class03/watch.png" width="500"><br>*Early wristwatches (with crystal guards) where soldiers wore them in WWI*
  
<img src="https://github.com/AUAP/AP2018/blob/master/class03/browser1.png" width="500"><br>*In the early 1990, developed by national center for supercompiting applications, the browser interface was designed by scientist Colleen Bushell.*

![throbber1](https://i.stack.imgur.com/dIFkT.gif)

![browser2](https://github.com/AUAP/AP2018/blob/master/class03/browser2.png)
![throbber2](https://i.stack.imgur.com/oqMri.gif)
![throbber3](http://img75.laughinggif.com/pic/HTTP2Jsb2cudGljZS5kZS9hX3BpY3MvSW50ZXJuZXRfRXhwbG9yZXIuZ2lm.gif)

- Buffering icons of death [see here](https://mashable.com/2017/07/12/buffering-icons-ranked/#4FSuDdS21Oqr) => many other different names e.g Hourglass cursor, Spinning Wait Cursor, Spinning Beach Ball, Spinning Wheel of Death, etc. 

![throbber4](https://media.giphy.com/media/XXH77SsudU3HW/giphy.gif)

- The concept of "false latency"  -by Jason Farman, 2017 (Corporations like FB modify the speed of presentation, and try to let customers to feel things are in progress, and in a thorough manner -> expectation gap between human and technology)

- Net Neutrality: Internet slowdown day -> a throbber becomes a political and cultural icon
![throbber5](https://cdn.vox-cdn.com/thumbor/lIbt4QB4qvcZaLy-1r_c5ZstL2E=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8716431/Screen_Shot_2014_09_10_at_10.44.16_AM.0.png)

*img src: https://www.theverge.com/2017/6/21/15816974/verizon-tumblr-net-neutrality-internet-politics-david-karp*

### Decoding a throbber
![throbber](https://github.com/AUAP/AP2018/blob/master/class03/throbber.gif)

**Discuss in a group of 3-4: How would you approach to draw a throbber from scratch?** (Spend sometime to think about it and there are more than one way in doing it, no right or wrong)
- Attentions:
  - how many ellipses at the center of a fullscreen?
  - how to make the ellipse rotates in a regular angle? 
  - how to make the ellipse fades out and rotates to the next position? 
- Constraints:
  - only one ellipse is needed (no creation of additional objects)
  - make use of rotation() and translate()
- Procedures:
  - what are the elements in setup() and draw()?
  - Can try:
    - ellipses that fill the screen (with rotation, translation and color)
    - make it moves and fades
    - slow down
    - polish code
  
Possible functions: FrameRate(), FrameCount(), setInterval(), Translate() and Rotate(), modulo/%, radians

### Artwork showcase
![Asterisk Painting](https://github.com/AUAP/AP2018/blob/master/class03/Asterisk_Painting.gif)

*Asterisk Painting by John P. Bell, ported to p5.js and modified by Winnie Soon*

Artist description: Asterisk Painting is programmed to create a series of asterisks by repeatedly printing the number of milliseconds that have passed since the painting started. If left to run by itself it will do so; however, when started on a system with other threads running in the background delays external to my artwork may make the asterisks look more like spots and the painting may resemble the work of certain other overly-litigious artists.
See [here](http://www.johnpbell.com/asterisk-painting/)

#### Running Asterisk Painting in p5.js
- Runme [here](https://rawgit.com/AUAP/AP2018/master/class03/sketch03/index.html)
- Source Code [here](https://github.com/AUAP/AP2018/blob/master/class03/sketch03/sketch03.js)
- **In-class Ex: Decode and map the logics with the printed code**
  - **Questions**: what have you seen and what have you experienced? What might be the procedures? list them out!
- **New concepts**:  
  - arrays []   //see [here for more](https://p5js.org/examples/arrays-array.html)
    - An array is a list of data. Dach piece of data in an array is identified by an index number representing its position in the array
```javascript
//example
var words = [] //array -> start with 0
words[0] = "hello world";
words[1] = "what is aesthetics?";
words[2] = "something";
```
```javascript
//sample code e.g line 23-24 and 36-41
var xPos = [1,2,3,4,5]; 
var yPos = [1,2,3,4];

//xPos.length: xPos[0] = 1, xPos[1] = 2, xPos[2] = 3, xPos[3] = 4, xPos[4] = 5
//yPos.length

```
  - **conditional statements  (if, else, else if)**
    - In the physical world you would say "If I am hungry then eat some food, otherwise if I am thirsty, drink some water, else I will just take a nap"
      - Turn to programming:
```javascript
if (I am hungry) { //condition > boolean expression
  eat some food;
}else if(thirsty) :
  drink some water;
}else{
  take a nap;
}
```
  - About relationships between numbers. e.g 15 is greater than 20 -> false; 5 equals 5 -> true
```javascript
//sample code :see line 61: 
if(sentences >= maxSentences){  //if the existing sentence count reaches the max sentence of a asterisk painting
   move to the next one and continues;
}
```
  - **Relational operators**:
```javascript
/*
> Greater than
< Less than
<= less than or equal to 
== equality
>= greater than or equal to
!= inequality
*/
``` 
  - **loops**: for loop and while loop 
    - runs continuously until a specified condition is met and then exits the loop (which means loop until the condition is no longer met)
    - You use a for loop because you want to repeat a section of code in an unknown/unknown number of times. (but the computer will know how many times)
      - For loop: it contains 
        1. a variable declaration and initialization 
        2. a specificed condition
        3. loop for next round, and usually it is incremental (++) or decremental (--)
        4. The things that you want to process and compute
       - While loop is to do something while the condition is true        
```javascript
//e.g line 36-41
  for(let i=0; i<xPos.length; i++) {      //calculate the position of each asterisk horizontally in terms of array
    xPos[i] = xPos[i] * (xDim / (xPos.length+1));
  }
  for(let i=0; i<yPos.length; i++) {  // //calculate the position of asterisk vertically in terms of array
    yPos[i] = yPos[i] * (yDim / (yPos.length+1));
  }
```
```javascript
//sample code  e.g line77
while(millis() < wait){} 
```
- **millis()**
  -to be filled

### Tasks for next week
- miniEx3 - [Design a Throbber Differently](https://github.com/AUAP/AP2018/blob/master/all_miniex/mini_ex3.md)
- Peer-Tutoring/Respondents: p5.dom library

### The concept of time (my notes)

Fidget Spinners: How buffer icons have shaped our sense of time by Jason Farman
-> more from the perspective of experience

- "We have an acute awareness of duration, and that awareness is always linked to prevailing technologies that shape how we understand and experience time."

- Thus, it’s a combination of technological expectations (how quickly we believe that our technologies should be working) and cultural expectations (how the contexts in a society set up certain expectations about how people should wait according to their position within that society).

-false latency: facebook intentionally slower the scanning process to make visible the waiting time 

- "For consumers and users of contemporary technology, waiting is deeply connected to our fantasies about who we are and what our purchases say about us."

- "Buffering icons and wait cursors confront this challenge, giving us feedback that reshapes our everyday expectations and experiences of time and duration as computers process the data being sent across the lines."
