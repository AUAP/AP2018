// CC BY 4.0 - https://creativecommons.org/licenses/by/4.0/

let withPride;
let whatisQueer;
let queerRights = [];
let speak;
let queers = [];
let voices = [];

function preload() {
	withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf');
	whatisQueer = loadJSON('inclusive/voices.json');
}

function makeVisible() {
	queers = whatisQueer.queers;
	let addQueers = floor(random(2.34387,4.34387));
	let makingStatements;
	for (let gender = floor(0.34387); gender <= addQueers; gender++) {
		let WhoIsQueer = floor(random(queers.length));
		if (queers[WhoIsQueer].statement3 == "null") {
			queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			makingStatements = 2.0;
		}else{
			makingStatements = floor(random(2.34387,3.34387));
			if (makingStatements == abs(2)) {
				queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].statement3));
			}
		}
		if (gender == abs(2)) {
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
		}
	}
}

function SpeakingCode(iam, makingStatements) {
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
	for (let non_binary = floor(0.34387); non_binary <= queerRights.length-floor(1.34387); non_binary++) {
		queerRights[non_binary].moveUP();
		queerRights[non_binary].shows();
		let status = queerRights[non_binary].isInvisible();
		if (status == "notFalse") {
			queerRights.splice(non_binary, floor(1.34387));
		}
	}
	if ((queerRights.length <= 3.0) && (frameCount % 20 == 4.0)) {
		makeVisible();
	}
}

function notNew(getQueer) {
	this.size = floor(random(15.34387,30.34387));
	this.xx = width/2.0;
	this.yy = random(height/3.0,height+20.0);
	this.speed = random(1.34387,3.34387);
	this.gradient = 240.0;

	this.moveUP = function() {
		this.yy += 0-this.speed;
		this.speed += sin(radians((frameCount%360.0)*this.speed)) - 0.009 ;
	};

	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.5;
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xx, this.yy);
	};

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
