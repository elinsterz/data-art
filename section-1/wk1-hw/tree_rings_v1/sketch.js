// How might you sort the data according to amount of growth?

// How might you visually represent the tree data?
// Try a few different ways
// Think about shape, color, text
// Once you feel comfortable with drawing a static representation, think about adding interactivity


let treedata;

function preload() {
  // Don't use preload() function for JSON files, 
  // currently a bug in p5 where it doesn't return JSON Arrays only JSON Objects
  // populations = loadJSON('../data/simpleData_noRegions.json');
}

function setup() {
  // put setup code here
  // load static data set here
  loadJSON('HemlockData.json', callback);

  createCanvas(windowWidth, windowHeight);
  //background(238,232,221);
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
      let growthIndex = treedata[i].GrowthIndex;

      console.log(year, rawRingWidth, growthIndex)
    }
  }
  drawViz();
}

function draw() {
  drawViz();
}

//basic ring graph
function drawViz() {
  for (let i = 0; i < treedata.length; i++) {
    let ringSize = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 1, 900);
    push();

    //let xPos = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, windowWidth/2, windowWidth/2  + 900);
    // textSize(2);
    // textAlign(CENTER);
    // text(treedata[i]['year'], xPos, height/2);

    translate(width / 2, height / 2);
    //map stroke color to ring size
    let colorRed = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 0, 255);
    stroke(colorRed, 157, 0);
    strokeWeight(0.125);
    noFill();
    ellipse(0, 0, ringSize);
    pop();
  }
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}