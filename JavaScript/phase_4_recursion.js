function range(start, end) {
  let ranges = [];
  if (start > end) {
    return ranges;
  }
  ranges.push(start);
  return ranges.concat(range(start + 1, end));
}

console.log(range(1, 5));