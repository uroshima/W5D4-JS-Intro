Array.prototype.uniq = function () {
  const arr = [];
  
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    if (arr.includes(el) === false) {
      arr.push(el);
    }
  }
  
  return arr;
};
// 
// let testArr = [1,2,3, 3];
// console.log(testArr.uniq());
// console.log('test');

Array.prototype.twoSum = function() {
  const arr = [];
  for (var i = 0; i < this.length - 1; i++) {
    let num1 = this[i];
    for (var j = i + 1; j < this.length; j++) {
      let num2 = this[j];
      if (num1 + num2 === 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

// let testArr = [1, 2, 3, 3, -1, -3];
// console.log(testArr.twoSum());
// console.log(testArr)

Array.prototype.transpose = function () {
  const arr = [];
  const myArr = this;
  for (var i = 0; i < myArr[0].length; i++) {
    let temp = [];
    for (var j = 0; j < this.length; j++) {
      temp.push(myArr[j][i]);
    }
    arr.push(temp);
  }
  
  return arr;
};

let testArr = [[1,2,3,4], [5,6,7,8]];
console.log(testArr.transpose());

