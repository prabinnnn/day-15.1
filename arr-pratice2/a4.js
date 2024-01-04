// let last = (arr, n) => {
//   let newArr = arr.length - 1;
//   let newcopy = arr.slice(newArr - n + 1, newArr + 1);
//   return newcopy;
// };
var last = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.min(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
