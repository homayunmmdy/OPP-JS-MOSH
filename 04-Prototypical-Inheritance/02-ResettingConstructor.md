# Resetting the Constructor

## No inheritance

```js
function Shape() {
  // ...
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);

/*
c
 - Circle {radius: 1}
   - radius: 1
   - __proto__: Object
     - draw: f ()
     - constructor: f Circle(radius)
     - __proto__: Object
*/

new Circle.prototype.constructor(1);
/*
Circle {radius: 1}
*/

new Circle(1);
/*
Circle {radius: 1}
*/
```

## Inheritance

```js
function Shape() {
  // ...
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
Circle.prototype = Object.create(Shape.prototype);

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
     - draw: f ()
     - __proto__: Object
       - duplicate: f ()
       - constructor: f Shape()
       - __proto__: Object
*/

Circle.prototype.constructor();
/*
Shape {}
*/
```

---

## Reset prototype & Reset constructor

```js
function Shape() {
  // ...
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
     - constructor: f Circle(radius)
     - draw: f ()
     - __proto__: Object
       - duplicate: f ()
       - constructor: f shape()
       - __proto__: Object

*/

new Circle.prototype.constructor(1);
/*
Circle {radius: 1}
*/
```
