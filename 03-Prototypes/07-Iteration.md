# Iteration Instance and Prototype Members

## Orders don't matter

```js
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype Members
Circle.prototype.draw = function() {
  console.log('draw');
};

c1.draw(); // draw
```

## Iteration (Object.keys)

```js
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype Members
Circle.prototype.draw = function() {
  console.log('draw');
};

// Only return instance members
console.log(Object.keys(c1)); // [ 'radius', 'move' ]
```

## Iteration (for in)

```js
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype Members
Circle.prototype.draw = function() {
  console.log('draw');
};

// Return all members (instance & prototype)
// ** instance === own property
// ** own propery vs prototype prototype

for (let key in c1) console.log(key);
/*

radius
move
draw

*/
```

## Own Property

```js
// ** instance === own property
// ** own propery vs prototype prototype

function Circle(radius) {
  // Instance members (own propery)
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype Members
Circle.prototype.draw = function() {
  console.log('draw');
};

console.log(c1.hasOwnProperty('radius')); // true

console.log(c1.hasOwnProperty('draw')); // false
```
