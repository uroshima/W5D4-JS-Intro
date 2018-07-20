Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  } 
};

function whatever(something) {
  console.log(`${something}!!!`);
}

Array.prototype.myMap = function(callback) {
  const mapped = [];
  // 
  // function anything(el) {
  //   mapped.push(callback(el));
  // }
  // 
  // this.myEach(anything);
  
  this.myEach(el => mapped.push(callback(el)));
  
  // () => functionBody
  
  return mapped;
};

// let arr = ['hello', 'world'];
// console.log(arr.myMap(whatever));

Array.prototype.myReduce = function(callback, initialValue) { 
  // function somethingElse(el) {
  //   reduced += callback(el);
  // }
  let reduced;
  if (!initialValue) {
    reduced = this[0];
    this.slice(1).myEach(num => reduced += callback(num));
  } else {
    reduced = initialValue;
    this.myEach(num => reduced += callback(num));
  }
  
  return reduced;
};

function addOne(num) {
  return num;
}

let arr = [1, 2, 3];
console.log(arr.myReduce(addOne, 5));


