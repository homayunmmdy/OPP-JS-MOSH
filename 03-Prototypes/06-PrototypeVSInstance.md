# Prototypes vs. Instance Members

## draw() Instance members

```js
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('draw');
  };
}

const c1 = new Circle(1);
const c2 = new Circle(1);

/*
c1
 - Circle { radius: 1, draw: f}
   - draw: f ()
   - radius: 1
   - __proto__: Object

c2
 - Circle { radius: 1, draw: f}
   - draw: f ()
   - radius: 1
   - __proto__: Object

*/

/*

c1.__proto__ === Circle.prototype (Circle Base)

*/
```

## draw() Prototypes members

```js
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);

/*

c1
- Circle { radius: 1 }
  - rafius: 1
    - __proto__:
    - draw: f ()
    - constructor: f Circle(radius)
    - __proto__: Object 

c2
- Circle { radius: 1 }
  - rafius: 1
    - __proto__:
    - draw: f ()
    - constructor: f Circle(radius)
    - __proto__: Object 
*/
```

## Instance & Prototypes members

```js
function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Prototypes members
Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);
```

## toString()

```js
c1.toString();

/*
"[object Object"]

*/
```

## over write toString()

```js
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
};

console.log(c1.toString()); // Circle with radius 1
```

## Reference other members (prototype call instance)

```js
function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}
Circle.prototype.draw = function() {
  this.move();
  console.log('draw');
};

const c1 = new Circle(1);
c1.draw();
/*

move
draw

*/
```

## Reference other members (instance call prototype)

```js
function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move');
  };
}
Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle(1);
c1.move();
/*
draw
move
*/
```
