let username = (arr) => {
  let newusername = arr.filter((arr) => {
    let newarr = arr.match(/"aeiouAEIOU"/g);
    // Check if the element is a vowel (case-insensitive)
    return newarr;
  });

  return newusername;
};

console.log(username([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
