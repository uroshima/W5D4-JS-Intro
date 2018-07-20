Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  }
  
  return this;
};
// 
// let testBubble = [5, 4, 3, 2, 1];
// console.log(testBubble.bubbleSort());

String.prototype.substrings = function() {
  let subs = [];
  for (var i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      subs.push(this[i]);
      break;
    }
    
    for (var j = i + 1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }
  
  return subs;
};

let str = "cats";
console.log(str.substrings());