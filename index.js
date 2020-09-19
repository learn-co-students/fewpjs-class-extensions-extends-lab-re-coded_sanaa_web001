// // Your code here
// class Polygon{
//   constructor(sides=[]){
//     this.sides=sides;
//   }
//   get countSides(){
//     let sidesNo=0;
//     this.sides.forEach(side=>sidesNo++);
//     return sidesNo;
//   }
//   get perimeter(){
//     return this.sides.reduce(function(acc,side){return acc+side;});
//   }
// }

// class Triangle extends Polygon{
//   constructor(sides) {
//     this.sides=sides;
//     super(sides); 
//   }
//   // get perimeter(){
//   //   return super.perimeter();
//   // }
//   get isValid(){
//     return (super.countSides()===3? true: false)
//   }
// }
// class Square extends Polygon{
//   constructor(sides) {
//     this.sides=sides;
//     super(sides); 
//   }
//   get isValid(){
//     if(this.sides.length===4){
//       if(this.sides[0]===this.sides[1]===this.sides[2]===this.sides[3]){
//         return true;
//       }
//       else
//       return false;
//     }
//   }
//   get area(){
//     // if(this.isValid()){
//     return this.sides[0]*this.sides[0];
//   }

// }
// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }
  get countSides() {
    return this.sides.length
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
  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}
class Square extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }
  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}