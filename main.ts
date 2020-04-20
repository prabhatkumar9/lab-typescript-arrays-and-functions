import { ArrayService } from "./app-service";
import { StringManipulationService } from "./app-service";

export class ArrayComponent implements ArrayService {
  constructor() {}
  public arrayMultiply(myArray: number[]): Array<Number> {
    let temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  }

  public arraySeparate(myArray: any): Array<string> {
    let str = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        str[j] = myArray[i];
        j++;
      }
    }
    return str;
  }

  public arraySplit(str: string): Array<number> {
    const temp = str.split(",");
    const primeArray = [];
    let k = 0;
    for (var i = 0; i < temp.length; i++) {
      let y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          primeArray[k] = y;
          k++;
        }
      }
    }
    return primeArray;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  }
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));

class ArrayManipulation implements StringManipulationService {
  arrayFindMultiples(myArray: any): Array<number> {
    var arr: Array<number> = [];
    myArray.forEach((element) => {
      if (element % 5 == 0 && element % 10 == 0) {
        arr.push(element);
      }
    });
    return arr;
  }
  arraySeparate(myArray: any): Array<string> {
    let str: Array<string> = [];
    let j: number = 0;
    myArray.forEach((element) => {
      if (typeof element === "string") {
        str[j] = element;
        j++;
      }
    });
    return str;
  }

  arraySplit(myString: string): Array<number> {
    const temp = myString.split(",");
    const primeNo = [];
    let k = 0;
    for (var i = 0; i < temp.length; i++) {
      let y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          primeNo[k] = y;
          k++;
        }
      }
    }
    return primeNo;
  }

  arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }

  arrayReplace(myArray: any): Array<number> {
    let arrNo: Array<number> = [];
    let j: number = 0;
    myArray.forEach((element) => {
      if (element % 3 === 0) {
        arrNo[j] = element;
        j++;
      } else {
        arrNo[j] = element;
        j++;
      }
    });
    return arrNo;
  }
}

let myString = "1 23 4 hii ProGrads thiis is 234 35 Typescript.";
let arr = new ArrayManipulation();
console.log(arr.arrayFindMultiples(myArray));
console.log(arr.arraySeparate(myArray));
console.log(arr.arraySort(myArray));
console.log(arr.arraySplit(myString));
console.log(arr.arrayReplace(myArray));
