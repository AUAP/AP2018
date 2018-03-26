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

#### Step by Step:
1. Create a p5 sketch, then copy and paste the [source code](https://github.com/AUAP/AP2018/blob/master/class09/sketch09/sketch09.js) to your code editor. (you need to have a html file and the p5 library.
2. The objective is to replace the the API on line 7
```
var apikey = "INPUT YOUR OWN KEY"; 
```
![image4](https://github.com/AUAP/AP2018/blob/master/class09/image4.png)
- Go to [Custom Search JSON/Atom API](https://developers.google.com/custom-search/json-api/v1/overview)
- click the blue botton “Get A Key” -> Create project -> Enter your project name (e.g miniEx9) -> Click 'Create and Enable API’ -> Copy your API key and paste on your program > line 7.

3. After you get the API key, next is to replace the search engine ID (cx)
```
var engineID = "INPUT YOUR OWN";
```
![image5](https://github.com/AUAP/AP2018/blob/master/class09/image5.png)

- Get the search engine ID (CX) [here](https://cse.google.com/all)
- Add search engine -> Put something in “Sites to search” (e.g http://www.google.com) and “Name of the search engine” (e.g miniEx9) -> Click ‘create’; “Details” with ‘Search Engine ID’ 
- Copy the ID (that is the cx) and paste on your program > line 8. 

4. Settings on the control panel:
- select “search the entire web but emphasize included sites” 
- Make sure the “Image Search” is ON > click update

5. Try to run your program and see if any image display on your screen (turn your browser console on)

6. How to get the exact data? 
```
getImg = data.items[0].pagemap.cse_thumbnail[0].src; // this is the thumbnail
```
![image6](https://github.com/AUAP/AP2018/blob/master/class09/image6.png)

7. I want to search for other keywords or other image format.
- Change your query on line 10, right now the keywords is warhol flowers. The program won't take space between text, please use '+' sign to join the text. 
```
var query = "warhol+flowers"; //search keywords
```
- look at [here](https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters) to change different parameters, such as image size or add imgColorType etc. 
- The whole URL is as below, and there is a total of 100 free requests and each parameter is seperated by a '&' sign 
https://www.googleapis.com/customsearch/v1?key=YOURKEY&cx=YOURID&imgSize=small&q=warhol+flowers


8. If you want to work with the advanced code, you need:
- uncomment line 35-42
- if you are using Google chrome, please install an extra add on and then restart the browser and turn it on: [Allow-Control-Allow-Original:*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) (it is because the image is hosted with different domain, the current browser does not allow you to manipulate an image in this way. You can either install this add on or do server side programming like using node.js)
- It seems working fine on Firefox (at least for my browser), perhaps you may need to restart the browser
- You should able to load the image and with the animated effects, but still you should encounter 'Type Error' on your browser console. It is because The image is not in preload function and it is generated on the fly, and it takes time to load the image and get the pixel color value. I have used the '[try and catch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)' to keep the code running over time (it is a javasript syntax)
```
	try {	//takes time to load the external image
		loadImage(getImg, function(img) {
		image(img,0,0);
			 //try to uncomment this block if you manage to get the image. 
			img.loadPixels();
			img_x = floor(random(0,img.width-1));
			img_y = floor(random(0,img.height-1));
			loc = (img_x+img_y * img.width)*4;//which pixel of the image (and each pixel array holds red, green, blue and alpha values), can see more here: https://www.youtube.com/watch?v=nMUMZ5YRxHI
			stroke(color(img.pixels[loc],img.pixels[loc + 1], img.pixels[loc+2]));
			line(img_x,0,img_x,height);
			
		});
	}catch(error) {
  		console.error(error);
}
```

