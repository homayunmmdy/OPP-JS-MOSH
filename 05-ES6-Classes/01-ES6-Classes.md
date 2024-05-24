# ES6 Classes

```js
/*
function Circle(radius) {
    this.radius = radius;

    this.draw = funciton() {
        console.log('draw');
    }
}

*/

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {};
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);

/*

c
- Circle {radius: 1, move: f }
  - move: f ()
  - radius: 1
  - __proto__: Object
    - constructor: class Circle
    - draw: f draw()
    - __proto__: Object

*/

typeof Circle; // "function"
```
