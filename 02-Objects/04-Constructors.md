# Constructors

```javascript
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}
const another = new Circle(1);

/**
// 1.) remove 'new' keyword ***
function Circle(radius) {
  console.log('this', this); // this:  Window {…}
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}
const another = Circle(1);

// 2.) not use 'return' keyword ***
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
  //return this; // return automatically when user 'new' keyword
}
const another = new Circle(1);
*/
```

---

## new keyword

1. create an empty object `{}`
2. set `this` point to that object
3. return that object from the function `Circle()`
