Announcement: swap topic: language+ code and generativity. So the groups' topic will change as well.

Messy Notes (still working on it...hopefully will finalize by Mon night):

Agenda:
- Peer-Tutoring: p5.dom libary
- The theme about Data Capture
- Artwork showcase: How We Act Together by Lauren McCarthy and Kyle McDonald 
- Sample code walkthrough

[background video](https://loopvideos.com/SPjtkUs1rvA?from=326&to=454)

### The theme about Data Capture

"In a society ruled by algorithms, data is always at play. When quantification becomes part of our daily routines, we more or less consciously contribute to a permanent capture of life into data. Value can now potentially be extracted from everything, and productivity can be measured in all fields of life. This particularly redefines the relation between work and play as ludic and participatory structures are purposefully used to render personal information traceable, social relationships and behavioural patterns recognisable. Life is increasingly governed by a logic of CAPTURE ALL as a never-ending enterprise of predictive control."  - [Transmediale, 2015](https://transmediale.de/content/capture-all)

"We produce, share, collect, archive, use and misuse, knowingly or not, massive amounts of data, but what does its “capture” do to us? What are the inter-subjective relations between data-commodity and human subjects?"  - [Andersen & Cox, 2015](http://www.aprja.net/datafied-research-introduction/)

#### heat map
![facebook1](https://c.slashgear.com/wp-content/uploads/2013/10/facebook_heat_map.jpg)

- [Facebook investigates tracking users’ cursors and screen behavior](https://www.slashgear.com/facebook-investigates-tracking-users-cursors-and-screen-behavior-30303663/)
- [heat map](https://heatmap.me/)

#### typing
Facebook has the ability to track unposted status updates (what you are typing as you're typing, regardless it is a published/public post or not)
- more: [Self censorship on Facebook by Sauvik Das and Adam Kramer](https://www.aaai.org/ocs/index.php/ICWSM/ICWSM13/paper/viewFile/6093/6350). See methodology: "We collected self-
censorship data from a random sample  of  approximately  5  million  English-speaking  Face- book users who lived in the U.S. 
or U.K. over the course of 17 days (July 6-22, 2012)."

#### buttons
Facebook buttons:

![facebook2](http://cdn1.sbnation.com/assets/3523775/facebook_like_designs.png)

#### analytics
Google analytics: https://www.youtube.com/watch?v=mPgAug15bcQ 

#### Voice
![google](http://i.dailymail.co.uk/i/pix/2017/11/14/12/4655673600000578-5080971-image-a-7_1510661012565.jpg) 

#### tracker
<img src="https://github.com/AUAP/AP2018/blob/master/class04/sleepTracker.png" width="300">

Fitness and health tracker, sleep tracker,etc

#### Facial/object recognition 
- Tagging Photos
- [Next-level Surveillance: China Embraces Facial Recognition](https://www.youtube.com/watch?v=Fq1SEqNT-7c)
- Company: Spyhuman: https://spyhuman.com/pages/wechat-tracker.html

#### Recommendation engines: 
![Amazon](https://github.com/AUAP/AP2018/blob/master/class04/amazon.png)

### Artwork showcase: How We Act Together by Lauren McCarthy and Kyle McDonald 

- ![img](http://payload496.cargocollective.com/1/19/625408/12229985/scream-comp.gif)

How We Act Together focuses a lens on the small gestures of social interaction, asking participants to repeat them until exhausted, to a point where the gesture no longer feels natural and its meaning begins to shift. Interrogating a gesture through repetition evokes the discomfort we sometimes encounter in social interactions in the wild. We are becoming increasingly familiar with conversations characterized by divided attention and a loss of connection.

But the gesture is not completely empty, as the participant’s performance triggers a response. For as long as the participant acts, they are able to view a stream of all the previous participants performing the same action back at them. Distributed across a crowd, spread over space and time, an asynchronous interaction takes place that is both awkward and intimate.

The entire interaction is choreographed by the software. Participants act on command from the screen, and their performance does not begin until they conform to the metrics of computer vision algorithms that recognize their gesture. The software validates their human expressions and movements, allowing them access to the crowd of people interacting together. - Lauren and Kyle

- [RUNME](https://hwat.schirn.de/) (work in Google Chrome only)
- source code here: https://github.com/kylemcdonald/HowWeActTogether-Tracking
- [30 mins Video](https://www.youtube.com/watch?v=SPjtkUs1rvA)

### Sample code walkthrough

![faceTrack](https://github.com/AUAP/AP2018/blob/master/class04/faceTrack.gif)

[Runme](https://rawgit.com/AUAP/AP2018/master/class04/sketch04/index.html)    
[Source Code](https://github.com/AUAP/AP2018/blob/master/class04/sketch04/sketch04.js)

- p5.dom: css styling (need the p5.dom library)
```javascript
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

