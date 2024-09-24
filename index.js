function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(2);

// iterate to get the keys
for (let key in circle) {
  console.log(key, circle[key]);
}

// another way to get keys
const keys = Object.keys(circle);
console.log(keys);

// check that include in object or not
if ("radius" in circle) console.log("Circle has radius");
