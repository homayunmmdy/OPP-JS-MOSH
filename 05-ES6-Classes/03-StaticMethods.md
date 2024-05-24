# Static Methods

## Instance & Static method

```js
class Circle {
  constructor(radius) {
    this.radius = rarius;
  }

  // Instance Method
  draw() {}

  // Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

//const circle = new Circle(1);
const circle = Circle.parse('{ "radius": 1}');
Circle.parse(); // call static methods

console.log(circle);

/*
Circle {radius: 1}
  - radius: 1
  - __proto__: Object
    - constructor: class Circle
    - draw: f draw()
    - __proto__: Object
*/
```

## Build-in Object

```js
// Math.

class Math2 {
    static abs(value) {
        // ...
        // return ...
    }
}

Math2.abs(...);

```
