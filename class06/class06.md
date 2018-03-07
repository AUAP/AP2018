Messy notes of class06 - Generativity

Agenda:
- Artwork showcase: A House of Dust (a simulation of a 1967 poem by Alison Knowles and James Tenney) by Zach Whalen
- Peer-Tutoring: conditions with sound and video files 
- The theme about Generativity
- Sample code
- Mid way evaluation
- Tasks for next week

#### Artwork
![image](https://wordandimage.files.wordpress.com/2012/04/4194960757_de88781e77_o.jpg)
[A House of Dust](http://www.zachwhalen.net/pg/dust/) (a simulation of a 1967 poem by Alison Knowles and James Tenney) by Zach Whalen | see more background info [here](http://www.artbytranslation.org/_pdf/HOUSE_OF_DUST_JOURNAL_25_08_2016_BDEF_PREVIEW.pdf)

Rules: 
```
A HOUSE OF (a material) 
 (a site/situation) 
  USING (a light source) 
   INHABITED BY (list inhabitants)
```
*in which combinations of the variables were randomly generated. (chance operations and language)
*originally written in FORTRAN
- interpretable score (Higgins, et al, 2012)
- meaning of the work beyond language
- influenced by [Fluxus movement](https://www.artsy.net/article/artsy-editorial-fluxus-movement-art-museums-galleries) and John Cage (chance operations)
 
#### Generativity

Generative art refers to any art practice where artists use a system, such as a set of natural languages, rules, a computer program, a machine, or other procedural invention, which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art. (Galanter, 2003)

Generative art refers to any art practice in which the **artist cedes control** to a system with functional autonomy that contributes to, or results in, a completed work of art. Systems may include natural langauge instructions, biological or chemical processes, computer programs, machines, **self-organizing** materials mathematical operations, and other procedural interventions. (Galanter, 2008, p. 154)

### noise and random
Check [here](https://www.openprocessing.org/browse/?q=noise&time=anytime&type=tags#)

- Perlin noise by Ken Perlin, [noise()](https://p5js.org/reference/#/p5/noise), and more [here](https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise)
 - good for programming life-like behaviors
 - "it produces a naturally ordered (“smooth”) sequence of pseudo-random numbers." -> good for simulating natural behaviors
 - 

### Generativity: Simple rules to a complex pattern

![circles](https://github.com/AUAP/AP2018/blob/master/class06/complex_balls.gif)
```
Discuss what are the rules in the sketch.
```
[RUNME](https://rawgit.com/AUAP/AP2018/master/class06/sketch06c/index.html)

[README](https://github.com/AUAP/AP2018/blob/master/class06/sketch06c/sketch.js)

### Throbber and generativity (can you spot the rotating throbber?)

![throbber](https://github.com/AUAP/AP2018/blob/master/class06/throbbering.gif)

```
Rules:
1. Pick a random throbber's slash
2. Fill the screen with the random throbber's slash
3. Randomly select one throbber and rotate it
4. Select another throbber randomly and rotate itself
```
[RUNME](https://rawgit.com/AUAP/AP2018/master/class06/sketch06b/index.html)

[README](https://github.com/AUAP/AP2018/blob/master/class06/sketch06b/sketch.js)

### In-class ex: 10 print
![10print](https://github.com/AUAP/AP2018/blob/master/class06/10Print.png)
```
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
```
- history: a Basic program with a single line of code in the early 1980s. (appear in the userguide of Comodore 64)
- see the book [here](https://www.amazon.com/gp/product/0262018462/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0262018462&linkCode=as2&tag=slatmaga-20)

[RUNME](https://rawgit.com/AUAP/AP2018/master/class06/sketch06a/index.html)

[README](https://github.com/AUAP/AP2018/blob/master/class06/sketch06a/sketch.js)

```
RULES:
1. Throw a dice randomly
2. Half of the chance print a backward slash
3. The other half of the chance will print a forward slash
4. Fill the whole canvas with the randomly generated slash
```
- see other [10Print](https://twitter.com/hashtag/10print?src=hash)

#### Mid-way evaluation
- How much effort have you put in the course?
- How do you think about the course in relation to the materials e.g coding environments, mini ex, slides, sample code, fri and wed sessions?
- How can we better use our peers?

#### Tasks for next week

#### Notes on reading (my own notes)
Marius Watz:

- photoshop: a different tool...different way of working with images

- read/write...cannot use software passively..change the software so that it works for you

- software is not a tool..but it is also material

- generative art vs computational design

- generative art: create a system

    -> computer program, machine, robots etc

    -> external not directly connect to you

    -> autonomy is the ultimate goal

authorship: product of artist

- mode of translation, errors -> become main part of the work

- patterns -> created by change of events

- generative art

    - examine the system and process as an aesthetic object/output 

    - conceptual examination of a system

    - drawing through instructions

    - john cage: remove himself...as godauthor

    - introduce chance...

- make interesting system in real life...show some aspects of intelligent

    - semi automated creation

    - chance -> co-author

- software is always live..

    - make a system that take on taking decision on the fly

- complexity arising from simple rules

- electronic plastic number 1 ->

- show information in a system

- extended to time...get different quality

- circle packing..fitting circles.. (Packing 2007)

- complexity increases through rotation and transformation

- without intervention

- code as a method to create different forms

