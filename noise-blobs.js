function setup() {
  const canvas = createCanvas(400, 400);
  canvas.id('noise-blobs');
}

function draw() {
  background(random(255), random(255), random(255));

  push();
  translate(100, 100);
  beginShape();
  for (let i=0; i<TWO_PI; i+=0.1) {
    const r = randomGaussian() * 100;
    vertex(r*cos(i), r*(sin(i)));
  }
  endShape();
  pop();

  push();
  translate(300, 100);
  beginShape();
  for (let i=0; i<TWO_PI; i+=0.1) {
    const r = noise(random(500)) * 100;
    vertex(r*cos(i), r*(sin(i)));
  }
  endShape();
  pop();

  push();
  translate(100, 300);
  beginShape();
  for (let i=0; i<TWO_PI; i+=0.1) {
    const r = noise(random(500, 501)) * 100;
    vertex(r*cos(i), r*(sin(i)));
  }
  endShape();
  pop();

  push();
  translate(300, 300);
  beginShape();
  for (let i=0; i<TWO_PI; i+=0.1) {
    const r = random(0.9, 1) * 100;
    vertex(r*cos(i), r*(sin(i)));
  }
  endShape();
  pop();
}
