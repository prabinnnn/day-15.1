let newArr = [
  { name: "prabin", roles: ["admin"] },
  { name: "rabin", roles: ["guest"] },
  { name: "hari", roles: ["admin", "vendor"] },
];
const checkRoles = (roles) => {
  //   let newUser =newArr.map((newArr)=>{
  //         if(newArr.roles.includes(roles))
  //         return newArr.name
  //     });
  // return newUser;
  return URLSearchParams.filter((user) => user.roles.includes(roles));
};
