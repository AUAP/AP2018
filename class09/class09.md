Messy notes of class09 - Queries and APIS

Agenda:
- Artwork showcase: NET ART GENERATOR by Cornelia Sollfrank
- Peer-Tutoring (group 6)/Respondents (group 7): PARSING
- GOOGLE API walkthrough
- Guest lecture: Don't Erase Me by Tilde Lageri Damborg and Tobias Stenberg Christensen
- Tasks for next week

#### NET ART GENERATOR by Cornelia Sollfrank, ver5b updated by Winnie Soon
[Artwork](http://nag.iap.de/)
![image2](https://github.com/AUAP/AP2018/blob/master/class09/api.png)
![image3](https://github.com/AUAP/AP2018/blob/master/class09/api1.png)
![image4](https://github.com/AUAP/AP2018/blob/master/class09/api2.png)

#### Google API walkthrough- in-class ex
![image](https://github.com/AUAP/AP2018/blob/master/class09/flowers.gif)
- Basic: The sample code is about getting a static image from Google image search API, and then display it on a screen. This requires you to:
1. Understand the Google image search API workflow
2. Understand the API specification
3. Understand the corresponding returned JSON file format from Google image search API
4. Able to get teh API key and search engine ID from Google
5. Settings at the Google image search console
- Advanced: Uncomment line 35-42, where you will get the effects in which the image color of the image will be picked up and presented as animated lines.
```
/*
img.loadPixels();
img_x = floor(random(0,img.width-1));
img_y = floor(random(0,img.height-1));
loc = (img_x+img_y * img.width)*4;		//which pixel of the image (and each pixel array holds red, green, blue and alpha values)
stroke(color(img.pixels[loc],img.pixels[loc + 1], img.pixels[loc+2]));
line(img_x,0,img_x,height);
*/
```

#### Step by Step
1. Create a p5 sketch, then copy and paste the [source code](https://github.com/AUAP/AP2018/blob/master/class09/sketch09/sketch09.js) to your code editor
2. The objective is to replace the the API on line 7
```
var apikey = "INPUT YOUR OWN KEY"; 
```
![image4](https://github.com/AUAP/AP2018/blob/master/class09/image4.png)
- Go to [Custom Search JSON/Atom API](https://developers.google.com/custom-search/json-api/v1/overview)-
- click the blue botton “Get A Key” -> Create project -> Enter your project name (e.g miniEx9) -> Click 'Create and Enable API’ -> Copy your API key and paste on your program > line 7.

3. After you get the API key, next is to replace the search engine ID (cx)
```
var engineID = "INPUT YOUR OWN";
```
![image5](https://github.com/AUAP/AP2018/blob/master/class09/image5.png)
-Get the search engine ID (CX) [here](https://cse.google.com/all)
-Add search engine -> Put something in “Sites to search” (e.g http://www.google.com) and “Name of the search engine” (e.g miniEx9) -> Click ‘create’; “Details” with ‘Search Engine ID’ 
- Copy the ID (that is the cx) and paste on your program > line 8. 

4. Settings in the control panel:
- select “search the entire web but emphasize included sites” 
- Make sure the “Image Search” is ON > click update

5. Try to run your program and see if any image display on your screen (turn your browser console on)

6. How to get the exact data? 
```
getImg = data.items[0].pagemap.cse_thumbnail[0].src; // this is the thumbnail
```
![image6](https://github.com/AUAP/AP2018/blob/master/class09/image6.png)


