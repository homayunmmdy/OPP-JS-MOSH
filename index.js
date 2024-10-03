function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

class Circle {
  constructor(radius) {
    // Instancee members
    this.radius = radius;
    this.move = function () {};
  }
  // Prototype members
  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);
