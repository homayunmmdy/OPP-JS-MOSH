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
  Shape.prototype.dublicate()
  console.log("dublication Circle");
};

const c = new Circle();
