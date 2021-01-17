//define function range with 'start' 'end' and 'step' parameters
// set empty array to populate output
// create for loop that runs parameters given in function
// push values to new array
// return new array

const range = function (start, end, step) {
  const output = [] ;
  if (
    start !== undefined 
    && end !== undefined 
    && step !== undefined 
    && start < end 
    && step > 0
  ) {
    for (let i = start; i<= end; i += step) {
      output.push(i);
    }
  }
  return output;
}
console.log(range(undefined, 10, ));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
