# Intermediate Function Inheritance

```js
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius, color) {
  Shape.call(this, color); // Call super constructor

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
};

function Square(size) {
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const s = new Shape();
const c = new Circle(1, 'red');
```

---

## Refactor

```js
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

// Intermediate Function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Circle;
}

function Circle(radius, color) {
  Shape.call(this, color); // Call super constructor

  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('draw');
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');
```
