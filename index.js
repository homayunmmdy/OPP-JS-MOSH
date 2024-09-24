function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(2);

circle.location = { x: 1 };
delete circle.radius

console.log(circle);
