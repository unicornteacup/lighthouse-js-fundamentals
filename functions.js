function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

// print "hahaha"
var sound = "" ; 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(3)) ;

var cry = function cryFunction (){
  var sound = "boohoo!";
  return sound;
}
// your code goes here


console.log(cry());