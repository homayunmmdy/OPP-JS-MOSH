# Private Members Using WeakMaps

```js
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(_radius.get(this));
  }
}

const c = new Circle(1);
c.draw(); // 1

/*
c
- Circle {}
  - __proto__:
    - constructor: class Circle
    - __proto__; Object

*/
```

## Method

```js
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, function() {
      console.log('move', this);
    });
  }

  draw() {
    _move.get(this)();
    console.log('draw');
  }
}

const c = new Circle(1);
c.draw();

/*
move undefined
draw
*/
```

## Method: Arrow function

```js
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    _move.get(this)();
    console.log('draw');
  }
}

const c = new Circle(1);
c.draw();

/*
move Circle {}
draw
*/
```

## Single WeakMap

```js
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {
        console.log('move');
      }
    });

    privateProps.get(this).radius;
  }

  draw() {
    privateProps.get(this).move();
    console.log('draw');
  }
}

const c = new Circle(1);
c.draw();

/*
move Circle {}
draw
*/
```
