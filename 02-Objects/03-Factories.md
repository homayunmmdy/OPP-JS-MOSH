# Factories

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
