// Your code here
class Polygon {
    constructor(myArr){
        this.myArr=myArr;
    }
    get countSides(){
        return this.myArr.length;
    }
    get perimeter(){
        return this.myArr.reduce(function(total, element){ return element + total}, 0)        
    }
}

class Triangle extends Polygon{
    get isValid(){
        let valid =false;
        if(((this.myArr[0]+this.myArr[1])>this.myArr[2])&&((this.myArr[0]+this.myArr[2])>this.myArr[1])&&((this.myArr[2]+this.myArr[1])>this.myArr[0])){
            valid= true
        }
        return valid;
    }
}

class Square extends Polygon{
    get isValid(){
        let valid =false;
        if((this.myArr[0]==this.myArr[1])&&(this.myArr[2]==this.myArr[3])&&(this.myArr[1]==this.myArr[2])){
            valid= true
        }
        
        return valid;
    }

    get area(){
        let area = Math.pow(this.myArr[0],2)
        return area;
    }
}