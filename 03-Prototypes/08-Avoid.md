# Avoid Extending the Built-in Objects

```js
Array.prototype.shuffle = function() {
  // ...
};

const array = [];
array.shuffle();
```

> Don't modify object you don't own!
