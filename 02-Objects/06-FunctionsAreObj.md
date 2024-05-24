# Functions are objects

```js
function Circle(radius) {
  this.radius = raduis;
  this.draw = function() {
    console.log('draw');
  };
}

const another = new Circle(1);
```

- Circle.
  - apply()
  - arguments
  - bind()
  - call()
  - caller
  - length
  - name
  - prototype
  - toString()
  - another
  - Circle
  - console

```js
/* 

Circle.name
"Circle"

Circle.length
1

Circle.constructor
ƒ Function() { [native code] }

*/
```

```js
const Circle1 = new Function(
  'radius',
  `
  this.radius = raduis;
  this.draw = function() {
    console.log('draw');
  };
`
);

const circle = new Circle1(1);

/*

circle
{radius: 1, draw: ƒ}

*/
```

## call()

```js
function Circle(radius) {
  this.radius = raduis;
  this.draw = function() {
    console.log('draw');
  };
}

Circle.call({}, 1);
// Circle.call({}, 1, 2, 3);

const another = new Circle(1);

/*

Circle.call(window, 1);
const another = Circle(1);

*/
```

## apply()

```js
function Circle(radius) {
  this.radius = raduis;
  this.draw = function() {
    console.log('draw');
  };
}

Circle.apply({}, [1, 2, 3]);
```
