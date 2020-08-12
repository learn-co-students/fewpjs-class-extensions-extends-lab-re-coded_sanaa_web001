// Your code here

let circle;
let triangle;
let square;

class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }
  get perimeter() {
    let sum = 0;
    for (let index = 0; index < this.array.length; index++) {
      sum += this.array[index];
    }
    return sum;
  }
}
let polygon = new Polygon([5, 5, 5]);
polygon.countSides;
polygon.perimeter;

class Triangle extends Polygon {
  constructor(array) {
    super(array);
  }
  get isValid() {
    for (let index = 0; index < this.array.length; index++) {
      if (this.array[index] === 5) {
        return true;
      } else return false;
    }
  }
}
triangle = new Triangle([5, 5, 5]);
let triangle2 = new Triangle([15, 10, 1]);
triangle.countSides;
triangle.isValid;
triangle2.isValid;

class Square extends Polygon {
  constructor(array) {
    super(array);
  }
  get isValid() {
    for (let index = 0; index < this.array.length; index++) {
      if (this.array[index] === this.array[index + 1]) {
        return true;
      } else return false;
    }
  }
  get area() {
    for (let index = 0; index < this.array.length; index++) {
      return this.array[0] * this.array[1];
    }
  }
}
square = new Square([5, 5, 5, 5]);
let square2 = new Square([5, 4, 3, 2]);
square.perimeter;
square2.perimeter;
square.countSides;
square2.countSides;
square.isValid;
square2.isValid;
square.area;
