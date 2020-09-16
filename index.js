class Polygon {
  constructor (array){
    this.array = array;
  }

  get countSides () {
    return this.array.length;
  }

  get perimeter () {
    let sum = this.array.reduce((accum, side) =>  side + accum )
    return sum;
}

}
class Triangle extends Polygon {
  get isValid () {
    if (this.countSides === 3 && this.array[0] + this.array[1] > this.array[2] && this.array[0] + this.array[2] > this.array[1] && this.array[2] + this.array[1] > this.array[0] )
    return true;
    else
    return false;
  }
}

class Square extends Polygon {
  get isValid () {
    if (this.countSides === 4 && this.array.every(item => item === this.array[0] ))
    return true;
    else
    return false;
  }
  get area () {
    let areaSquare = this.array[0]**2;
    return areaSquare;
  }
}
