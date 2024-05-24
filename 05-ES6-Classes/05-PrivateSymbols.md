# Private Members Using Symbol

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

const c = new Circle(1);
c.radius;
```

## Using Underscore

```js
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
}

const c = new Circle(1);
c._radius;
```

## Using Symbols (Property)

```js
// Primitive
const _radius = Symbol(); // Unique identify (Symbol() === Symbol(): false)

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
}

const c = new Circle(1);
/*
c
- Circle { Symbol(): 1}
  - Symbol(): 1
  - __proto__: Object
*/

console.log(Object.getOwnPropertyNames(c)); // []

const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); // 1
```

## Using Symbols (method)

```js
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(1);

/*

c
- Circle { Symbol(): 1}
  - Symbol(): 1
  - __proto__:
    - constructor: class Circle
    - Symbol(): f()
    - __proto__: Object

*/
```
