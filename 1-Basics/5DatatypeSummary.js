//  Primitive call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt :  use stack

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions return typeof object and use Heap

const heros = ["g", "f", "h"];
let myObj = {
  name: "h",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

let s = "farhad";
s[0] = "x";
console.log(s); // farhaf

let obj = {
  id: 11,
  age: 24,
};

let obj1 = obj;
obj.age = 18;
console.log(obj1.age, obj.age); // 18 18 same bcz it used referance

// https://262.ecma-international.org/5.1/#sec-11.4.3
