/*
class04 - Data Capture: https://github.com/AUAP/AP2018/
check:
1. sound input via microphone: https://p5js.org/examples/sound-mic-input.html
2. dom objects like button
3. p5.sound library: https://github.com/processing/p5.js-sound/blob/master/lib/p5.sound.js
4. Face tracking library: https://github.com/auduno/clmtrackr
5. p5js + clmtracker.js: https://gist.github.com/lmccart/2273a047874939ad8ad1
*/
//Interacting with captured data: Mouse, Keyboard, Audio, Web Camera

var button;
var mic;
var ctracker;

function setup() {
  background(100);
  // Audio capture
  mic = new p5.AudioIn();
  mic.start();

  //web cam capture
  var capture = createCapture();
  capture.size(640,480);
  capture.position(0,0);

  var c = createCanvas(640, 480);
  c.position(0,0);

  //setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);

  //styling the like button
  button = createButton('like');
  button.style("display","inline-block");
  button.style("color","#fff");
  button.style("padding","5px 8px");
  button.style("text-decoration","none");
  button.style("font-size","0.9em");
  button.style("font-weight","normal");
  button.style("border-radius","3px");
  button.style("border","none");
  button.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
  button.style("background","#4c69ba");
  button.style("background","-moz-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%, #3b55a0))");
  button.style("background","-webkit-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","-o-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","-ms-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","linear-gradient(to bottom, #4c69ba 0%, #3b55a0 100%)");
  button.style("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c69ba', endColorstr='#3b55a0', GradientType=0 )");

  //mouse capture
  button.mousePressed(clearence);
}

function draw() {
  //sound capture
  let vol = mic.getLevel(); // Get the overall volume (between 0 and 1.0)
  button.size(floor(map(vol, 0, 1, 40, 500)));  //map the mic vol to the size of button: check map function: https://p5js.org/reference/#/p5/map

  var positions = ctracker.getCurrentPosition();
  if (positions.length) {
    button.position(positions[60][0]-20, positions[60][1]);  //as the button is too long, i wanna put it in the middle of my mouth
    for (let i=0; i<positions.length; i++) {  //check the availability of web cam tracking
       noStroke();
       fill(map(positions[i][0], 0, width, 100, 255), 10);  //color with alpha value
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 8, 8);
    }
  }

}

function clearence() {
  clear();
}

//keyboard capture
function keyPressed() {
  if (keyCode === 32) { //spacebar - check here: http://keycode.info/
    button.style('rotate', 180);
  } else {
    button.style('rotate', 0);
  }
}
