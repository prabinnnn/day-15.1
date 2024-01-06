let username = (arr) => {
  let newusername = arr.filter((element) => {
    // Check if the element is a vowel (case-insensitive)
    return /[aeiouAEIOU]/.test(element);
  });

  return newusername;
};

console.log(username([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
