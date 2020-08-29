// Your code here

class Polygon {
  constructor(integers) {
    this.integers = integers;
  }
  get countSides() {
    return this.integers.length;
  }
  get perimeter() {
    return this.integers.reduce((acc, cur) => acc + cur, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.countSides === 3 &&
      this.integers[0] + this.integers[1] > this.integers[2] &&
      this.integers[1] + this.integers[2] > this.integers[0]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (
      this.integers[0] === this.integers[1] &&
      this.integers[1] === this.integers[2] &&
      this.integers[2] === this.integers[3]
    ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.integers[0] ** 2;
  }
}

triangle = new Triangle([5, 5, 5]);
triangle2 = new Triangle([15, 10, 1]);

console.log(triangle.isValid);
console.log(triangle2.isValid);
