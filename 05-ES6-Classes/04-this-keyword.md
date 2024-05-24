# The 'this' keyword

```js
const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();

// Method Call
c.draw();

/*
Circle { draw: f} 
  - draw: f ()
  - __proto__: Object
*/

const draw = c.draw;
console.log(draw); // f () { console.log(this); }

// Function Call (by default: global object)
draw(); // Window {...}
```

## strict mode

```js
'use strict';

const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle();
// Method Call
c.draw(); // this: Circle

const draw = c.draw;

// Function Call
draw(); // this: undefined
```

## ES6

```js
// 'use strict' by default
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw(); // this: undefined
```
