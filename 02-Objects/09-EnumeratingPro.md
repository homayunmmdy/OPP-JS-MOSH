# Enumerating properties

## Key

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

// ** key
for (let key in circle) {
  console.log(key);
}

/*

radios
draw

 */
```

## key and value

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

for (let key in circle) {
  console.log(key, circle[key]);
}

/*

radios 10
draw ƒ () {
    console.log('draw');
  }

*/
```

## for + in and typeof

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

/*

radios 10

*/
```

## Object.keys

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

// ** Get all of key in object (array)
const keys = Object.keys(circle);
console.log(keys); // (2) ["radios", "draw"]

// ** in
if ('radius' in circle) {
  console.log('Circle has a radius.'); // Circle has a radius.
}
```
