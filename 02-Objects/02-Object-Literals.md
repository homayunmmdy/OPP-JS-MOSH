# Object Literals

It is a syntax for creating an object in JavaScript that is composed of key-value pairs


```javascript
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // draw

/**
 *  3 members
 *    - radius
 *    - location
 *    - draw()
 *
```

---

## Class: circle

- properties (variables) : used to hold value
  - radius
  - location
- method (function) : used to define some logic
  - draw()
