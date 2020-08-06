// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        if (!Array.isArray(this.sides)) return;
        let sum = 0;
        for (var int of this.sides) {
            sum += int
        }
        return sum
    }
}
class Triangle extends Polygon {
    get isValid(){
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
    }
}

class Square extends Polygon{
    get area(){
        return this.sides[0]*this.sides[0];
    }

    get isValid(){
        if (!Array.isArray(this.sides)) 
        return false;
        if (this.count !== 4) 
        return false;
       
        return (this.sides[0]==this.sides[1]&&this.sides[1]==this.sides[2]&&this.sides[2]==this.sides[3]);
    }
}

polygon = new Polygon([5, 5, 5])
console.log(polygon.countSides);

// Polygon
//     ✓ has a Polygon class
//     1) Polygon has a countSides getter method that returns the number of sides of the polygon
//     2) Polygon has a perimeter getter that calculates perimeter

//   Triangle
//     ✓ has a Triangle class
//     3) checks for valid triangle
//     4) has a perimeter getter inherited from Polygon

//   Square
//     ✓ has a Square class
//     5) has a perimeter getter inherited from Polygon
//     6) calculates the area
//     7) checks for valid square
