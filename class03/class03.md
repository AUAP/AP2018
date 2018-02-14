Messy notes here...Announcement: changes of grouping

#### Theme: Temporality: Infinite loops

Agenda:
- Peer-tutoring: push()/pop()
- Time/Throbber
- Running a throbber
- Artwork showcase: Asterisk Painting by John P. Bell
- Running Asterisk Painting in p5.js
- Tasks for next week
  - miniEx3 - Design a throbber differently
  - Peer-Tutoring/Respondents: p5.dom library

### Time/Throbber

*What is the notion of time related to contemporary software/network culture?*
"Loading webpages, waiting for social media feeds, streaming videos and content, are mundane activities in contemporary culture. Such mundane activity includes network-connected devices that transmit and distribute data across multiple sites — referred to as data. In these scenes, data are constantly perceived as a stream (Berry 2011, 3; 2012, 388; 2013, n.p; Fuller 2003, 52), indicating characteristics of vast  volume, speed of update, continuous flow and delivery. The concept of streams characterises the Internet rather than web pages (Berry 2011, 143). The web is a dynamic stream of information in which users can participate and follow. It is fast-changing and generative, data records are continuously updated and executed in a manner in which an end cannot be foreseen. There is a temporal dimension to the data stream and in today’s networked communication data streams indicate events that are regarded as instantaneous in capitalised economies. The now that we are experiencing through perceptible streams is entangled with computational logic."  (Soon, 2017, p. 89)

#### Thobber vs Progress bar

![throbber](http://softwarestudies.projects.cavi.au.dk/images/9/99/Animatedthrobber.gif)

![progressbar](https://bash.cyberciti.biz/uploads/bashwiki/thumb/0/00/Shell-progress-bar.png/550px-Shell-progress-bar.png)

#### Some background
![watch](https://github.com/AUAP/AP2018/blob/master/class03/watch.png)
*Early wristwatches (with crystal guards) where soldiers wore them in WWI*

![browser](https://github.com/AUAP/AP2018/blob/master/class03/browser1.png)
*In the early 1990, developed by national center for supercompiting applications, the browser interface was designed by scientist Colleen Bushell.*

![browser2](https://github.com/AUAP/AP2018/blob/master/class03/browser2.png)

- Buffering icons of death [see here](https://mashable.com/2017/07/12/buffering-icons-ranked/#4FSuDdS21Oqr)

- The concept of "false latency"  -by Jason Farman, 2017 (to feel more formal, to feel it is actually processing -> expectation gap between human and technology)

- Net Neutrality: Internet slowdown day -> a throbber becomes a political and cultural icon

### Running a throbber
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
  
Possible functions: FrameRate(), FrameCount(), setInterval(), Translate() and Rotate(), modulo/%, radians

### Artwork showcase
![Asterisk Painting](http://www.johnpbell.com/wp-content/uploads/2018/01/asterisk_painting-300x188.jpg)

*Asterisk Painting by John P. Bell*

Artist description: Asterisk Painting is programmed to create a series of asterisks by repeatedly printing the number of milliseconds that have passed since the painting started. If left to run by itself it will do so; however, when started on a system with other threads running in the background delays external to my artwork may make the asterisks look more like spots and the painting may resemble the work of certain other overly-litigious artists.
See [here](http://www.johnpbell.com/asterisk-painting/)

#### Running Asterisk Painting in p5.js
Runme [here](https://rawgit.com/AUAP/AP2018/master/class03/sketch03/index.html)
Source Code [here](https://github.com/AUAP/AP2018/blob/master/class03/sketch03/sketch03.js)
- for loops and while loop
- conditional statements
- arrays
- millis()

### The concept of time (my notes)

Fidget Spinners: How buffer icons have shaped our sense of time by Jason Farman
-> more from the perspective of experience

- "We have an acute awareness of duration, and that awareness is always linked to prevailing technologies that shape how we understand and experience time."

- Thus, it’s a combination of technological expectations (how quickly we believe that our technologies should be working) and cultural expectations (how the contexts in a society set up certain expectations about how people should wait according to their position within that society).

-false latency: facebook intentionally slower the scanning process to make visible the waiting time 

- "For consumers and users of contemporary technology, waiting is deeply connected to our fantasies about who we are and what our purchases say about us."

- "Buffering icons and wait cursors confront this challenge, giving us feedback that reshapes our everyday expectations and experiences of time and duration as computers process the data being sent across the lines."
