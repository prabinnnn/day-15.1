let arr = [1, 2, 3, 4, 5, 6];
let newarr = arr;
function sumandsquare() {
  let sumn = newarr.reduce((accumaltor, currentvalue) => {
    return accumaltor + currentvalue;
  }, 0);
  let square = sumn * sumn;
  console.log(square);
  let average = sumn / 6;
  console.log(average);
}
