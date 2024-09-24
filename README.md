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
