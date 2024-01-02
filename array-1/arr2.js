const people = [
  { name: "prabin", age: 21 },
  { name: "rabin", age: 10 },
  { name: "kan", age: 11 },
];
const newar = people.sort((a, b) => a.age - b.age);
console.log(newar);
