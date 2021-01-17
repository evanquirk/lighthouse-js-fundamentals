const concat = function(array1, array2) {
  const joined = []
  for(let i = 0 ; i < array1.length ; i++) {
    if (joined.indexOf(array1[i] == -1) )
      joined.push(array1[i])
  }
  for (let i=0; i<array2.length ; i++) {
    if (joined.indexOf(array2[i]) == -1)
      joined.push(array2[i])
  }
  return joined
}

console.log(concat([ "yellow", 2, 3 ], [ 2, 4, 5, 6 ]), "=?", [ "yellow", 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);