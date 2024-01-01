const person1 = {
  firstname: "prabin",
  lastname: "bhandari",
  age: 19,
  isadult: true,
  phoneno: 908993734839,
  address: "baneshwor",
  fullname: function () {
    return this.firstname + this.lastname;
  },
  //   isEligibletovote: function () {
  //     return this.age >= 18;
  isEligibletovote: () => {
    return person1.age >= 18;
  },
};
console.log(person1);
