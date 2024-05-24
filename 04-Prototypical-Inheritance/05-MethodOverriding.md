# Method Overriding

```js
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Circle;
}

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);
  console.log('duplicate circle');
};

const c = new Circle();
```
