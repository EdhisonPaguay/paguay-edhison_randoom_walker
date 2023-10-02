let w1;
let w2;
let w3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(500, 500);
  w2 = new Walker(500, 500);
  w3 = new Walker(500, 500);
}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();
}

class Walker {
  constructor(_X, _Y) {
    this.posX = _X;
    this.posY = _Y;
    this.vel = random(1, 10);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));

    this.esCirculo = random() > 0.5 ? true : false;
  }

  update() {
    this.posX += random(-this.vel, this.vel);
    this.posY += random(-this.vel, this.vel);
  }
  display() {
    fill(this.color);
    noStroke();
    circle(this.posX, this.posY, 10);
    if (this.esCirculo) {
      circle(this.posX, this.posY, 10);
    } else {
      Reflect(this.posX, this.posY, 10, 10);
    }
  }
}
