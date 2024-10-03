function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function () {
  console.log("dublication");
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape)
Circle.prototype.draw = function () {
  console.log("draw");
};

function Squre(size) {
  this.size = size;
}

extend(Squre, Shape)


const s = new Shape();
const c = new Circle(1, "red");
