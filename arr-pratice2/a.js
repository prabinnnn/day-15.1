let newArr = function (arr) {
  if (Array.isArray(arr)) {
    return true;
  }
  return false;
};
console.log(newArr([1, 2, 3, 4, 5]));
