function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function(factor) {
    // ..
    console.log('Computing')
  }

  this.draw = function () {
    this.computeOptimumLocation(0.1)
    console.log("draw");
  };
}

const circle = new Circle(2);
circle.draw()