let convertTheString = function (arr) {
  let newArr = arr.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperstring() + newArr[i].slice(1);
  }
  return newArr.join(" ");
};

console.log(convertTheString("the quick brown fox"));
