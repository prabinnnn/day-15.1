const multiplicationanddivision = (c, d, operation = "mul") => {
  if (operation === "mul") {
    return c * d;
  }
  return c / d;
};
console.log(multiplicationanddivision(16, 4));
