# Getters and Setters

```js
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  getRadius() {
    return _radius.get(this);
  }
}

const c = new Circle(1);
c.getRadius(); // 1
```

## ES6

```js
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('invalid radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);
c.radius; // 1
c.radius = 10; // 10;

c.radius = -1; // Error: invalid radius
```
