function today() {
  return new Date();
}
document.getElementById("dateid").innerHTML = today();

function getformdata() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  console.log(fnmae, lname);
}
