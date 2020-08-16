// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        let len = this.sides.length;
        return len
    }
    get perimeter() {
        let sum = 0;
        this.sides.map(item => { sum += item; });
        return sum;
    }
}
let p = new Polygon([3, 3, 3]);
console.log(p.perimeter);


class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3 && this.sides[0] + this.sides[1] >= this.sides[2] &&
            this.sides[0] + this.sides[2] >= this.sides[1] &&
            this.sides[1] + this.sides[2] >= this.sides[0]) return true;
        return false;
    }
}

let t = new Triangle([3, 3, 1]);
console.log(t.isValid);


class Square extends Polygon {
    get isValid  (){
      if(this.countSides === 4) {
        for (let i = 1 ; i < 4 ; i++) {
  
          if(this.sides[0] !== this.sides[i]) {
            return false ;
          }
        }
        return true ;
      }
      return false ;
    }
    get area (){
        return this.sides[0] * this.sides[0]  ;
  
    }
  }

  let s = new Square([3, 3, 1,3]);
console.log(s.isValid);