// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side);
  }
}

class Triangle extends Polygon {

  get isValid() {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      console.log(side1, side2, side3)
      return side1 + side2 > side3
        && side1 + side3 > side2
        && side2 + side3 > side1;
        //&&
        // (side2 + side3 > side1) &&
        // (side3 + side1 > side2);
    }
}

class  Square extends Polygon {

  get isValid() {
    let sideLength = this.sides[0];
    console.log(sideLength);
    return this.sides.find( num => num !== sideLength)? false: true;
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}

let triangle = new Triangle([3, 3, 3]);
console.log(triangle.isValid);
