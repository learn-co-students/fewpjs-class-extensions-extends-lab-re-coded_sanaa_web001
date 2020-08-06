class Polygon {
  constructor (sides = []){
    this.sides =sides;
  }
  get countSides (){
    return  this.sides.length;
  }
  get perimeter  (){
    const reducer = (accu, currVal) => accu + currVal;
    return  this.sides.reduce(reducer , 0);
  }
}

class Triangle extends Polygon {

  get isValid  (){
      if(this.countSides === 3 && this.sides[0] + this.sides[1] >= this.sides[2] &&
         this.sides[0] + this.sides[2] >= this.sides[1] &&
         this.sides[1] + this.sides[2] >= this.sides[0]){
           return true ;
         }
         return false ;
  }
}

class Square extends Polygon {

  get isValid  (){
    if(this.countSides === 4) {
      for (let i = 1 ; i < 4 ; i++) {

        if(!(this.sides[0] === this.sides[i])) {
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
