let newArr = [{ plaindrom: 121 }, { palindrom: 10 }, { palindrome: 123 }];
let convertoplaindrome = function (newarr) {
  let arr = newarr;
  for (let i = 0; i < arr.length; i++) {
    let value = newArr[i][Object.keys(newArr[i][0])].toString();
    let convert = value.split("").reverse().join("");
    if (convert === newArr) {
      return true;
    }
  }
  return false;
};
console.log(convertoplaindrome(newArr));
