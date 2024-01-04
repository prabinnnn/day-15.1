let newArr = [
  { plaindrom: String(121) },
  { palindrom1: String(10) },
  { palindrome2: String(123) },
];
let convertoplaindrome = function (newArr) {
  for (let i = 0; i < newArr.length; i++) {
    let value = newArr[i][Object.keys(newArr[i])];
    let convert = value.split("").reverse().join("");
    if (convert === newArr) {
      return true;
    }
  }
  return false;
};
console.log(convertoplaindrome(newArr));
