function Circle(radius) {
    // Instancee members
  this.radius = radius;

  this.move = function() {
    this.draw()
    console.log('move')
  }
}

// Prototype memebers
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius
}