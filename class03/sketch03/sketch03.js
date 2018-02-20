/*
Asterisk Painting by John P.Bell (http://www.johnpbell.com/asterisk-painting/)
Original code in Processing: http://wg18.criticalcodestudies.com/index.php?p=/discussion/31/week-2-critical-and-creative-coding-calvinball-and-coders#latest
Port to p5js and modified by Winnie Soon with comment notes

notes:
1. The color mode has been changed to a variable as the push/pop function will restore the previous fill color state.
2. Remove font
3. change the bg color
4. add text size
5. remove load signature image
6. change canvas size -> and corresponding no of asterisk painting
7. display counter in black color
8. Add extensive comments
*/

var xDim = 1000;  //canvas size-width
var yDim = 600;   //canvas size-height
var timer=0;
var speed=100;  //the speed of rotating , default 100
var maxSentences = 77;  //original: 77
var sentences = 0;
var xPos = [1,2,3,4,5]; //original: 8 columns
var yPos = [1,2,3,4]; //original: 5 rows
var xCtr = 0;
var yCtr = 0;
var waitTime = 10000;
var itr = 0; // no. of iteration
var milliStart = 0;
var currentMillis;
var fillColor;

function setup(){
  createCanvas(xDim, yDim);
  background(240);
  for(let i=0; i<xPos.length; i++) {      //calculate the position of each asterisk horizontally in terms of array, start with [0] array index
    xPos[i] = xPos[i] * (xDim / (xPos.length+1));
  }
  for(let i=0; i<yPos.length; i++) {  // //calculate the position of asterisk vertically in terms of array, start with [0] array index
    yPos[i] = yPos[i] * (yDim / (yPos.length+1));
  }
  fill(0);  //counter color at the bottom left
  textAlign(LEFT, CENTER);
  text(itr, 10, yDim-30); //display counter
  fillColor = color(random(0,255),random(0,255),random(0,255));
}

function draw(){
     currentMillis = floor(millis() - milliStart);  //millis means millsecond since starting the program, like frameCount
     if(currentMillis > timer){ //check the time for every "speed" time then run this (slow down the program)
       push();
       translate(xPos[xCtr], yPos[yCtr]);  //rows and cols
       rotate(radians((360/8)* (millis()/speed)));  //rotation in itself
       timer = currentMillis + speed; //the time for next loop
       console.log(currentMillis);
       textSize(12);
       //nf:format no into strings and adds zeros in front [https://p5js.org/reference/#/p5/nf]  3 digits in front and 0 digit after the decimal
       fill(fillColor);
       text(nf(currentMillis, 6), 3, 0);     //which is about the time, and it starts with 0 always.
       sentences++;
       if(sentences >= maxSentences){  //reach the max for each circle
         xCtr++;  //move to next array

         if(xCtr >= xPos.length) {  //meet max cols, and need to go to next row
           xCtr = 0;
           yCtr++;  //next row

           //the screen is filled > reset everything and update the counter
           if(yCtr >= yPos.length){  //reach the max no of rows on a screen (after reach the no. of max cols)
             yCtr = 0;
             background(240);
             itr++;  //add counter (iteration)
             pop();
             fill(0);   //counter display color
             text(itr, 10, yDim-30);  //change counter display again
             let wait = floor(millis() + waitTime);  //wait for next round
             while(millis() < wait){}  // let the waittime pass (variable) and do nothing
             milliStart = millis(); //reset the starting time
             timer = 0; //reset the timer
             push();
           }
         }
        sentences = 0;
        fillColor = color(random(0,255),random(0,255),random(0,255));
       }
       pop();  //restore previous state

     }
   }
