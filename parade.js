const finalPosition = function (moves) {
  // recieve an array, check first element in array, if n or s add to position[1] if e or w add to position[0]
  let x = 0
  let y = 0
  for (const move of moves) {
    if (move === "north") {
      y += 1
    } else if (move === "south") {
      y -= 1
    }  else if (move === "east") {
      x += 1
    }  else if (move === "west") {
      x -= 1
    }
  }
  return [x, y]
}

// let position = [0, 0]
// position[0]
// position[1]
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
finalPosition(moves)
console.log(finalPosition(moves));  
