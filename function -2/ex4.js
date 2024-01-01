const temp = number(prompt("enter the temperature"));
const newtemp = (temp, measurement = "c") => {
  if (measurement === c) {
    return (9 * temp) / 5 + 32;
  }

  return ((temp - 32) / 9) * 5;
};
console.log(newtemp);
