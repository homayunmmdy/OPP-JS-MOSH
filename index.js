let person = {name: "Homayoun" }

Object.defineProperty(person, 'name', {
  // by default all of these are true
  writable: false, // we can't cahnge
  enumerable: false, // we can't iterate and get keys
  configurable: false // we can't delete
})

person.name = 'John' // the name will not change 
console.log(Object.keys(person)) // we will get empty array because enumerable is false

