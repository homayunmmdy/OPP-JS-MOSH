# Factories

 factory function is a function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.

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
console.log(circle); // { radius: 1, draw: [Function: draw] }

circle.draw(); // draw
```
