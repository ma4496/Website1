let angle = 0;
let counter = 1;
let x;
let y;


function setup () {
  createCanvas(800, 800);
  background (245, 152, 229); // pink
  smooth();
}


function draw() {
  if (counter == 1) {  
    option1();
  }

  if (counter == 2) { 
    option2();
  }

  if (counter == 3) { 
    option3();
  }
}

// options:

function option1 () {
  if (mouseIsPressed) {
    frameRate(30);
    push();
    translate(mouseX, mouseY);
    flower4();
    rotate(angle);
    flower1();
    flower2();
    flower3();
    angle = angle + 1;
    if (angle > 5) {
      angle = 0;
    }
    pop();
  }
}

function option2() {
  background (168, 54, 149); //purple
  frameRate(3); // slower framerate
  push();
  translate (mouseX, mouseY);
  scale(0.5);
  for (y = 0; y < mouseY + 20; y = y + 70) { // loop y
    for (x = 0; x < mouseX + 20; x = x + 70) { // loop x
      //for (float angle = 0; angle < 100 ; angle = angle + 0.1){
      rotate(angle);

      noStroke();
      fill(245, 152, 229); // pink

      circle(x + angle, y, 30);
      circle(x + 20 + angle, y + 10, 30);
      circle(x + 30 + angle, y + 30, 30);
      circle(x + 25 + angle, y + 48, 30);
      circle(x + 5 + angle, y + 58, 30);
      circle(x - 20 + angle, y + 50, 30);
      circle(x - 25 + angle, y + 30, 30);
      circle(x - 20 + angle, y + 10, 30);

      fill(242, 227, 35); // yellow

      circle(x + 2 + angle, y + 30, 40); // center

      angle = angle + 0.3;

      if (angle > 4) {
        angle = 0;
      }

      // }
    }
  }
  pop();
}

function option3() {
  //background (245, 152, 229);
  frameRate(30); // faster framerate
  if (mouseIsPressed) {
    push();
    translate(mouseX - 100, mouseY - 100);
    scale(random(0.25, 2));
    fill(random(121, 191), 54, 149); // variations of purple
    flower6();
    flower7();
    pop();
  }
}

// flowers:

function flower1() {  // adapted from "flower 2" in my sketch 1

  noStroke();
  fill(168, 54, 149); // purple

  circle(90, 110, 30);
  circle(110, 120, 30);
  circle(120, 140, 30);
  circle(115, 158, 30);
  circle(95, 168, 30);
  circle(70, 160, 30);
  circle(65, 140, 30);
  circle(70, 120, 30);

  fill(242, 227, 35); // yellow

  circle(92, 140, 40); // center
}

function flower2() {  // adapted from "flower 2" in my sketch 1
  push();
  scale(0.55);
  noStroke();
  fill(168, 54, 149); // purple

  circle(90, 110, 30);
  circle(110, 120, 30);
  circle(120, 140, 30);
  circle(115, 158, 30);
  circle(95, 168, 30);
  circle(70, 160, 30);
  circle(65, 140, 30);
  circle(70, 120, 30);

  fill(242, 227, 35); // yellow

  circle(92, 140, 40); // center


  pop();
}

function flower3() {  // adapted from "flower 2" in my sketch 1
  push();
  scale(0.3);
  noStroke();
  fill(168, 54, 149); // purple

  circle(90, 110, 30);
  circle(110, 120, 30);
  circle(120, 140, 30);
  circle(115, 158, 30);
  circle(95, 168, 30);
  circle(70, 160, 30);
  circle(65, 140, 30);
  circle(70, 120, 30);

  fill(242, 227, 35); // yellow

  circle(92, 140, 40); // center

  pop();
}

function flower4() {  // adapted from "flower 2" in my sketch 1
  push();
  scale(0.27);
  noStroke();
  fill(168, 54, 149); // purple

  circle(0, -5, 30);
  circle(20, 5, 30);
  circle(30, 25, 30);
  circle(25, 43, 30);
  circle(5, 53, 30);
  circle(-20, 45, 30);
  circle(-25, 25, 30);
  circle(-20, 5, 30);

  fill(242, 227, 35); // yellow

  circle(2, 25, 40); // center

  pop();
}

function flower5() { // adapted from "flower 2" in my sketch 1

  noStroke();
  fill(168, 54, 149); // purple

  circle(x + angle, y, 30);
  circle(x + 20 + angle, y + 10, 30);
  circle(x + 30 + angle, y + 30, 30);
  circle(x + 25 + angle, y + 48, 30);
  circle(x + 5 + angle, y + 58, 30);
  circle(x - 20 + angle, y + 50, 30);
  circle(x - 25 + angle, y + 30, 30);
  circle(x - 20 + angle, y + 10, 30);

  fill(242, 227, 35); // yellow

  circle(x + 2 + angle, y + 30, 40); // center
}

function flower6() { // petals of flower 6, adapted from "flower 2" in my sketch 1
  noStroke();

  circle(x + angle, y, 30);
  circle(x + 20, y + 10, 30);
  circle(x + 30, y + 30, 30);
  circle(x + 25, y + 48, 30);
  circle(x + 5, y + 58, 30);
  circle(x - 20, y + 50, 30);
  circle(x - 25, y + 30, 30);
  circle(x - 20, y + 10, 30);
}

function flower7() { // center of flower 6

  fill(242, 227, 35); // yellow

  circle(x + 2, y + 30, 40); // center
}

function keyPressed() {    //switch between options 
  background (245, 152, 229);
  counter ++;
  if (counter == 4) {
    counter = 1;
  }
}