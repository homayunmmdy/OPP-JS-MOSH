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

Now we will get 20 because it's a object and objects are reference type which mean thay the save the reference and x holding the reference or address (it's store somewhere in memory) of value 10 and y will copy that refernce or addrest so both of theme are pointing in one place

## Adding or Removing Properties

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(2);

circle.location = { x: 1 };
delete circle.radius;

console.log(circle);
```

## Enumerating Properties

```javascript
// iterate to get the keys
for (let key in circle) {
  console.log(key, circle[key]);
}

// another way to get keys
const keys = Object.keys(circle);
console.log(keys);

// check that include in object or not
if ("radius" in circle) console.log("Circle has radius");
```
## Abstraction
Hide the details show the essentials now here must hide some properties and methods
```javascript
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function(factor) {
    console.log(this.defaultLocation)
  }

  this.draw = function () {
    this.computeOptimumLocation(0.1)
    console.log("draw");
  };
}

const circle = new Circle(2);
circle.draw()
```
### Private Properties and methods
now we don't had access on defaultLocation or computeOptimumLocation
```javascript
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    console.log(defaultLocation);
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const circle = new Circle(2);
circle.draw();
```

## Getter and Setter
in previous if wee want just show defaultLocation but they won't be able to modified we simply call it with getter
```javascript
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(2);
circle.defaultLocation = 1
circle.draw();

```

## StopWatch exercise
```javascript
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch()
```

## Prototypical Inheritance
prototype is parent of another object. we have one object (ObjectBase)
that every object we create inheritce that like this image that x and y are inherit from the  ObjectBase.

![Screenshot from 2024-09-27 13-51-32](https://github.com/user-attachments/assets/c394a830-1765-4861-ace0-8bf6ef1e6312)


ObjectBase: <b>is root of all objects in the javscript and it' dosen't have prototype(parents)</b>

if we call an something in object in the Javascript , Javascript engine first check it self object if it is not exist then check the parent again if not it will contiure up to root to find that if is not exist then show undefined

<mark>A prototype is just a regular object</mark> just the root thosen't have 

## Multilevel Inheritance

Imagine we had array this array have protoype arrayBase and arrayBase inherit from object these is we call multi level inheritance like this image

![ArrayBase](https://github.com/user-attachments/assets/174763fe-4d86-4527-b71d-970134c35acb)


<mark>Objects created by a given constructor will have the same prototype</mark> in this example when we create with constructor we create CircleBase that inherit from root here is what we have in memory

![ObjectBase](https://github.com/user-attachments/assets/57ca7e00-6b52-4b9a-9022-86b5903751cf)


```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
```
