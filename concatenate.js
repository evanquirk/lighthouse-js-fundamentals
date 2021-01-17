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