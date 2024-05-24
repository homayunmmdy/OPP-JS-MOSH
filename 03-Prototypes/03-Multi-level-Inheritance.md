# Multi-level Inheritance

```js
let myArray = [];

/*
myArray
 - []
   - lenght: 0
   - __proto__: Array(0)
   - concat: f concat()
   - constructor: f Array()
   - copyWithin: f copyWithin()
   - entries: f entries()
   - every: f every()
   - fill: f fill()
   - filter: filter()
   - find: f find()
   - findIndex: f findIndex()
   - forEach: f forEach()
   - includes: f includes()
   - indexOf: f indexOf()
   - join: f join()
   - keys: f keys()
   - lastIndexOf: f lastIndexOf()
     - length: 0
   - map: f map()
   - pop: f pop()
   - push: f push()
   - reduce: f reduce()
   - reduceRight: f reduceRight()
   - reverse: f reverse()
   - shife: f shift()
   - slice: f slice()
   - some: f some()
   - sort: f sort()
   - splice: f splice()
   - toLocaleString: f toLocaleString()
   - toString: f toString()
   - unshift: f unshift()
   - Symbol(Symbol.iterator): f values()
   - Symbol(Symbol.unscopables): { copeWithin: true...}
   - __proto__: Object
     - constructor: f Object()
     - hasOwnProperty: f hasOwnProperty()
     - isPrototypeof: isPrototypeOf()
     - propertyIsEnumerable: f propertyIsEnumerable()
     - toLocaleString: f toLocaleString()
     - toString: f toString()
     - valueOf: f valueOf()
     - __defineGetter__: f __defineGetter__()
     - __defineSetter__: f __defineSetter__()
     - __lookupGetter__: f __lookupGetter__()
     - __lookupSetter__: f __lookupSetter__()
     - get __proto__: f __proto__()
     - set __proto__: f __proto__()

*/
```

## Multi-level inheritance

- objectBase
  - arrayBase (function Array)
    - myArray (let myArray)

```js
function Circle(radius) {
  this.radius = rarius;

  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

/*
circle
  Circle { radius: 10, draw: f}
    - draw: f ()
    - radius: 10
    - __proto__:
      - constructor: f Circle(radius)
      - __proto__: Object
        - constructor: f Object()
        - hasOwnProperty: f hasOwnProperty()
        - isPrototypeof: isPrototypeOf()
        - propertyIsEnumerable: f propertyIsEnumerable()
        - toLocaleString: f toLocaleString()
        - toString: f toString()
        - valueOf: f valueOf()
        - __defineGetter__: f __defineGetter__()
        - __defineSetter__: f __defineSetter__()
        - __lookupGetter__: f __lookupGetter__()
        - __lookupSetter__: f __lookupSetter__()
        - get __proto__: f __proto__()
        - set __proto__: f __proto__()
*/
```

- objectBase
  - circleBase (function Circle)
    - circle (new Circle)

> Objects created by a given constructor will have the same prototype.
