/* eslint-disable no-undef, no-unused-vars */

let cells = [];
let outline = true;

function setup() {
  createCanvas(400 * 1.5, 400 * 1.5);
  cells.push(new Cell());
}

function draw() {
  background(25);

  push();
  fill(255);
  textSize(50);
  textStyle(BOLD);
  text("Mitosis Sim", 10, 50);
  pop();

  push();
  fill(255);
  textSize(20);
  text("Left arrow: Pause", 10, 80);
  text("Right arrow: Play", 10, 110);
  text("Down arrow: no Outline", 10, 140);
  text("Up arrow: Outline", 10, 170);
  pop();

  scale(1.5);
  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
    cells[i].grow();
    cells[i].split();
    cells[i].move();
    cells[i].w += 0.1;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    outline = true;
  } else if (keyCode === DOWN_ARROW) {
    outline = false;
  }
  if (keyCode === RIGHT_ARROW) {
    loop();
  }
  if (keyCode === LEFT_ARROW) {
    noLoop();
  }
}
