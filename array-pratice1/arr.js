let arr = [1, 2, 4, 5, 6];
let newarr = arr;
let secondfindsum = newarr
  .slice(1, 3, 4)
  .reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  }, 0);
console.log(secondfindsum);
