// singleton hoi jodi constructor use kora hoi
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "ho",
  "full name": "hola",
  [mySym]: "mykey1", // for symbol
  age: 18,
  location: "Jaipur",
  email: "random@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "random@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "random@microsoft.com";
// console.log(JsUser);// no change because freeze

JsUser.greeting = function () {
  // just add
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
