# Hoisting

```js
sayHello();
sayGoodbye(); // Error: is not defined
console.log(number); // Error: is not defined

// Function Declaration (Hoisting)
function sayHello() {}

// Function Expression (Not hoisted)
const sayGoodbye = function() {}; // Reference
const number = 1; // Primitive
```

## Class Not Hoisted

```js
const c = new Circle(); // Error: is not defined

// Class Declaration
class Circle {}

// Class Expression
const Square = class {};
```
