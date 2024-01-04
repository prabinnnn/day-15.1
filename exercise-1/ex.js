let convertTheString = function (arr) {
  let newArr = arr.split(" ");
  let minArr = [];
  for (let i = 0; i < newArr.length; i++) {
   let con= newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
   let new=con.push();
  }
  return minArr.join(" ");
};

console.log(convertTheString("the quick brown fox"));
