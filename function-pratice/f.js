function vowelinsting(num) {
  let arr = "aeiouAEIOU";
  let vcount = 0;
  for (let i = 0; i <= num.length; i++) {
    if (arr === num[i]) {
      console.log(arr);
      vcount++;
    }
  }
}
console.log(vowelinsting("ihateuu"));
