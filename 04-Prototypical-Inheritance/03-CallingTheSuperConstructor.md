# Calling the Super Constructor

```js
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);

/*
c
- Circle {radius: 1}
  - radius: 1
  - __proto__: Shape
*/
```

---

## Super Constructor

```js
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius, color) {
  Shape(color);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1, 'red');

/*
c
- Circle {radius: 1}
*/

window.color;
/*
"red"
*/
```

## Call Super constructor

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

const s = new Shape();
const c = new Circle(1, 'red');

/*
c
- Circle {color: "red", radius: 1}
  - color: "red"
  - radius: 1
  - __proto__: Shape
*/
```
