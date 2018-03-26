/*
class09: Fetching and visualizing images from Google image search API
- ok to run on firefox, but if you run on Chrome you need to install extra add on: Allow-Control-Allow-Original:* (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
- credit: Image Lines by Anna the Crow https://www.openprocessing.org/sketch/120964 
*/
var url = "https://www.googleapis.com/customsearch/v1?";
var apikey = "INPUT YOUR OWN KEY";  //register API key here: https://developers.google.com/custom-search/json-api/v1/overview
var engineID = "INPUT YOUR OWN"; //https://cse.google.com/all  | create search engine, then get the searchengine ID - make sure image is on

var query = "warhol+flowers";  //search keywords
var imgSize ="small"; //xxlarge, check here: https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters
var request; //full API

var img;
var getImg;
var loc;
var img_x, img_y;
function setup() {
	createCanvas(300,350);
	frameRate(60);
	fetchImage();
}

function gotData(data) {   //a callback needs an argument
	//getImg = data.items[3].pagemap.cse_image[0].src;  //items responsible for which image
	getImg = data.items[0].pagemap.cse_thumbnail[0].src;  // this is the thumbnail
	//getImg = data.items[0].pagemap.cse_image[0].src; //full image
	console.log(getImg);
}

function draw() {
	try {	//takes time to load the external image
		loadImage(getImg, function(img) {
		image(img,0,0);
			/* //try to uncomment this block if you manage to get the image. 
			img.loadPixels();
			img_x = floor(random(0,img.width-1));
			img_y = floor(random(0,img.height-1));
			loc = (img_x+img_y * img.width)*4;		//which pixel of the image (and each pixel array holds red, green, blue and alpha values)
			stroke(color(img.pixels[loc],img.pixels[loc + 1], img.pixels[loc+2]));  //rgb values
			line(img_x,0,img_x,height);
			*/
		});
	}catch(error) {
  		console.error(error);
	}
}

function fetchImage() {
		request = url + "key=" + apikey + "&cx=" + engineID + "&imgSize=" + imgSize + "&q=" + query;
		console.log(request);
		loadJSON(request, gotData); //this is the key syntax and line of code to make a query request and get a query response

}
