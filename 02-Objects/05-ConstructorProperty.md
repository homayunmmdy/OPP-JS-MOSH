# Constructor Property

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
```

## console

- `another.constructor`

```js
/*

// Using Buil-in constructor in JavaScript

ƒ Object() { [native code] }

*/
```

## Built-in constructor function

- `circle.constructor`

```js
/*

ƒ Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

*/
```

---

## Buil-in constructor in JavaScript

```javascript
let x = {}; // object literal
// let x = new Object();

// Built-in    |   Literals
new String(); // '', "", ``      String literls
new Boolean(); // true, false     Boolean literals
new Number(); // 1, 2, 3  ...    Number literals
```
