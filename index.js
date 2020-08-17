// Your code here
class Polygon {
  constructor(arr){
    this.arr=arr;
  }
  get countSides(){
    return this.arr.length;
  } 
  get perimeter (){
    let counter=0;
    for(let i=0;i<this.arr.length;i++){
      counter+=this.arr[i];
    }
    return counter;
  }
}
class Triangle extends Polygon{
  get isValid(){
    
    if((this.arr[0]+this.arr[1]>=this.arr[2])&&(this.arr[0]+this.arr[2]>=this.arr[1])&&(this.arr[2]+this.arr[1]>=this.arr[0])){
      return true;
    }
    else{
      return false
    }
  }
}
class Square  extends Polygon{
   get isValid(){
     if(this.arr[0]===this.arr[1]&&this.arr[0]===this.arr[2]&&this.arr[0]===this.arr[3]){
       return true
     }
     else{
       return false;
     }
   }
   get area(){
     return this.arr[0]**2;
   }
}