const temp = number("enter the temperature");
const newtemp = (c, f) => {
  let c = (temp * 9) / 5 + 32;
  let f = ((temp - 32) / 9) * 5;
  return c, f;
};
console.log(newtemp);
