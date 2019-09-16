let rings;
let margin = 40;
let myFont;
let rowCount;

//defining an array for all the ring widths values
let ringVal = [];


function preload() {
  // Use preload to have the data read in by the time you run the setup() code
  rings = loadTable("HemlockData.csv", "csv", "header");
  myFont = loadFont('assets/MaaxMono-Bold.otf');
}


function setup() {
  // all sketches need a canvas instance
  createCanvas(windowWidth, windowHeight);
  // we're not using the draw loop so color the background and set drawing styles
  background(238,232,221);
  noStroke()
  fill(255, 180)
  // print out the Table data we've loaded
  console.log(rings.getRowCount() + " total rows in table");
  console.log(rings.getColumnCount() + " total columns in table");

  // how do we want to work with our Table Data?
  console.log(rings.getObject());
  console.log(rings.getArray());
  console.log(rings.getRows());

  rowCount = rings.getRowCount();

  // iterate through the TableRows and draw a circle where the axis is the year
  // and the y axis is the RawRingWidth measurement
  for (let i = 0; i < rings.getRowCount(); i++) {
    const timescale = map(rings.getRow(i).get('year'), 1579, 2000, margin, width - margin)
    const growthscale = map(rings.getRow(i).get('RawRingWidth_mm'), 0, 2.1, height - margin, margin)

    //addig values to the array
    append(ringVal, rings.getRow(i).get('RawRingWidth_mm'));
    console.log(ringVal);


    console.log(timescale, growthscale);
    // stroke(232, 165, 42);
    // line(timescale, height - margin, timescale, growthscale);
    //ellipse(timescale, growthscale, 10, 10)
  }

  // //timescale 
  // stroke(255);
  // line(margin, height - margin, width-margin, height - margin);

  // //growthscale
  // stroke(255);
  // line(margin, margin, margin, height-margin);
}

function draw() {

  background(238,232,221);

  push()
  textSize(18);
  textFont(myFont);
  noStroke();
  fill(57, 255, 20);
  text('Raw Ring Width',margin, margin);
  pop();

  push()
  textSize(11);
  textFont(myFont);
  noStroke();
  fill(57, 255, 20);
  text('(1579 - 2000)', margin, margin + 15);
  pop()

  let mapX = floor(map(mouseX, margin, width-margin, 1579, 2000)); //maps mouse loc to year
  console.log("mapX:" + mapX);
  console.log("mouseX: " + mouseX);

  // let j = floor(map(mapX, 1579, 2000, 0, rowCount));   //map year to row number
  // console.log(j);

  // console.log(rowCount);

  // const lineY = map(ringVal[j], 0, 2.1, height - margin, margin); //line is mapping ringw idth value to canvas height

  for(let x=1579; x < 2001; x++){
    let k = floor(map(x, 1579, 2000, 0, rowCount));   //k = index for the ringVal array
    const graphX = map(x, 1579, 2000, margin, width - margin);   
    const graphY = map(ringVal[k], 0, 2.1, height - margin, margin); 

    if(x == mapX){
      stroke(57, 255, 20);
      line(floor(graphX), height - margin, floor(graphX), graphY);

      push();
      noStroke();
      fill(57, 255, 20);
      textSize(11);
      textFont(myFont);
      text(x, graphX, graphY - 20);
      pop();
    }
    else {
      stroke(255, 217, 120);
      line(floor(graphX), height - margin, floor(graphX), graphY);
    }
  }
}


// function mousePressed() {
//   redraw();
// }


/*
let stats;
let homeRuns = [];

function preload() {
  stats = loadTable("ortiz.csv");
}

function setup() {
  createCanvas(480, 120);

  let rowCount = stats.getRowCount();
  homeRuns = [];
  for (let i = 0; i < rowCount; i++) {
    homeRuns[i] = stats.getNum(i, 1);
  }

  //console log table
  for (let i = 0; i < stats.getRowCount(); i++) {
    //gets the value from row i, column 0 in the file
    let year = stats.get(i, 0);
    //gets the value from row i, column 1
    let homeRuns = stats.get(i, 1);
    //gets the value from row i, column 2
    let rbi = stats.get(i, 2);
    //gets the value from row i, column 3
    let average = stats.get(i, 3);
    console.log(year, homeRuns, rbi, average);
  }
}


function draw() {
  //draw background grid for data
  stroke(0);
  line(0, 120, 0, 0);
  line(0, 120, 480, 120);
  for (let i = 0; i < homeRuns.length; i++) {
    let x = map(i, 0, homeRuns.length - 1, 0, 480);
    line(x, 0, x, 120);
  }

  //draw lines based on homeRun data
  noFill();
  stroke(0);
  beginShape();
  for (let i = 0; i < homeRuns.length; i++) {
    let x = map(i, 0, homeRuns.length - 1, 0, 480);
    let y = map(homeRuns[i], 0, 80, 100, 20);
    vertex(x,y);
  }
  endShape();
}

*/