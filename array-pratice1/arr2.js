let converter = [{ miles: 20 }, { miles: 30 }, { miles: 40 }];
let newConverter = converter.map((value) => {
  return { miles: value.miles, kilometers: value.miles * 1.60934 };
});
let totaldistance = kilometer.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);
console.log(newConverter);
console.log(totaldistance);
