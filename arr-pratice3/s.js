const str = window.prompt();
const num = str.toString();
let result = [num[0]];
for (let i = 0; i <= num.length; i++) {
  if (num[i - 1] % 2 == 0 && num[i] % 2 === 0) {
    result.push(num[i], "-");
  }
  result.push(num[i]);
}
console.log(result.join(""));
