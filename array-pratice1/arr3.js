let newarr = function (arr) {
  return arr.split("").sort().toString().replaceAll(",", "");
};
console.log(newarr("webmaster"));
