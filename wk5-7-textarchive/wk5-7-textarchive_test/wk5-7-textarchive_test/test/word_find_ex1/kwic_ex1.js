// source: https://rednoise.org/rita/examples/p5js/KWICmodel/#source

//set up global var
let buttons = ["love", "suicides", "good","work", "die","try","sad","must"];
let word = buttons[8];
let buttonX = 50;
let over;
let data;
let kwic;
let input;
let poemArray;
let separator;

// function preload() {

// 	var files = ['allmyprettyones.txt','herkind.txt'];
// 	for (var i = 0; i < files.length; i++) {
// 	  txt[i] = loadStrings('data/' + files[i]);
// 	}
//   }

function preload() {
	data = loadStrings('data/sexton_poems_all.txt');
	// data1 = loadStrings('data/allmyprettyones.txt');
	// data2 = loadStrings('data/herkind.txt');
}

function setup() {

	createCanvas(800, windowHeight);
	textFont('Times');
	textSize(14);
	fill(0);

	updateKWIC();
}

function updateKWIC() {

	// dataArray = [data1, data2];

	//key words in context; rita style
	// https://p5js.org/reference/#/p5/join
	kwic = RiTa.kwic(data.join('\n'), word, {
		// ignoreStopWords: true,
		ignoreCase: false,
		ignorePunctuation: true,
		wordCount: 6
	});

	console.log('data: ' + data); //this returns nothing

	background(255, 255, 255);

	drawButtons();

	//if kwic found no words matching then say word not found
	if (kwic.length == 0) {

		textAlign(LEFT);
		text("Word not found", width / 2, height / 2);

	} else {

		//textWidth is p5 function: returns the width of any character/string
		let tw = textWidth(word) / 2; //tw: half of the text width of the word selected. this is to get the center (i think)
		
		console.log('word: '+ word); //word: word chosen
		console.log("tw:" + tw);  //i think this is the text width
		
		// let kwicLength = kwic.length;
		// kwicLength = 500; //arbitrary large number but was originally the kwic.length

		for (let i = 0; i < kwic.length; i++) {
			console.log('kwic.length: '+ kwic.length);

			// console.log(display[i]);
			let parts = kwic[i].split(word); //parts is all the sentences that contain the word selected
			console.log('parts: '+ parts);

			let x = windowWidth/2; // xloc of wordd
			let y = i * 20 + 105; //105 + (index * 20)

			//if (y > height - 20) return; //if height reaches bottom then return

			fill(0);
			textAlign(RIGHT);
			text(parts[0], x-tw, y); //parts[0] // x(250) - tw (half of text width of word)
			console.log("parts[0]: " + parts[0]);

			fill(200, 0, 0);
			textAlign(CENTER);
			text(word, x, y); // x(250) , y(starts at 105)

			fill(0);
			textAlign(LEFT);
			text(parts[1], x + tw, y); 
			console.log("parts[1]" + parts[1]);
		}
	}
}

function drawButtons() {

	let posX = buttonX;
	let posY = 40;

	for (var i = 0; i < buttons.length; i++) {

		//conditional ternary operator
		//https://www.w3schools.com/jsref/jsref_operators.asp
		// ex: voteable = (age < 18) ? "Too young":"Old enough";

		// stroke(200);
		// var on = word == (buttons[i]) ? true : false;
		var tw = textWidth(buttons[i]);
		// fill(!on && buttons[i] == over ? 235 : 255); 
		fill(55);

		// rect(posX - 5, 24, tw + 10, 20, 7);
		// fill((on ? 255 : 0), 0, 0);
		text(buttons[i], posX, posY);
		posX += tw + 50;
	}
}

function inside(mx, my, posX, tw) {

	return (mx >= posX - 5 && mx <= posX + tw + 5 && my >= 25 && my <= 44);
}


function mouseClicked() {

	var posX = buttonX, tw;

	for (var i = 0; i < buttons.length; i++) {

		tw = textWidth(buttons[i]);

		if (inside(mouseX, mouseY, posX, tw)) {

			word = buttons[i];
			kwic = null;
			updateKWIC();
			break;
		}
		posX += tw + 50;
	}
}



////////////////* DUMPSTER CODE *////////////////
// not sure why the below is necessary???
// function mouseMoved() {

// 	over = null;
// 	var posX = buttonX, tw;

// 	for (var i = 0; i < buttons.length; i++) {

// 		tw = textWidth(buttons[i]);

// 		if (inside(mouseX, mouseY, posX, tw)) {

// 			over = buttons[i];
// 			break;
// 		}
// 		posX += tw + 20;
// 	}
// }