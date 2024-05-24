# Modules

```js
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

const c = new Circle(10);
console.log(_radius.get(c)); // 10
c.draw(); // Circle with radius 10
```

## Modularity

- Maintainability
- Reuse
- Abstract

## Modules

**ES5**

- AMD > Browser
- CommonJS > Node.js
- UMD > Browser / Node.js

**ES6**

- ES6 Modules
