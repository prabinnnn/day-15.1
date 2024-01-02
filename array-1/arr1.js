//looop inside array
const people = [
  { name: "ram", age: 20 },
  { name: "hari", age: 10 },
  { name: "shyam", age: 15 },
];
const showname = (people) => {
  console.log(people.name);
};
//loop using for loop\
// for (let i=0;i<=people.length-1;i++)
// {
//     showname(people[i]);
// }
//loop using arrays inbulit feature
// people.forEach(showname);
//advance techinque
//immutable js
//create a shallow copy and operate on it
//map,filter,reduce,every,some
