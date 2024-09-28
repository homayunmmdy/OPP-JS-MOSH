function Circle(radius) {
  // Instancee members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(1);

// Prototype memebers
Circle.prototype.draw = function () {
  console.log("draw");
};

// Return instance members
console.log(Object.keys(c1));

// Return all members (instance  + prototype)
for (let key in c1) console.log(key);
