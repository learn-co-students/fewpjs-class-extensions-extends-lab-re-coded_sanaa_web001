// Your code here

class Polygon {
  constructor(sides) {
    this.sides=sides;
  }
  get countSides(){
    return this.sides.length;
  }
  get perimeter(){
    return this.sides.reduce((sum,side) => sum +side,0);
  }
}//end class Poligon

class Triangle extends Polygon{

  get isValid(){
    if(this.sides.indexOf(0)+this.sides.indexOf(1) >this.sides.indexOf(2)){
      return false;
    }
    return true;
  }
}
//end class triangle

class Square extends Polygon {
  get isValid(){
    return (this.sides[0]===this.sides[2] && this.sides[1] ===this.sides[3] &&this.sides[0]===this.sides[1])
  }
  get area(){
    if(this.isValid)
    return this.sides[0] * this.sides[1];
  }
}
