# Adding or Removing Properties

## Adding

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

circle.location = { x: 1 };

const propertyName = 'center-location';
const propertyName = 'center location';
//circle.center-location;
//circle.center location;

circle[propertyName] = { x: 1 };
```

## Removing

```js

delete circle['location]';

```
