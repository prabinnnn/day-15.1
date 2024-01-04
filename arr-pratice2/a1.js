let newArr = (num) => {
  let copy = num.slice(0, 1);
  let newcopy = Array.isArray(copy) ? copy.join("") : "";
  return newcopy;
};

console.log(newArr([1, 2, 4, 0]));
