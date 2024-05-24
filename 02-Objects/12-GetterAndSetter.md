# Getters and Setters

## Version 1

```js
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.getDefaultLocation();
circle.draw();
```

## Version 2

```js
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = {
    x: 0,
    y: 0
  };

  this.draw = function() {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error('Invalid location.');

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1; // Error
circle.draw();
```
