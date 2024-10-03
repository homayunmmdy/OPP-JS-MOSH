function mixin(target, ...sources) {
  Object.assign(target,...sources)
}

const canEat = {
  eat() {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk() {
    console.log("walking");
  },
};

const canSwim = {
  swim() {
    console.log("Swimming")
  }
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim)

const goldfish = new Goldfish()
console.log(goldfish)