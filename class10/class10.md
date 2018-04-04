Messy notes of class10 - Algorithms

Agenda:
- Artwork showcase: Google will eat itself (2005) by UBERMORGEN, Alessandro Ludovico and Paolo Cirio 
- Peer-Tutoring (group 7)/Respondents (group 8): Your coding challenge
- Peer-Tutoring (group 8)/Respondents (group 9): Your coding challenge
- Flow Chart
- Algorithms
- Discussion of final project
- Tasks for next week

##### Artwork showcase
[Google will eat itself](http://www.gwei.org/index.php) (2005) by UBERMORGEN, Alessandro Ludovico and Paolo Cirio 

"One of Google's main revenue generators is the "Adsense" program: It places hundreds of thousands of little Google text-ads on websites around the world.

Now we have set up a vast amount of such Adsense-Accounts for our hidden Web-Sites. Each time someone visits a Web-Sites within our network of sites, he/she triggers a series of robots. For each click we receive a micropaiment from Google.

Google pays us monthly by check. Each time we collect enough money, we buy the next Google share.

GWEI - Google Will Eat Itself is to show-case and unveil a total monopoly of information, a weakness of the new global advertisment system and the renaissance of the “new economic bubble" - reality is, Google is currently valued more than all Swiss Banks together (sic)."

![image3](http://www.gwei.org/img/GWEI_Johannesburg1.jpg)
![image1](http://www.gwei.org/img/diag_gwei_attack.gif)

More different flowcharts [here](http://www.gwei.org/pages/diagram/diagram.html) 

#### Discussion
- Find out how GWEI works
- What's the role of flow charts here in their work? 

##### What are algorithms? 
![image2](https://www.webopedia.com/imagesvr_ce/5326/algorithm.gif)

From Ed Finn: 

**Computer Science perspective (p. 17-18)**: 
- An algorithm is a recipe, an instruction set, a sequence of tasks to achieve a particular calculation or result.
- [An] engineer's notion of algorithms geared toward defining problems and solutions

**Cultural perspective (p. 15-16, 47)**: 
- Algorithms performs many other kinds of cultural work (e.g suggesting potential mates, books and booking vocations)
- Algorithms function as culture machines
- By learning to interpret the container, the inputs and outputs, the seams of implementation, we can begin to develop a way of reading algorithms as culture machines taht operate in the gap between code and culture. 
- The most important aspect of an algorithmic system is not the surface material it presents to the world at any particular moment [...] but rather the system of rules and agents that constantly generate and manipulate that surface material.

##### Flow Chart? 

“[A flow chart] shows the constraints on the system, its system boundaries and the general flow of information around the system. It is a common means of understanding complex data flows around a system within computer science and software engineering…
Flowcharts are very simple diagnostic and modeling structures that follow the logic of the program through a series of linear processes with decision gates, where a yes or no answer is expected, to guide the software to a certain resolution or output.”  (Berry 2011, pp. 113-114)
  
Practically: A flowchart is a diagram that shows the **breakdown of a task** or system into all of the necessary steps. Each step is represented by a symbol and connecting lines show **the step-by-step progression** through the task.

![image4](https://imgs.xkcd.com/comics/flow_charts.png)
![image5](https://wcs.smartdraw.com/flowchart/img/basic-symbols.jpg?bn=1510011109)

#### in-class ex: draw a flow chart based on below code
```javascript
function setup() {
  createCanvas(windowWidth, windowheight);
  var sometext = ['h','e','l','l','o'];
  for (var i=0;i<5; i++) {
    console.log(sometext[i]);
  }
}
```
Tools: 
1. https://www.draw.io/
2. https://creately.com/
...

[here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=forloop#R7VhRT9swEP41eZ2apEnbRyiFTdomJB4GjyZxEw%2FHFzkuTffrZ8dOE9cUEISITiuisj%2Bfz%2Bev3%2FnieOGyqK84KvMfkGLqBZO09sILLwjm8Ux%2BK2CngWg20UDGSaohvwNuyB9swNZsQ1JcWYYCgApS2mACjOFEWBjiHLa22RqovWqJMuwANwmiLvqLpCI324omHf4VkyxvV%2FYnZuQeJQ8Zhw0z63lBuG4%2BerhArS9jX%2BUohW1v0XDlhUsOIHSrqJeYKmpb2vS8yyOj%2B7g5ZuI1E9oZldi1e8eppMJ0gYscMmCIrjr0vNkfVh4mspeLgsqmL5tyUb67VfiXqO3eGbPfWIid%2BaXRRoCEOu%2FfAUrjQ8ejgji6pTZm2PDEWAVGJIhn2FhFezqlSjEUWAYjTTimSJBH2zsyesn2dh1nsmFoO0KhdvGI6MY4rWQYwuWVUilfxd82JwLflKgJfisTyGYRVaXW9JrUiuXzNaF0CRR44yhcR%2BpP4pXg8IB7I3Hz2ZP4iLnA9fM0ugSZCeHcSHRnp%2Ba2y4epgfJeKrTYexj1pw6lQ6r0Y5UYuUqMR1Ji5ND2jRFBEFV7la7lPyWVVOYE1urwzBFHicC8cti1uXtBr0OIbWqLbe6KzQ%2BeUFs8gNoWJyy22BXbbKxjb1CacE3ErYFV%2B84uIrf9AtONjU6u1uAI7MaOKJvtyGhyyWGWq%2B2gJO9nsReeye4lYaSSKXPp5nQOxf2mGiefw4Pi8VRCP1U%2B%2FEHqh3%2FCKT1zVTcfSXQzh7ZrTphoVIctqckKwjoYWAVUtaqEY8w%2BXTUJ4xHLiT8%2FYfG9V2lm6jVo2dTtM%2BHBaTA74FmL3czqqD7jHO16ZqUyqI6vE0X2OtPFweXnBXs%2Fft7e2YdtLxs64k4new5fJR1XOVegskx9MVwLOwU%2FWZJNR00y91H3JziUCMWZtW%2F7xsSA4YPrlYHkI3PGZDeRZKjKeq6oIgmiZ2agIGlKj93l7J9iCK4XU%2FtAax9aX7iMBQNQ3froUb1iqXukndbtNjhI%2FSB01ftR19sg%2FC%2FescTrvkm4w%2B5195%2FhOli8TdZv4Fp2u9eUuth1r4LD1V8%3D)
