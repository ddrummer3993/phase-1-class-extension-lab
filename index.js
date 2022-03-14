// Your code here

class Polygon {
    constructor(sidesArray){
        this.sidesArray = sidesArray;
    };
    get countSides() {
        return this.sidesArray.length;
    };
    get perimeter() {
        return this.sidesArray.reduce((prev, curr) => prev + curr, 0);
    };
};

class Triangle extends Polygon {
    get isValid() {
        let s = this.sidesArray;
        if ((s[0] + s[1] > s[2] && s[0] + s[2] > s[1]) && s[1] + s[2] > s[0]) {
            return true;
        } else {
            return false;
        }
    };
};

class Square extends Polygon {
    get isValid() {
        let s = this.sidesArray;
        if ((s[0] === s[1] && s[1] === s[2]) && s[2] === s[3]) {
            return true;
        } else {
            return false;
        };
    };

    get area() {
        let s = this.sidesArray;
        return Math.pow(s[0], 2);
    }
};

/*
const triangle = new Triangle([4, 4, 5]);
console.log(triangle.isValid);

const square = new Square([5,5,5,6]);
console.log(square.isValid);
*/