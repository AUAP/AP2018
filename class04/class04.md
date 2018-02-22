Messy Notes (still working on it...hopefully will finalize by Mon night):
    
- Peer-Tutoring: p5.dom libary
- The theme about Data Capture
- Artwork showcase: How We Act Together by Lauren McCarthy and Kyle McDonald 
- Sample code walkthrough

### The theme about Data Capture

![facebook1](https://c.slashgear.com/wp-content/uploads/2013/10/facebook_heat_map.jpg)

See [here](https://www.slashgear.com/facebook-investigates-tracking-users-cursors-and-screen-behavior-30303663/)

Facebook has the ability to track unposted status updates (what you are typing as you're typing, regardless it is a published/public post or not)
>> more: https://www.aaai.org/ocs/index.php/ICWSM/ICWSM13/paper/viewFile/6093/6350

Facebook buttons 
![facebook2](http://cdn1.sbnation.com/assets/3523775/facebook_like_designs.png)

Google analytics: https://www.youtube.com/watch?v=mPgAug15bcQ 

![google](http://i.dailymail.co.uk/i/pix/2017/11/14/12/4655673600000578-5080971-image-a-7_1510661012565.jpg) 

Google voices

Fitness and health tracker, sleep tracker,etc

[Next-level Surveillance: China Embraces Facial Recognition](https://www.youtube.com/watch?v=Fq1SEqNT-7c)

Company: Spyhuman: https://spyhuman.com/pages/wechat-tracker.html

Recommendation engines: 
![Amazon](https://github.com/AUAP/AP2018/blob/master/class04/amazon.png)

Datafication: http://www.aprja.net/datafied-research/

### Artwork showcase: How We Act Together by Lauren McCarthy and Kyle McDonald 
- source code here: https://github.com/kylemcdonald/HowWeActTogether-Tracking
- ![img](http://payload496.cargocollective.com/1/19/625408/12229985/scream-comp.gif)

### Sample code walkthrough

![faceTrack](https://github.com/AUAP/AP2018/blob/master/class04/faceTrack.gif)

[Runme](https://rawgit.com/AUAP/AP2018/master/class04/sketch04/index.html)    

- p5.dom: css styling (need the p5.dom library)
```css
var button;
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
```
- Mouse 
```javascript
button.mousePressed(clearence);
function clearence() {
  clear();
}
```
- Keyboard
```javascript
function keyPressed() {
  if (keyCode === 32) { //spacebar - check here: http://keycode.info/
    button.style('rotate', 180);
  } else {
    button.style('rotate', 0);
  }
}
```
- Audio (need the p5.sound library)
```javascript
var mic;
// Audio capture
mic = new p5.AudioIn();
mic.start();
//sound capture
let vol = mic.getLevel(); // Get the overall volume (between 0 and 1.0)
button.size(floor(map(vol, 0, 1, 40, 500)));  //map the mic vol to the size of button: check map function: https://p5js.org/reference/#/p5/map
```
- Web Camera (need the clmtrackr.js and model lib)
    - see [clmtrackr](https://github.com/auduno/clmtrackr)
```javascript
var ctracker;

//web cam capture
var capture = createCapture();
capture.size(640,480);
capture.position(0,0);

//setup tracker
ctracker = new clm.tracker();
ctracker.init(pModel);
ctracker.start(capture.elt);

var positions = ctracker.getCurrentPosition();
if (positions.length) { //check the availability of web cam tracking
    button.position(positions[60][0]-20, positions[60][1]);  //as the button is too long, i wanna put it in the middle of my mouth, and -> 60 is the mouth area
    for (let i=0; i<positions.length; i++) {  //loop through all major face track points
       noStroke();
       fill(map(positions[i][0], 0, width, 100, 255), 10);  //color with alpha value
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 8, 8);
    }
}
```

### The concept of Data Capture (my own notes)
Pold - Button in Software Studies
- buttons as interfaces (as part of GUI and mechanical electronic interface)
- button can be textualized, styled, reactive, sonified...
- different types of button: click button, radio botton
- "a potential for interaction" p.31 (what if a botton cannot interact?)
- click button - mouse click 
- "a functional control" p.31
    - well defined, predictable
- not only about design and function, but buttons with history and culture. 
- meaning: what has been mobilized? (call for action - advertising)
- buttons: force decision in a binary choice (p.34)
    -accept/cancel, yes/no
    -sometimes not even a selection of choice, is also about exclusion with only 1 option apparently. To download, or else you don't click on it. 
    - no betweenness
 - buttonization => "our reality becomes clickable" (p. 36)
 
 Gerlitz and Helmond: 2013
 - like economy: trade, metrics, tracking
 - role of social buttons
 - "turned into valuable consumer data and enter multiple cycles of multiplication and exchange" (p.2)
 - "the like botton's capacity to instantly metrify and intensify user affects - turning them into numbers on the Like counter- while fostering further user engagement to multiply and scale up user data" (p. 3)
 - linking practices (web 1.0) then creating connections between websites e.g social buttons
 - liking => social activity that can be performed (p. 5)
 - "introduction of social plugings, including the external Like button, to enable a personalied, social experience of the web." (p.5)
 - like button -> generate data (production of browsing behaviors) via cookies
 - maximize the data flow to the platform
 - foster user engagement adn traffic: like button (p. 7)
 - apps vs websites
 - "provides a one-click shortcut to express a variety of affective response" (p. 11)
 - "It value lies both in the present and in the future, in the plus one it adds to the Like counter and the number of x potential more likes, comments, shares or other responses it might generate within the platform" (p. 12)
 - "rendering cross-syndication more scalable" (p. 12)
 - Within the like economy, data and numbers have performative and productive capacities, they can generate user affects, enact more activities and thus multiply themselves (p. 13) 

