let seq = 0;

function setup() {
  createCanvas(400, 400);
  background(50);
}

function draw() {
  background(50);

  // draw scenes
  if (seq == 0) {
    drawIntro();
  } else if (seq == 1) {
    drawScene1();
  } else if (seq == 2) {
    drawScene2();
  } else if (seq == 3) {
    drawScene3();
  } else {
    drawEnding();
  }

  text("Sequence: " + seq, 10, 20);
  text("Click to move to next phase.", 10, 50);
}

function mousePressed() {
  proceedSequence();
}

function proceedSequence() {
  seq++;
  if (seq == 5) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}

function drawIntro() {
  background(0);
  fill(255);
  ellipse(width / 2, height / 2, 100, 100);
}

function drawScene1() {
  background(100, 0, 0);
  fill(0, 255, 255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 200);
}

function drawScene2() {
  background(0, 100, 0);
  fill(255, 255, 0);
  ellipse(width / 2, height / 2, 300, 150);
}

function drawScene3() {
  background(0, 0, 100);
  fill(255, 0, 255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 200);
}

function drawEnding() {
  background(100);
  fill(255);
  ellipse(width / 2, height / 2, 100, 100);
}