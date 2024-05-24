# Inheritance

```js
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  draw() {
    console.log('draw');
  }
}

const c = new Circle();
c.move(); // move
c.draw(); // draw

/*
c
- Circle {}
  - __proto__: Shape
    - constructor: class Circle
    - draw: f draw()
    - __proto__: Object
      - constructor: class Shape
      - move: f move()
      - __proto__: Object
*/
```

## Super constructor

```js
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super('color');
    this.radius = radius;
  }
  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1); // Circle {color: "color", radius: 1}
```
