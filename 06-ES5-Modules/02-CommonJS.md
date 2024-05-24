# CommonJS Modules

**index.js**

```js
const Circle = require('./circle');

const c = new Circle(10);
c.draw();
```

> Things that are highly related should go together

**circle.js**

```js
// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

module.exports = Circle;
```
