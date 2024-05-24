# Creating Your Own Prototypical Inheritance

```js
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log('draw');
};

Circle.prototype.duplicate = function() {
  console.log('duplicate');
};

//
function Square() {
  //...
}

Square.prototype.function = function() {
  // ...
};
```

---

## Circle & Shape -> Object

```js
function Shape() {
  // ...
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
/*

s
 - Shape {}
   - __proto__: Object
     - duplicate: f ()
     - constructor: f Shape()
     - __proto__: 

*/
const c = new Circle(1);

/*
c
 - Circle {radius: 1}
   - radius: 1
   - __proto__: 
     - draw: f ()
     - constructor: f Circle(radius)
     - __proto__:

*/
```

---

## Circle -> Shape -> Object

````js
function Shape() {
  // ...
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

// ---------------------------------------

function Circle(radius) {
  this.radius = radius;
}

// ---------------------------------------
//Circle.prototype = Object.create(Object.prototype); // Object base (implicit relationship)
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
/*

s
 - Shape {} 
   - __proto__: Object (Shape base)
    - duplicate: f ()
    - constructor: f Shape()
    - __proto__: Object

*/

const c = new Circle(1);
/*

c
 - Circle {radius: 1}
   - radius: 1
   - __proto__: Shape (a parent for tha object: Circle base)
       - draw: f ()
       - __proto__: Object (Shape Base)
         - duplicate: f ()
         - constructor: f Shape()
         - __proto__: object
*/

c.draw(); // draw
c.duplicate(); // duplicate```
````
