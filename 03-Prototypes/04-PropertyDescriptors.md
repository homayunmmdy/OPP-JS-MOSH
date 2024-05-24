# Property Descriptors

```js
let person = { name: 'Thamonwan' };
console.log(person);

for (let key in person) console.log(key); // name

console.log(Object.keys(person)); // ['name']

const objectBase = Object.getPrototypeOf(person);
const descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
/*

{
  value: [Function: toString],
  writable: true,
  enumerable: false,
  configurable: true
}

*/
```

```js
let person = { name: 'Thamonwan' };

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});

delete person.name;
console.log(person); // { name: 'Thamonwan' }

///person.name = 'John';

console.log(person); // { name: 'Thamonwan' }
console.log(Object.keys(person)); // []
```
