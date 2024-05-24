# When to Use Inheritance

- Animal (eat(), walk())
  - person
  - Dog
  - Goldfish X

---

- Animal (eat)
  - Mammal (walk)
    - Person
    - Dog
  - Fish (swim)
    - Goldfish

> Avoid creating inheritance hierarchies

> Favor **Composition** over **Inheritance**

- With composition we can compost a few object togeter to create a new object

1. canWalk
2. canEat
3. canSwim

- Person = (canwalk + canEat)
- Goldfish = (canEat + canSwim)
