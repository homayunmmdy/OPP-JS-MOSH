# Method Riding

```js
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    console.log('circle move');
  }
}

const c = new Circle();
const s = new Shape();

/*
c
- Circle {}
  - __proto__: Shape
    - constructor: class Circle
    - move: f move()
    - __proto__:
      - constructor: class Shape
      - move: f move()
      - __proto__: Object
*/
```

## super keyword

```js
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();
```
