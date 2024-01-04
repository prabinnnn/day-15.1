let first = (arr, n) => {
  return (newarr = arr === undefined ? arr.slice(0, 1)[0] : arr.slice(0, n));
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
