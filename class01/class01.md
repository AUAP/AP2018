Sorry, no powerpoint slides but just unstable/messy notes.

Agenda:
- Intro
- Setting up
- Examples
- Task for next week

## Intro
- Questions:
![Image of programming](https://github.com/AUAP/AP2018/blob/master/class01/programming1.png)
    - What is programming? 
    - Do you have any programming experience? If yes, how was the experience? 
    - Why do you think you need to know programming? 
    - Why is it important to know programming in the area of digital design?
- The three assigned reading in class00:
    - 1 hr video lecture: **Computational Thinking and Thinking About Computing by Jeannette M. Wing (2009)**
      - She is a professor of Computer Science, at Columbia University and the presentation is more from a science perspective (computer science/mathematics) and for other science discliplines e.g biology, statistics, astronomy, neurosciences, etc or for scientific analysis purposes.
      - CT "complements and combines mathematics and engineering thinking"
      - key concepts: computational thinking, abstraction (two levels), tools, efficiency
      - The movement of STEM vs [STEAM](https://educationcloset.com/steam/what-is-steam/)
      - What might be computational arts/design? 
    - **Montfort, Nick. Exploratory Programming For the Arts and Humanities. MIT Press, 2016. 267-277** (check blackboard - Appendix A: Why Program?)
        - He is a professor of Digital Media at MIT, and he is also a poet, with a background in liberal arts and computer science. 
        - Exploratory programming: Using computation for (humanistic) inquiry (not finished stage) 
            - allows us to think in new ways 
                - adding to the methods and perspectives and raising new questions
            - offers us a better understanding of culture and media systems, and
                - twofold: gain a better perspective and learn to develop better cultural systems.
                - Give insights into, and better analysis of, cultural systems
            - can help us improve society
                - to create and discover (p. 277)
    - **Vee, Annette. Coding Literacty: How Computer Programming Is Changing Writing. MIT Press, 2017.43-93** (Check blackboard - 1 Coding for Everyone and the Legacy of Mass Literacy)
        - She is an Assistant Professor in the Department of English at the University of Pittsburgh
        - The history and contextualization of literacy and coding literacy
        - Coding and Writing (think in terms of literacy- reading and writing)
                - Why is coding as an important (useful) skill for everyday life like literacy? 
                - What are the implications that coding is framed under the umbrella of literacy and for whom?
        - Mass Programming movements: individual empowerment, new ways to think, citizenship and collective progress; employability and economic concerns
        - information accessibility (p. 47)
        - politics: literacy > ruling powers > measurement > who decides, standardizes and gets used? > pre-requisite for many other things.
        - The rise of sharing and adaptable computational culture (p. 67) via the [People's Computer Company](http://www.digibarn.com/collections/newsletters/peoples-computer/index.html) in the 70s > free and open source
        <br><img src="http://www.digibarn.com/collections/newsletters/peoples-computer/peoples-1972-oct/1972-10-PCC-cover-medium.jpg" width="450"><br>
        .......image src: [DigiBarn Computer Museum](http://www.digibarn.com/collections/newsletters/peoples-computer/peoples-1972-oct/index.html)
        - Hobbyist culture + cheap/home computers in the 80s (p. 71) + computers as tools  > education > problems of only focusing the 'use' of computers
        - Software becomes commodity separate from hardware
        - Seymour Papert introduced computers as objects to think with and proposed learning through tangible examples and building (cognitive development) p. 79
        - imagination/creativity/expressivity: "literacy is not simply an isolated cognitive skills but instead gains its meaning and power in social interactions." (p. 81)
- What is programming metaphorically? 
    - Musical instruments: craft / practice / scores 
    - Drawing a picture Vs Describing a picture algorithmically. (A concept by Frieder Nake) 
- Walkthrough the syllabus 
- Forming groups and peer-tutoring
## Setting up
![Image of js](https://mdn.mozillademos.org/files/13504/execution.png)
image src: [mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- What is [javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) and [p5.js](https://p5js.org/)? 
    - Livescript -> Javascript (1995) by Brendan Eich, who is the co-founder of Mozilla Foundation and Corporation (see here for [more](http://cis.msjc.edu/csis125a/resources/papers-Brendan-Eich-JavaScript-Copyright-IEEE.pdf) information, a paper by Charles Severance] 
        - A lightweight and interpreted language that complements Java (from novices to professional people)
    - p5.js is a js library and is highly related to Processing (in terms of syntax, goals and visions) 
- Why we learn p5.js? 
- Setting up the coding environent
  - Download the complete [p5.js library](https://p5js.org/download/) in a zip format > unzip it (create your working folder, and I recommend desktop)
  ![Image of p5_directory](https://github.com/AUAP/AP2018/blob/master/class01/p5_directory.png)
  - A web Browser (suggest [Firefox](https://www.mozilla.org/en-US/firefox/new/)), how to open the [console window](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Console_messages) (Tools > Web Developer > Web console)
  - A Code editor - [Atom](https://atom.io/)
    - setup [atom-live-server](https://www.youtube.com/watch?v=0Xy3yDDY4IE) for live preview of code modification on a browser | Or: Go to Preference > settings > install > type atom-live-server > install. After the installation, go to menu bar > Packages > atom-live-server > start (or use mac short cut: control + Option + L)
  - test the downloaded p5.js file under your newly created working folder
    - Reading [syntax](https://p5js.org/reference/)
    - try to change some parameters in the sketch.js file, press save. (make sure the atom-live-server has started)
    - you should see the code is executed and something will display on your browser
    ![First program](https://github.com/AUAP/AP2018/blob/master/class01/firstprogram.png)
 - Setting up a [Github account](http://www.github.com)
    - The concept of git as a distributed version control system
    - Using the web github interface (repository, Fork, Clone/Download, Create/Upload/Delete files, [Markdown](https://guides.github.com/features/mastering-markdown/), History)
    - For more advanced git users, see [here](https://github.com/AUAP/AP2018/blob/master/gitRef.md) 
    
## Showcase of critical works
- [CO2GLE](http://www.janavirgin.com/CO2/CO2GLE_about.html) and [DEFOOOOOOOOOOOOOOOOOOOOOREST](http://www.janavirgin.com/CO2/DEFOOOOOOOOOOOOOOOOOOOOOREST_about.html) by Joana Moll 
- [{POEM}.PY](https://linguisticgeographies.com/2016/06/12/poem-py-a-critique-of-linguistic-capitalism/) by Pip Thornton
- [nonsense](http://siusoon.net/?p=17) by Winnie Soon
- [Facebook Demetricator](http://bengrosser.com/projects/facebook-demetricator/) by Benjamin Grosser
## Task for next week
- Why mini exercises?
- mini exercise 01: My first program ([mini_ex01](https://github.com/AUAP/AP2018/blob/master/all_miniex/mini_ex1.md))
- Register a github account, and form a group, and put your name + github URL into the [etherpad](https://etherpad.net/p/ap2018)

## Afterthoughts
- no time to go through critical works example (which is expected)
- managed to walkthrough the console with console.log as well (sort of hello world program)
- About 1/3 with some programming/scripting experiences, especially html/css. Around 2-3 students familiar with c,c++, java.
- 
