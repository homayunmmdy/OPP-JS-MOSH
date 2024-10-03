function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.dublicate = function () {
  console.log("dublication");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.dublicate = function () {
  Shape.prototype.dublicate();
  console.log("dublication Circle");
};

function Squre() {}
extend(Squre, Shape);

Squre.prototype.dublicate = function () {
  Shape.prototype.dublicate();
  console.log("dublication Squre");
};

const shapes = [
  new Circle(),
  new Squre()
]

for(let shape of shapes)
  shape.dublicate()

const c = new Circle();
