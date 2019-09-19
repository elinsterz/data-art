let treedata;
let margin = 100;

// Constants
const Y_AXIS = 1;
// const X_AXIS = 2;
let c1, c2;

function preload() {
  // Don't use preload() function for JSON files, 
  // currently a bug in p5 where it doesn't return JSON Arrays only JSON Objects
  // populations = loadJSON('../data/simpleData_noRegions.json');
  myFont = loadFont('fonts/MaaxMono-Bold.otf');
}

function setup() {
  loadJSON('HemlockData.json', callback);

  createCanvas(windowWidth, windowHeight);
  background(238, 232, 221);

  // Define colors
  c1 = color(0, 200, 0, 85); // green
  c2 = color(255, 200, 0, 85); //orange

  noLoop();
}

function callback(data) {
  console.log('done loading data');
  console.log(data);
  treedata = data;

  //if the data is loaded, start working with it
  if (treedata) {
    for (let i = 0; i < treedata.length; i++) {
      console.log(treedata[i]);

      let year = treedata[i].year;
      // amount in milimeters the tree grew that year
      let rawRingWidth = treedata[i]['RawRingWidth_mm'];
      // a normalized version that tries to account for climatic changes only, not ones specific to the individual tree
      let growthIndex = treedata[i]['GrowthIndex'];

      console.log(year, rawRingWidth, growthIndex)
    }
  }
  drawViz();
  gradientText();
  drawTitle();
}

function draw() {
  //right heat map
  setGradient(0, 0, 150, height, c1, c2, Y_AXIS);
}

//basic ring graph
function drawViz() {
  for (let i = 0; i < treedata.length; i++) {
    //map ringwidth data to size of ellipse
    let ringSize = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 1, 400);

    //rings
    push();
    translate((width / 2) + 50, height / 2);
    //map stroke color to ring size
    let colorRed = map(treedata[i]['GrowthIndex'], 0, 1.5, 0, 255); // mapping growth index to amount of orange
    stroke(colorRed, 200, 0);
    strokeWeight(0.2);
    noFill();
    ellipse(0, 0, ringSize);
    pop();
  }
}

function drawTitle(){
  push()
  textSize(18);
  textAlign(LEFT);
  textFont(myFont);
  noStroke();
  fill(0);
  text('Raw Ring Width', width-200, 45);
  pop();
}


//gradient text matches growth index
function gradientText() {

  push();
  textSize(11);
  noStroke();
  fill(0);
  textAlign(CENTER);
  textFont(myFont);
  text('Growth Index', 75, 45);
  text('0mm', 75, 75);
  text('1.5mm', 75, height-50);
  pop();

  // for (let i = 0; i < treedata.length; i+=50) {
  //   // let ringSize = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 1, 900);

  //   push();

  //   //let yPos = map(treedata[i]['GrowthIndex'], 1579, 2000, 25, windowHeight-25);
  //   textSize(11);
  //   noStroke();
  //   fill(0);
  //   textAlign(CENTER);
  //   text(treedata[i]['GrowthIndex'], 25, i*2);

  //   pop();
  // }
}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  // Top to bottom gradient
  for (let i = 0; i <= h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, w, i);
  }
}




/* DUMPSTER CODE */

// function heatMap(){
//   // step 1: make rectangle
//   // step 2: map the color of the rectangle to be proportial to growth index
//   // step 3: label the ranges 

//   let rectRed = map(treedata[i]['GrowthIndex'], 0, 1.5, 0, 255);

//   rectMode(CORNER);
//   fill(rectRed, 170, 0);
//   rect (width-margin, 0, margin, height);
// }
