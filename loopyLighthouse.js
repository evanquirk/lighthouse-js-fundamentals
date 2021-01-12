for (x = 100 ; x <= 200 ; x++ ) { // for loop with a stop condition
  if (x % 3 === 0 && x % 4 === 0) { //if statement for both condition
    console.log("LoopyLighthouse");
  }   
  else if ( x % 3 === 0 ) { //else if statement for '3' condition
    console.log("Loopy");
  }   
  else if ( x % 4 === 0 ) { //else if statement for '5' condition
    console.log( "Lighthouse" );
  }
  else {
    console.log(x);
  }
}
