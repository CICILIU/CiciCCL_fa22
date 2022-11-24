let balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 3; i++) {
    balls[i] = new Ball(random(width), random(height));
  }
}

function draw() {
  background(50);

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
    balls[i].bounce();
    //balls[i].speedUp();
    //balls[i].slowDown();
    //balls[i].enlarge();
    balls[i].OvalRotate();

  }
  fill(255);
  text("add ball(s) by Mouse press", 10, 20);
  text("delete ball by press Key 'D'", 10, 40);
}

//AMAZING! if mouse pressed, add a new ball at the location of mouseX, mouseY
function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}

function keyPressed() {
  // if "D" or "d" is pressed,
  if (key == "d" || key == "D") {
    // and if there is at least one object
    if (balls.length > 0) {
      let index = 0; // the first index = the oldest object
      // remove the oldest object
      balls.splice(index, 1);
    }
  }
}

class Ball {
  //property
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(10, 30);
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.angle = random(TWO_PI);
    this.angleV = random(0.01,0.2);
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    
  }
  // explosion
    explode() {
    this.xSpd = random(-10, 10);
    this.ySpd = random(-10, 10); // randomize the speed with high values
  }
  // rotate
  OvalRotate(){
    this.angle += this.angleV;
  }
  // how about size

  enlarge() {
    //case 1:enlarge range between 10~60
    // this.dia += 0.5;
    //this.dia = constrain(this.dia, 10,100);
    
    // case 2: think about apply sin()/cos();
    this.dia = map(sin(this.angle), -1, 1, 5, 60);
    this.angle = this.angle + this.angleV;
    this.angleV = this.angleV + 0.0001;
    
  }

  //how does it move, behaviors
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpd = this.ySpd * -1;
    }
  }

  //  behaviors about speed
  speedUp() {
    this.xSpd = this.xSpd * 1.01;
    this.ySpd = this.ySpd * 1.01; // 2% less per frame
  }

  slowDown() {
    this.xSpd = this.xSpd * 0.98;
    this.ySpd = this.ySpd * 0.98; // 2% less per frame
  }

  //how this ball looks like
  display() {
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    // noStroke();
    // fill(this.r,this.g,this.b);
    ellipse(0, 0, this.dia-5, this.dia+5);
    pop();
  }
}
