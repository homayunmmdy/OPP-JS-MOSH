# Prototypes and Prototypical Inheritance

```js
let x = {};

/*
x
 - {}
   __proto__:
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

/*

x.toString()
"[object Object"

*/

// ** Object base ***
/*
Object.getPrototypeOf(x)

*/

let y = {};

/*
Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
true

*/

// for debuging
x.__protp__ === y.__proto__;
true;

x.toString();
- look in object
- look from objectBase : toString() (prototype chain)
```

> Prototype is essentially a parent of another object;

> a prototype is just a regular object

> Every object has a prototype or a parent, except the root object
