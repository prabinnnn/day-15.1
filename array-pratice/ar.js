let arrange = [
  { name: "prabin", age: 14 },
  { name: "rabin", age: 20 },
  { name: "abin", age: 13 },
];

let newarr = arrange.map((person) => person.age).sort((a, b) => a - b);
console.log(newarr);
