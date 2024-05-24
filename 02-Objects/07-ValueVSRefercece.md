# Value vs Reference Types

## Value Type (Primitives)

1. Number
2. String
3. Boolean
4. Symbol
5. undefined
6. null

## Reference Types

1. Objects
2. Function
3. Array

## Difference

```js
// Value Type
let x = 10;
let y = x;

x = 20;

console.log(x, y); // 20 10

// Reference Types
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x.value, y.value); // 20 20
```

## Conclusing

- **Primitives** are copied by their **value**
- **Objects** are copied be their **reference**

## Primitives

```js
let number = 10;

function increase(number) {
  number++;
}

increase(number); //
console.log(number); // 10;
```

## Objects

```js
let number = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(number); //
console.log(number); // { value: 11 }
```
