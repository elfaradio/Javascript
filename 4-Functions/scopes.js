var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
  var x = 100;
  c = 150;
  a = 5459;
}

console.log(a); // 300 value will be fixed
//console.log(b); // error
console.log(c); // 150 value will change
console.log(x); // this will work bcz var

console.log(a); // 300 value will be fixed
//console.log(b); // error
console.log(c); // 150 value will change
console.log(x); // this will work bcz var

function one() {
  const username = "hola";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);// wrong

  two();
}

one(); // hola

if (true) {
  const username = "hola";
  if (username === "hola") {
    const website = " youtube";
    console.log(username + website); // will work
  }
  //console.log(website);// wrong
}

//console.log(username);// wrong

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); // but this work why????

function addone(num) {
  return num + 1;
}

//addTwo(5); // wrong [search hoisting]
const addTwo = function (num) {
  return num + 2;
};
