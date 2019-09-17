let rings;
let margin = 40;
let button;

// Constants
const Y_AXIS = 1;
let c1, c2;

function preload() {
    // Use preload to have the data read in by the time you run the setup() code
    rings = loadTable("HemlockData.csv", "csv", "header");

    myFont = loadFont('assets/MaaxMono-Bold.otf');
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(255, 252, 235);
    noStroke()
    fill(255, 180)
    
    // print out the Table data we've loaded
    console.log(rings.getRowCount() + " total rows in table");
    console.log(rings.getColumnCount() + " total columns in table");

    // Define colors
    c1 = color(0, 200, 0, 85); // green
    c2 = color(255, 200, 0, 85); //orange

    noLoop();

    //console.log(rings.getObject());
    //console.log(rings.getArray());
    //console.log(rings.getRows());

    //title
    push()
    textSize(18);
    textFont(myFont);
    noStroke();
    fill(0);
    text('Raw Ring Width + Growth Index Chart', margin, margin);
    pop();

    //button for Ring Width
    buttonRing = createButton('Raw Ring Width (mm)');
    buttonRing.position(width - 200, 20);
    buttonRing.mousePressed(ringChart);

    //button for Growth Index 
    buttonGrowth = createButton('Growth Index Chart');
    buttonGrowth.position(width - 400, 20);
    buttonGrowth.mousePressed(growthChart);
}

function draw() {
    //gradient background
    setGradient(0, 0, width, height, c1, c2, Y_AXIS);

    //ringChart();
    // growthChart();
}

function ringChart() {
    background(255, 252, 235);

    //title
    push()
    textSize(18);
    textFont(myFont);
    noStroke();
    fill(0);
    text('Raw Ring Width(mm)', margin, margin);
    pop();

    //graph
    noFill();
    strokeWeight(0.95);
    stroke(255, 217, 120); //orange
    beginShape();
    for (let i = 0; i < rings.getRowCount(); i++) {
        const timescale = map(+rings.getRow(i).get('year'), 1579, 2000, margin, width - margin);
        const growthscale = map(+rings.getRow(i).get('RawRingWidth_mm'), 0, 2.1, height - margin, margin);
        console.log(timescale, growthscale);
        vertex(timescale, growthscale);
    }
    endShape();
}

function growthChart() {
    background(255, 252, 235);

    //title
    push()
    textSize(18);
    textFont(myFont);
    noStroke();
    fill(0);
    text('Growth Index Chart', margin, margin);
    pop();

    //graph
    noFill();
    strokeWeight(0.95);
    stroke(57, 255, 20); //green
    beginShape();
    for (let i = 0; i < rings.getRowCount(); i++) {
        const timescale = map(+rings.getRow(i).get('year'), 1579, 2000, margin, width - margin);
        const growthscale = map(+rings.getRow(i).get('GrowthIndex'), 0, 2.1, height - margin, margin);
        console.log(timescale, growthscale);
        vertex(timescale, growthscale);
    }
    endShape();
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
  