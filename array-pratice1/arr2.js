let converter = [{ miles: 20 }, { miles: 30 }, { miles: 40 }];
let newConverter = converter.map((value) => {
  return { miles: value.miles, kilometers: value.miles * 1.60934 };
});
