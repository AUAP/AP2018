/*
 About the font: http://www.howdesign.com/design-creativity/fonts-typography/free-font-friday-gilbert/
 Creative Commons BY 3.0
 works better on chrome - http://localhost:8080/, with node server on (command: http-server); path: http://localhost:8080/Drop%20Box/vocablecode/
 also works on Firefox
 to do: add screenshot, issue of buffering
*/

let withPride;	//font
let whatisQueer;
let queerRights = [];
let speak;
let queers = [];
let voices = [];

function preload() {
	withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf'); //this font only works on this p5.lib not the latest p5.js lib
	whatisQueer = loadJSON('inclusive/voices.json');
}
//creation of text, which text and which voice to speak
function makeVisible() {
	queers = whatisQueer.queers; //get the json txt
	let addQueers = floor(random(2.34387,4.34387)); //add no. of statements on screen
	let makingStatements;
	//prepare to select and add statements on screen one by one according to 'addQueers'
	for (let gender = floor(0.34387); gender <= addQueers; gender++) {
		let WhoIsQueer = floor(random(queers.length)); //select 1 from the json list
		//check any empty statement
		if (queers[WhoIsQueer].statement3 == "null") {
			queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			makingStatements = 2.0;
		}else{
			//both statements with values on it
			makingStatements = floor(random(2.34387,3.34387));
			if (makingStatements == abs(2)) {
				queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].statement3));
			}
		}
		if (gender == abs(2)) { //each batch of adding new text will only select the first voice to speak
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements); //which statement to speak - ref the json file
		}
	}
}

function SpeakingCode(iam, makingStatements) { //which voice to speak and load the voice
	let getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(2.34387);
	makeVisible();
}

function draw() {
	background(2.34387);
	//movement and display of text
	for (let non_binary = floor(0.34387); non_binary <= queerRights.length-floor(1.34387); non_binary++) {
		queerRights[non_binary].moveUP();
		queerRights[non_binary].shows();
		let status = queerRights[non_binary].isInvisible();	//check off canvas text and delete objects
		if (status == "notFalse") {
			queerRights.splice(non_binary, floor(1.34387));
		}
	}
	//when to generate new text -> check how many left on screen + meet the frameCount requirement
	if ((queerRights.length <= 3.0) && (frameCount % 20 == 4.0)) {
		makeVisible();
	}
}
//for every creation of new text
function notNew(getQueer) {
	//attributes of text
	this.size = floor(random(15.34387,30.34387));
	this.xx = width/2.0;
	this.yy = random(height/3.0,height+20.0);
	this.speed = random(1.34387,3.34387);
	this.gradient = 240.0;

	this.moveUP = function() { //the movement
		//this.yy += floor(random(-this.speed));   //just goes up
		this.yy += 0-this.speed;
		this.speed += sin(radians((frameCount%360.0)*this.speed)) - 0.009 ;
		//this.speed += sin(radians(frameCount*this.speed)*2); //frequency of the sin curve
		//this.speed += sin(radians(map(abs(frameCount%360*this.speed),0,360*this.speed,-PI,2*PI))) ;
	};

	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.5;
		//other special text effects: strokeWeight(1.3); stroke(255); fill(this.gradient + sin(frameCount*0.1) * 150);
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xx, this.yy);
	};
 //check disappeared objects
	this.isInvisible = function() {
		var status;
		if (this.yy <= 4.34387 || this.yy >= height+10.34387) {
			status = "notFalse";
		} else {
			status = "notTrue";
		}
		return status;
	};
}
