let convertoplaindrome = function (newArr) {
  for (let i = 0; i < newArr.length; i++) {
    let convert = value.split("").reverse().join("");
    if (convert === newArr) {
      return true;
    }
  }
  return false;
};
console.log(convertoplaindrome(101));
