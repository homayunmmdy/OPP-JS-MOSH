# Mixins

```js
const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const person = Object.assign({}, canEat, canWalk);
console.log(person);
// { eat: [Function: eat], walk: [Function: walk] }
```

---

```js
const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);
```

## add Goldfish

```js
const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swim');
  }
};

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

Object.assign(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
```

## Mixins

```js
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swim');
  }
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
```
