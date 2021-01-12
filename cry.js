var sound = "" ;

var cry = function sob(num) {
  for (var x = 0 ; x < num ; x++) {
    sound = sound + "boohoo";
    } 
  sound = sound + "!";
  return sound;
}
console.log(cry(1)) ;