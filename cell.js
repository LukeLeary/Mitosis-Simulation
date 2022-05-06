/* eslint-disable no-undef, no-unused-vars */

Cell = function (x, y) {
  this.w = 20;
  this.x = x || 200;
  this.y = y || 200;
  let maxSize = 49.9;
  let randomMaxSize = round(random(0, 1));
  this.show = function () {
    fill(255, 100);
    if (outline === true) {
      strokeWeight(3);
    } else if (outline === false) {
      strokeWeight(0.01);
    }
    ellipse(this.x, this.y, this.w, this.w);
  };

  this.grow = function () {
    if (randomMaxSize === 1) {
      maxSize = 50;
    } else {
      maxSize = 51;
    }
    if (this.w > maxSize) {
      this.w = 20;
    }
  };

  this.split = function () {
    if (this.w > maxSize - 0.1) {
      cells.push(new Cell(this.x, this.y));
    }
  };

  this.move = function () {
    this.speed = 1;
    this.r = round(random(0.5, 4.4));
    if (this.r === 1) {
      this.x += this.speed;
    }
    if (this.r === 2) {
      this.x -= this.speed;
    }
    if (this.r === 3) {
      this.y += this.speed;
    }
    if (this.r === 4) {
      this.y -= this.speed;
    }
  };
};
