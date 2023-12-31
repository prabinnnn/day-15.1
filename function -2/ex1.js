function reversenumber(num) {
  num = num + "";
  return (reversenumber = num.split("").reverse().join(""));
}
console.log(reversenumber(324));
