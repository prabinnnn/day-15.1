let convertTheString = function (arr) {
  let newArr = arr.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    let convert = newArr[i].charAt(0).toUpperstring() + newArr[i].slice(1);
  }
  return convert.join(" ");
};

console.log(convertTheString("the quick brown fox"));
