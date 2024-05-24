# Constroucotr Prototypes

## Code

```js
Object.getProtorypeOf(myObj);
// myObj.__proto__ (parent of myObj)
// Constroctor.prototype (parent of myObj)
```

## Object Base

```js
let obj = {}; // new Object(); has Object.prototype

/*
obj.__proto__
  - { constructor: f, __defineGetter__: f,...}
    - constructor: f Object()
    - hasOwnProperty: f hasOwnProperty()...

same: obj.__proto__ => Object.prototype
    : obj.__proto__ === Object.prototype // true

Object.prototype
  - { constructor: f, __defineGetter__: f,...}
    - constructor: f Object()
    - hasOwnProperty: f hasOwnProperty()...
*/
```

## Array Base

```js
let array = [];

/*
array.__proto__
  - [constructor: f, concat: f, find: f, findIndex: f, pop: f,...]

same: array.__proto__ => Array.propotype
    : array.__proto__ === Array.prototype // true

Array.propotype
  - [constructor: f, concat: f, find: f, findIndex: f, pop: f,...]

*/
```

## Circle Base

```js
// Constructor Function (finctions are objects)

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);

/*

circle.__proto__
- circle { radius: 1}
  - radius: 1
  - __proto__:
    - constructor: f Circle(radius)
    - __proto__: Object

same: circle => Circle.prototype
    : circle.__proto__ === Circle.prototype // true

Circle.prototype
- { constructor: f}
  - constructor: f Circle(radius)
  - __proto__: Object

*/
```
