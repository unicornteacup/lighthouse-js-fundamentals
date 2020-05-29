
// GARBAGE:

// const finalPosition = function (moves){
//   const coordinates = []

//   let x = 0;
//   let y = 0;


//   if (moves = 'north'){
//     x = x -1
//   }
//   if (moves = 'south'){
//     x = x + 1
//   }
//   if (moves = 'west'){
//     y = y -1
//   }
//   if (moves = 'east'){
//     y = y -1
//   }
//   return x, y
//   coordinates.push(x,y)
//   }  return coordinates
// }

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// finalPosition(moves)

const finalPosition = function(moves){
  let start = [0,0];
  for (let i = 0; i < moves.length; i++){
    if (moves[i] === "north"){
      start[1] += 1;
    }else if (moves[i] === "south"){
      start[1] -= 1;
    }else if (moves[i] === "east"){
      start[0] += 1;
    }else if (moves[i] === "west"){
      start[0] -= 1;
    }
  }
  return start;
}
const moves = ["north", "north", "west", "west", "north", "east", "north"]

console.log(finalPosition(moves));