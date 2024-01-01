function palindrome(num) {
  for (let i = 0; i <= num.length; i++) {
    for (let j = num.length - 1; j > i; j--) {
      if (num[i] == num[j]) {
        console.log("it is palindrome");
      } else {
        console.log("it is not");
      }
      break;
    }
    break;
  }
  return;
}
palindrome("mom");
