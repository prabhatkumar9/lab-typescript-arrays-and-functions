"use strict";
exports.__esModule = true;
var ArrayComponent = /** @class */ (function () {
  function ArrayComponent() {}
  ArrayComponent.prototype.arrayMultiply = function (myArray) {
    var temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  };
  ArrayComponent.prototype.arraySeparate = function (myArray) {
    var str = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        str[j] = myArray[i];
        j++;
      }
    }
    return str;
  };
  ArrayComponent.prototype.arraySplit = function (str) {
    var temp = str.split(",");
    var primeArray = [];
    var k = 0;
    for (var i = 0; i < temp.length; i++) {
      var y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          primeArray[k] = y;
          k++;
        }
      }
    }
    return primeArray;
  };
  ArrayComponent.prototype.arraySort = function (myArray) {
    myArray.sort();
    myArray.reverse();
    return myArray;
  };
  ArrayComponent.prototype.arrayReplace = function (myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  };
  return ArrayComponent;
})();
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
var ArrayManipulation = /** @class */ (function () {
  function ArrayManipulation() {}
  ArrayManipulation.prototype.arrayFindMultiples = function (myArray) {
    var arr = [];
    myArray.forEach(function (element) {
      if (element % 5 == 0 && element % 10 == 0) {
        arr.push(element);
      }
    });
    console.log("Find multiples");
    return arr;
  };
  ArrayManipulation.prototype.arraySeparate = function (myArray) {
    var str = [];
    var j = 0;
    myArray.forEach(function (element) {
      if (typeof element === "string") {
        str[j] = element;
        j++;
      }
    });
    console.log("Separate");
    return str;
  };
  ArrayManipulation.prototype.arraySplit = function (myString) {
    var temp = myString.split(",");
    var primeNo = [];
    var k = 0;
    for (var i = 0; i < temp.length; i++) {
      var y = +temp[i];
      for (var j = 2; j <= y; j++) {
        if (y % j === 0) continue;
        else {
          primeNo[k] = y;
          k++;
        }
      }
    }

    return primeNo;
  };
  ArrayManipulation.prototype.arraySort = function (myArray) {
    myArray.sort();
    myArray.reverse();
    console.log("Sort");
    return myArray;
  };
  ArrayManipulation.prototype.arrayReplace = function (myArray) {
    var arrNo = [];
    var j = 0;
    myArray.forEach(function (element) {
      if (element % 3 === 0) {
        arrNo[j] = element;
        j++;
      } else {
        arrNo[j] = element;
        j++;
      }
    });
    console.log("Replace");
    return arrNo;
  };
  return ArrayManipulation;
})();
var myString = "12 3 4 hii ProGrad thiis is 2 3 4 3 5 Typescript.";
var arr = new ArrayManipulation();
console.log(arr.arrayFindMultiples(myArray));
console.log(arr.arraySeparate(myArray));
console.log(arr.arraySort(myArray));
console.log(arr.arraySplit(myString));
console.log(arr.arrayReplace(myArray));
