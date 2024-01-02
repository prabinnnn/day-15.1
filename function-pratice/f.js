function vowelinsting(num) {
  let arr = "aeiouAEIOU";
  let vcount = 0;
  for (let i = 0; i < num.length; i++) {
    if (arr == num[i]) {
      vcount == arr[i];
      vcount++;
    }
  }
  return vcount;
}
console.log(vowelinsting("ihateuuol"));
