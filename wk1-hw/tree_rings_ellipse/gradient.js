//SEPARATE GRADIENT JUST FOR TESTING

// Constants
const Y_AXIS = 1;
// const X_AXIS = 2;
let c1, c2;

function setup() {
  createCanvas(710, 400);

  // Define colors
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {
  setGradient(50, 90, 100, height, c1, c2, Y_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  // Top to bottom gradient
  for (let i = 0; i <= h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    rect(x, i, w, i);
  }
}