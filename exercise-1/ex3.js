let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = function (num) {
  let sum = num.reduce((acculmator, currentValue) => {
    return acculmator + currentValue;
  }, 0);
  return sum;
};
console.log(newArr(num));
