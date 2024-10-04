class Circle {
  draw() {
    console.log(this)
  }
}
const c = Circle()
const draw = c.draw
draw()