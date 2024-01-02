let sum = [1, 2, 3, 4, 5, 6, 7, 8];
let newsum = sum.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);
console.log(newsum);
