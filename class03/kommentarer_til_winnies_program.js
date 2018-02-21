/*
Mine kommentarer er på dansk.
Dette er en kompliceret kode, og det tager tid at opnå en fuld forståelse af den.
Dette er heller ikke krævet af jer, at I har.
Det anbefales, at man har en grundlæggende forståelse af:
1. arrays
2. conditional statements
3. loops (specielt for loops)
4. variabler
*/

var xDim = 1000;  //Dim = dimension, canvas size-width
var yDim = 600;   //canvas size-height
var timer= 0;
var speed=10;  //jo større tallet, jo langsommere, original: 100
var maxSentences = 10;  //original: 77, hvor mange rækker tal der må være
var sentences = 0;
var xPos = [1,2,3,4,5,6,7,8]; //en array: hvor mange blomster der ønskes i x-kolonnen
var yPos = [1,2,3,4,5,6,7]; //også en array: hvor mange blomster der ønsked i y-kolonnen
var xCtr = 0;
var yCtr = 0;
var waitTime = 1000;
var itr = 0; // no. of iteration, tallet der står i nederste, venstre hjørne
var milliStart = 0;
var currentMillis;
var fillColor;

function setup(){ //hvorfor dette i setup og det andet i draw
  createCanvas(xDim, yDim);
  background(240);
  /*
  1. Nedenstående for loops er en måde at udregne x og y koordinaterne for blomsterne
  2. .length refererer til længden af en array.
  3. let = letters.
  4. i=index.
  [calculate the position of each asterisk horizontally in terms of array]*/
  for(let i=0; i<xPos.length; i++) {
    xPos[i] = xPos[i] * (xDim / (xPos.length+1));
    /*opdeler vinduet i kolonner,
    eftersom xDim er vidden på vinduet og længden af xPos er antallet af kolonner der ønskes*/
  }
  for(let i=0; i<yPos.length; i++) {  // //calculate the position of asterisk vertically in terms of array
    yPos[i] = yPos[i] * (yDim / (yPos.length+1));
  }
  fill(0);  //counter color at the bottom left
  textAlign(LEFT, CENTER);
  text(itr, 10, yDim-30); //viser hvor mange gange programmet har kørt
  fillColor = color(random(0,255),random(0,255),random(0,255));
  //der vælges tilfældigt en værdi for henholdvis r, g og b mellem 0 og 255
}

function draw(){
     currentMillis = floor(millis() - milliStart);  //[millis means millsecond since starting the program, like frameCount]
     if(currentMillis > timer){ //[check the time for every "speed" time then run this (slow down the program)]
       push();
       translate(xPos[xCtr], yPos[yCtr]);  //rows and cols
       rotate(radians((360/8)* (millis()/speed)));  //[rotation in itself]
       timer = currentMillis + speed; //[the time for next loop]
       console.log(currentMillis);
       textSize(12);
       //[nf:format no into strings and adds zeros in front [https://p5js.org/reference/#/p5/nf]  3 digits in front and 0 digit after the decimal]
       fill(fillColor);
       text(nf(currentMillis, 6), 3, 0);
       /*
       1. currentMillis angiver hvor lang tid det tage, at lave en blomst.
       2. Tallet efter currentMillis definerer,hvor mange tal der skal være i rækkerne.
       3. De to sidste argumenter definerer placeringen af rækkerne [which is about the time, and it starts with 0 always.]
       4. Med nf() funktionen kan man formatte tal til strings
       */
       sentences++; //det samme som: sentences = sentences + 1;
       /*
       Her står: hvis sentences er større eller lig med maxSentes,
      så skal der gåes videre til næste array.
      */
       if(sentences >= maxSentences){
         xCtr++;  //[move to next array]

         if(xCtr >= xPos.length) {  //meet max cols, and need to go to next row
           xCtr = 0;
           yCtr++;  //next row

           //the screen is filled > reset everything and update the counter
           if(yCtr >= yPos.length){  //reach the max no of rows on a screen (after reach the no. of max cols)
             yCtr = 0;
             background(240);
             itr++;  //det samme som: itr = itr+1; add counter (iteration)
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
