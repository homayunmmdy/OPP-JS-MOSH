function Shape() {
}

Shape.prototype.dublicate = function() {
  console.log('dublication')
}

function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw')
}

const s = new Shape();
const c = new Circle(1);