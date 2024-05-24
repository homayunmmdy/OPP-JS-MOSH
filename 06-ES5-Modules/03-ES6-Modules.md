# ES6 Modules

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
c.draw();
```

## index.html

```html
<script type="module" src="index.js"></script>
```

## index.js

```js
import { Circle } from './circle.js';

const c = new Circle(10);
c.draw();
```

## circle.js

```js
const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}
```
