const smartGarbage = function (trash, bins) {
  for (const bin in bins) {
    // for... in grabs key of object
    if (bin === trash) {
      // if key is equal to our first modifier, then...
      bins[bin] += 1 ;
      // add one to the objects key
    }
  }
  return bins
  // return the updated bins
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });


// console.log(bins);
// console.log('key:' + bin)
// console.log('value:' + bins[bin]);