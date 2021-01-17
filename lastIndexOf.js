const lastIndexOf = function(array, element) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    // console.log('index:', i, 'element:', array[i]);
    if (array[i] === element) {
      result = i;
    }
  }
  return result
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);