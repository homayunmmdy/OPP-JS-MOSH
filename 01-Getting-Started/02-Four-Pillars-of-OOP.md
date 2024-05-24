# Four Pillars of OOP

#### Encapsulation

- Property + Method (or variable + function)

```javascript
// version 1
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// version 2
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.basesalary + this.overtime * this.rate;
  }
};
employee.getWage();
```

> The best functions are those with no parameters! - Uncle Bob (Robert C Martin)

---

#### Abstraction

- DVD Player = Objects
- hide some of the properties and methods from outside
- Simpler Interface
- Reduce the Impact of Change

---

#### Inheritance

- eliminate redundant code
- Super class (HTMLElement)
  - hidden
  - innerHTML
  - click()
  - focus()
- Sub class
  - TextBox
  - Select
  - CheckBox

---

#### Polymorphism

- Poly = Many
- morphism = Form

```javascript
/*
switch (...) {
    case 'select': renderSelect();
    case 'text': renderTextBox();
    case 'checkbox': renderCheckBox();
    case ...
    case ...
    case ...
}
*/

/*
element.render();
*/
```

- Super class (HTMLElement)
  - hidden
  - innerHTML
  - click()
  - focus()
- Sub class
  - TextBox
    - render()
  - Select
    - render()
  - CheckBox
    - render()

---

#### Benefits of OOP

- **Encapsulation** Reduce complexity + increase reusability
- **Abstraction** Reduce complexity + isolate impact of changes
- **Inheritance** Eliminate redundant code
- **Polymorphism** Refactor ugly seitch/case statements
