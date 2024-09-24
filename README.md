# Object

## Object Literal

```javascript
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
```

## Factory Function

```javascript
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

circle.draw();
```

## Constructor Function

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(2);
console.log(another.radius);
```

## Constructor Property

returns a reference to the function that created that.

## function are object

when you create function like this

```javascript
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
```

javascript use function constrcutor the build that like this if you log these you will hte same as the code on the top

```javascript
const Circle1 = new Function(
  "daius",
  `
radius,
draw() {
  console.log("draw");
},
`
);
```

## Value vs Reference Type

Value Types || Primiary Types are include

- Number
- String
- Boolean
- Symbol

Reference Types

- Object
- Function
- Array

In the code blew what do you think the outcome will be

```javascript
let x = 10;
let y = x;

x = 20;

console.log(y);
```

it's 10 because in primity <mark>copied value</mark> and x hold the 10 and y is copied the then when we change x it's not effect on y and other hand on object or refercen value

```javascript
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(y);
```
Now we will get 20 because it's a object and objects  are reference type which mean thay the save the reference and x holding the reference or address (it's store somewhere in memory) of value 10 and y will copy that refernce or addrest so both of theme are pointing in one place