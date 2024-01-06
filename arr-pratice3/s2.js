let convertTheString = function (arr) {
  let newArr = arr[0].split(" ");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] =
      newArr[i].charAt(0).toLowerCase() + newArr[i].slice(1).toUpperCase();
  }
  return newArr.join(" ");
};

console.log(convertTheString(["The Quick Brown Fox"]));
